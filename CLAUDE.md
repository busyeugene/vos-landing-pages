# VoiceOrder Solutions — pSEO Landing Pages

## What this project is
Programmatic SEO feature landing pages for **VoiceOrder Solutions** (voiceordersolutions.com): a voice ordering app and real-time inventory visibility for **small to mid-size food distributors** (independent and DSD) and the restaurants they serve. The distributor is the buyer; restaurants get the app through their distributor.

### Audience split (Eugene, 2026-09-15, after the homepage went distributor-first)
- **Distributor pages** ("you" = the distributor, restaurants are "your customers/accounts"): order taking, order fulfillment, order tracking, distribution resource planning, catalog management, vendor management, and the six inventory pages.
- **Operator pages** ("you" = the restaurant operator; say plainly that VOS comes through their distributor): order entry, restaurant purchasing, restaurant checklist, restaurant stock management.
- Related strips link same-audience siblings; each footer carries one cross-audience link.
- Facts: `knowledge-base/vos-product-facts.md`, section CURRENT STATE. Setup is 24 to 48 hours for distributors (never "1 day"); customers usually order the same day. Customer web ordering is unconfirmed: only the order entry page mentions it.

## Deployment
- **GitHub:** `github.com/busyeugene/vos-landing-pages` (remote `origin`)
- **Vercel:** project `vos-landing-pages` → live at `https://vos-landing-pages.vercel.app`
- **Deploy branch:** `master`. Every push to `master` auto-redeploys via Vercel's Git integration.
- New pages: add the HTML file, add a rewrite entry in `vercel.json`, add a card to `index.html` (pillar page), add the URL to `sitemap.xml`, then commit + push to `master`.
- `sitemap.xml` and `robots.txt` sit at the repo root and are served as-is.
- `.vercel/` is gitignored (holds the local project link).
- Canonicals point at `https://vos-landing-pages.vercel.app`. If these pages ever move onto `voiceordersolutions.com`, every canonical, `og:url`, and `sitemap.xml` entry has to be updated.
- **This deployment is noindex (Eugene, 2026-10-07).** It is a review mirror, not the SEO property: every one of these slugs also lives on `voiceordersolutions.com` in Webflow, so indexed copies here would compete with the client's own domain. Two layers, both generated, so never hand-edit `vercel.json` or the root HTML:
  - `<meta name="robots" content="noindex, nofollow" />` in every page head, written by `build.js` (and patched into `index.html` by `gen-site.js`).
  - `X-Robots-Tag: noindex, nofollow` on `/(.*)` via the `headers` block in `vercel.json`, written by `gen-site.js`. This also covers `sitemap.xml` and anything non-HTML.
  - `robots.txt` deliberately stays on `Allow: /`: a crawler has to fetch a page to see the noindex, so a `Disallow` would hide the directive and could leave URLs indexed. The sitemap entry stays for the same reason, so the noindex is discovered quickly.
  - **To make these pages the live SEO property**, remove both layers and re-point every canonical and `og:url` at the real domain. Removing one layer alone is not enough.
- **All 26 feature pages also live on `voiceordersolutions.com`** in Webflow. Pushing here does **not** update those copies; tell Eugene when a change should be carried over. Checked 2026-10-09:
  - The **16** batch-1/2/3 slugs were ported by the client and are published with current metas. (An earlier note here said 12; it was wrong.) Their body copy still predates the 8-pass review and the 4-pass publish check (commit `9ceb245`: new H1 on visibility, new metas on 11 pages, claim fixes on all 16) and carries porting typos ("Real-trime", "resteraunt"), so all 16 still need a copy re-port.
  - The **10** batch-4 slugs were ported on 2026-10-09 via the Webflow MCP and are **drafts, not published**. See the Webflow port section below.

## Pages built

