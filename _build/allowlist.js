/* Cross-page trigram allow-list: facts that may appear on any number of pages.
 *
 * Required by BOTH trigram.js and phrasecheck.js. It lives here because the two used to carry
 * their own copies with a comment saying "if trigram.js changes, change this too", which is a
 * drift waiting to happen.
 *
 * ⚠ This is the CROSS-page list only. A trigram repeated WITHIN one page is never allowed,
 * allow-listed or not, because that is a writing defect rather than a shared fact.
 *
 * Two groups:
 *
 * 1. The original fixed facts (Eugene, 2026-09-15): the brand, the delivery-format list,
 *    iOS/Android, and the numbers (24/7, 20-30 minutes saved, 24 to 48 hours, 20-minute demo).
 *
 * 2. Canonical product statements and sitewide chrome (Eugene, 2026-10-10, for the 12 compare
 *    pages). Twelve pages comparing VOS with twelve competitors all have to state the same true
 *    things about VOS, and the knowledge base fixes the wording of several of them ("fewer
 *    stockout surprises", not "fewer stockouts"). Forcing a twelfth distinct phrasing makes the
 *    copy worse, not less repetitive. Measured on the Choco page: 20 of 56 collisions were these,
 *    plus 4 more from the final-CTA trust line that is identical on every page by design.
 *
 *    The guard against twelve pages reading as one is NOT this gate. It is the
 *    proposition-sameness pass: feature-row H3s, card H4s, problem-card H4s and comparison row
 *    labels compared side by side across all twelve. CLAUDE.md's own measurement says so:
 *    "Literal overlap was never the problem... What a reader notices is repeated propositions,
 *    not repeated phrases; the trigram gates cannot see it."
 *
 * Keep this list tight. Anything added here stops being measured, so it must be a fact the page
 * is REQUIRED to state, not merely a phrase that was awkward to reword.
 */

const FORMAT = /\b(email|pdf|excel|word|edi|api|quickbooks)\b/g;

// Group 2, as explicit patterns so each entry is reviewable.
const CANONICAL = [
  // the inventory-visibility claim, whose wording the KB fixes
  /real[- ]time inventory|inventory visibility|visibility tied|stock visibility/,
  /stockout surprises/,
  // the order record
  /order number|number and time|time stamped|timestamped|and a timestamp/,
  // who VOS is for
  /independents? and dsd|and dsd operations|small and mid|and mid[- ]size/,
  // setup and the first order
  /first order|distributors go live|up and running/,
  // quote-based pricing
  /quote per distributor|we quote per|quoted per distributor/,
  // order guides and SKUs
  /order guides?|item list|your skus|per account at your prices/,
  // the phone baseline the comparison is drawn against
  /order by phone|on the phone|off the phone/,
  // the "not the system of record" disclaimer, which every inventory mention needs
  /system of record|stays in charge|whatever you count/,
  // the no-retyping scope
  /a direct feed|nothing to retype/,
  // sitewide chrome: the final-CTA trust line, identical on every page on purpose
  /sends orders in|nothing to rip|project to run|ask us for/,
  // the sourcing FAQ every compare page carries, and the date it was read. Deliberate and
  // required: the transparency line is the same promise on all twelve pages.
  /details on this|this page come|page come from/,
  /on \d{1,2} (january|february|march|april|may|june|july|august|september|october|november|december) \d{4}/,
  /\d{1,2} (january|february|march|april|may|june|july|august|september|october|november|december)/,
  // the scope cell, worded identically on every compare table on purpose
  /ordering plus stock/,
];

const ALLOW = g =>
  /voiceorder solutions/.test(g) ||
  (g.match(FORMAT) || []).length >= 2 ||
  /\b(pdf|excel|edi|quickbooks)\b|\bword (attachment|file|doc)\b/.test(g) ||
  /\b(ios|iphone|android)\b/.test(g) ||
  /\b(7|20|24|30|48)\b/.test(g) ||
  CANONICAL.some(re => re.test(g));

module.exports = { ALLOW, FORMAT, CANONICAL };
