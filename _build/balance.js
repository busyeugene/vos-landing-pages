/* Pass 2 aid: is each compare table fair BOTH ways?
 * CLAUDE.md warns "a table where the other column loses everything reads as marketing and invites
 * a fact-check". The inverse risk is real too: conceding the first five or six rows can leave VOS
 * looking like it wins nothing. This counts who takes each row so the balance is visible.
 * Prints only. Judgement is human. */
const fs = require('fs'), path = require('path');
const registry = require('./registry.js');
const txt = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const isYes = c => /check-yes/.test(c);
const isNo = c => /check-no/.test(c);
const neg = s => /^(not offered|not what it does|never|no\b|none)/i.test(s);

console.log('page'.padEnd(15) + 'rows  VOS✓  COMP✓  both✓  VOS-neg  COMP-neg  text/text');
for (const p of registry.filter(x => x.kind === 'compare')) {
  const html = fs.readFileSync(path.join(__dirname, '..', p.file), 'utf8');
  const cmp = (html.match(/<section[^>]*id="comparison"[\s\S]*?\n<\/section>/i) || [''])[0];
  const body = (cmp.match(/<tbody>[\s\S]*?<\/tbody>/i) || [''])[0];
  const rows = [...body.matchAll(/<tr>([\s\S]*?)<\/tr>/gi)].map(m => m[1]);
  let vy = 0, cy = 0, both = 0, vn = 0, cn = 0, tt = 0;
  const detail = [];
  for (const r of rows) {
    const tds = [...r.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(m => m[1]);
    if (tds.length < 3) continue;
    const [label, v, c] = [txt(tds[0]), tds[1], tds[2]];
    const vYes = isYes(v), cYes = isYes(c);
    if (vYes && cYes) both++;
    else if (vYes) vy++;
    else if (cYes) cy++;
    if (!vYes && !cYes) tt++;
    if (!vYes && (isNo(v) || neg(txt(v)))) vn++;
    if (!cYes && (isNo(c) || neg(txt(c)))) cn++;
    detail.push([label, txt(v), txt(c), vYes ? 'V' : cYes ? 'C' : '-']);
  }
  console.log(p.slug.replace('-alternative','').padEnd(15) +
    String(rows.length).padStart(4) + String(vy).padStart(6) + String(cy).padStart(7) +
    String(both).padStart(7) + String(vn).padStart(9) + String(cn).padStart(10) + String(tt).padStart(11));
  if (process.argv[2] === '--detail') for (const d of detail) console.log('    [' + d[3] + '] ' + d[0] + '  ||  VOS: ' + d[1] + '  ||  ' + p.competitor + ': ' + d[2]);
}
