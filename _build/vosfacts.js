/* Which VERIFIED VOS strengths actually appear on each compare page?
 * Pairs with balance.js: that one shows whether the table gives VOS credit, this one shows
 * whether the page mentions the product's own proof points at all. Facts and their wording come
 * from knowledge-base/vos-product-facts.md CURRENT STATE. Prints only; judgement is human. */
const fs = require('fs'), path = require('path');
const registry = require('./registry.js');
const FACTS = {
  '20-30 min saved':        /20 ?(to|-) ?30 min/i,
  '24/7 / after hours':     /24\/7|after hours|at any hour|out of hours|whatever time the shift ends|whenever the shift ends|hour you are shut|long after you close/i,
  'setup 24-48h':           /24 (to|-) ?48/i,
  'first order same day':   /same day|first order/i,
  'guide per account':      /own guide|guide per|per account|its own list/i,
  'your prices':            /your prices|at the price you|price you hold|prices you set|price you set/i,
  'order number + time':    /order number|numbered and tim|number and a tim|date and time|timestamp/i,
  'buyer reviews lines':    /approve|confirm|signs? (it|the order) off|reads? the lines|checks the lines/i,
  'saves + resumes':        /saves? and resume|pulled away|resume where|holds the order until they come back|interrupted halfway/i,
  'push + text promos':     /push (notification|and text)|text message/i,
  'delivery formats':       /pdf, excel or word|over the api|quickbooks/i,
  'additive / API-ready':   /additive|api-ready|alongside|nothing has to come out|takes nothing away|removes nothing/i,
  'inventory visibility':   /inventory visibility|stock levels change|stockout surprises/i,
  'frees reps to sell':     /free your (sales )?reps|reps to sell|reps their|back for selling|rep's hands|stop the reorders|time goes into selling|that time to sell|stop reaching your reps/i,
  'iOS + Android':          /ios|android/i,
  'no hardware issued':     /nothing issued|own handset|no hardware/i,
  'admin / order history':  /admin screen|admin platform|order history/i,
};
const pages = registry.filter(p => p.kind === 'compare');
const txt = p => fs.readFileSync(path.join(__dirname, '..', p.file), 'utf8')
  .replace(/<!--[\s\S]*?-->/g, ' ').replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
const names = Object.keys(FACTS);
const data = pages.map(p => ({ slug: p.slug.replace('-alternative', ''), body: txt(p) }));
const w = Math.max(...names.map(n => n.length)) + 1;
process.stdout.write('fact'.padEnd(w));
data.forEach(d => process.stdout.write(d.slug.slice(0, 5).padEnd(7)));
console.log('  pages');
for (const n of names) {
  process.stdout.write(n.padEnd(w));
  let c = 0;
  for (const d of data) { const hit = FACTS[n].test(d.body); if (hit) c++; process.stdout.write((hit ? '  Y' : '  .').padEnd(7)); }
  console.log('   ' + c + '/12' + (c <= 4 ? '   <-- barely used' : ''));
}
console.log('\nper-page count of verified VOS proof points present:');
for (const d of data) console.log('  ' + d.slug.padEnd(15) + names.filter(n => FACTS[n].test(d.body)).length + '/' + names.length);
