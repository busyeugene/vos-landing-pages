# Five new sections for the VOS feature landing pages (research, 2026-10-15)

Eugene's ask: find 5 sections to add to the landing pages, based on what already ranks (DataForSEO +
SE Ranking), then define which **existing blocks** each one is built from. Research and definitions
only; nothing built. Scope: the 26 feature pages (the 12 compare pages run a different template and
just had 11 review passes).

## Method and cost
| Step | Tool | Output |
|---|---|---|
| Live Google SERP, top 10, US desktop, for the 26 primaries, full payload (organic, PAA, AI Overview text + citations, related) | DataForSEO `serp/google/organic/live/advanced` | `data/serp_full.json`, `data/serp_readable.txt` |
| Heading outline + section text of every ranking URL (213 unique, 194 parsed; the misses are Reddit threads and one video) | DataForSEO On-Page `content_parsing/live` (+ `instant_pages` fallback) | `data/pages.json` |
| Page type (vendor 69, listicle 77, guide 35, directory 17, forum 15) and outlines by type | `scripts/outlines.py` | `data/page_types.tsv`, `data/outlines_*.txt` |
| Section themes counted per page | `scripts/themes.py` | `data/themes_report.txt` |
| Question keywords on 26 head terms; long-tail variants of the 26 primaries + their volumes | SE Ranking `expand --mode questions / longtail`, `metrics` | `data/kw_q/`, `data/kw_lt/` |

Cost: DataForSEO $33.719 -> $33.512 (**$0.21**). SE Ranking 150,191 -> 146,871 units (**3,320 units**).
Volumes below are **SE Ranking US**, not Ahrefs.

Rerun: `python -I scripts/<name>.py data` from this folder (`pull_serp`, `read_serp`, `pull_pages`,
`outlines`, `themes`). Each caches, so a rerun only fetches what is missing.

## What the SERPs say

**The AI Overview is the page that matters, and its shape is fixed.** It appears on 26 of 26 SERPs.
Every one opens with a one-sentence definition of the category, and 25 of 26 then carry a
"Key features to look for / Core capabilities" block. The rest is a list of vendors.

**YouTube is the most-cited source in those Overviews**: cited on **20 of 26** SERPs (20 citations,
vs Capterra 6, Reddit 5, Unleashed 5). A video carousel shows on 5 SERPs.

**VOS is cited on 3 SERPs, and only through a blog post**: `/blog/wholesalers-erp-software`, on
wholesale ordering, DSD sales and distribution workflow. No VOS landing page is cited. That post's
outline is the brief for this whole exercise: *What Is X? / Do You Need an ERP, or a Better Set of
Tools? / What Features to Look For / [embedded Product Pricing Calculator] / How to Choose /
implementation phases / FAQ*. Our landing pages carry none of those as sections.

**Section themes on the 194 parsed ranking pages** (a page counts once per theme; headings matched
by pattern, then read by hand in `themes_report.txt`):

| Theme | Pages | Vendor | Listicle | Guide | On our pages today? |
|---|---|---|---|---|---|
| "What is X?" definition | 83 | 17 | 45 | 20 | Only inside the FAQ accordion, on ~6 pages |
| Who it's for / built for / industries / use cases | 56 | 23 | 23 | 9 | "Are we too small?" FAQ on 10 pages |
| How to choose / what to look for | 52 | 3 | 38 | 11 | No |
| Calculator / template / checklist / spreadsheet | 29 | 10 | 12 | 7 | No (23 calculators live at /free-tools) |
| See it in action / watch / tour / video | 20 | 10 | 9 | 1 | No video anywhere on the VOS site |
| Customer results / case studies / reviews | 42 | 26 | 10 | 4 | One testimonial, operator voice |
| Pricing / plans / cost | 83 | 23 | 40 | 17 | FAQ only (quote-based) |
| Integrations, FAQ, benefits, features | 70-90 each | | | | Yes, every page |

**People Also Ask** sits on 26 of 26. Beyond "best X" (25 SERPs), it asks two kinds of question
our pages never answer in a visible section:
- **Definitions:** "What does OMS stand for?", "What is DSD in sales?", "What is distribution
  automation?", "What is meant by inventory planning?", "What does supplier management do?",
  "What are the four types of inventory control?"
