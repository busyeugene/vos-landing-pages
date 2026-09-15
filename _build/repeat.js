/* Repetition check for VOS pages. For each focus page it reports:
 *  1. phrases repeated within the page (5+ words; keywords masked; sitewide template excluded)
 *  2. sentences shared word-for-word (or ~ near-identical) with other pages
 *  3. how close the page is to its nearest neighbours (5-word shingles, template excluded)
 * Nav, logo bar, integrations partial, related strip, and footer are stripped first:
 * they are shared by design. Usage: node repeat.js [slug ...]   (no args = every page)
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const registry = require('./registry.js');
const keywords = require('./keywords.js');

const N = 5;
const args = process.argv.slice(2);
const focus = args.length ? args : registry.map(p => p.slug);
const short = s => s.replace('-software', '');
const norm = s => s.toLowerCase().replace(/[^a-z0-9% ]+/g, ' ').replace(/\s+/g, ' ').trim();

function sentences(file) {
  let h = fs.readFileSync(path.join(REPO, file), 'utf8');
  h = h.replace(/<head>[\s\S]*?<\/head>/i, '')
    .replace(/<(style|script)[\s\S]*?<\/(style|script)>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<nav[\s\S]*?<\/nav>/i, '')
    .replace(/<section class="logo-bar"[\s\S]*?<\/section>/i, '')
    .replace(/<section class="section-pad" id="integrations"[\s\S]*?<\/section>/i, '')
    .replace(/<section class="related-strip"[\s\S]*?<\/section>/i, '')
    .replace(/<footer[\s\S]*?<\/footer>/i, '')
    .replace(/\s+/g, ' ')          // source HTML wraps mid-sentence; join before splitting on block ends
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/(p|li|h[1-6]|div|td|th|button|span|a)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&');
  const out = [];
  for (const line of h.split('\n')) {
    const t = line.replace(/\s+/g, ' ').trim();
    if (!t) continue;
    for (const s of t.split(/(?<=[.!?])\s+/)) { const x = s.trim(); if (x) out.push(x); }
  }
  return out;
}

const pages = registry.map(p => {
  const kw = keywords[p.slug] || { primary: '', secondary: [] };
  const masks = [kw.primary, ...kw.secondary].filter(Boolean).map(norm).sort((a, b) => b.length - a.length);
  const sents = sentences(p.file).map(r => {
    let n = ' ' + norm(r) + ' ';
    for (const m of masks) n = n.split(' ' + m + ' ').join(' kw ');
    return { raw: r, n: n.trim() };
  });
  const counts = new Map();
  for (const s of sents) {
    const w = s.n.split(' ');
    for (let i = 0; i + N <= w.length; i++) {
      const g = w.slice(i, i + N).join(' ');
      counts.set(g, (counts.get(g) || 0) + 1);
    }
  }
  return { slug: p.slug, sents, counts, set: new Set(counts.keys()) };
});

// a shingle on >= 75% of pages is sitewide template wording
const df = new Map();
for (const p of pages) for (const g of p.set) df.set(g, (df.get(g) || 0) + 1);
const T = Math.ceil(pages.length * 0.75);
const isTemplate = g => (df.get(g) || 0) >= T;

function repeatedPhrases(p) {
  const rep = g => (p.counts.get(g) || 0) >= 2 && !isTemplate(g);
  const found = new Map();
  for (const s of p.sents) {
    const w = s.n.split(' ');
    let i = 0;
    while (i + N <= w.length) {
      const g = w.slice(i, i + N).join(' ');
      if (!rep(g)) { i++; continue; }
      let j = i, c = p.counts.get(g);
      while (j + 1 + N <= w.length && rep(w.slice(j + 1, j + 1 + N).join(' '))) {
        j++; c = Math.min(c, p.counts.get(w.slice(j, j + N).join(' ')));
      }
      const phrase = w.slice(i, j + N).join(' ');
      found.set(phrase, Math.max(found.get(phrase) || 0, c));
      i = j + N;
    }
  }
  const list = [...found.entries()];
  return list.filter(([ph, c]) => !list.some(([o, oc]) => o !== ph && o.includes(ph) && oc >= c))
    .sort((a, b) => b[1] - a[1] || b[0].length - a[0].length);
}

function sharedSentences(p) {
  const res = [];
  const mine = [...new Set(p.sents.map(s => s.n))].filter(n => n.split(' ').length >= 7);
  for (const n of mine) {
    const ws = new Set(n.split(' '));
    const hits = [];
    for (const o of pages) {
      if (o.slug === p.slug) continue;
      let best = 0;
      for (const s of o.sents) {
        if (s.n === n) { best = 1; break; }
        const ow = s.n.split(' ');
        if (ow.length < 7) continue;
        const os = new Set(ow);
        let inter = 0; for (const x of ws) if (os.has(x)) inter++;
        const jac = inter / (ws.size + os.size - inter);
        if (jac > best) best = jac;
      }
      if (best >= 0.75) hits.push([o.slug, best]);
    }
    if (hits.length) res.push([n, hits]);
  }
  return res.sort((a, b) => b[1].length - a[1].length);
}

function similarity(p) {
  const own = g => !isTemplate(g);
  const mine = [...p.set].filter(own);
  const top = pages.filter(o => o.slug !== p.slug).map(o => {
    let inter = 0; for (const g of mine) if (o.set.has(g)) inter++;
    const oth = [...o.set].filter(own).length;
    return [o.slug, inter / (mine.length + oth - inter)];
  }).sort((a, b) => b[1] - a[1]).slice(0, 4);
  const shared = mine.filter(g => pages.some(o => o.slug !== p.slug && o.set.has(g))).length;
  return { top, sharedPct: mine.length ? shared / mine.length : 0, templatePct: p.set.size ? 1 - mine.length / p.set.size : 0 };
}

for (const slug of focus) {
  const p = pages.find(x => x.slug === slug);
  if (!p) { console.log('unknown slug: ' + slug); continue; }
  const sim = similarity(p);
  console.log('\n' + '='.repeat(80) + '\n' + slug + '\n' + '='.repeat(80));
  console.log('Template wording: ' + Math.round(sim.templatePct * 100) + '% of 5-word phrases.  Own copy also on another page: ' + Math.round(sim.sharedPct * 100) + '%');
  console.log('Closest pages: ' + sim.top.map(([s, j]) => short(s) + ' ' + (j * 100).toFixed(1) + '%').join(' | '));
  const reps = repeatedPhrases(p);
  console.log('\n  Repeated WITHIN page (' + reps.length + '):');
  for (const [ph, c] of reps.slice(0, 25)) console.log('    x' + c + '  ' + ph);
  const sh = sharedSentences(p);
  console.log('\n  Sentences shared with OTHER pages (' + sh.length + '):   ~ = near-identical, [N] = on N other pages');
  for (const [n, hits] of sh) {
    console.log('    [' + hits.length + '] ' + n.slice(0, 104));
    console.log('         ' + hits.map(([s, j]) => short(s) + (j < 1 ? '~' : '')).join(', '));
  }
}
