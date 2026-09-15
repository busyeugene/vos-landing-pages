/* One-off (Sep 2026 check passes): meta descriptions that opened by echoing the title
 * ("X Software for Food Distributors" / "X software for food distributors."). Exact-string swaps; reports MISSING. */
const fs = require('fs');
const path = require('path');
const KW = require('./keywords.js');
const NEW = {
  'catalog-management-software': "Catalog management software that keeps each restaurant account's order guide current, at your prices and SKUs. Most distributors go live in 24-48 hours.",
  'inventory-automation-software': 'Cut order busywork. With this inventory automation software, customers order by voice 24/7, and your stock view and catalog update as orders land.',
  'inventory-control-software': 'Stop losing margin to shorts, swaps and order errors. This inventory control software gives distributors confirmed orders and a stock-aware catalog.',
  'inventory-planning-software': "Plan next week's stock from real customer orders. This inventory planning software keeps dated history per account, 24/7 order capture and a live stock view.",
  'inventory-replenishment-software': "See low stock as customer orders land, so your buyer can restock before an account's order comes up short. Inventory replenishment software for distributors.",
  'inventory-tracking-software': "See what's on hand in real time as customer orders come in. Inventory tracking software that keeps your catalog in step with stock and cuts stockout surprises.",
  'inventory-visibility-software': 'Give reps, office staff and the warehouse one real-time stock number. Inventory visibility software that updates customer catalogs as your stock changes.',
  'order-fulfillment-software': 'Your pick line works from confirmed, timestamped orders, not voicemails. Order fulfillment software where customers order by voice in an app, 24/7.',
  'order-taking-software': 'Let customers say the order into an app 24/7, check it and send it, and it reaches your team in the format you use. Order taking software that ends phone tag.',
  'vendor-management-software': 'Restaurants use vendor management software to judge suppliers on price, accuracy and ease. VOS helps food distributors score well on all three, 24/7.',
};
let bad = 0;
for (const [slug, desc] of Object.entries(NEW)) {
  const f = path.join(__dirname, 'pages', slug + '.js');
  let s = fs.readFileSync(f, 'utf8');
  const m = s.match(/^(\s+description:\s*)(['"])(.*)\2,\s*$/m);
  if (!m) { console.log('MISSING description line: ' + slug); bad++; continue; }
  const len = desc.length;
  const hasKw = desc.toLowerCase().includes(KW[slug].primary);
  const q = desc.includes("'") ? '"' : "'";
  s = s.replace(m[0], `${m[1]}${q}${desc}${q},`);
  fs.writeFileSync(f, s);
  console.log(`${len >= 120 && len <= 160 && hasKw ? 'ok ' : 'BAD'} ${len} ${slug}`);
  if (!(len >= 120 && len <= 160 && hasKw)) bad++;
}
process.exit(bad ? 1 : 0);
