/* Exports every page's metadata as CSV for client review / reporting.
 * Usage: node gen-csv.js   ->  writes vos-page-metadata.csv at the repo root
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const ORIGIN = 'https://vos-landing-pages.vercel.app';
const registry = require('./registry.js');
const keywords = require('./keywords.js');

const q = v => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
// tags become a space, so "Hold.<br>Order" does not collapse into "Hold.Order"
const grab = (h, re) => {
  const m = h.match(re);
  return m ? m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
};

const rows = [[
  'url_path', 'full_url', 'file', 'cluster', 'primary_keyword', 'secondary_keywords',
  'meta_title', 'title_chars', 'meta_description', 'desc_chars', 'h1', 'canonical', 'faq_count',
]];

const add = (slug, file, cluster, kw) => {
  const h = fs.readFileSync(path.join(REPO, file), 'utf8');
  const t = grab(h, /<title>([^<]*)<\/title>/);
  const d = grab(h, /name="description" content="([^"]*)"/);
  rows.push([
    slug, ORIGIN + slug, file, cluster,
    kw.primary || '', (kw.secondary || []).join('; '),
    t, t.length, d, d.length,
    grab(h, /<h1[^>]*>([\s\S]*?)<\/h1>/),
    grab(h, /rel="canonical" href="([^"]*)"/),
    (h.match(/class="faq-item"/g) || []).length,
  ]);
};

add('/', 'index.html', 'pillar', {});
for (const p of registry) add('/' + p.slug, p.file, p.cluster, keywords[p.slug] || {});

const BOM = String.fromCharCode(0xFEFF); // so Excel opens UTF-8 correctly
fs.writeFileSync(path.join(REPO, 'vos-page-metadata.csv'),
  BOM + rows.map(r => r.map(q).join(',')).join('\r\n') + '\r\n', 'utf8');
console.log('Wrote vos-page-metadata.csv: ' + (rows.length - 1) + ' rows, ' + rows[0].length + ' columns');
