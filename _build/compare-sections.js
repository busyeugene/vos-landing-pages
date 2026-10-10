/* Which parts of a comparison page are about VOS, and which are about the competitor.
 *
 * WHY THIS EXISTS
 * The twelve `<competitor> alternative` pages all describe one product, VOS, alongside twelve
 * different competitors. The VOS half is the same on every page BY DESIGN, and the knowledge
 * base fixes the wording of several of its claims ("fewer stockout surprises", not "fewer
 * stockouts"). Measuring that half for cross-page repetition just forces a twelfth paraphrase
 * of a sentence that was already correct, and the paraphrases get worse each time.
 *
 * What a reader notices is whether the ARGUMENT repeats, and the argument is wherever the
 * competitor is named.
 *
 * THE RULE, which is self-enforcing
 * On a compare page, a chunk of copy that never names the competitor counts as VOS-side and is
 * excluded from the CROSS-page trigram count. Name the competitor and the chunk is measured in
 * full. So if you want a sentence held to the no-repetition bar, say who it is about: on a
 * comparison page that is what you should be doing anyway.
 *
 * Two safeguards:
 *   - WITHIN one page nothing is exempt. Saying the same thing twice on a single page is a
 *     writing defect wherever it sits, and `where.js` still reports it.
 *   - A trigram appearing in BOTH a VOS-side and a competitor-facing chunk stays measured, so
 *     nothing hides by being mentioned once in a feature bullet.
 *
 * Eugene approved the principle on 2026-10-10 ("widen the allow-list... the canonical VOS
 * product facts"). This is the structural form of it, and it is tighter than the regex allow-list
 * it replaces: it exempts a sentence for a reason you can read off the page.
 */

const { namesWord } = require('./names.js');

// Whole sections that are about VOS on every compare page.
const VOS_SIDE_SECTIONS = [
  /<section[^>]*id="features"[\s\S]*?(?=<section|<footer|<\/body)/i,
  /<section[^>]*id="how-it-works"[\s\S]*?(?=<section|<footer|<\/body)/i,
  /<section[^>]*class="stats-strip"[\s\S]*?(?=<section|<footer|<\/body)/i,
  /<section[^>]*class="final-cta"[\s\S]*?(?=<section|<footer|<\/body)/i,
  /<section[^>]*id="testimonials"[\s\S]*?(?=<section|<footer|<\/body)/i,
];

// FAQ items and comparison rows are classified one by one, because a FAQ list holds both
// "Is VOS better than X?" (an argument) and "Does this touch our ERP?" (a VOS fact that happens
// to live in the FAQ).
const ITEM_PATTERNS = [
  /<div class="faq-item">[\s\S]*?<\/div>\s*<\/div>/gi,
  /<tr>[\s\S]*?<\/tr>/gi,
];

/* Deliberately NOT in the list above: .problem-card and .feature-card.
 * Those carry the argument ("why teams look elsewhere", "when the two work together"), so they
 * stay measured on every page whether or not they name the competitor. A card headed "You buy
 * the whole stack to fix one step" is an argument about a competitor even without the name in
 * it, and twelve pages making that same argument is exactly the proposition sameness the
 * Oct 2026 reviewers caught by hand. Only FAQ items and table rows get the unnamed exemption,
 * because those are where a generic VOS fact genuinely lives ("Does this touch our ERP?").
 */

/* The VOS-side HTML of a page: the always-VOS sections, plus every item in a competitor-facing
 * section that never names the competitor. */
function vosSideHtml(html, competitor) {
  let out = '';
  for (const re of VOS_SIDE_SECTIONS) {
    const m = html.match(re);
    if (m) out += '\n' + m[0];
  }
  if (!competitor) return out;

  // Look for unnamed items only outside the sections already counted as VOS-side, so an item is
  // not classified twice.
  let rest = html;
  for (const re of VOS_SIDE_SECTIONS) rest = rest.replace(re, ' ');

  for (const re of ITEM_PATTERNS) {
    for (const m of rest.match(re) || []) {
      const text = m.replace(/<[^>]+>/g, ' ');
      if (!namesWord(text, competitor)) out += '\n' + m;
    }
  }
  return out;
}

module.exports = { vosSideHtml, VOS_SIDE_SECTIONS, ITEM_PATTERNS };
