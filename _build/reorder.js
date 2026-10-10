/* Move each compare table's first VOS-winning row up to position 2.
 *
 * WHY: the house rule is "give the competitor real wins, and put the biggest one first". On six
 * pages that had been applied as "put ALL of them first", so a scanner read four or five
 * "Not offered" cells before VOS won anything (first VOS tick at row 6 of 9). This keeps every
 * concession and every cell exactly as written: it only changes the order, so row 1 is still the
 * competitor's biggest win and a VOS win lands by row 2.
 *
 * Usage: node reorder.js [--dry] [slug ...]   (default: every compare page needing it)
 */
const fs = require('fs'), path = require('path');
const registry = require('./registry.js');
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const want = args.filter(a => !a.startsWith('--'));

for (const p of registry.filter(x => x.kind === 'compare')) {
  const slug = p.slug;
  if (want.length && !want.includes(slug)) continue;
  const f = path.join(__dirname, 'pages', slug + '.js');
  let src = fs.readFileSync(f, 'utf8');
  const tb = src.match(/<tbody>([\s\S]*?)<\/tbody>/);
  if (!tb) { console.log('no tbody: ' + slug); continue; }
  const rows = tb[1].match(/\n[ \t]*<tr>[\s\S]*?<\/tr>/g);
  if (!rows) { console.log('no rows: ' + slug); continue; }
  const vosWins = r => {
    const tds = [...r.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(m => m[1]);
    return tds.length >= 2 && /check-yes/.test(tds[1]);
  };
  const first = rows.findIndex(vosWins);
  if (first <= 1) { console.log('ok     ' + slug.padEnd(28) + 'first VOS win already at row ' + (first + 1)); continue; }
  const moved = rows.splice(first, 1)[0];
  rows.splice(1, 0, moved);
  const out = src.replace(tb[0], '<tbody>' + rows.join('') + '\n        </tbody>');
  if (!dry) fs.writeFileSync(f, out);
  console.log('MOVED  ' + slug.padEnd(28) + 'row ' + (first + 1) + ' -> row 2' +
    '  [' + moved.replace(/\s+/g, ' ').match(/<td[^>]*>(.*?)<\/td>/)[1].slice(0, 46) + ']');
}
