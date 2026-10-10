/* Which sections of a comparison page are about VOS, and which are about the competitor.
 *
 * Why this exists. The twelve `<competitor> alternative` pages share a feature deep-dive, a
 * setup section, an inventory disclaimer and a set of VOS-only FAQs. Those are all descriptions
 * of one product, so they are the same on every page BY DESIGN, and the knowledge base fixes the
 * wording of several of them. Measuring them for cross-page repetition just forces a twelfth
 * paraphrase of a sentence that was already correct.
 *
 * What a reader actually notices is whether the ARGUMENT is the same, and the argument lives in
 * the competitor-facing sections: the hero, the comparison table, "why teams look elsewhere", the
 * coexistence cards and the competitor FAQs. Those stay fully measured, so a lazy second page
 * still fails the gate.
 *
 * So: on a compare page, a trigram that occurs ONLY inside the VOS-side sections is excluded from
 * the CROSS-page count. It is still counted WITHIN the page, because saying the same thing twice
 * on one page is a writing defect no matter which section it sits in. A trigram that appears in
 * both a VOS-side and a competitor-facing section stays measured, so nothing hides by being
 * mentioned once in a feature bullet.
 *
 * Eugene approved the principle on 2026-10-10 ("widen the allow-list... the canonical VOS product
 * facts"); this is the structural form of it, which is tighter than a growing regex list.
 */

// The VOS-side sections, by the ids and aria-labels the template gives them.
const VOS_SIDE = [
  /<section[^>]*id="features"[\s\S]*?(?=<section|<footer|<\/body)/i,
  /<section[^>]*id="how-it-works"[\s\S]*?(?=<section|<footer|<\/body)/i,
  /<section[^>]*class="stats-strip"[\s\S]*?(?=<section|<footer|<\/body)/i,
  /<section[^>]*class="final-cta"[\s\S]*?(?=<section|<footer|<\/body)/i,
  /<section[^>]*id="testimonials"[\s\S]*?(?=<section|<footer|<\/body)/i,
];

/* Returns the concatenated VOS-side HTML of a page, or '' when there is none. */
function vosSideHtml(html) {
  let out = '';
  for (const re of VOS_SIDE) {
    const m = html.match(re);
    if (m) out += '\n' + m[0];
  }
  return out;
}

module.exports = { vosSideHtml, VOS_SIDE };
