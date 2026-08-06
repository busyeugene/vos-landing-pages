/* Crude structural sanity check: tag balance + single h1 per page. */
const fs = require('fs');
const path = require('path');
const DIR = path.resolve(__dirname, '..');

const TAGS = ['div', 'section', 'ul', 'li', 'table', 'tr', 'td', 'a', 'h1', 'h2', 'h3', 'h4', 'footer', 'nav', 'main'];
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.html')).sort();
let bad = 0;

for (const f of files) {
  const html = fs.readFileSync(path.join(DIR, f), 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '');

  const problems = [];
  for (const t of TAGS) {
    const open = (html.match(new RegExp('<' + t + '(?=[\\s>])', 'g')) || []).length;
    const close = (html.match(new RegExp('</' + t + '>', 'g')) || []).length;
    if (open !== close) problems.push(`${t} ${open} open / ${close} close`);
  }
  const h1 = (html.match(/<h1(?=[\s>])/g) || []).length;
  if (h1 !== 1) problems.push(`h1 count = ${h1}`);

  if (problems.length) { console.log(`✗ ${f}\n    ${problems.join('\n    ')}`); bad++; }
  else console.log(`✓ ${f}`);
}
console.log(bad ? `\n${bad} of ${files.length} file(s) have structural issues` : `\nAll ${files.length} files: tags balanced, exactly one h1 each.`);
