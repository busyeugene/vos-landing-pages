/* Proposition-sameness grid for the 12 compare pages.
 *
 * WHY THIS EXISTS
 * CLAUDE.md's own measurement: "Literal overlap was never the problem... What a reader notices is
 * repeated PROPOSITIONS, not repeated phrases; the trigram gates cannot see it." The Oct 2026
 * reviewers concluded batch 4's pages "read as one page" while every gate was green. The fix
 * prescribed there is to read the slots side by side as a table. This builds that table.
 *
 * It is a READING aid, not a gate: it prints, it never fails. The judgement is human.
 *
 * Usage: node grid.js [slot ...]     (no args = every slot)
 *        node grid.js --dupes        (only values appearing on 2+ pages, per slot)
 */
const fs = require('fs');
const path = require('path');
const registry = require('./registry.js');

const pages = registry.filter(p => p.kind === 'compare');
const txt = s => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ').trim();

function read(p) {
  return fs.readFileSync(path.join(__dirname, '..', p.file), 'utf8');
}
// section html by id/class
function sect(html, re) { const m = html.match(re); return m ? m[0] : ''; }
const SEC = {
  hero: /<section class="hero"[\s\S]*?<\/section>/i,
  stats: /<section class="stats-strip"[\s\S]*?<\/section>/i,
  cmp: /<section[^>]*id="comparison"[\s\S]*?\n<\/section>/i,
  prob: /<section[^>]*id="problem"[\s\S]*?\n<\/section>/i,
  feat: /<section[^>]*id="features"[\s\S]*?\n<\/section>/i,
  how: /<section[^>]*id="how-it-works"[\s\S]*?\n<\/section>/i,
  coex: /<section class="section-pad bg-light" aria-label="Additional features"[\s\S]*?\n<\/section>/i,
  mid: /<section aria-label="Mid-page call to action"[\s\S]*?<\/section>/i,
  faq: /<section[^>]*id="faq"[\s\S]*?\n<\/section>/i,
  final: /<section class="final-cta"[\s\S]*?<\/section>/i,
};
const all = (h, re) => [...h.matchAll(re)].map(m => txt(m[1]));

const SLOTS = {
  h1:            h => all(h, /<h1>([\s\S]*?)<\/h1>/gi),
  'hero-lead':   h => all(sect(h, SEC.hero), /<p class="lead mt-16">([\s\S]*?)<\/p>/gi),
  'hero-trust':  h => all(sect(h, SEC.hero), /<span>([^<]+)<\/span>/gi),
  'stat-label':  h => all(sect(h, SEC.stats), /<div class="stat-label">([\s\S]*?)<\/div>/gi),
  'cmp-eyebrow': h => all(sect(h, SEC.cmp), /<span class="eyebrow">([\s\S]*?)<\/span>/gi),
  'cmp-h2':      h => all(sect(h, SEC.cmp), /<h2>([\s\S]*?)<\/h2>/gi),
  'cmp-lead':    h => all(sect(h, SEC.cmp), /<p class="lead mt-16">([\s\S]*?)<\/p>/gi),
  'cmp-rows':    h => all(sect(h, SEC.cmp), /<tr>\s*<td>([\s\S]*?)<\/td>/gi),
  'cmp-vos':     h => [...sect(h, SEC.cmp).matchAll(/<tr>\s*<td>[\s\S]*?<\/td>\s*<td>([\s\S]*?)<\/td>/gi)].map(m => txt(m[1])),
  'prob-h2':     h => all(sect(h, SEC.prob), /<h2>([\s\S]*?)<\/h2>/gi),
  'prob-lead':   h => all(sect(h, SEC.prob), /<p class="lead mt-16">([\s\S]*?)<\/p>/gi),
  'prob-cards':  h => all(sect(h, SEC.prob), /<h4>([\s\S]*?)<\/h4>/gi),
  'feat-h2':     h => all(sect(h, SEC.feat), /<h2>([\s\S]*?)<\/h2>/gi),
  'feat-eyebrow':h => all(sect(h, SEC.feat), /<span class="eyebrow">([\s\S]*?)<\/span>/gi),
  'feat-h3':     h => all(sect(h, SEC.feat), /<h3>([\s\S]*?)<\/h3>/gi),
  'how-h2':      h => all(sect(h, SEC.how), /<h2>([\s\S]*?)<\/h2>/gi),
  'how-steps':   h => all(sect(h, SEC.how), /<h4>([\s\S]*?)<\/h4>/gi),
  'coex-h2':     h => all(sect(h, SEC.coex), /<h2>([\s\S]*?)<\/h2>/gi),
  'coex-lead':   h => all(sect(h, SEC.coex), /<p class="lead mt-16">([\s\S]*?)<\/p>/gi),
  'coex-cards':  h => all(sect(h, SEC.coex), /<h4>([\s\S]*?)<\/h4>/gi),
  'mid-h3':      h => all(sect(h, SEC.mid), /<h3[^>]*>([\s\S]*?)<\/h3>/gi),
  'faq-h2':      h => all(sect(h, SEC.faq), /<h2>([\s\S]*?)<\/h2>/gi),
  'faq-q':       h => all(sect(h, SEC.faq), /<button class="faq-question"[^>]*>([\s\S]*?)<span class="faq-icon">/gi),
  'final-h2':    h => all(sect(h, SEC.final), /<h2>([\s\S]*?)<\/h2>/gi),
};

const args = process.argv.slice(2);
const dupesOnly = args.includes('--dupes');
const want = args.filter(a => !a.startsWith('--'));
const slots = want.length ? want : Object.keys(SLOTS);

const data = pages.map(p => ({ slug: p.slug.replace('-alternative', ''), comp: p.competitor, html: read(p) }));

for (const slot of slots) {
  if (!SLOTS[slot]) { console.log('unknown slot: ' + slot); continue; }
  const rows = data.map(d => ({ slug: d.slug, vals: SLOTS[slot](d.html) }));
  // mask the competitor name so "VOS vs X" variants collapse and real sameness shows
  const mask = (s, comp) => s.replace(new RegExp(comp.replace(/[+]/g, '\$&'), 'gi'), '«X»');
  const counts = new Map();
  rows.forEach((r, i) => r.vals.forEach(v => {
    const k = mask(v, data[i].comp).toLowerCase();
    counts.set(k, (counts.get(k) || 0) + 1);
  }));
  const dupes = [...counts].filter(([, c]) => c >= 2).sort((a, b) => b[1] - a[1]);
  console.log('\n' + '='.repeat(100));
  console.log('SLOT: ' + slot + (dupes.length ? '   [' + dupes.length + ' value(s) on 2+ pages]' : '   [all distinct]'));
  console.log('='.repeat(100));
  if (dupesOnly) {
    for (const [v, c] of dupes) console.log('  x' + c + '  ' + v.slice(0, 150));
    continue;
  }
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    for (const v of r.vals) {
      const k = mask(v, data[i].comp).toLowerCase();
      const flag = counts.get(k) >= 2 ? ' «SHARED x' + counts.get(k) + '»' : '';
      console.log('  ' + r.slug.padEnd(14) + mask(v, data[i].comp).slice(0, 150) + flag);
    }
  }
}
