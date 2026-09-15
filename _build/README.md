# _build — page assembler

Not deployed (see `.vercelignore`). The HTML files in the repo root are the real
deliverable and stay fully standalone and hand-editable. This folder just stops us
copy-pasting a 375-line CSS block and five identical partials into every new page.

## Run it

```
cd _build
node build.js                            # rebuild every page
node build.js order-tracking-software    # rebuild one, by slug
node gen-site.js                         # regenerate vercel.json, index.html cards, sitemap.xml, robots.txt
node gen-csv.js                          # export every page's metadata to vos-page-metadata.csv
node qa.js                               # QA gate: metas, schema, keyword density, dead links
node kwaudit.js [--detail] [<slug...>]   # keyword placement gate: body uses, FAQ split, meta; --detail prints every keyword sentence
node template.js [<slug...>]             # 16-section template conformance: order, counts, CTA labels, audience links
node claims.js [<slug...>]               # claim-rule scan: ✗ = banned wording, ? = sentence to read in context
node structure.js                        # tag balance + one h1 per page
node repeat.js <slug...>                 # 5-word repetition report (see below)
node trigram.js [<slug...>]              # 3-word repetition: summary, or the phrases for given pages
node trigram.js --cross 3                # 3-word phrases on 3+ pages (fixed facts allow-listed)
python layout.py [<slug...>]             # headless Chrome render check at 1440px and 390px
node outline.js <slug|all> [outDir]      # page copy as a tagged outline, for reviewers (no comments, CSS or JSON-LD)
node where.js <slug...>                  # every sentence behind each within-page trigram repeat
node apply.js <fixes.js> [--dry]         # apply exact copy fixes (text, cards, table rows, FAQs); reports anything that doesn't match once
```

Before pushing: `node qa.js` must report 0 failures and 0 warnings, `node kwaudit.js` 0 issues,
`node template.js` 0 fails, `node claims.js` no ✗ lines, `node structure.js` must be
clean, `node trigram.js` must show 0 within-page repeats with `--cross 3` listing nothing,
`node repeat.js <new slugs>` should show nothing you would not defend, and
`python layout.py <new slugs>` should report 0 flagged pages.

## Files

