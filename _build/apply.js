/* Apply exact copy fixes to page sources. Usage: node apply.js <fixes.js> [--dry]
 * fixes.js exports { '<slug>': [ op, ... ] }. Every op must match exactly once or it is reported and skipped.
 *   [old, new]                          text swap; any whitespace run in `old` matches any whitespace run in the
 *                                       source (source HTML wraps mid-sentence), so copy it from rendered copy
 *   ['@removeCard', h4]                 delete an "Also Built In" card by its title
 *   ['@card', h4, newH4, newText]       rewrite a card's title and text (icon kept)
 *   ['@row', firstCell, [c0, c1, c2, c3]] rewrite a comparison row; '✓' / '✗' become check spans
 *   ['@removeRow', firstCell]           delete a comparison row
 *   ['@faq', question, newQ, newAnswer] rewrite an FAQ item (newQ null keeps the question)
 *   ['@removeFaq', question]            delete an FAQ item
 */
const fs = require('fs');
const path = require('path');
const [file, flag] = process.argv.slice(2);
const fixes = require(path.resolve(file));
const dry = flag === '--dry';
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const flex = t => t.trim().split(/\s+/).map(esc).join('\\s+');
const cell = c => c === '✓' ? '<td><span class="check-yes">✓</span></td>' : c === '✗' ? '<td><span class="check-no">✗</span></td>' : `<td>${c}</td>`;
let bad = 0, done = 0;

for (const [slug, ops] of Object.entries(fixes)) {
  const f = path.join(__dirname, 'pages', slug + '.js');
  let s = fs.readFileSync(f, 'utf8');
  for (const op of ops) {
    let re, rep, label;
    const kind = op[0].startsWith('@') ? op[0] : 'text';
    if (kind === 'text') {
      re = new RegExp(flex(op[0]), 'g'); rep = () => op[1]; label = op[0];
    } else if (kind === '@removeCard' || kind === '@card') {
      re = new RegExp(`(\\n[ \\t]*<div class="feature-card">\\s*<div class="feature-card-icon">[^<]*</div>\\s*)<h4>${flex(op[1])}</h4>(\\s*<p[^>]*>)[\\s\\S]*?(</p>\\s*</div>)`, 'g');
      rep = kind === '@removeCard' ? () => '' : (m, a, b, c) => `${a}<h4>${op[2]}</h4>${b}\n          ${op[3]}\n        ${c}`;
      label = op[1];
    } else if (kind === '@row' || kind === '@removeRow') {
      re = new RegExp(`\\n[ \\t]*<tr>\\s*<td>${flex(op[1])}</td>[\\s\\S]*?</tr>`, 'g');
      rep = kind === '@removeRow' ? () => '' : () => '\n          <tr>\n' + op[2].map(c => '            ' + cell(c)).join('\n') + '\n          </tr>';
      label = op[1];
    } else if (kind === '@faq' || kind === '@removeFaq') {
      re = new RegExp(`(\\n[ \\t]*<div class="faq-item">\\s*<button class="faq-question"[^>]*>\\s*)${flex(op[1])}(\\s*<span class="faq-icon">[\\s\\S]*?</button>\\s*<div class="faq-answer"[^>]*>)[\\s\\S]*?(</div>\\s*</div>)`, 'g');
      rep = kind === '@removeFaq' ? () => '' : (m, a, b, c) => `${a}${op[2] || op[1]}${b}\n          ${op[3]}\n        ${c}`;
      label = op[1];
    } else { console.log('UNKNOWN OP ' + kind); bad++; continue; }
    const hits = s.match(re) || [];
    if (hits.length !== 1) { console.log(`${hits.length ? 'x' + hits.length : 'MISSING'}  ${slug} ${kind}: ${String(label).slice(0, 90)}`); bad++; continue; }
    const newText = op.slice(1).flat().join(' ');
    if (newText.includes('—')) { console.log(`EM-DASH  ${slug}: ${newText.slice(0, 90)}`); bad++; continue; }
    s = s.replace(re, rep);
    done++;
  }
  if (!dry) fs.writeFileSync(f, s);
}
console.log(`${done} applied, ${bad} problem(s)${dry ? ' (dry run)' : ''}`);
process.exit(bad ? 1 : 0);
