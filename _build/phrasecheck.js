/* Pre-write phrase check: would this wording break the cross-page repetition bar?
 *
 *   node phrasecheck.js <slug> "candidate sentence" ["another" ...]
 *
 * trigram.js measures pages that are already built, so it only tells you about a
 * collision after you have written and rebuilt. This answers the question first:
 * for each candidate, it prints the trigrams that already sit on 2+ OTHER pages,
 * which are exactly the ones that would land on 3+ and fail `trigram.js --cross 3`.
 *
 * Empty output (all OK) means the wording is safe to write for <slug>.
 *
 * It mirrors trigram.js exactly: same normalization, same stop list, same stripping
 * of nav / logo bar / integrations / related strip / footer / eyebrows / buttons /
 * table heads / the featured testimonial / image placeholders, same keyword masking
 * (so an intended keyword placement is never reported), and the same allow-list of
 * fixed facts. If trigram.js changes, change this too.
 *
 * It does NOT check for repeats inside the page you are editing: run
 * `node where.js <slug>` after rebuilding for those.
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
    .replace(/\s+/g, ' ')
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

function grams(raw, slug) {
  const kw = keywords[slug] || { primary: '', secondary: [] };
  const masks = [kw.primary, ...kw.secondary].filter(Boolean)
    .flatMap(k => [k, k.replace('web based', 'web-based')]).map(norm)
    .sort((a, b) => b.length - a.length);
  let n = ' ' + norm(raw) + ' ';
  for (const m of masks) n = n.split(' ' + m + ' ').join(' | ');
  const got = [];
  for (const chunk of n.split('|')) {
    const w = chunk.trim().split(' ').filter(Boolean);
    for (let i = 0; i + 3 <= w.length; i++) {
      const g = w.slice(i, i + 3);
      if (g.filter(x => !STOP.has(x)).length < 2) continue;
      got.push(g.join(' '));
    }
  }
  return got;
}

/* Fixed facts that may recur on any number of pages (same list as trigram.js). */
const FORMAT = /\b(email|pdf|excel|word|edi|api|quickbooks)\b/g;
const ALLOW = g => /voiceorder solutions/.test(g) ||
  (g.match(FORMAT) || []).length >= 2 ||
  /\b(pdf|excel|edi|quickbooks)\b|\bword (attachment|file|doc)\b/.test(g) ||
  /\b(ios|iphone|android)\b/.test(g) ||
  /\b(7|20|24|30|48)\b/.test(g);

const [slug, ...candidates] = process.argv.slice(2);
if (!slug || !candidates.length) {
  console.error('usage: node phrasecheck.js <slug> "candidate sentence" ["another" ...]');
  process.exit(2);
}
if (!registry.some(p => p.slug === slug)) {
  console.error(`unknown slug "${slug}"`);
  process.exit(2);
}

const byPage = new Map();
for (const p of registry) {
  const s = new Set();
  for (const raw of sentences(p.file)) for (const g of grams(raw, p.slug)) s.add(g);
  byPage.set(p.slug, s);
}

let flagged = 0;
for (const c of candidates) {
  const bad = [];
  const seen = new Set();
  for (const g of grams(c, slug)) {
    if (ALLOW(g) || seen.has(g)) continue;
    seen.add(g);
    const others = [...byPage].filter(([s, set]) => s !== slug && set.has(g)).map(([s]) => s);
    if (others.length >= 2) bad.push(`   "${g}"  already on ${others.length}: ${others.join(', ')}`);
  }
  if (bad.length) flagged++;
  console.log((bad.length ? 'X  ' : 'OK ') + c);
  bad.forEach(b => console.log(b));
}
process.exit(flagged ? 1 : 0);
