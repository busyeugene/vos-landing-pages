/* Keyword targets per page, from Eugene's brief.
 * Primary target: 6 total (2 headings, 2 body, 2 FAQ). Secondaries: 1 each, >=1 in an H2/H3.
 * Tier C terms (wrong industry) are listed but only need to appear once, inside a disambiguating FAQ.
 */
module.exports = {
  'order-entry-software': {
    primary: 'order entry software',
    secondary: [
      'order entry system software',
      'order entry software for small business',
      'web based order entry software', // appears on-page hyphenated as "web-based"
    ],
  },
  'order-taking-software': {
    primary: 'order taking software',
    secondary: [
      'b2b order taking software',
      'software for order taking',
      'mobile order taking software',
    ],
  },
  'inventory-tracking-software': {
    primary: 'inventory tracking software',
    secondary: [
      'inventory tracking system',
      'simple inventory tracking software',
      'inventory tracking app',
      'software for tracking inventory',
    ],
  },
  'catalog-management-software': {
    primary: 'catalog management software',
    secondary: [
      'product catalog software',
      'b2b catalog software',
      'inventory catalog software',
      'ai catalog management software',
      'ai procurement catalog management software',
    ],
  },
  'inventory-planning-software': {
    primary: 'inventory planning software',
    secondary: [
      'inventory planning tool',
      'demand and inventory planning software',
      'inventory planning platform',
      'supply chain inventory planning software',
      'inventory planning and optimization software',
    ],
  },
  'order-fulfillment-software': {
    primary: 'order fulfillment software',
    secondary: [
      'ecommerce order fulfillment software',
      'order fulfillment tool',
      'multi channel order fulfillment software',
      'order fulfillment platform',
      'warehouse order fulfillment software',
      'order fulfillment software for small business',
    ],
  },
  'order-tracking-software': {
    primary: 'order tracking software',
    secondary: [
      'purchase order tracking software',
      'sales order tracking software',
      'ecommerce order tracking software',
      'order tracking software for small business',
      'order tracking tool',
      'order tracking platform',
      'order tracking app',
    ],
  },
  'inventory-visibility-software': {
    primary: 'inventory visibility software',
    secondary: [
      'software for comprehensive inventory visibility',
      'real-time inventory visibility software',
      'warehouse inventory visibility software solutions',
      'erp add-ons inventory visibility control software',
      'inventory visibility platform',
    ],
  },
  'inventory-control-software': {
    primary: 'inventory control software',
    secondary: [
      'warehouse inventory control software',
      'inventory control software for small business',
      'inventory control system software',
      'retail inventory control software',
      'small business inventory control software',
      'manufacturing inventory control software',
      'food inventory control software',
    ],
  },
  'restaurant-stock-management-software': {
    primary: 'restaurant stock management software',
    secondary: [
      'restaurant stock control software',
      'restaurant stock management app',
    ],
  },
  'restaurant-purchasing-software': {
    primary: 'restaurant purchasing software',
    secondary: [
      'restaurant purchasing system',
      'restaurant procurement software',
      'food purchasing software for restaurants',
      'restaurant purchase order software',
      'multi location restaurant purchasing software',
    ],
  },
  'restaurant-checklist-software': {
    primary: 'restaurant checklist software',
    secondary: [
      'restaurant checklist software for managers',
      'checklist software for restaurant managers',
      'restaurant owner checklist software',
      'multi location restaurant checklist software',
      'restaurant operations checklist software',
      // Covered via a "we quote on a call" FAQ, so the query is served
      // without publishing a price (KB forbids pricing claims).
      'restaurant checklist software pricing',
    ],
  },
  // ── Batch 3 (Sep 2026) ──────────────────────────────────────
  'vendor-management-software': {
    primary: 'vendor management software',
    secondary: [
      'restaurant vendor management software', // added: main domain ranks 2.4 for "restaurant vendor management"
      'vendor relationship management software',
      'vendor management system software',     // Tier B
      'vendor contract management software',   // Tier C, FAQ only
    ],
  },
  'inventory-replenishment-software': {
    primary: 'inventory replenishment software',
    secondary: [
      'replenishment inventory optimization software', // Tier B, scope-honest FAQ
      'automated inventory replenishment software',    // Tier B, a person always sends
      'iphone inventory replenishment software',
    ],
  },
  'inventory-automation-software': {
    primary: 'inventory automation software',
    secondary: [
      'inventory automation management software',
      'restaurant inventory automation software', // added: main domain pos 11 for "restaurant inventory automation"
    ],
  },
  'distribution-resource-planning-software': {
    primary: 'distribution resource planning software', // reframe: VOS feeds DRP, is not DRP
    secondary: [
      'distribution planning software',          // Tier B
      'distribution capacity planning software', // Tier B
    ],
  },
  // -- Batch 4 (Oct 2026), from the Airtable October plan ------
  'b2b-portal-software': {
    primary: 'b2b portal software',
    secondary: [
      'b2b order portal',
      'b2b buyer portal',
      'b2b customer portal',
      'b2b portal solutions',
      'b2b sales portal',                 // Tier B, reframed to the rep's side
      'b2b customer portal development',  // Tier C, FAQ only (VOS is not a build project)
      'b2b travel portal software',       // Tier C, FAQ only (wrong industry)
    ],
  },
  'wholesale-ordering-software': {
    primary: 'wholesale ordering software',
    secondary: [
      'wholesale ordering platform',
      'wholesale ordering app',
      'wholesale ordering system',
      'wholesale order software',
      'wholesale order management software',    // Tier B, VOS manages intake, not the warehouse
      'wholesale order fulfillment software',   // Tier B, links to the fulfillment page
      'wholesale order taking software',        // Tier B, links to the order taking page
    ],
    // Airtable listed 'wholesale order software' twice; deduped.
  },
  'distributor-sales-software': {
    primary: 'distributor sales software',
    secondary: [
      'distributor sales rep software',
      'distributor sales tracking software',          // Tier B, order history not a CRM pipeline
      'distributor software with sales forecasting',  // Tier C, FAQ only (no forecasting engine)
    ],
  },
  'dsd-sales-software': {
    primary: 'dsd sales software',
    secondary: [
      'dsd sales app',
      'dsd route sales software',                            // Tier B, VOS is not route software
      'mobile direct store delivery software',
      'direct store delivery software for small business',
      'direct store delivery software',                      // only ever inside the two longer variants
    ],
    // Dropped 'direct store delivery software for business': a near-duplicate of the
    // small-business variant, and keeping both pushes the bare phrase past qa.js's 2x cap.
  },
  'supplier-management-software': {
    primary: 'supplier management software',
    secondary: [
      'supplier management platform',
      'supplier management system',
      'supplier management system software',
      'supplier management tool',
      'supplier management portal software',
      'best supplier management software',
      'supplier performance management software',        // Tier C
      'supplier quality management software',            // Tier C
      'supplier lifecycle management software',           // Tier C
      'supplier relationship management srm software',    // Tier C
      'supplier information management software',         // Tier C
      'supplier master data management software',         // Tier C
      'supplier managed inventory software',              // Tier C (VMI/SMI is a different model)
    ],
  },
  'distributor-analytics-software': {
    primary: 'distributor analytics software',
    secondary: [
      'distributor reporting & analytics',              // H3, with a LITERAL & (see page comment)
      'applying distributor analytics',                 // Tier B
      'how analytics improve distributor profitability', // Tier B, answered as an FAQ question
    ],
  },
  'inventory-forecasting-software': {
    primary: 'inventory forecasting software',  // REFRAME: VOS feeds a forecast, it is not one
    secondary: [
      'inventory forecasting tool',
      'inventory forecast software',
      'inventory forecasting system',
      'inventory forecasting solution',
      'forecasting and inventory management software',             // Tier B
      'best inventory forecasting software',                       // Tier B, FAQ
      'inventory forecasting software free',                       // Tier C, FAQ
      'buy ai based inventory forecasting software',               // Tier C, FAQ (no model, no AI)
      'inventory forecasting software for multinational forecasts', // Tier C, FAQ (wrong buyer size)
    ],
    // Airtable's hyphenated 'buy ai-based ...' is the same token set to qa.js and kwaudit.js; deduped.
  },
  'wholesale-operations-software': {
    primary: 'wholesale operations software',
    secondary: [
      'erp for wholesale distribution operations',  // Tier B, in an H3: VOS is not an ERP
    ],
  },
  'distribution-automation-software': {
    primary: 'distribution automation software',
    secondary: [
      'distribution automation system',
      'distribution automation solution',
      'automated software distribution',       // Tier C: IT software deployment, FAQ only
      'automated software distribution tool',  // Tier C: same FAQ
    ],
  },
  'distribution-workflow-software': {
    primary: 'distribution workflow software',
    secondary: [
      'distribution workflow management software',
      'distribution workflow solution',
    ],
  },
  'pepper-alternative': {
    primary: 'pepper alternative',
    secondary: [
      'pepper competitor',
      'pepper replacement',
      'alternative to pepper',
      'better than pepper',
    ],
  },
  'choco-alternative': {
    primary: 'choco alternative',
    secondary: [
      'choco competitor',
      'choco replacement',
      'alternative to choco',
      'better than choco',
    ],
  },
  'burnt-ai-alternative': {
    primary: 'burnt ai alternative',
    secondary: [
      'burnt ai competitor',
      'burnt ai replacement',
      'alternative to burnt ai',
      'better than burnt ai',
    ],
  },
  'grubmarket-ai-alternative': {
    primary: 'grubmarket ai alternative',
    secondary: [
      'grubmarket ai competitor',
      'grubmarket ai replacement',
      'alternative to grubmarket ai',
      'better than grubmarket ai',
    ],
  },
  'cut-dry-alternative': {
    primary: 'cut+dry alternative',
    secondary: [
      'cut+dry competitor',
      'cut+dry replacement',
      'alternative to cut+dry',
      'better than cut+dry',
    ],
  },
  'bluecart-alternative': {
    primary: 'bluecart alternative',
    secondary: [
      'bluecart competitor',
      'bluecart replacement',
      'alternative to bluecart',
      'better than bluecart',
    ],
  },
  'necs-entree-alternative': {
    primary: 'necs entree alternative',
    secondary: [
      'necs entree competitor',
      'necs entree replacement',
      'alternative to necs entree',
      'better than necs entree',
    ],
  },
  'pepperi-alternative': {
    primary: 'pepperi alternative',
    secondary: [
      'pepperi competitor',
      'pepperi replacement',
      'alternative to pepperi',
      'better than pepperi',
    ],
  },
  'orderease-alternative': {
    primary: 'orderease alternative',
    secondary: [
      'orderease competitor',
      'orderease replacement',
      'alternative to orderease',
      'better than orderease',
    ],
  },
  'wizcommerce-alternative': {
    primary: 'wizcommerce alternative',
    secondary: [
      'wizcommerce competitor',
      'wizcommerce replacement',
      'alternative to wizcommerce',
      'better than wizcommerce',
    ],
  },
  'rekki-alternative': {
    primary: 'rekki alternative',
    secondary: [
      'rekki competitor',
      'rekki replacement',
      'alternative to rekki',
      'better than rekki',
    ],
  },
  'fresho-alternative': {
    primary: 'fresho alternative',
    secondary: [
      'fresho competitor',
      'fresho replacement',
      'alternative to fresho',
      'better than fresho',
    ],
  },
  'netsuite-alternative': {
    primary: 'netsuite alternative',
    secondary: [
      'netsuite competitor',
      'netsuite replacement',
      'alternative to netsuite',
      'better than netsuite',
    ],
  },
  'aptean-alternative': {
    primary: 'aptean alternative',
    secondary: [
      'aptean competitor',
      'aptean replacement',
      'alternative to aptean',
      'better than aptean',
    ],
  },
  'tradegecko-alternative': {
    primary: 'tradegecko alternative',
    secondary: [
      'tradegecko competitor',
      'tradegecko replacement',
      'alternative to tradegecko',
      'better than tradegecko',
    ],
  },
  'crunchtime-alternative': {
    primary: 'crunchtime alternative',
    secondary: [
      'crunchtime competitor',
      'crunchtime replacement',
      'alternative to crunchtime',
      'better than crunchtime',
    ],
  },
  'altametrics-alternative': {
    primary: 'altametrics alternative',
    secondary: [
      'altametrics competitor',
      'altametrics replacement',
      'alternative to altametrics',
      'better than altametrics',
    ],
  },
  'lavu-pos-alternative': {
    primary: 'lavu pos alternative',
    secondary: [
      'lavu pos competitor',
      'lavu pos replacement',
      'alternative to lavu pos',
      'better than lavu pos',
    ],
  },
  'touchbistro-alternative': {
    primary: 'touchbistro alternative',
    secondary: [
      'touchbistro competitor',
      'touchbistro replacement',
      'alternative to touchbistro',
      'better than touchbistro',
    ],
  },
  'lightspeed-pos-alternative': {
    primary: 'lightspeed pos alternative',
    secondary: [
      'lightspeed pos competitor',
      'lightspeed pos replacement',
      'alternative to lightspeed pos',
      'better than lightspeed pos',
    ],
  },
  'toast-pos-alternative': {
    primary: 'toast pos alternative',
    secondary: [
      'toast pos competitor',
      'toast pos replacement',
      'alternative to toast pos',
      'better than toast pos',
    ],
  },
  'sps-commerce-alternative': {
    primary: 'sps commerce alternative',
    secondary: [
      'sps commerce competitor',
      'sps commerce replacement',
      'alternative to sps commerce',
      'better than sps commerce',
    ],
  },
  'b2b-wave-alternative': {
    primary: 'b2b wave alternative',
    secondary: [
      'b2b wave competitor',
      'b2b wave replacement',
      'alternative to b2b wave',
      'better than b2b wave',
    ],
  },
  'repzio-alternative': {
    primary: 'repzio alternative',
    secondary: [
      'repzio competitor',
      'repzio replacement',
      'alternative to repzio',
      'better than repzio',
    ],
  },
  'conexiom-alternative': {
    primary: 'conexiom alternative',
    secondary: [
      'conexiom competitor',
      'conexiom replacement',
      'alternative to conexiom',
      'better than conexiom',
    ],
  },
  'truecommerce-alternative': {
    primary: 'truecommerce alternative',
    secondary: [
      'truecommerce competitor',
      'truecommerce replacement',
      'alternative to truecommerce',
      'better than truecommerce',
    ],
  },
  'orocommerce-alternative': {
    primary: 'orocommerce alternative',
    secondary: [
      'orocommerce competitor',
      'orocommerce replacement',
      'alternative to orocommerce',
      'better than orocommerce',
    ],
  },
  'esker-alternative': {
    primary: 'esker alternative',
    secondary: [
      'esker competitor',
      'esker replacement',
      'alternative to esker',
      'better than esker',
    ],
  },
  'shopify-b2b-alternative': {
    primary: 'shopify b2b alternative',
    secondary: [
      'shopify b2b competitor',
      'shopify b2b replacement',
      'alternative to shopify b2b',
      'better than shopify b2b',
    ],
  },
  'sana-commerce-alternative': {
    primary: 'sana commerce alternative',
    secondary: [
      'sana commerce competitor',
      'sana commerce replacement',
      'alternative to sana commerce',
      'better than sana commerce',
    ],
  },
  'brightpearl-alternative': {
    primary: 'brightpearl alternative',
    secondary: [
      'brightpearl competitor',
      'brightpearl replacement',
      'alternative to brightpearl',
      'better than brightpearl',
    ],
  },
  'unleashed-software-alternative': {
    primary: 'unleashed software alternative',
    secondary: [
      'unleashed software competitor',
      'unleashed software replacement',
      'alternative to unleashed software',
      'better than unleashed software',
    ],
  },
  'fishbowl-inventory-alternative': {
    primary: 'fishbowl inventory alternative',
    secondary: [
      'fishbowl inventory competitor',
      'fishbowl inventory replacement',
      'alternative to fishbowl inventory',
      'better than fishbowl inventory',
    ],
  },
  'inflow-inventory-alternative': {
    primary: 'inflow inventory alternative',
    secondary: [
      'inflow inventory competitor',
      'inflow inventory replacement',
      'alternative to inflow inventory',
      'better than inflow inventory',
    ],
  },
  'zoho-inventory-alternative': {
    primary: 'zoho inventory alternative',
    secondary: [
      'zoho inventory competitor',
      'zoho inventory replacement',
      'alternative to zoho inventory',
      'better than zoho inventory',
    ],
  },
  'cin7-alternative': {
    primary: 'cin7 alternative',
    secondary: [
      'cin7 competitor',
      'cin7 replacement',
      'alternative to cin7',
      'better than cin7',
    ],
  },
  'prophet-21-alternative': {
    primary: 'prophet 21 alternative',
    secondary: [
      'prophet 21 competitor',
      'prophet 21 replacement',
      'alternative to prophet 21',
      'better than prophet 21',
    ],
  },
  'syspro-alternative': {
    primary: 'syspro alternative',
    secondary: [
      'syspro competitor',
      'syspro replacement',
      'alternative to syspro',
      'better than syspro',
    ],
  },
  'sage-x3-alternative': {
    primary: 'sage x3 alternative',
    secondary: [
      'sage x3 competitor',
      'sage x3 replacement',
      'alternative to sage x3',
      'better than sage x3',
    ],
  },
  'business-central-alternative': {
    primary: 'business central alternative',
    secondary: [
      'business central competitor',
      'business central replacement',
      'alternative to business central',
      'better than business central',
    ],
  },
  'acumatica-alternative': {
    primary: 'acumatica alternative',
    secondary: [
      'acumatica competitor',
      'acumatica replacement',
      'alternative to acumatica',
      'better than acumatica',
    ],
  },
  'odoo-alternative': {
    primary: 'odoo alternative',
    secondary: [
      'odoo competitor',
      'odoo replacement',
      'alternative to odoo',
      'better than odoo',
    ],
  },
  'marginedge-alternative': {
    primary: 'marginedge alternative',
    secondary: [
      'marginedge competitor',
      'marginedge replacement',
      'alternative to marginedge',
      'better than marginedge',
    ],
  },
  'wisk-alternative': {
    primary: 'wisk alternative',
    secondary: [
      'wisk competitor',
      'wisk replacement',
      'alternative to wisk',
      'better than wisk',
    ],
  },
  'restaurant365-alternative': {
    primary: 'restaurant365 alternative',
    secondary: [
      'restaurant365 competitor',
      'restaurant365 replacement',
      'alternative to restaurant365',
      'better than restaurant365',
    ],
  },
  'xtrachef-alternative': {
    primary: 'xtrachef alternative',
    secondary: [
      'xtrachef competitor',
      'xtrachef replacement',
      'alternative to xtrachef',
      'better than xtrachef',
    ],
  },
  'orderly-alternative': {
    primary: 'orderly alternative',
    secondary: [
      'orderly competitor',
      'orderly replacement',
      'alternative to orderly',
      'better than orderly',
    ],
  },
  'marketman-alternative': {
    primary: 'marketman alternative',
    secondary: [
      'marketman competitor',
      'marketman replacement',
      'alternative to marketman',
      'better than marketman',
    ],
  },
  'apicbase-alternative': {
    primary: 'apicbase alternative',
    secondary: [
      'apicbase competitor',
      'apicbase replacement',
      'alternative to apicbase',
      'better than apicbase',
    ],
  },
  'craftable-alternative': {
    primary: 'craftable alternative',
    secondary: [
      'craftable competitor',
      'craftable replacement',
      'alternative to craftable',
      'better than craftable',
    ],
  },
};
