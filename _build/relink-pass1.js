/* One-off (Sep 2026 review, pass 1): after the distributor-first reframe, point each page's related
 * strip and footer "More From VOS" column at same-audience siblings, drop the stale testimonial
 * DEVS comment (the real Tony Luna quote is now on the page) and fix the footer year. */
const fs = require('fs');
const path = require('path');
const registry = require('./registry.js');
const bySlug = Object.fromEntries(registry.map(p => [p.slug, p]));

const s = x => x + '-software';
const LINKS = {
  // distributor pages
  'order-taking':               { related: ['order-fulfillment', 'order-tracking', 'catalog-management'],            footer: ['inventory-visibility', 'vendor-management', 'distribution-resource-planning', 'order-entry'] },
  'order-fulfillment':          { related: ['order-taking', 'order-tracking', 'distribution-resource-planning'],     footer: ['inventory-control', 'catalog-management', 'inventory-tracking', 'order-entry'] },
  'order-tracking':             { related: ['order-taking', 'order-fulfillment', 'inventory-visibility'],            footer: ['vendor-management', 'catalog-management', 'distribution-resource-planning', 'order-entry'] },
  'distribution-resource-planning': { related: ['order-fulfillment', 'inventory-planning', 'order-tracking'],         footer: ['order-taking', 'inventory-visibility', 'inventory-replenishment', 'catalog-management'] },
  'catalog-management':         { related: ['order-taking', 'vendor-management', 'inventory-visibility'],            footer: ['order-tracking', 'inventory-tracking', 'inventory-control', 'order-entry'] },
  'vendor-management':          { related: ['catalog-management', 'order-taking', 'order-tracking'],                 footer: ['inventory-control', 'order-fulfillment', 'inventory-visibility', 'restaurant-purchasing'] },
  'inventory-tracking':         { related: ['inventory-visibility', 'inventory-replenishment', 'inventory-control'], footer: ['inventory-planning', 'inventory-automation', 'order-taking', 'restaurant-stock-management'] },
  'inventory-planning':         { related: ['inventory-replenishment', 'inventory-tracking', 'distribution-resource-planning'], footer: ['inventory-visibility', 'inventory-control', 'order-tracking', 'restaurant-stock-management'] },
  'inventory-replenishment':    { related: ['inventory-planning', 'inventory-tracking', 'inventory-automation'],     footer: ['inventory-visibility', 'order-taking', 'catalog-management', 'restaurant-stock-management'] },
  'inventory-automation':       { related: ['inventory-tracking', 'inventory-replenishment', 'order-taking'],        footer: ['inventory-control', 'catalog-management', 'order-fulfillment', 'restaurant-stock-management'] },
  'inventory-visibility':       { related: ['inventory-tracking', 'inventory-control', 'catalog-management'],        footer: ['inventory-planning', 'order-taking', 'order-tracking', 'restaurant-stock-management'] },
  'inventory-control':          { related: ['inventory-tracking', 'inventory-visibility', 'order-fulfillment'],      footer: ['inventory-automation', 'inventory-replenishment', 'order-taking', 'restaurant-stock-management'] },
  // operator pages
  'order-entry':                { related: ['restaurant-purchasing', 'restaurant-checklist', 'restaurant-stock-management'], footer: ['order-tracking', 'order-taking', 'catalog-management', 'inventory-visibility'] },
  'restaurant-purchasing':      { related: ['order-entry', 'restaurant-stock-management', 'restaurant-checklist'],   footer: ['vendor-management', 'catalog-management', 'order-tracking', 'inventory-visibility'] },
  'restaurant-checklist':       { related: ['order-entry', 'restaurant-stock-management', 'restaurant-purchasing'],  footer: ['catalog-management', 'order-taking', 'inventory-tracking', 'order-tracking'] },
  'restaurant-stock-management':{ related: ['order-entry', 'restaurant-purchasing', 'restaurant-checklist'],         footer: ['inventory-tracking', 'inventory-visibility', 'inventory-replenishment', 'inventory-control'] },
};

const short = slug => bySlug[slug].label.replace(/ Software$/, '');
for (const [k, v] of Object.entries(LINKS)) {
  const file = path.join(__dirname, 'pages', s(k) + '.js');
  let src = fs.readFileSync(file, 'utf8');
  const before = src;
  const rel = v.related.map(s), foot = v.footer.map(s);
  for (const x of [...rel, ...foot]) if (!bySlug[x] || x === s(k)) throw new Error(k + ': bad target ' + x);

  src = src.replace(/related:\s*\[[^\]]*\]/, 'related: ' + JSON.stringify(rel));
  src = src.replace(/(<h5>More From VOS<\/h5>\s*<ul role="list">)[\s\S]*?(<\/ul>)/, (m, open, close) =>
    open + '\n' + foot.map(x => `        <li><a href="/${x}">${short(x)}</a></li>`).join('\n') +
    '\n        <li><a href="/">All Features</a></li>\n      ' + close);
  src = src.replace(/\s*<!-- DEVS: exact quote pending client sign-off[^>]*-->/g, '');
  src = src.replace(/© 2025 VoiceOrder Solutions/g, '© 2026 VoiceOrder Solutions');
  if (src === before) console.log('unchanged: ' + k);
  fs.writeFileSync(file, src);
  console.log('✓ ' + k);
}
