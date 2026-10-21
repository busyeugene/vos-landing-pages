// Cross-page dedupe plan for the COMPARE pages only: for each trigram on 3+ pages, which compare
// pages must reword it (feature pages are live in Webflow and frozen, so they never give way).
// Usage: node xplan.js   (prints [phrase] sentence, per compare page)
const { execFileSync } = require('child_process');
const path = require('path');
const B = __dirname;
const reg = require(B + '/registry.js');
const { ALLOW } = require(B + '/allowlist.js');
const cmp = new Set(reg.filter(p => p.kind === 'compare').map(p => p.slug));
const d = JSON.parse(execFileSync('node', [B + '/trigram.js', '--json'], { maxBuffer: 1 << 28 }).toString());
const grams = new Map();
for (const [slug, v] of Object.entries(d)) for (const c of v.cross) if (c.pages.length >= 3 && !ALLOW(c.g)) grams.set(c.g, c.pages);
const load = new Map([...cmp].map(s => [s, 0]));
const todo = {};
for (const [g, pages] of [...grams].sort((a, b) => b[1].length - a[1].length)) {
  const cp = pages.filter(s => cmp.has(s)), fp = pages.length - cp.length;
  let need = pages.length - 2;
  const order = [...cp].sort((a, b) => load.get(b) - load.get(a)); // load-balance: remove from busiest? no: from least loaded
  order.reverse();
  for (const s of order) { if (need <= 0) break; (todo[s] = todo[s] || []).push({ g, s: d[s].cross.find(c => c.g === g).s }); load.set(s, load.get(s) + 1); need--; }
  if (need > 0) console.log('!! cannot clear on compare pages alone:', g, pages.join(','));
}
for (const [s, items] of Object.entries(todo)) { console.log('\n== ' + s + ' (' + items.length + ')'); for (const i of items) console.log('  [' + i.g + '] ' + i.s); }