- **The DIY alternative:** Excel / Microsoft Office / QuickBooks on 9 SERPs (15 questions; "Can I
  use Excel for inventory management?" alone on 5), "free app / free software" on 8 SERPs.

**SE Ranking demand for the definitional form** (US/mo): what is inventory control 590, what is
vendor management 590, what is supplier relationship management 590, what is order fulfillment 320,
what is supplier management 260, what is wholesale distribution 260, what is order entry 210, what is
inventory control software 170, how to keep track of inventory 110, what is a vendor management
system 110, what is inventory planning 70, what is distribution requirements planning 70, how to
track inventory in excel 50 / in quickbooks 50, how to forecast inventory 50. Question mode returns
almost nothing on the 3-word primaries themselves; the long-tail variants carry no measurable volume
but show the modifier pattern: "[keyword] for [industry or size]" ("order entry software food
industry", "distributor order entry software", "... for small business"), "free", "quickbooks".

## The five sections

Current Webflow body order (from a live tree): `landing-hero` > stats `uui-section_layout46` >
problem `sound-familiar-gray` > features `uui-section_layout49` > cards `tools-section` (mid-CTA
`uui-cta05_component` nested inside) > steps `setup-process` > `testimonial-landing` >
integrations `delivery-formats` > comparison `uui-section_pricing11` > FAQ `uui-section_faq01` >
`Main CTA`. Body sections are page-level elements, not components.

Proposed order, new sections in **bold**:
hero > stats > problem > **1 What is X** > features > **2 See it work** > **3 Who it's for**
(replaces "Also Built In", mid-CTA stays) > steps > testimonial > integrations > **4 What to look
for** > comparison > **5 Run the numbers** > FAQ > CTA. Net **+4** sections, because 3 takes the
"Also Built In" slot that the batch-4 reviewers called filler and the compare pages already dropped.

### 1. "What is [keyword]?" — definition, and where VOS fits
- **Why:** 83 of 194 ranking pages; every AI Overview opens with it; PAA and the SE Ranking
  volumes above. **The catch:** Google's definitions describe the whole category (forecasting,
  picking and packing, POS links, auto-reordering), which is more than VOS does. So the section must
  split "what the category covers" from "where VOS fits". It is the separation contract and the
  Tier B rule, made visible.
- **Content:** eyebrow "The Basics". H2 is the PAA phrasing with the primary keyword ("What is order
  taking software?"). Lead: a neutral 40-60 word definition with no VOS in it (the extractable
  answer). Three cards: **What it usually covers** / **Where VOS fits** / **What VOS is not** (the
  natural home for Tier B reframes and the "not a WMS / not a DRP system" lines now buried in FAQs).
- **Block:** the problem section (`sound-familiar-gray`): badge + `uui-heading-medium` H2 + lead +
  `uui-layout15_item-list 3col` cards. Use the left-aligned card combo from `tools-section`
  (`uui-layout15_item + card + left`) on a white background so it does not read as a second pain
  section. Repo: section header + `.cards-grid` / `.feature-card`.
- **Side effect:** frees the FAQ slot that asks "What is X, and is VOS one?". That matters because
  the Webflow FAQ cannot grow past its 8 IX2-bound accordions.

### 2. See it work — a video walkthrough
- **Why:** the strongest single signal in the data. YouTube is cited in the AI Overview on 20 of 26
  SERPs; 20 ranking pages carry a see-it/watch/tour section (Devourin "Watch How Devourin Works",
  Orderwerks "See It In Action", Unleashed, Virto, Ship My Orders' 9-step screenshot tour). VOS
  embeds no video anywhere (the homepage and /how-it-works only link a Vimeo account).
- **Content:** 60-120 seconds. An account presses Push to Speak, says the order, reads the lines
  back, sends; the order reaches the distributor with its number and timestamp, in their format.
  Bullets are chapters with timestamps. Publish on YouTube with the keyword in the title and a link
  back, so the video itself can be the Overview's citation.
- **Block:** one feature row (`uui-layout49_component`: image wrapper, badge, `uui-heading-xxsmall`
  H3, body, `uui-layout08_item-list` bullets), with the `uui-layout49_image` swapped for an
  `HtmlEmbed` holding a responsive YouTube iframe inside the same `uui-layout49_image-wrapper`, so
  the shadow and radius hold. Section heading from the features header grid (`landing-1`). Repo:
  `.feature-row` with an iframe where the image sits.
- **Needs an asset:** a screen recording from the client. One master cut works everywhere; three
  cluster cuts (ordering / inventory / operator) are better.
- **Claim rules:** show the review step and the Push to Speak button (never "hands-free"); sample
  catalog and prices only.

### 3. Who it's for — by role, and by distributor type
- **Why:** 56 ranking pages (23 vendor pages: Esker "Who is this order management solution for?",
  OIS's role tiles "DSD Rep/Van Driver, GM/Sales Manager, Owner", ToolsGroup "Built for Inventory
  and Replenishment Teams", Orderwerks "Distributors Across Industries", Orderwise's sector grid). The
  AI Overview segments the category by buyer on 6 SERPs ("Key Types of Order Taking Software",
  "Core Models of DSD Software", "Solutions by Use Case"). Our pages answer "are we too small?"
  on 10 pages, all inside the accordion.
- **Content:** the lead names the verified segments: small to mid-size independent food distributors
  and DSD distributors (food service software platforms via the API, on the pages where that fits).
  Three cards, one per role, each saying **what changes for that person** from verified facts: the
  owner/GM (one admin platform for accounts, guides and order history), the order desk and reps
  (orders arrive confirmed and in writing; reps get time back to sell), the warehouse and drivers
  (clean orders to pick; DSD drivers load the right product). Operator pages: owner-chef, kitchen
  manager, whoever orders on the closing shift, plus "set up through your distributor".
- **Block:** `tools-section` exactly as it stands: header + 3 `uui-layout15_item + card + left`
  cards, with the nested mid-CTA (`uui-cta05_component`) left underneath. Only the card copy and
  icons change. Repo: `.cards-grid` / `.feature-card`.
- **Risk:** this is the section most likely to come out identical on 26 pages. The cards must be
  written from each page's one question (on inventory tracking the rep card is about not promising a
  case you do not have; on DSD it is the driver). Run `grid.js`-style side-by-side checks on the card
  H4s across all 26 before porting.

### 4. What to look for — the buyer's checklist
- **Why:** 25 of 26 AI Overviews carry a "features to look for / core capabilities" block, the
  most consistent structure in the whole data set. 52 ranking pages have a how-to-choose or
  what-to-look-for heading (38 of them listicles). VOS's own cited blog post has both.
- **Content:** H2 "What to look for in order taking software". 3 to 5 numbered criteria written as
  the buyer's questions, each with why it matters and VOS's answer in one line, from verified facts
  only: How long until the first account orders? (most distributors live in 24-48 hours, most
  customers order the same day) / Who checks the order before it is sent? (the customer reviews each
  line) / Does it arrive in a format your system reads? (email PDF/Excel/Word, EDI, API, QuickBooks)
  / Does anything have to come out? (additive) / What happens after hours? (24/7). Pick the criteria
  per page from its one question.
- **Block:** `setup-process` (left header `uui-layout32_content-left` + right numbered `div-group`
  list with `uui-layout12_number`). It holds 3 natively; for 5, duplicate the middle `div-group`
  twice (static elements with no IX2 binding, unlike the FAQ). Repo: `.steps-grid` / `.step-card`.
- **Placement:** directly above the comparison table, which becomes its scorecard (order the table
  rows to follow the checklist). The checklist explains the criteria; the table scores them; neither
  restates the other. How It Works also uses `setup-process`, so keep the two apart (testimonial and
  integrations sit between them in the proposed order).

### 5. Run the numbers — one free calculator, embedded
- **Why:** 29 ranking pages carry a calculator/template/checklist heading (one restaurant stock
  guide has a "Real Restaurant ROI Calculator"). PAA keeps offering the reader the DIY route
  (Excel/QuickBooks on 9 SERPs, "free app" on 8); a free tool meets that intent instead of losing
  the visitor to it. VOS's own cited blog post embeds the Product Pricing Calculator. The 23
  calculators already exist as self-contained `HtmlEmbed` fragments that write into Webflow
  byte-for-byte with no size limit (proven on all 23 /free-tools pages).
- **Content:** a header tying the number to the page's question ("Work out when to reorder before a
  customer's order comes up short"), the embedded calculator, a link to the full calculator page and
  to /free-tools, and one sentence that this is a free tool, not a VOS feature. Keep the calculator's
  own keyword out of the H2 so the landing page does not compete with the calculator page.
- **Block:** `tools-section` header (badge + H2 + lead) + one `HtmlEmbed` carrying the same fragment
  as `/free-tools/<slug>`. Light fallback, for pages with no strong match: 2-3 cards linking
  calculator pages. Repo: section header + the fragment inline.
- **Claim rules:** the visitor's own math, never a VOS ROI figure. On inventory pages, say VOS runs no
  forecast and sets no reorder points; the calculator is separate.

**Calculator per page** (embed = strong match; links = weak match, use link cards or skip):

| Page | Embed | Also link |
|---|---|---|
| order-taking | product-pricing | wholesale-markup |
| order-fulfillment | warehouse-space | delivery-cost |
| order-tracking | (links only) | accounts-receivable-turnover |
| distribution-resource-planning | warehouse-size | safety-stock, reorder-point |
| catalog-management | price-change | product-pricing |
| vendor-management | early-payment-discount | price-change |
| inventory-tracking | inventory-turnover | inventory-carrying-cost |
| inventory-planning | safety-stock | inventory-turnover |
| inventory-replenishment | reorder-point | safety-stock |
| inventory-automation | (links only) | reorder-point |
| inventory-visibility | (links only) | inventory-turnover |
| inventory-control | inventory-carrying-cost | purchase-price-variance |
| b2b-portal | (links only) | product-pricing |
| wholesale-ordering | wholesale-markup | unit-price |
| distributor-sales | wholesale-to-retail-markup | product-markup |
| dsd-sales | delivery-cost | wholesale-to-retail-markup |
| distributor-analytics | accounts-receivable-turnover | inventory-turnover |
| inventory-forecasting | (links only) | safety-stock, reorder-point |
| wholesale-operations | landed-cost | marginal-cost |
| distribution-automation | (links only) | delivery-cost |
| distribution-workflow | (links only) | warehouse-space |
| order-entry (operator) | unit-price | food-markup |
| restaurant-purchasing (operator) | procurement-savings | unit-price |
| restaurant-stock-management (operator) | par-level | food-markup |
| restaurant-checklist (operator) | (links only) | par-level |
| supplier-management (operator) | purchase-price-variance | procurement-savings |

The warehouse calculators were flagged off-fit in the lead-magnet project (they point at a WMS
buyer); on fulfillment and DRP they sit beside the pick line and the planning run, which is the
adjacent use, but treat them as the weakest embeds.

## Rejected, and why
- **Pricing / plans** (83 pages, mostly listicles): VOS is quote-based and its pricing basis is an
  open client question (KB Q19). A section would assert what the client has not confirmed.
- **Customer results / case studies** (42 pages, 26 of them vendor pages): the strongest vendor-page
  pattern we cannot fill. One real testimonial, in the operator's voice; no verified distributor
  metrics; ROI numbers banned. **Ask the client for one distributor case: it would be section 6.**
- **Implementation / onboarding / support** (62 pages): How It Works already covers setup, and the
  KB holds no support or training facts. Enrich the existing steps instead.
- **Integrations, FAQ, features, comparison:** already on every page.

## Before building any of this
- **Repo first, then port**, as with every other change: the gates live in `_build/`.
  `template.js` encodes the 16-section order and will need the new sections; `kwaudit.js`/`qa.js`
  counts shift because sections 1 and 4 each add a heading with the primary keyword (rebalance, the
  target is 6).
- **The dedupe loop will be large.** Four of the five sections carry propositions that repeat by
  nature (roles, criteria, setup facts). Budget for `trigram.js --cross 3` rounds and a side-by-side
  read of the new H2s, card H4s and checklist items across all 26.
- **Webflow:** sections 1, 3 and 4 are copy plus icon changes on blocks that already exist on every
  page (3 reuses `tools-section` in place). Sections 2 and 5 need one `HtmlEmbed` each, the method
  the lead-magnet pages already proved. Adding sections 1 and 4 to the 26 existing pages means
  building elements on each page (they are not components); `data_element_builder` and
  `move_element` both work headlessly.
