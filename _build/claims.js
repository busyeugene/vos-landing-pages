/* Claim-rule scan (CLAUDE.md "Claim rules" + "Copy rules"). Visible copy + meta, every page.
 * Prints each hit with its sentence so a person can judge it; many patterns are "check", not "wrong".
 * Usage: node claims.js [slug...]
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const registry = require('./registry.js');
const OPERATOR = new Set(['order-entry-software', 'restaurant-purchasing-software', 'restaurant-checklist-software', 'restaurant-stock-management-software']);

// [label, regex, severity]  severity: BAN = never allowed, CHECK = read the sentence
const RULES = [
  ['setup "1 day" / flat 48h', /\b(1|one)[ -]day setup|\bin (1|one) day\b|live within 48|(?<!24 to )within 48 hours|setup in 24 hours|up in a day\b(?! or two)/i, 'BAN'],
  ['setup time without "most"', /(24|48)(-| to )?(48)? ?(hours|hrs)|same day|a day or two|two days|same-day/i, 'CHECK-MOST'],
  ['hands-free', /hands[- ]free/i, 'BAN'],
  ['nothing to mishear', /nothing to mishear|no (more )?mishear/i, 'BAN'],
  ['fewer stockouts (want "stockout surprises")', /fewer stock-?outs(?! surprises)|no (more )?stock-?outs|eliminat\w* stock-?outs|prevent\w* stock-?outs/i, 'BAN'],
  ['forecasting as capability', /forecast/i, 'CHECK'],
  ['purchase orders', /purchase orders?|\bPOs?\b/i, 'CHECK'],
  ['WMS functions', /\bWMS\b|bin locations?|pick paths?|barcode|scann/i, 'CHECK'],
  ['route/shipment tracking', /GPS|shipment|route (planning|optimi)|track (the )?(truck|driver|deliver)|\bETA\b/i, 'CHECK'],
  ['prices / ROI numbers', /\$\s?\d|\bROI\b|per month|\/mo\b|free trial|\d+% (less|more|fewer|faster)/i, 'BAN'],
  ['named integrations', /\b(Sysco|US Foods|Toast|Square|Clover|NetSuite|SAP|Oracle|Microsoft Dynamics|Acumatica|Entrée|Entree|Blue Cart|BlueCart|Choco|MarketMan|Restaurant365|Xero|Shopify)\b/, 'BAN'],
  ['live availability for customers', /(see|shows?|check)\w* (live |real[- ]time )?(availability|what'?s in stock|stock levels?)/i, 'CHECK'],
  ['web ordering for customers', /web[- ]based|browser|online ordering|order online|from (a|the|any) (computer|desktop|laptop)/i, 'CHECK-WEB'],
  ['"every order" scope', /\bevery (order|call)\b|\ball (your |of your )?orders\b/i, 'CHECK'],
  ['no-retyping claim', /retyp|re-typ|re-key|rekey|no (manual )?(data )?entry|typ(e|ing) (it|them|orders?) (up|in)|keying|key in|no one types/i, 'CHECK'],
  ['order statuses beyond confirmed', /\b(shipped|out for delivery|delivered status|in transit|status updates?|order status)\b/i, 'CHECK'],
  ['multi-distributor in one app', /(several|multiple|many|all (of )?your|every) (distributors|suppliers|vendors)/i, 'CHECK'],
  ['separate account per location', /(each|every) (location|site|kitchen)('s)? (has|gets) (its|their) own/i, 'CHECK'],
  ['customer order history', /(their|your) (own )?order history|past orders/i, 'CHECK'],
  ['pays anything (operator)', /\bfree\b|no cost|costs? nothing|cost to you|pricing/i, 'CHECK'],
  ['counts / buys stock', /count(s|ing)? (your )?stock|stock counts?|par levels?|reorder point|suggested (re)?order|auto(matic(ally)?)?[- ]?(re)?order/i, 'CHECK'],
  ['system of record', /system of record|replaces? your (inventory|ERP|order) system/i, 'CHECK'],
  ['trade idioms', /closeout|phoning it in|phone it in/i, 'BAN'],
  ['empty lines', /no workarounds|everything you need|seamless|game[- ]changer|revolutioni|cutting[- ]edge|best[- ]in[- ]class|world[- ]class|robust|leverage|streamline/i, 'BAN'],
  ['"watch your" in demo copy', /watch your/i, 'BAN'],
  ['Join distributors who', /join (the )?(distributors|restaurants|kitchens) who/i, 'BAN'],
  ['em-dash', /—/, 'BAN'],
  ['en-dash in copy', /–/, 'BAN'],
  ['AI claims', /\bAI\b|artificial intelligence|machine learning|smart suggest/i, 'CHECK'],
  ['Everything Included', /everything included/i, 'BAN'],
];

const only = process.argv.slice(2);
const totals = {};
for (const p of registry) {
  if (only.length && !only.includes(p.slug)) continue;
  const html = fs.readFileSync(path.join(REPO, p.file), 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const body = html.replace(/<head>[\s\S]*?<\/head>/i, '').replace(/<(style|script)[\s\S]*?<\/(style|script)>/gi, '').replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<nav[\s\S]*?<\/nav>/i, '').replace(/<footer[\s\S]*?<\/footer>/i, '').replace(/<section class="related-strip"[\s\S]*?<\/section>/i, '')
    .replace(/<div class="img-placeholder[\s\S]*?<\/div>/gi, '')
    .replace(/\s+/g, ' ').replace(/<br\s*\/?>/gi, ' ').replace(/<\/(p|li|h[1-6]|div|td|th|button|span|a)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&');
  const sents = [title, desc, ...body.split('\n').map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean)]
    .flatMap(t => t.split(/(?<=[.!?])\s+/));
  const hits = [];
  for (const [label, re, sev] of RULES) {
    for (const s of sents) {
      if (!re.test(s)) continue;
      if (sev === 'CHECK-MOST' && /\bmost\b|usually|typical|often|many/i.test(s)) continue;
      if (sev === 'CHECK-WEB' && p.slug === 'order-entry-software') { hits.push([label, 'CHECK', s]); continue; }
      hits.push([label, sev.startsWith('CHECK') ? 'CHECK' : sev, s]);
    }
  }
  console.log(`\n=== ${p.slug} [${OPERATOR.has(p.slug) ? 'operator' : 'distributor'}]  ${hits.filter(h => h[1] === 'BAN').length} ban, ${hits.filter(h => h[1] === 'CHECK').length} check`);
  for (const [label, sev, s] of hits) { console.log(`  ${sev === 'BAN' ? '✗' : '?'} [${label}] ${s}`); totals[label] = (totals[label] || 0) + 1; }
}
console.log('\nTotals by rule:'); for (const [k, v] of Object.entries(totals).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`);
