/* One-off: port the 4 original VOS pages into the same build pipeline as the new 8,
 * so all 12 get canonicals, OG tags, FAQ/Breadcrumb/SoftwareApplication JSON-LD,
 * a Related-pages strip, and cross-cluster footer links.
 * Body copy is carried over verbatim. Usage: node extract.js
 */
const fs = require('fs');
const path = require('path');
const SRC = path.resolve(__dirname, '..');
const HERE = __dirname;
const read = f => fs.readFileSync(path.join(HERE, f), 'utf8').replace(/\r\n/g, '\n').trim();

const PARTIALS = [
  ['<!--@NAVBAR-->', read('_navbar.html')],
  ['<!--@LOGOBAR-->', read('_logobar.html')],
  ['<!--@INTEGRATIONS-->', read('_integrations.html')],
  ['<!--@SCRIPT-->', read('_script.html')],
];

// Titles trimmed to <=62 chars, descriptions to 120-160.
const META = {
  'order-entry-software': {
    file: 'vos-order-entry-landing.html',
    title: 'Order Entry Software for Restaurants | VoiceOrder',
    description: 'VoiceOrder Solutions is web-based order entry software for restaurants. Place supply orders 24/7 by voice or online. No hold time and no errors.',
    related: ['order-tracking-software', 'restaurant-purchasing-software', 'restaurant-stock-management-software'],
    relatedHeading: 'Where your orders go next',
    moreFrom: [
      ['/order-tracking-software', 'Order Tracking'],
      ['/order-taking-software', 'Order Taking'],
      ['/restaurant-purchasing-software', 'Restaurant Purchasing'],
      ['/catalog-management-software', 'Catalog Management'],
      ['/', 'All Features'],
    ],
    compare: 'VOS vs Phone Ordering',
  },
  'order-taking-software': {
    file: 'vos-order-taking-landing.html',
    title: 'Order Taking Software for Distributors | VoiceOrder',
    description: 'VoiceOrder Solutions is order taking software for distributors and food service teams. Take orders by voice or web, 24/7, with no system to replace.',
    related: ['order-fulfillment-software', 'order-tracking-software', 'catalog-management-software'],
    relatedHeading: 'What happens after the order arrives',
    moreFrom: [
      ['/order-fulfillment-software', 'Order Fulfillment'],
      ['/order-tracking-software', 'Order Tracking'],
      ['/order-entry-software', 'Order Entry'],
      ['/catalog-management-software', 'Catalog Management'],
      ['/', 'All Features'],
    ],
    compare: 'VOS vs Phone Orders',
  },
  'inventory-tracking-software': {
    file: 'vos-inventory-tracking-landing.html',
    title: 'Inventory Tracking Software for Restaurants | VOS',
    description: 'VoiceOrder Solutions is simple inventory tracking software for restaurants. See real-time stock, get low-stock alerts, and reorder by voice or web.',
    related: ['restaurant-stock-management-software', 'inventory-visibility-software', 'inventory-planning-software'],
    relatedHeading: 'Go further with your stock data',
    moreFrom: [
      ['/restaurant-stock-management-software', 'Restaurant Stock Management'],
      ['/inventory-visibility-software', 'Inventory Visibility'],
      ['/inventory-planning-software', 'Inventory Planning'],
      ['/inventory-control-software', 'Inventory Control'],
      ['/', 'All Features'],
    ],
    compare: 'VOS vs Spreadsheets',
  },
  'catalog-management-software': {
    file: 'vos-catalog-management-landing.html',
    title: 'Catalog Management Software for Food Orders | VOS',
    description: 'VoiceOrder Solutions is catalog management software for restaurants and distributors. Keep one product catalog current and order by voice or web.',
    related: ['order-entry-software', 'restaurant-checklist-software', 'restaurant-purchasing-software'],
    relatedHeading: 'What a current catalog unlocks',
    moreFrom: [
      ['/order-entry-software', 'Order Entry'],
      ['/order-fulfillment-software', 'Order Fulfillment'],
      ['/restaurant-checklist-software', 'Restaurant Checklists'],
      ['/restaurant-purchasing-software', 'Restaurant Purchasing'],
      ['/', 'All Features'],
    ],
    compare: 'VOS vs Binders',
  },
};

for (const [slug, m] of Object.entries(META)) {
  let html = fs.readFileSync(path.join(SRC, m.file), 'utf8').replace(/\r\n/g, '\n');
  let body = html.slice(html.indexOf('<body>') + 6, html.lastIndexOf('</body>')).trim();

  // 1. swap identical blocks for build markers
  let swapped = 0;
  for (const [marker, block] of PARTIALS) {
    if (body.includes(block)) { body = body.replace(block, marker); swapped++; }
  }

  // 2. Related strip goes immediately before the final CTA section comment
  const ctaAnchor = body.indexOf('<!-- ============================================================\n     SECTION 13: FINAL CONVERSION CTA');
  if (ctaAnchor === -1) throw new Error(`${slug}: could not find final CTA anchor`);
  body = body.slice(0, ctaAnchor) + '<!--@RELATED-->\n\n\n' + body.slice(ctaAnchor);

  // 3. replace the "Compare" footer column with a cross-cluster "More From VOS" column
  const compareRe = /<div class="footer-col">\s*<h5>Compare<\/h5>[\s\S]*?<\/div>/;
  if (!compareRe.test(body)) throw new Error(`${slug}: could not find Compare footer column`);
  const links = m.moreFrom.map(([href, label]) => `        <li><a href="${href}">${label}</a></li>`).join('\n');
  body = body.replace(compareRe, `<div class="footer-col">
      <h5>More From VOS</h5>
      <ul role="list">
${links}
      </ul>
    </div>`);

  // 4. keep a comparison link available, in the Company column
  body = body.replace(
    /(<h5>Company<\/h5>\s*<ul role="list">[\s\S]*?<li><a href="https:\/\/www\.voiceordersolutions\.com\/contact-us">Contact Us<\/a><\/li>)/,
    `$1\n        <li><a href="#comparison">${m.compare}</a></li>`
  );

  const mod = `/* Ported from the original hand-built page. Body copy carried over verbatim;
 * head, JSON-LD, Related strip and footer cross-links are generated by build.js.
 */
module.exports = {
  title: ${JSON.stringify(m.title)},
  description: ${JSON.stringify(m.description)},
  related: ${JSON.stringify(m.related)},
  relatedHeading: ${JSON.stringify(m.relatedHeading)},
  body: \`
${body.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}
\`,
};
`;
  fs.writeFileSync(path.join(HERE, 'pages', `${slug}.js`), mod, 'utf8');
  console.log(`✓ pages/${slug}.js  (${swapped}/4 partials matched, ${body.split('\n').length} body lines)`);
}
