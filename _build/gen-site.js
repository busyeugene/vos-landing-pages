/* Generates vercel.json, index.html card grid, sitemap.xml and robots.txt from registry.js
 * so routing, the hub page and the sitemap can never drift out of sync. Usage: node gen-site.js
 */
const fs = require('fs');
const path = require('path');
const OUT = path.resolve(__dirname, '..');
const ORIGIN = 'https://vos-landing-pages.vercel.app';
const LASTMOD = '2026-08-06';
const registry = require('./registry.js');

/* ── vercel.json ─────────────────────────────────────────────── */
const vercel = {
  rewrites: registry.map(p => ({ source: `/${p.slug}`, destination: `/${p.file}` })),
};
fs.writeFileSync(path.join(OUT, 'vercel.json'), JSON.stringify(vercel, null, 2) + '\n', 'utf8');
console.log(`✓ vercel.json (${vercel.rewrites.length} rewrites)`);

/* ── sitemap.xml ─────────────────────────────────────────────── */
const urls = [{ loc: `${ORIGIN}/`, pri: '1.0' }, ...registry.map(p => ({ loc: `${ORIGIN}/${p.slug}`, pri: '0.8' }))];
fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.pri}</priority>
  </url>`).join('\n')}
</urlset>
`, 'utf8');
console.log(`✓ sitemap.xml (${urls.length} urls)`);

/* ── robots.txt ──────────────────────────────────────────────── */
fs.writeFileSync(path.join(OUT, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`, 'utf8');
console.log('✓ robots.txt');

/* ── index.html card grid, grouped by cluster ────────────────── */
const GROUPS = [
  { key: 'order', label: 'Ordering', title: 'Placing, taking, fulfilling, and tracking orders' },
  { key: 'inventory', label: 'Inventory and Stock', title: 'Knowing what you have and what to buy' },
  { key: 'ops', label: 'Catalog and Operations', title: 'The catalog, the buying, and the routine around them' },
];

const card = p => `      <a class="hub-card" href="/${p.slug}">
        <span class="hub-card-kw">${p.label}</span>
        <h3>${p.card}</h3>
        <p>${p.blurb}</p>
        <span class="hub-card-link">View page →</span>
      </a>`;

const main = `<main class="hub-main">
${GROUPS.map((g, i) => {
  const pages = registry.filter(p => p.cluster === g.key);
  if (!pages.length) throw new Error(`No pages in cluster "${g.key}"`);
  return `${i ? '\n' : ''}  <div class="hub-section-label"${i ? ' style="margin-top:24px;"' : ''}>${g.label}</div>
  <h2 class="hub-section-title">${g.title}</h2>

  <div class="hub-grid"${i < GROUPS.length - 1 ? ' style="margin-bottom:64px;"' : ''}>

${pages.map(card).join('\n\n')}

  </div>`;
}).join('\n')}
</main>`;

const idxPath = path.join(OUT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8').replace(/\r\n/g, '\n');
const start = idx.indexOf('<main class="hub-main">');
const end = idx.indexOf('</main>') + '</main>'.length;
if (start === -1 || end < start) throw new Error('index.html: could not locate <main class="hub-main">');
idx = idx.slice(0, start) + main + idx.slice(end);

// refresh hub head + intro copy for 12 pages
idx = idx.replace(/<meta name="description" content="[^"]*" \/>/,
  '<meta name="description" content="Feature pages for VoiceOrder Solutions, voice and web order entry software for restaurants and food distributors. Ordering, inventory, catalog, and purchasing." />');
idx = idx.replace(/(<title>)[^<]*(<\/title>)/, '$1VoiceOrder Solutions — Feature Landing Pages$2');
if (!/rel="canonical"/.test(idx)) {
  idx = idx.replace(/(<meta name="description"[^>]*\/>)/, `$1\n  <link rel="canonical" href="${ORIGIN}/" />`);
}
idx = idx.replace(
  /(<header class="hub-header">[\s\S]*?)<h1>[\s\S]*?<\/h1>/,
  '$1<h1>Order, stock, and supply software for restaurants and food distributors</h1>'
);
idx = idx.replace(
  /(<header class="hub-header">[\s\S]*?<p>)[\s\S]*?(<\/p>)/,
  `$1\n    Place and take supply orders 24/7, by voice or online. Browse the ${registry.length}\n    feature pages below to see how VoiceOrder Solutions fits your team.\n  $2`
);
fs.writeFileSync(idxPath, idx, 'utf8');
console.log(`✓ index.html (${registry.length} cards in ${GROUPS.length} groups)`);
