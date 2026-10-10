/* Interleave each compare table so VOS never shows a long vertical run of negative cells.
 *
 * Pairs with reorder.js and supersedes it for tables with many concessions. Changes NO cell
 * content: it only reorders whole rows. Rules, in order:
 *   - row 1 stays the competitor's biggest win (the author put it first on purpose);
 *   - the closing summary row ("What you are buying" / "What the product covers") stays last;
 *   - between those, competitor-only rows and VOS-winning rows alternate, so at most two
 *     competitor-only rows ever sit together.
 * Usage: node interleave.js [--dry] [slug ...]
 */
const fs = require('fs'), path = require('path');
const registry = require('./registry.js');
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const want = args.filter(a => !a.startsWith('--'));
const label = r => (r.replace(/\s+/g, ' ').match(/<td[^>]*>(.*?)<\/td>/) || [, ''])[1].replace(/<[^>]*>/g, '');

for (const p of registry.filter(x => x.kind === 'compare')) {
  if (want.length && !want.includes(p.slug)) continue;
  const f = path.join(__dirname, 'pages', p.slug + '.js');
  const src = fs.readFileSync(f, 'utf8');
  const tb = src.match(/<tbody>([\s\S]*?)<\/tbody>/);
  const rows = tb && tb[1].match(/\n[ \t]*<tr>[\s\S]*?<\/tr>/g);
  if (!rows) { console.log('skip ' + p.slug); continue; }
  const cells = r => [...r.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(m => m[1]);
  const vosWin = r => { const c = cells(r); return c.length >= 2 && /check-yes/.test(c[1]); };
  const compOnly = r => { const c = cells(r); return c.length >= 3 && /check-yes/.test(c[2]) && !/check-yes/.test(c[1]); };

  const head = rows[0];                       // biggest competitor win, stays first
  const isSummary = r => /^what (you are buying|the product covers)/i.test(label(r).trim());
  const tail = rows.filter(isSummary);
  const mid = rows.slice(1).filter(r => !isSummary(r));
  const wins = mid.filter(vosWin);
  const concessions = mid.filter(r => !vosWin(r) && compOnly(r));
  const rest = mid.filter(r => !vosWin(r) && !compOnly(r));
  // alternate: a win, then a concession, ... then whatever is left over
  const out = [head];
  let i = 0, j = 0;
  while (i < wins.length || j < concessions.length) {
    if (i < wins.length) out.push(wins[i++]);
    if (j < concessions.length) out.push(concessions[j++]);
    if (j < concessions.length && i >= wins.length) out.push(concessions[j++]);
  }
  out.push(...rest, ...tail);
  if (out.length !== rows.length) { console.log('COUNT MISMATCH, skipped ' + p.slug); continue; }
  // longest run of consecutive competitor-only rows, before and after
  const run = arr => { let m = 0, c = 0; for (const r of arr) { if (compOnly(r)) { c++; m = Math.max(m, c); } else c = 0; } return m; };
  const before = run(rows), after = run(out);
  if (!dry) fs.writeFileSync(f, src.replace(tb[0], '<tbody>' + out.join('') + '\n        </tbody>'));
  console.log(p.slug.padEnd(28) + 'longest run of competitor-only rows ' + before + ' -> ' + after);
}
