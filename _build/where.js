/* Show every sentence of a page that contains a within-page trigram repeat.
 * Usage: node where.js <slug> [slug...]   (reads the within-page repeats from trigram.js --json)
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const registry = require('./registry.js');
const data = JSON.parse(execFileSync('node', [path.join(__dirname, 'trigram.js'), '--json'], { maxBuffer: 1 << 26 }).toString());
const norm = s => s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9% ]+/g, ' ').replace(/\s+/g, ' ').trim();
for (const slug of process.argv.slice(2)) {
  const p = registry.find(r => r.slug === slug);
  const text = fs.readFileSync(path.join(__dirname, '..', p.file), 'utf8')
    .replace(/<head>[\s\S]*?<\/head>/i, '').replace(/<(style|script)[\s\S]*?<\/(style|script)>/gi, '').replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ').replace(/<br\s*\/?>/gi, ' ').replace(/<\/(p|li|h[1-6]|div|td|th|button|span|a)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&');
  const sents = text.split('\n').map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean).flatMap(t => t.split(/(?<=[.!?:;])\s+/));
  console.log(`\n== ${slug}`);
  for (const w of data[slug].within) {
    console.log(`  "${w.g}" x${w.c}`);
    for (const s of sents.filter(s => (' ' + norm(s) + ' ').includes(' ' + w.g + ' '))) console.log('      - ' + s);
  }
}