| File | Primary keyword | URL | Cluster |
|---|---|---|---|
| `index.html` | (pillar / hub page) | `/` | — |
| `vos-order-entry-landing.html` | order entry software | `/order-entry-software` | Ordering |
| `vos-order-taking-landing.html` | order taking software | `/order-taking-software` | Ordering |
| `vos-order-fulfillment-landing.html` | order fulfillment software | `/order-fulfillment-software` | Ordering |
| `vos-order-tracking-landing.html` | order tracking software | `/order-tracking-software` | Ordering |
| `vos-distribution-resource-planning-landing.html` | distribution resource planning software | `/distribution-resource-planning-software` | Ordering (reframe) |
| `vos-inventory-tracking-landing.html` | inventory tracking software | `/inventory-tracking-software` | Inventory |
| `vos-inventory-planning-landing.html` | inventory planning software | `/inventory-planning-software` | Inventory |
| `vos-inventory-replenishment-landing.html` | inventory replenishment software | `/inventory-replenishment-software` | Inventory |
| `vos-inventory-automation-landing.html` | inventory automation software | `/inventory-automation-software` | Inventory |
| `vos-inventory-visibility-landing.html` | inventory visibility software | `/inventory-visibility-software` | Inventory |
| `vos-inventory-control-landing.html` | inventory control software | `/inventory-control-software` | Inventory |
| `vos-restaurant-stock-management-landing.html` | restaurant stock management software | `/restaurant-stock-management-software` | Inventory (hub) |
| `vos-catalog-management-landing.html` | catalog management software | `/catalog-management-software` | Ops |
| `vos-restaurant-purchasing-landing.html` | restaurant purchasing software | `/restaurant-purchasing-software` | Ops (hub) |
| `vos-vendor-management-landing.html` | vendor management software | `/vendor-management-software` | Ops |
| `vos-restaurant-checklist-landing.html` | restaurant checklist software | `/restaurant-checklist-software` | Ops |
| `vos-b2b-portal-landing.html` | b2b portal software | `/b2b-portal-software` | Ordering |
| `vos-wholesale-ordering-landing.html` | wholesale ordering software | `/wholesale-ordering-software` | Ordering |
| `vos-supplier-management-landing.html` | supplier management software | `/supplier-management-software` | Ops |
| `vos-inventory-forecasting-landing.html` | inventory forecasting software | `/inventory-forecasting-software` | Inventory (reframe) |
| `vos-distributor-sales-landing.html` | distributor sales software | `/distributor-sales-software` | Distribution |
| `vos-dsd-sales-landing.html` | dsd sales software | `/dsd-sales-software` | Distribution |
| `vos-distributor-analytics-landing.html` | distributor analytics software | `/distributor-analytics-software` | Distribution (reframe) |
| `vos-wholesale-operations-landing.html` | wholesale operations software | `/wholesale-operations-software` | Distribution |
| `vos-distribution-automation-landing.html` | distribution automation software | `/distribution-automation-software` | Distribution |
| `vos-distribution-workflow-landing.html` | distribution workflow software | `/distribution-workflow-software` | Distribution |

> Pillar page (`index.html`) groups cards by cluster and links to every feature page. Add a card to it whenever a new page ships.

> Dropped on purpose: **stock control software** (batch 3). It duplicates `/inventory-control-software` ("stock" is the UK/AU word for inventory). Don't build it without re-reading the separation contract below.

### Cluster separation contract
Seven inventory pages, five order pages, and two supplier pages compete for overlapping intent. Each page answers exactly one question and must not drift into a neighbour's:

| Page | Audience | Its one question |
|---|---|---|
| inventory tracking | distributor | "What is on hand right now, as orders come in?" |
| inventory planning | distributor | "How much should I stock for next week's customer orders?" (no forecasting engine) |
| inventory replenishment | distributor | "It's running low. How do I restock before a customer's order comes up short?" (VOS never creates POs) |
| inventory automation | distributor | "What inventory and order busywork can my team stop doing by hand?" |
| inventory visibility | distributor | "Can my reps, my warehouse and my customers all see the same stock?" |
| inventory control | distributor | "Where are shorts, substitutions and order errors costing me margin?" |
| restaurant stock management | operator | hub: the ordering side of restaurant stock (the operator still checks shelves) |
| order entry | operator | "How do I place the order?" |
| order taking | distributor | "How do my customers get orders to me without the phone?" |
| order fulfillment | distributor | "How do orders reach my pick line clean, complete and on time?" (not a WMS) |
| order tracking | distributor | "Where does every customer order stand, without a call to ask?" (no shipment tracking) |
| distribution resource planning | distributor | "What order data does my distribution planning run on?" (VOS is not a DRP system, the page says so) |
| catalog management | distributor | "How do I keep each account's catalog and order guide current?" |
| restaurant purchasing | operator | "How do I buy from my suppliers in one place?" |
| vendor management | distributor | "How do I become the vendor my restaurant accounts find easiest to buy from?" (not a VMS) |
| restaurant checklist | operator | "How does ordering run the same way on every shift?" (ordering only) |
| b2b portal | distributor | "Can I give accounts self-service ordering without building a portal?" (no storefront, cart or payment) |
| wholesale ordering | distributor | "How does a wholesale order arrive itemized and priced per account?" |
| distributor sales | distributor | "What do my reps stop writing up by hand so they can sell?" (not a CRM) |
| dsd sales | distributor | "How do DSD accounts order ahead so the truck carries the right product?" (not route accounting) |
| supplier management | operator | "What did I order from each supplier, and what did they confirm?" (not an SRM) |
| distributor analytics | distributor | "Where does the clean order data behind my reports come from?" (no dashboards; a reframe) |
| inventory forecasting | distributor | "Where does the order history my forecast is built on come from?" (**VOS runs no demand model**; a reframe) |
| wholesale operations | distributor | "Where does VOS sit in the stack that runs my business?" (not an ERP) |
| distribution automation | distributor | "Which manual steps on the order path can go away?" (order path only, never stock) |
| distribution workflow | distributor | "What sequence does an order follow, and who touches it?" (no workflow builder) |

