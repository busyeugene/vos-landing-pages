/* 3-word repetition check for VOS pages (stricter sibling of repeat.js).
 * Counts content trigrams (3 consecutive words, at least 2 of them not stopwords) in the
 * visible copy of each page, within sentence boundaries, and reports:
 *   1. trigrams used 2+ times WITHIN a page
 *   2. trigrams shared ACROSS pages (on 2+ pages)
 * Masked, so intended placements are not flagged: primary + secondary keywords.
 * Stripped, because they are template chrome by design: nav, logo bar, integrations partial,
 * related strip, footer, eyebrows, buttons, comparison-table header row, testimonial author lines,
 * and the featured testimonial quote (one real customer quote, used on every page on purpose).
 *
 * Usage:
 *   node trigram.js                 summary table for every page
 *   node trigram.js <slug ...>      summary + the trigrams for those pages
 *   node trigram.js --cross [N]     trigrams found on N+ pages (default 2), allow-list excluded (add --all to include)
 *   node trigram.js --plan          JSON rewrite plan per page: within-page repeats + 3+-page trigrams to reword
 *   node trigram.js --json          machine-readable dump of every page's repeats
 * Target (Eugene, 2026-09-15): 0 within-page repeats; no trigram on 3+ pages outside ALLOW (fixed facts).
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const registry = require('./registry.js');
const keywords = require('./keywords.js');

const STOP = new Set(('a an the and or but if so of to in on at by for with from into onto up out off over as is are was were be been ' +
  'being it its it\'s this that these those there here then than you your you\'re yours we our us they their them he she his her ' +
  'i me my do does did done have has had can could will would should may might must not no yes all any each every ' +
  'what which who whom when where why how just only also too very more most less much many one two three ' +
  'about after before between through during while until again once own same other some such both either ' +
  'nor s t don didn doesn isn aren won ll re ve d m am get gets got').split(/\s+/));

const norm = s => s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9% ]+/g, ' ').replace(/\s+/g, ' ').trim();

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
    .replace(/<span class="eyebrow"[^>]*>[\s\S]*?<\/span>/gi, '')
    .replace(/<a [^>]*class="btn[^"]*"[^>]*>[\s\S]*?<\/a>/gi, '')
    .replace(/<thead>[\s\S]*?<\/thead>/gi, '')
    .replace(/(<div class="testimonial-card featured">[\s\S]*?)<p class="testimonial-quote"[^>]*>[\s\S]*?<\/p>/i, '$1')
    .replace(/<div class="testimonial-author">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi, '')
    .replace(/<div class="img-placeholder[\s\S]*?<\/div>/gi, '')
    .replace(/<input[^>]*>/gi, '')
    .replace(/\s+/g, ' ')          // source HTML wraps mid-sentence; join before splitting on block ends
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/(p|li|h[1-6]|div|td|th|button|span|a)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&');
  const out = [];
  for (const line of h.split('\n')) {
    const t = line.replace(/\s+/g, ' ').trim();
    if (!t) continue;
    for (const s of t.split(/(?<=[.!?:;])\s+/)) { const x = s.trim(); if (x) out.push(x); }
  }
  return out;
}

function analyse(p) {
  const kw = keywords[p.slug] || { primary: '', secondary: [] };
  const masks = [kw.primary, ...kw.secondary].filter(Boolean)
    .flatMap(k => [k, k.replace('web based', 'web-based')]).map(norm)
    .sort((a, b) => b.length - a.length);
  const counts = new Map();   // trigram -> occurrences
  const where = new Map();    // trigram -> first raw sentence
  for (const raw of sentences(p.file)) {
    let n = ' ' + norm(raw) + ' ';
    for (const m of masks) n = n.split(' ' + m + ' ').join(' | ');
    for (const chunk of n.split('|')) {
      const w = chunk.trim().split(' ').filter(Boolean);
      for (let i = 0; i + 3 <= w.length; i++) {
        const g = w.slice(i, i + 3);
        if (g.filter(x => !STOP.has(x)).length < 2) continue;
        const k = g.join(' ');
        counts.set(k, (counts.get(k) || 0) + 1);
        if (!where.has(k)) where.set(k, raw);
      }
    }
  }
  return { slug: p.slug, counts, where };
}

const pages = registry.map(analyse);
const df = new Map();
for (const p of pages) for (const g of p.counts.keys()) df.set(g, [...(df.get(g) || []), p.slug]);

// Cross-page allow-list: fixed facts that may appear on any number of pages (never within-page repeats).
// Fixed facts: brand, the delivery-format list, iOS/Android, and the numbers (24/7, 20–30 minutes saved,
// 24 to 48 hours setup, 20-minute demo). Any phrasing of them may recur; numbers only appear in those facts.
const FORMAT = /\b(email|pdf|excel|word|edi|api|quickbooks)\b/g;
const ALLOW = g => /voiceorder solutions/.test(g) ||
  (g.match(FORMAT) || []).length >= 2 ||
  /\b(pdf|excel|edi|quickbooks)\b|\bword (attachment|file|doc)\b/.test(g) ||
  /\b(ios|iphone|android)\b/.test(g) ||
  /\b(7|20|24|30|48)\b/.test(g);

const args = process.argv.slice(2);
if (args[0] === '--plan') {
  // Per page: every within-page repeat, plus each trigram on 3+ pages (not allow-listed) that this page
  // must reword. The trigram stays on the 2 pages that use it most (ties: shares a word with the page's
  // primary keyword, then the page already carrying the most rewrites, so the work spreads evenly).
  const kwWords = slug => new Set(norm((keywords[slug] || {}).primary || '').split(' '));
  const load = new Map(registry.map(p => [p.slug, 0]));
  const keep = new Map();
  const widest = [...df].filter(([g, s]) => s.length >= 3 && !ALLOW(g)).sort((a, b) => b[1].length - a[1].length);
  for (const [g, slugs] of widest) {
    const ranked = [...slugs].sort((a, b) => {
      const ca = pages.find(p => p.slug === a).counts.get(g), cb = pages.find(p => p.slug === b).counts.get(g);
      if (cb !== ca) return cb - ca;
      const ka = g.split(' ').some(w => kwWords(a).has(w)), kb = g.split(' ').some(w => kwWords(b).has(w));
      if (ka !== kb) return kb - ka;
      return load.get(b) - load.get(a);
    });
    keep.set(g, ranked.slice(0, 2));
    for (const s of ranked.slice(2)) load.set(s, load.get(s) + 1);
  }
  const out = {};
  for (const p of pages) {
    out[p.slug] = {
      within: [...p.counts].filter(([, c]) => c >= 2).map(([g, c]) => ({ phrase: g, times: c, example: p.where.get(g) })),
      cross: [...keep].filter(([g, k]) => df.get(g).includes(p.slug) && !k.includes(p.slug))
        .map(([g, k]) => ({ phrase: g, onPages: df.get(g).length, keptOn: k, example: p.where.get(g) })),
    };
  }
  console.log(JSON.stringify(out, null, 1));
  process.exit(0);
}
if (args[0] === '--json') {
  const out = {};
  for (const p of pages) {
    out[p.slug] = {
      within: [...p.counts].filter(([, c]) => c >= 2).map(([g, c]) => ({ g, c, s: p.where.get(g) })),
      cross: [...p.counts.keys()].filter(g => df.get(g).length >= 2).map(g => ({ g, pages: df.get(g), s: p.where.get(g) })),
    };
  }
  console.log(JSON.stringify(out, null, 1));
  process.exit(0);
}
if (args[0] === '--cross') {
  const min = +(args[1] || 2);
  const all = args.includes('--all');
  const rows = [...df].filter(([g, s]) => s.length >= min && (all || !ALLOW(g))).sort((a, b) => b[1].length - a[1].length);
  console.log(rows.length + ' trigrams on ' + min + '+ pages');
  for (const [g, s] of rows) console.log(String(s.length).padStart(3) + '  ' + g);
  process.exit(0);
}

let tw = 0, tc = 0;
console.log('page'.padEnd(42) + 'trigrams  within-page repeats  shared with other pages');
for (const p of pages) {
  const within = [...p.counts].filter(([, c]) => c >= 2).length;
  const cross = [...p.counts.keys()].filter(g => df.get(g).length >= 2).length;
  tw += within; tc += cross;
  console.log(p.slug.padEnd(42) + String(p.counts.size).padStart(8) + String(within).padStart(21) + String(cross).padStart(25));
}
console.log('TOTAL'.padEnd(42) + ''.padStart(8) + String(tw).padStart(21) + String(tc).padStart(25));
console.log('Distinct trigrams on 2+ pages: ' + [...df.values()].filter(s => s.length >= 2).length);

for (const slug of args) {
  const p = pages.find(x => x.slug === slug);
  if (!p) { console.log('unknown slug: ' + slug); continue; }
  console.log('\n' + '='.repeat(80) + '\n' + slug + '\n' + '='.repeat(80));
  console.log('  Within page:');
  for (const [g, c] of [...p.counts].filter(([, c]) => c >= 2).sort((a, b) => b[1] - a[1])) console.log('    x' + c + '  ' + g);
  console.log('  Shared with other pages:');
  for (const g of [...p.counts.keys()].filter(g => df.get(g).length >= 2).sort((a, b) => df.get(b).length - df.get(a).length)) {
    console.log('    [' + (df.get(g).length - 1) + '] ' + g);
  }
}