| File | What it is |
|---|---|
| `registry.js` | **Source of truth.** Every page: slug, filename, hub card copy, cluster. Drives related-page strips, `sitemap.xml`, and the `index.html` card grid. |
| `keywords.js` | Primary + secondary keyword targets per page. Read by `qa.js` and `repeat.js`. |
| `pages/<slug>.js` | One per page: title, description, related slugs, and the full `<body>` copy. |
| `build.js` | Assembles `pages/*.js` + partials + generated `<head>` into the root HTML files. |
| `gen-site.js` | Generates `vercel.json`, `sitemap.xml`, `robots.txt`, and the `index.html` card grid from `registry.js`. |
| `gen-csv.js` | Exports url, cluster, keywords, metas with char counts, H1, canonical, and FAQ count for every page. |
| `qa.js` | Gate: em-dash ban, canonical/OG/schema presence, JSON-LD validity, FAQ schema vs DOM parity, title/description length, dead internal links, keyword density. Keywords are counted on page content only: nav, logo bar, integrations, related strip, footer and eyebrow labels are stripped first (until Sep 2026 a keyword in the hero eyebrow padded the count to 6). |
| `kwaudit.js` | Keyword placement gate (Eugene's rule): primary in H1, meta title and meta description; 2 heading uses, 2 body uses, and in one FAQ question plus a *different* FAQ answer; every secondary present in content; one secondary in an H1-H3. `--detail` prints each keyword sentence for a naturalness read. |
| `template.js` | Template conformance: the 16 sections in order, H1 length, distributor hero says customers order by voice in the app, 3 trust items, verified stat figures, 3 problem cards, alternating feature rows, feature-link counts, "Also Built In" eyebrow, cards in multiples of 3, CTA labels by audience, 3 steps, featured testimonial, comparison row widths, 7+ FAQs, same-audience related strip, a cross-audience footer link. Honest ✗ rows in the VOS column are listed as notes, not warnings. |
| `claims.js` | Scans visible copy and metas against the CLAUDE.md claim and copy rules. ✗ lines are banned wording; ? lines are sentences to read in context ("every order" scope, no-retyping, web ordering, multi-supplier, stock counts). |
| `outline.js` | Tagged outline of a page's visible copy in order (H1, p, li, table rows, FAQ Q/A). What reviewers read, so author comments in `pages/*.js` don't bias them. |
| `where.js` | For each within-page trigram repeat, prints the sentences it comes from. |
| `apply.js` | Applies a fixes file: text swaps matched across source line wraps, plus `@card`, `@removeCard`, `@row`, `@removeRow`, `@faq`, `@removeFaq`. Each op must match exactly once or it is reported and skipped. |
| `metafix.js` | One-off (Sep 2026): rewrote 10 meta descriptions that opened by echoing the title. Kept for reference. |
| `structure.js` | Tag balance and single-h1 check. |
| `repeat.js` | Repetition report. Per page: phrases (5+ words) repeated within the page, sentences shared word-for-word or near-identically with other pages, and similarity to the closest pages. Keywords are masked so intended placements are not flagged; nav, logo bar, integrations, related strip and footer are ignored because they are shared by design. |
| `trigram.js` | Stricter repetition check (Eugene's bar since 2026-09-15): content 3-word phrases repeated within a page (target 0) and phrases on 3+ pages (target 0). Keywords masked; template chrome, buttons, eyebrows and the featured testimonial stripped; fixed facts (brand, formats, iOS/Android, 24/7, 20-30, 24-48) allow-listed. `--plan` emits a per-page rewrite list that keeps each shared phrase on the 2 pages it fits best. |
| `layout.py` | Renders each page in headless Chrome (desktop and mobile) and flags sideways scroll, overflowing elements, wrapping stat numbers or buttons, H1 over 4 lines, and a wrapping hero trust line. Probe copies go to `.layout/` (gitignored). |
| `research/digests/` | Competitor SERP digests per primary keyword from the Sep 2026 review. |
| `relink-pass1.js` | One-off (Sep 2026): reset related strips and footer links to same-audience siblings. Kept for reference. |
| `extract.js` | One-off, already run. Ported the original 4 hand-built pages into this pipeline. Kept for reference. |
| `_css.html`, `_navbar.html`, `_logobar.html`, `_integrations.html`, `_script.html` | Shared blocks, identical on every page. |

## Adding a page

1. Add an entry to `registry.js` (slug, file, label, card, blurb, cluster).
2. Add keyword targets to `keywords.js`.
3. Write `pages/<slug>.js`. Copy the closest existing page as a starting point, then
   **rewrite, don't reuse**: FAQ answers, card descriptions, and bullets copied from a
   sibling page show up in `repeat.js` as shared sentences. Use the markers
   `<!--@NAVBAR-->`, `<!--@LOGOBAR-->`, `<!--@INTEGRATIONS-->`, `<!--@RELATED-->`,
   `<!--@SCRIPT-->` where those blocks belong.
4. Add the page to 2 or 3 sibling pages' `related` arrays so links flow both ways.
5. `node build.js && node gen-site.js && node gen-csv.js && node qa.js && node structure.js`
6. `node repeat.js <new slugs>` and rewrite anything flagged within the page or shared with a sibling.
7. Commit and push to `master`.

## Notes

- The FAQ JSON-LD is generated by parsing the accordion markup, so the schema can
  never drift from what is on the page. If you edit an FAQ, just rebuild.
- `qa.js` masks secondary keywords before counting the primary, because several
  secondaries contain the primary verbatim (`warehouse order fulfillment software`
  contains `order fulfillment software`). Without masking every count is inflated.
- `repeat.js` treats any 5-word phrase found on 75%+ of pages as template wording. Some
  sitewide lines on the batch 1 and 2 pages (the setup FAQ answer, "Do I need to replace my
  current system to use VOS?", the cards-section lead) sit just under that threshold and
  still show up as shared sentences.
- Canonical origin is the `ORIGIN` constant in `build.js` and `gen-site.js`. Change
  it in both if the pages move to `voiceordersolutions.com`.
