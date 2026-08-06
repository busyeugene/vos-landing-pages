/* Keyword targets per page, from Eugene's brief.
 * Primary target: 6 total (2 headings, 2 body, 2 FAQ). Secondaries: 1 each, >=1 in an H2/H3.
 * Tier C terms (wrong industry) are listed but only need to appear once, inside a disambiguating FAQ.
 */
module.exports = {
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
};