### Off-fit keyword rule (3 tiers)
Some target keywords belong to a different buyer than VOS serves (ecommerce, warehouse, retail, manufacturing, ERP). Sort every secondary keyword into:
- **Tier A, on fit** — heading + body, full product claim.
- **Tier B, adjacent** — one heading or sentence that reframes the term into what VOS actually does.
- **Tier C, wrong industry** — exactly one disambiguating FAQ: answer the query honestly and say what VOS is not. Ranks for the term, sets correct expectation, makes zero false claims. Never write a Tier C term up as a real capability.

## Page structure (VOS template — apply to every new VOS page)
1. Navbar — white sticky bar, purple logo, nav links, CTA button
2. Hero — 2-col grid (text left, image right), gradient bg `#4A1FA8 → #1354CC`. H1 max 6–8 words, primary keyword in H1, **no more than 4 lines at 1440px**. Lead: 2–3 sentences, about 50 words max; on distributor pages it must say customers order by voice in the VOS app. Trust bullets below CTAs are OK on VOS; keep the three items short enough to sit on **one line** at desktop.
3. Logo bar — customer logos placeholder row
4. Stats strip — cyan bg (`--color-accent`), 3 quantified outcomes. No label or h2 above the grid on VOS. Use verified figures, not words ("Every", "One", "Zero" read as filler): `20-30 Min` (saved per order vs phone), `24/7`, `24-48 Hrs` (most distributors live), `Same Day` (most customers' first order). Format numbers exactly like that.
5. Problem section — eyebrow label + h2, then 3 pain-point cards (`.problem-card`)
6. Feature deep-dive — alternating `.feature-row` / `.feature-row.reverse` with image + bullet list. Each row can have a `.feature-link` inline link.
7. Supporting features — 3-col card grid (`.cards-grid` + `.feature-card`) with icon + h3 + description. Eyebrow is "Also Built In" (not "Everything Included": pricing is quote-based, so never imply every feature comes in every package). Cards must add capabilities the feature rows don't already cover.
8. Mid-page CTA — light bg strip, h2 + description + CTA button. Links to `voiceordersolutions.com/contact-us`. A demo can't show the visitor's own prices or systems: write "see how", not "watch your".
9. How It Works — 3-step `.steps-grid` with cyan circle numbers
10. Testimonials — 2-col grid; one featured card (dark purple bg)
11. Integrations — shared partial `_build/_integrations.html` (inline on order entry and inventory tracking). Wording must read right for **both** audiences ("Orders go out in the formats distributors already use"). Badges: Email / PDF, Excel, Word / QuickBooks / EDI / API; "Web Admin", not "Web Browser".
12. Comparison table — `.comparison-table`, 3 columns (Feature / VoiceOrder / Competitors). Every VOS ✓ must be described on the page. Be fair to the other columns (phone, fax and email do take orders after hours; ERPs often have order guides): use "Varies" or a short text cell rather than a false ✗. Phrase rows so VOS's strengths get a ✓ ("Goes live without an IT project"), never a red ✗ for something good.
13. FAQ — accordion, 7+ questions. Primary keyword in at least one question naturally. Tier C disambiguation FAQs live here.
14. Related pages — `.related-strip`, 3 cluster-sibling cards + a link back to `/`
15. Final CTA — gradient bg, h2 + email form + trust line. Links to `voiceordersolutions.com/contact-us`.

**CTA labels by audience.** Distributor pages: "Book a Free Demo →" (hero, mid, final). Operator pages: hero "Get Set Up With VOS →", mid "Book a Free Demo →", final "Ask About Getting Started →" (a restaurant's real next step is its distributor, not a software demo). No "Join distributors who…" lines: they imply social proof we can't back.
16. Footer — 4-col grid: brand, Features, More From VOS (cross-cluster links), Company. `#1a0f47` bg

### Required in `<head>` on every page
- Self-referencing `<link rel="canonical">`
- Open Graph (`og:title`, `og:description`, `og:url`, `og:site_name`, `og:type`) + `twitter:card`
- JSON-LD: `FAQPage` (must match the accordion exactly), `BreadcrumbList`, `SoftwareApplication`
- Meta title ≤ 62 chars, meta description 120–160 chars

### Internal linking
Each page links out to 3 cluster siblings via the Related strip, 4–5 more via the footer's "More From VOS" column, and 2–4 inline via `.feature-link` in the feature rows. At most one `.feature-link` per page points at `contact-us`; the rest point at sibling pages.

## Copy rules
- 8th-grade reading level: short sentences, no jargon, no fluff, no empty lines ("No workarounds", "Everything you need")
- No em-dashes (—) anywhere in visible copy. Use: comma, colon, period, or brackets
- En-dashes (–) are acceptable in code comments only. Ranges use a hyphen: `20-30`, `24-48`
- Trade language: a distributor reads "closeout" as clearance stock (say "after close"); "phoning it in" means doing a lazy job (say "ordering by phone")
- Keyword sentences must read naturally. Keep the exact secondary phrase, but rephrase around it rather than dropping it into a sentence as a block
- After every new page build, output the meta title and meta description for client review

## Claim rules (learned in the Sep 2026 review; `knowledge-base/vos-product-facts.md` CURRENT STATE is the source)
- **Setup always carries "most":** most distributors are live in 24 to 48 hours; most customers place a first order the same day. Never "1 day", never a flat "Live within 48 hours".
- **"Every order" only for orders placed in VOS.** Phone and voicemail orders don't get numbers, timestamps or stock movement.
- **No-retyping claims** apply to calls and voicemails, or to EDI, API and QuickBooks. Emailed PDF, Excel or Word files may still be keyed in by the distributor.
- **Voice:** never "nothing to mishear". The safeguard is the customer reviewing each line before sending. Don't write "hands-free" (the app has Push to Speak); the client's own "your phone does the recording" is fine.
- **Inventory:** "real-time visibility tied to order activity", "catalog updates as stock changes", "fewer stockout surprises" (not "fewer stockouts"). VOS doesn't count stock or buy it, and is not the stock system of record: say it runs alongside the current inventory system, and that the demo shows how stock levels connect.
- **Unconfirmed, don't assert:** customers seeing live availability while ordering; customer web ordering (order entry page only, kept modest); catalog sync over the API; order statuses beyond confirmed; one restaurant ordering from several distributors in one app (purchasing page, always scoped to "suppliers on VOS"); a separate account per location; customers viewing their own order history; whether a restaurant pays anything (operator pages send cost questions to the distributor).
- **Never:** prices, ROI numbers, named integrations, forecasting, purchase orders to the distributor's own suppliers, WMS functions, route or shipment tracking.

**Lessons from the Oct 2026 batch 4 build** (10 pages, 8 editorial passes):
- **A fourth cluster exists:** `distribution` ("Distribution and Sales") in `gen-site.js` GROUPS.
- **`template.js` and `claims.js` hold a hardcoded `OPERATOR` set.** Add every new operator page to
  both or it is checked as a distributor page. `supplier-management-software` is the 5th operator page.
- **Check the knowledge base for the page's central mechanic before building the page around it.**
  Batch 4 built the wholesale ordering page on pack sizes and units, which appear nowhere in the
  KB; the only shipped precedent infers pack from the SKU. Four pages had to be pulled back. See
  Q14-Q21 in the KB.
- **A keyword with an `&`** (`distributor reporting & analytics`) must be written as a **literal `&`**,
  not `&amp;`: `qa.js` counts keywords on raw markup and does not decode entities.
- **Acronyms in keywords are lowercase in Airtable** (`b2b`, `dsd`, `srm`, `ai`). House style
  capitalizes them in copy; matching is case-insensitive, so capitalize freely.
- **Watch for British spellings and register.** A whole batch came out with `dialling`, `programme`,
  `organisations`, `licence`, `labelled`, `modelling`, `maths`, plus `tidy` and `nasty`. The 16
  existing pages are US-spelled throughout.
- **Near-duplicate secondaries blow the `qa.js` 2x cap.** `direct store delivery software` sits
  inside three longer variants, so one had to be dropped before the bare phrase fit.
- **The dedupe loop is the expensive part.** Writing 10 pages produced ~200 cross-page trigrams on
  3+ pages, cleared over several rounds. Phrasings where each 3-word window holds at most one
  non-stop word are invisible to the check: "a day or two for most", "with its own number and the
  time it was sent", "straight into your ERP over the API". Prefer them for the canonical facts.
- **Pass 8 is not optional.** The verification round on changed lines caught a batch that had
  aborted before writing (the forecasting page's claim fixes), two sentences my own fixes had left
  ungrammatical, and a comparison cell left over from a relabelled row.
- **Two sitewide pre-existing defects** surfaced: the navbar `Login` points at `/contact-us`, and the
  integrations block files VOS's own apps under "Also works with".
- **Use `apply.js` for copy edits and `phrasecheck.js` before writing them.** `apply.js` already
  matches across source line wraps and has `@removeCard`, `@removeRow`, `@removeFaq`, `@card`,
  `@row`, `@faq`. Batch 4 wasted effort on ad-hoc edit scripts instead, and one of them ate the
  cards-grid closing `</div>` on five pages (`structure.js` caught it). `phrasecheck.js` was added
  in this batch: it answers "would this sentence collide?" **before** the page is written, which is
  the only cheap way to do the dedupe on a batch this size.
- **The "Also Built In" section does not scale across a big batch.** There are roughly 14 verified
  product facts worth a card, so 6 cards x 10 pages (60 slots) forced heavy recycling: promos by
  push/text ended up a card on **8 of 10 pages**, no-hardware on 4, order-number on 4, stock-view
  on 4. Two independent buyer reviewers called the section filler on every page and said the pages
  read as one page. Fixed by capping each proposition at **2 pages across the batch** and dropping
  every batch-4 page to **3 cards** (`template.js` wants a multiple of 3, so 3 is valid).
  **When adding a page, check which facts its siblings already use as cards before writing six.**
- **Literal overlap was never the problem, and measuring it proves it.** Pairwise shared-trigram
  overlap put the two "same page" pairs at rank 50 and 27 of 325 pairs (median 2.30%), while the
  highest pair on the whole site is the long-shipped `order-taking` vs `order-fulfillment` at 3.90%.
  What a reader notices is repeated **propositions**, not repeated phrases; the trigram gates cannot
  see it. Compare feature-row H3s, card H4s and comparison-row labels side by side instead.

## Brand tokens

- `--color-primary: #2D1B6E` (deep purple)
- `--color-accent: #0BB5E0` (bright cyan-blue)
- `--color-accent-hover: #0998C0`
- `--color-light-bg: #f5f7fa`
- `--color-mid-bg: #eef0f4`
- `--color-dark-bg: #2D1B6E`
- Hero gradient: `linear-gradient(135deg, #4A1FA8 0%, #1354CC 100%)`
- Footer bg: `#1a0f47`
- CTA link: https://www.voiceordersolutions.com/contact-us

## VOS design system (own CSS class names — different from MAAT)

| Block | CSS class(es) | Notes |
|---|---|---|
| Navbar | `.navbar`, `.navbar-inner`, `.navbar-logo`, `.navbar-links`, `.navbar-cta` | White bg, sticky |
| Hero | `.hero`, `.hero-grid`, `.hero-ctas`, `.hero-trust` | 2-col grid, gradient bg |
| Logo bar | `.logo-bar`, `.logo-bar-inner`, `.logo-slot` | Placeholder slots |
| Stats strip | `.stats-strip`, `.stats-grid`, `.stat-number`, `.stat-label` | Cyan bg, no header above grid |
| Problem | `.problem-grid`, `.problem-card`, `.problem-icon` | Light bg section |
| Feature row | `.feature-row`, `.feature-row.reverse`, `.feature-bullets`, `.bullet-check`, `.feature-link` | Alternating layout |
| Feature cards | `.cards-grid`, `.feature-card`, `.feature-card-icon` | 3-col supporting features |
| Steps | `.steps-grid`, `.step-card`, `.step-number` | Numbered cyan circles |
| Testimonials | `.testimonials-grid`, `.testimonial-card`, `.testimonial-card.featured` | 2-col, one featured |
| Integrations | `.integrations-logos`, `.integration-badge`, `.integration-logo-placeholder` | Badge row |
| Comparison | `.comparison-table`, `.check-yes`, `.check-no` | Full-width table |
| FAQ | `.faq-list`, `.faq-item`, `.faq-question`, `.faq-answer`, `.faq-icon` | Accordion |
| Final CTA | `.final-cta`, `.final-cta-form`, `.final-cta-trust` | Gradient bg, email form |
| Footer | `.footer`, `.footer-grid`, `.footer-brand-name`, `.footer-col` | 4-col, dark bg |

## Product knowledge base
Verified product facts live in `knowledge-base/vos-product-facts.md`. Always check it before writing copy. Its **CURRENT STATE** section (verified against the live site 2026-09-15) overrides everything older in the file, and ends with the open questions to confirm with the client. Re-read the live homepage before a new batch: positioning moved once already.

## Build pipeline (`_build/`)
Pages are assembled by a small Node script rather than hand-copied, because the 375-line CSS block and five partials are identical on all 16 pages. `_build/` is excluded from deploy via `.vercelignore`; the root HTML files stay standalone and hand-editable. Edit `_build/pages/<slug>.js`, never the root HTML.

```
cd _build
node build.js          # rebuild all pages (or: node build.js <slug>)
node gen-site.js       # regenerate vercel.json, index.html cards, sitemap.xml, robots.txt
node gen-csv.js        # export metas, H1s, keywords to vos-page-metadata.csv
node qa.js             # QA gate: 0 failures AND 0 warnings before pushing
node kwaudit.js        # keyword placement: 2 headings, 2 body, FAQ question + a different answer, meta; 0 issues
node template.js       # 16-section template conformance; 0 fails
node claims.js         # claim-rule scan: no ✗ lines; read the ? lines in context
node structure.js      # tag balance + one h1 per page
node trigram.js        # 3-word repetition: 0 within a page; `--cross 3` must list nothing (fixed facts allow-listed)
node repeat.js         # 5-word phrases and sentences shared between pages
python layout.py       # headless Chrome at 1440px and 390px: overflow, H1 > 4 lines, wrapping trust line
node outline.js all <dir>   # clean page copy for reviewers (no author comments)
node apply.js <fixes.js> --dry   # apply copy fixes (text, @card, @row, @faq ops); each must match exactly once
node where.js <slug>        # sentences behind each within-page trigram repeat
node phrasecheck.js <slug> "candidate copy"   # BEFORE writing: would this wording break --cross 3?
```

Competitor research digests for every primary keyword (Sep 2026 review) live in `_build/research/digests/`.

`_build/registry.js` is the source of truth for every page. See `_build/README.md` for how to add a page.

## Webflow port (`_webflow/`)
The client's live site is Webflow, and the batch-4 pages were ported there as **drafts** on
2026-10-09 (site `69bc131a5fdaa09a10456d46`). Generated artifacts live in `_webflow/`; the root HTML
stays the source of truth and the port is one-way (repo to Webflow).

```
python extract-content.py     # root HTML -> content/<slug>.json (hero, stats, rows, cards, cmp, faq)
python gen-ops.py             # content + map.json -> ops/<slug>.json (text, embed, links, delete)
python gen-schema.py          # -> schema/<slug>.json, the JSON-LD graph for the native schema field
python batches.py <slug> text|embed|rest [size]   # prints ready-to-send MCP action arrays
```

**Webflow page duplication preserves element UUIDs.** Duplicate every new page from one donor
landing page and a single element-id map (`_webflow/map.json`) then works on all of them, so there
is no per-page element discovery. Donor: `restaurant-checklist-software`, picked because it
minimises comparison-table cell-type conversions (16 across 10 pages, vs ~87-123 for other donors).
Keep the author's original row order; it preserves the argument and costs fewer conversions.

**Four API rules worth not rediscovering:**
- `set_text` fails on a plain `Block`. Target its `String` child (Block id + 1 in the last hex
  group). The three eyebrows and the comparison text cells break that rule and are stored
  explicitly in `map.json`.
- Component prop values take the key **`string_value`**.
- `set_settings` wants `static_text: {value: "..."}`; `set_link` wants flat
  `linkType: "page"` + `link: "<pageId>"`.
- Designer style names use a space for combos: `"uui-text-size-medium 21"`.
- About 47 actions per MCP call is safe.

**Schema goes in the native page field, not page head code** (duplication does not copy head code
anyway). `bulk_update_pages_schema_markup` takes `jsonLdSchema` as a real JSON object, so no string
escaping, and it echoes back what it stored. An unchanged `lastUpdated` means the content was
already identical, which is a free way to tell whether a page needed the write.

**FAQ accordions cannot be added.** Webflow IX2 binds the accordion interaction per element via
`data-w-id`, so an inserted item renders dead. The donor carries 8 slots, so a 9-FAQ page has two
related FAQs **merged** instead; record every such decision in `_webflow/overrides.json`.

**Map every slot, then prove it.** The first port wrote the feature-row H3s, bodies, bullets and
the comparison *column heads*, but not the features section eyebrow, the four row eyebrows, or the
comparison H2 and lead. Those were extracted and silently never written, so the **donor's** copy sat
on all ten pages: ten pages telling a distributor "As restaurant checklist software... for
temperature logs and staff to-do lists". Two independent buyer reviewers called it the single most
damaging thing in the set. The detector is cheap and general, so run it after any port:

> for each ported page, list every string on the Webflow page that appears in the **donor's** repo
> page but **not** in that page's own repo source. Shared chrome appears in both and does not flag.
> Expect zero. Do not put a length floor on it; an 11-character eyebrow hid two of the eight.

The comparison H2 renders as **two lines split by a `<br>`, held as two sibling String nodes**: write
each half separately or the break collapses. `map.json` carries both ids.

**Review the ported page, not the source.** The leftover copy was invisible to every gate and to any
reviewer reading `_build/pages/*.js`, because the repo was correct. Generate reviewer outlines from
the live Webflow tree. Two corollaries, both seen here: a reviewer handed a faithful extract of a
defective page will usually blame the extract ("the outlines are contaminated"), so say in the brief
that the extract is authoritative; and **check what window a checker measured in** -- one
fact-checker read `ops/` and `map.json` *after* the generators were patched, saw the fix, and
reported the live pages clean. Direct measurement of the live pages beat its inference.

**A `✗` reference does not survive the port.** Three comparison leads said "the ✗ marks below say
where it stops". Webflow renders "no" as a grey dash SVG, so the sentence pointed at nothing. Reworded
to "the table below" in the repo so both renderings stay true.

**A comparison cell's STYLE carries its kind, so converting one is two operations.**
`uui-icon-1x1-xsmall 12` is a 24px 1:1 box and `uui-text-size-medium 21` is the text style. The
first port swapped a cell's *contents* from icon to text but left the icon style on it, so on
2026-10-09 **89 cells across all ten pages** rendered as one word per line, overflowing into the row
below. Every icon/text conversion needs `set_settings` (or `set_text`) **and** `set_style`.
`gen-ops.py` now emits a `styles[]` list for exactly this, and `map.json` holds both style names.
Combo classes are one string with a space, the way `styleNames` reports them.

**Run `python cellcheck.py <tree-dir> [slug ...]` after any port.** It compares each cell's style
against what the cell holds, which is the thing a text diff cannot see.

**A string-level verification is not a rendering verification.** The port reported 1004/1004 text ops
and 160/160 schema nodes green while the tables were visibly broken; Eugene found it from a
screenshot. Strings being right says nothing about the elements around them. Before calling a port
done, look at the rendered page (Designer preview, or ask for a screenshot) at least once per
template section. `layout.py` does this for the Vercel copy; there is no equivalent for Webflow
while the pages are unpublished, so the eyeball is the check.

**Check what window your own checker measured in, including a new one.** `cellcheck.py` first ran
against a directory of captures where most predated the fix, and cheerfully reported 79 defects that
no longer existed. It now takes the newest capture per page and warns when any capture is stale.

**The Webflow template is narrower than the repo's 16-section one:** no related strip and no footer
"More From VOS" column, so 4 inline sibling links rather than 8. That matches the 16 pages already
live, so it is the expected shape, not a gap to fill.

## Lessons from the Oct 2026 editorial check (4 passes, after the Webflow port)
Run in this order, cheapest-catch-first. Passes 1 and 2 are mechanical and found the worst defect.

1. **Port fidelity.** Diff the live Webflow text against `ops/*.json`. See the Webflow port section
   for the unported-slot detector; it is the one defect class the gates cannot see.
2. **Schema vs accordion.** The `FAQPage` JSON-LD must match the rendered FAQ exactly. Compare the
   `Question` nodes against the page's own accordion text, not against the source.
3. **Fresh eyes on the ported copy** (buyer x2, fact-checker x2, proposition-sameness x1).
4. **Verification round** on everything pass 3 changed.

- **A claim recorded as fixed can still be live.** The KB's Q15 says four pages' substitution claims
  were "All removed"; one was still on `inventory-forecasting`, and a second instance sat in its
  FAQ 2. Grep the KB's own Q14-Q21 wording against the built pages instead of trusting the log.
- **Fixing claims breaks the keyword gates.** Removing an overclaim removed the only instance of the
  secondary `wholesale ordering platform`, and rewriting a price FAQ dropped the
  `wholesale operations software` primary from 6 to 5 **and** broke its FAQ split. Always re-run
  `qa.js` + `kwaudit.js` after a claim pass; restore the phrase in a sentence that stays true.
- **The dedupe loop recurs on every edit round**, exactly as the Sep 2026 note says: 30 fixes created
  4 cross-page trigrams and 4 in-page repeats, cleared over three rounds (4 -> 4 -> 1 -> 0). Run
  `phrasecheck.js` on each replacement *before* writing it; it rejected three candidates here
  ("sits in front", "a phone call", "looks like when" were each already on 2 pages).
- **Measure a register or typography "finding" before fixing it.** One curly apostrophe looked like a
  port bug; counting the site showed 397 straight to 1 curly, so the repo was wrong and Webflow was
  right. Same for British register: sweep all 26 pages, and do not "fix" correct US usage
  ("holiday weeks", "task queue" are fine; "rota", "rostered", "Cover is easy" are not).
- **Verify each reviewer finding against its own evidence.** One recommendation to cut a card was
  contradicted by the reviewer's own quote of that card, which did carry a distinct consequence.
- **Proposition sameness is a separate, larger job than a claim pass.** Measured on this batch: the
  analytics/forecasting pair shares a proposition in all four feature rows in the same slot order,
  the stock row is the default row 4 on four pages, and the card cap holds 9 of 11 times. Two of
  those are separation-contract breaches (automation carrying a stock card, b2b-portal row 4 selling
  distributor-sales) and should be fixed as defects. The rest is ~15 rows/cards across 8 pages and
  needs its own gate cycle, so scope it with Eugene rather than folding it into an editorial pass.

## Workflow
1. Eugene produces content brief or keyword targets
2. Claude checks the live homepage and the knowledge base, picks the page's audience (distributor or operator) and its one question, and pulls the SERP for the primary keyword (Ahrefs + Jina keys live in `E:\Claude projects\Writing\references\api-keys.local.md`; load them inside a script, never print them)
3. Claude builds the full page using the VOS 16-section template, following the claim rules above
4. Gates, all clean: `node qa.js` (0 failures, 0 warnings), `node kwaudit.js`, `node template.js`, `node claims.js` (no ✗), `node structure.js`, `node trigram.js` + `node trigram.js --cross 3`, `node repeat.js <new slugs>`, `python layout.py <new slugs>`. Sitewide chrome (nav, buttons, eyebrows, integrations, footer, the Tony Luna quote, screenshot placeholders) is expected to repeat.
5. Before calling a batch strong, get a fresh-eyes read: read-only reviewers with no prior context score each page as the buyer and as a fact-checker. Verify every finding before applying it (don't delete required keywords or the client's own live wording). After applying, run a second read-only round on the changed lines only (diff the outline against HEAD, mark changed lines): the first fixes introduce their own dangling "it"s, idioms and overlong leads.
6. Push to `master` → Vercel auto-deploys; confirm the live URL shows the new copy
7. After every new page build, output the meta title and meta description for client review

**When many agents rewrite pages in parallel,** they land on the same new wording. Always finish with a central `trigram.js --cross 3` and a small sequential sweep. Expect several rounds: in Sep 2026, 16 reviewers' fixes put 98 trigrams on 3+ pages, and each reword round created a few new collisions (98 → 27 → 7 → 0, then again after the verification round). Use `trigram.js --plan` for the per-page list and `where.js` for context. `repeat.js` still matters: it catches filler-word repeats ("in the app at any hour") that the trigram check skips by design.

**Lessons from the Sep 2026 4-pass check** (duplication, keywords, structure, product relevance):
- A green gate is only as honest as what it counts. Keywords count in page content only: never in the hero eyebrow, related strip, footer or nav. Hero eyebrows are audience labels ("For Food Distributors" / "For Restaurant Operators"), not keyword carriers.
- The meta description must not open by repeating the title; lead with the buyer's outcome and keep the primary keyword.
- Setup time: at most three mentions per page, each worded differently but always true ("24-48 Hrs" stat, "24-48 hours", "24 to 48 hours", or "a day or two for most"). Never "two days or less", "under 48 hrs" or "within two days".
- Inventory pages say where stock numbers come from only as "from the system you run today; the demo shows how it connects". The catalog updates as stock changes; never write that the restaurant's guide shows what the distributor has in stock.
- Comparison cells stay fair: phone orders can be read back ("If read back"), voicemail does take orders after hours.
- "Also Built In" cards must not repeat a feature row, the stats or the integrations block; 6 good cards beat 9 with repeats.
- Tap ordering is not a verified fact: describe ordering by voice.
- More trade-language traps: "phone their orders in" / "phoning it through" (too close to "phoning it in"), "marking stock down" (a distributor hears a price cut), "catch you out" (UK idiom).
- Stat labels must read as a phrase after the number, and "Same Day" labels say it is the start ("first order for most kitchens", "is when most kitchens start ordering"), or they read as same-day delivery ordering.
- Hero leads creep past ~50 words when fixes add scope words; recount after every round.