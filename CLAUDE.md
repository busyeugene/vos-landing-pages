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
| `vos-pepper-alternative-landing.html` | pepper alternative | `/pepper-alternative` | Compared |
| `vos-choco-alternative-landing.html` | choco alternative | `/choco-alternative` | Compared |
| `vos-burnt-ai-alternative-landing.html` | burnt ai alternative | `/burnt-ai-alternative` | Compared |
| `vos-grubmarket-ai-alternative-landing.html` | grubmarket ai alternative | `/grubmarket-ai-alternative` | Compared |
| `vos-cut-dry-alternative-landing.html` | cut+dry alternative | `/cut-dry-alternative` | Compared |
| `vos-bluecart-alternative-landing.html` | bluecart alternative | `/bluecart-alternative` | Compared |
| `vos-necs-entree-alternative-landing.html` | necs entree alternative | `/necs-entree-alternative` | Compared |
| `vos-pepperi-alternative-landing.html` | pepperi alternative | `/pepperi-alternative` | Compared |
| `vos-orderease-alternative-landing.html` | orderease alternative | `/orderease-alternative` | Compared |
| `vos-wizcommerce-alternative-landing.html` | wizcommerce alternative | `/wizcommerce-alternative` | Compared |

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
node template.js       # template conformance, both variants (16-section and `compare`); 0 fails
node claims.js         # claim-rule scan: no ✗ lines; read the ? lines in context
node structure.js      # tag balance + one h1 per page
node trigram.js        # 3-word repetition: 0 within a page; `--cross 3` must list nothing (fixed facts allow-listed)
node repeat.js         # 5-word phrases and sentences shared between pages
python layout.py       # headless Chrome at 1440px and 390px: overflow, H1 > 4 lines, wrapping trust line
node promote.js        # compare pages: is each slot selling VOS or the competitor? prints, never fails
node outline.js all <dir>   # clean page copy for reviewers (no author comments)
node apply.js <fixes.js> --dry   # apply copy fixes (text, @card, @row, @faq ops); each must match exactly once
node where.js <slug>        # sentences behind each within-page trigram repeat
node phrasecheck.js <slug> "candidate copy"   # BEFORE writing: would this wording break --cross 3?
```

Three modules the gates REQUIRE, and which have no CLI of their own:
```
_build/allowlist.js        # cross-page trigram allow-list, shared by trigram.js and phrasecheck.js
_build/compare-sections.js # which parts of a compare page are VOS copy vs the argument
_build/names.js            # whole-word competitor matching, no regex (a name can contain "+")
```
Read the comment at the top of each before touching a gate: each exists because of a specific
bug, and the comment names it.

Competitor research digests for every primary keyword (Sep 2026 review) live in
`_build/research/digests/`. **Per-competitor digests for the comparison pages, dated and with the
page's angle, live in `_build/research/competitors/`.**

`_build/registry.js` is the source of truth for every page. See `_build/README.md` for how to add a page.

## Competitor comparison pages (`compare` cluster, opened 2026-10-10)

### ▶ RESUME HERE
**ALL 12 BUILT, GATED, AND REVIEWED IN EIGHT PASSES. The repo copy is final and Webflow-ready.**
Current as of 2026-10-10. **The current job is the Webflow ports as drafts** (11 pages to port, plus
a re-port of Pepper, whose draft is now a full rewrite behind the repo). After that: the hub page and
a `/solutions` card per page. See "Passes 7 and 8" below for what changed, and "Porting a comparison
page" in the Webflow section for how.

⚠ **The Pepper Webflow draft is stale.** Passes 7 and 8 changed its H1, hero lead, comparison lead,
five comparison rows, both CTAs and the cost FAQ. Re-port it rather than patching it.

⚠ **One claim needs the client before these go live:** 10 of 12 pages had come to state that VOS is
"quoted on how many accounts you want opened". The KB's own **Q19 lists the pricing basis as an open
question** and batch 4 had this class of claim removed once already. It is now stripped from all 10
(each worded differently, so do not "restore consistency"). If Eugene confirms per-account pricing,
the stronger wording can go back.

| # | Slug | Competitor | Angle (never reuse another page's) | State |
|---|---|---|---|---|
| 1 | `/pepper-alternative` | Pepper | Rollout length: their published 35-90 days vs 24-48 hours | repo + **Webflow draft** |
| 2 | `/choco-alternative` | Choco | They sell growth (storefront, CRM, bigger baskets); we sell a clean order | repo |
| 3 | `/burnt-ai-alternative` | Burnt | Agents across the back office; who stays in the loop; on-site onboarding | repo |
| 4 | `/grubmarket-ai-alternative` | GrubMarket | Both are voice. Whose hands the microphone is in | repo |
| 5 | `/cut-dry-alternative` | Cut+Dry | Three-sided network: who else is in the room when your customer orders | repo |
| 6 | `/bluecart-alternative` | BlueCart | A marketplace that grades your prices; whose shelf is it | repo |
| 7 | `/necs-entree-alternative` | Entree | Argues against its own keyword: keep the ERP, change the order | repo |
| 8 | `/pepperi-alternative` | Pepperi | Its centre of gravity is **the visit**: routes, van sales, store audits, merchandisers. VOS is the reorder nobody attends | repo |
| 9 | `/orderease-alternative` | OrderEase | They orchestrate every order channel; VOS removes the one that makes the most work | repo |
| 10 | `/wizcommerce-alternative` | WizCommerce | Whether an **interpretation step exists at all**: read back from an artifact, or authored as lines | repo |
| 11 | `/rekki-alternative` | REKKI | Engages their published **error rate**: a rate exists because a robot is inferring the order. VOS has no reading step | repo |
| 12 | `/fresho-alternative` | Fresho | **Fresh-food depth versus one step**: add, not adopt. Concedes their whole operations suite | repo |

⚠ **REKKI and Fresho had BOTH MOVED by the time they were written, and the plan's premise for
them was wrong.** The plan called them "supplier ordering apps, the same SHAPE as VOS, not
platforms", from the 2026-07 baseline. Researched live 2026-10-10:
- **REKKI now sells "Office robots built for wholesale distributors"** (OrderAI, InboxAI, MenuAI,
  a marketplace). The buyer is the distributor and the chef app is one nav item. The reserved
  "whose app is it" angle did not apply at all.
- **Fresho is now an "Order & Operations Management System"**: ordering, inventory, margins,
  delivery, invoicing, payments, picking, reporting, plus an AI order-entry product. The opposite
  of a narrow app.
This is the second time the 2026-07 baseline has been materially stale. **Re-pull every competitor
live before writing, including ones you think you know.**

### What is left on this cluster
1. ~~Re-point all twelve related strips at each other~~ **done 2026-10-10.** Grouped by argument
   affinity (platforms and growth / AI and order intake / systems of record); every page has 2 to
   4 inbound sibling links and the footers still carry the feature-page and cross-audience links.
2. ~~The verification passes~~ **done 2026-10-10, all eight.** Competitor accuracy, are-we-selling-
   VOS, repetition, Airtable keyword coverage, two on promotion plus a closing repetition sweep, then
   Eugene's passes 7 and 8 (VOS-description accuracy, and over-conceding). See "The six review
   passes" and "Passes 7 and 8" below. **The repo copy is now final and Webflow-ready.**
3. **NEXT: the Webflow ports as drafts** (11 to port + Pepper to re-port), then the hub page (one card
   per comparison, plus the table and CTAs reused), then a `/solutions` card for each.

### Open for Eugene, carried forward
- **Per-account pricing is unconfirmed and now stripped from 10 pages.** KB Q19 lists the pricing
  basis as an open client question. Confirm it and the stronger wording can return; until then the
  pages say only that pricing is quoted with nothing published.
- **One H1 still sells by absence on purpose:** `wizcommerce` "A WizCommerce Alternative That Needs
  No Reading", because the page's whole axis is whether an interpretation step exists. `promote.js`
  flags it; it is a deliberate keep, like the NECS Entree H1 below.
- **Two meta titles drift from the Airtable plan**, left as shipped because "Food Distributors" is
  closer to the ICP than the plan's wording. One line to change either way: `orderease` plan
  "OrderEase Alternative for Distributors in 2026" vs shipped "...for Food Distributors..."; and
  `pepperi` plan "Pepperi Alternative for B2B Distributors in 2026" vs shipped the same way.
- **8 of 12 competitors are outside the client-approved set** (KB section 7 approves only Pepper,
  Choco, Cut+Dry, Burnt). Treated as approved via the Airtable plan on Eugene's instruction
  2026-10-10, still unconfirmed with the client.
- **The NECS Entree H1, "You May Not Need A NECS Entree Alternative."** The buyer reviewer called it
  an instruction to stop reading, in the largest type on the page. It is also the page's whole angle
  and the reason the page is honest. Eugene's call, deliberately not changed.
- **What the inventory half actually gives the buyer.** Every table says "Ordering plus stock
  visibility", then the feature row says VOS does not hold, count or buy stock and the numbers come
  from your own system. The buyer reviewer could not say what the visibility gives them. This is a
  KB gap, not a copy gap: the KB itself lists "where VOS stock levels come from" as an open client
  question. Do not invent a benefit to close it.
- **Push and text promos are on 1 of 12 pages.** The KB verifies "Push notifications and text
  messages for promos and confirmations" but not WHO triggers them, so "you can send the promo"
  is unconfirmed. Safe form: "promos and confirmations reach accounts by notification and text".
  Worth using on the marketplace pages (cut-dry, bluecart) once the client confirms who sends.
- **The only real testimonial is in the wrong buyer's voice.** Tony Luna is an owner-chef and these
  are distributor pages, so the one piece of genuine social proof is a restaurant operator talking
  about their own week. The two quotes that do speak to a distributor are `[Customer Name]`
  placeholders. Ask the client for one distributor-side quote; it would lift all twelve.
- **The final-CTA trust line is four pieces of friction removal and no benefit**, identical on all
  twelve by design ("No IT project to run / Nothing to rip out / Sends orders in your format / Ask
  us for a quote"). It is allow-listed sitewide chrome, so it was not changed in a review pass, but
  one of the four could carry a benefit instead. Eugene's call.
- **grubmarket-ai's angle rests on an unverified premise.** The digest and an older CLAUDE.md note
  both say GrubMarket's own site does not support describing them as a distributor or marketplace.
  That came from reading grubmarket.ai only; grubmarket.com describes a wholesale network, an ERP
  suite and Enterprise AI. Nothing on the VOS page states a falsehood, but re-pull that digest
  against grubmarket.com before editing the page again.

⚠ **Pre-existing within-page trigram debt on the first six compare pages**, which the last six do
not carry: necs-entree 17, cut-dry 17, bluecart 11, grubmarket 4, and a handful on pepper and
choco. Pages 7 to 12 all ship at 0. `node where.js <slug>` lists each one with its sentences. Worth
a pass before the Webflow port, since the port copies whatever the repo says.

### The batch
Twelve `<competitor> alternative` pages from the **October** Airtable batch (base
`appyUSl7qCyguvABD`, table `Content plan`, product `rec10EFwKwaOcCpK7`, `Asset type = Landing page`,
`Status = Planned`). Each row carries the primary keyword, four secondaries, a meta title, a
5-point outline and the competitor's homepage. **November holds 8 more** (apicbase, craftable,
marginedge, marketman, orderly, restaurant365, wisk, xtrachef), so the plan is not 12 in total.

**Decisions Eugene made 2026-10-10, applying to all twelve:**
- **Slug = the primary keyword**, like every other page on the site, not SimplyDepo's `/x-vs-y`.
  "VoiceOrder Solutions vs <competitor>" is the comparison H2 and the footer anchor, so one page
  serves both searches. SimplyDepo did the same: their H1 is "Repsly Alternative", only their URL
  says vs. **`cut+dry` resolved:** a `+` cannot go in a URL and the client's own live blog post is
  at `/blog/cut-dry-alternatives`, so the slug is `/cut-dry-alternative`.
- **Repo first, then port.** The gates are the reason.
- **The comparison table carries two value columns only**, VOS and the competitor, no third option.
- **Stats sit immediately after the hero**, then the table.

### The `compare` block order (registry `kind: 'compare'`)
`navbar, hero, logos, stats, comparison, problem, features, steps, testimonials, integrations,
cards, midcta, faq, related, finalcta, footer`

No new CSS and no new blocks: every section is an existing one, repointed.
- **`problem`** (3 cards) is "Why teams look for an alternative to X".
- **`cards`** (3 cards) is "When VOS and X work together", and its eyebrow is NOT "Also Built In"
  on a compare page. There is no "Also Built In" section; the coexistence section replaced it.
- The comparison table is 3 columns x 9 rows.

`template.js` knows the variant and adds three checks beyond the feature-page ones: the page must
name its `competitor` (a registry field) in **both** the problem and the coexistence sections, and
it must not claim distributors **"switch from"** the competitor. Both negative-tested.

### Writing one of these honestly
- **Research the competitor live and date it.** Digests live in
  `_build/research/competitors/<slug>.md`. The entries in
  `E:\Claude projects\Writing\Clients\VOS\_system\competitors.md` are from 2026-07, past their own
  60-day window: a baseline, not a source. Several competitors had changed materially.
- **Say on the page where the facts came from and when.** Every page carries a sourcing FAQ
  ("Where do the X details on this page come from?") naming the site and the date. Competitors
  running their own comparison pages cite nothing; this is the differentiator if a buyer reads both.
- **Never repeat a competitor's unaudited marketing numbers.** Describe the model, quote only what
  is checkable.
- **Pricing is parity.** All seven researched so far are quote-based, as is VOS. Never fault them
  for quote-only pricing in terms VOS would fail.
- **Give the competitor real wins, and put the biggest one first.** Cut+Dry takes five rows,
  Entree takes the first four, BlueCart's first row is "finds you restaurants you do not supply".
  A table where the other column loses everything reads as marketing and invites a fact-check.
- **Check what the competitor actually does before building an argument on an absence.** The NECS
  Entree page nearly shipped claiming they had no customer ordering; they have three such modules.
  The GrubMarket page nearly shipped on "your software vendor is also a distributor", which their
  own site does not support. Both digests record the check so nobody re-derives the wrong thing.
- **"Compare", never "switch from".** There is no evidence of distributors leaving any named
  competitor, and `template.js` fails the page if it claims otherwise. SimplyDepo's own page says
  "Why teams compare Repsly alternatives" for the same reason.
- **The coexistence section must stay inside what is verifiable.** VOS being additive is published.
  Never imply a partnership, an integration or joint support with the competitor.

### The gate architecture for this cluster (three new files, read these before editing a gate)
- **`_build/allowlist.js`** — the cross-page trigram allow-list, required by BOTH `trigram.js` and
  `phrasecheck.js` so the two cannot drift. Holds the original fixed facts plus the canonical VOS
  product statements and the sitewide final-CTA trust line. Keep it tight: anything in here stops
  being measured.
- **`_build/compare-sections.js`** — the structural rule that makes this batch affordable. On a
  compare page the VOS-side sections (features, setup, stats, testimonials, final CTA) are the same
  product described twelve times, so a trigram found ONLY there is excluded from the CROSS-page
  count. FAQ items and comparison rows are classified one by one: **an item that never names the
  competitor counts as VOS copy**. The rule is self-enforcing, because wanting a sentence measured
  means naming who it is about. **`.problem-card` and `.feature-card` are deliberately NOT exempt**,
  because they carry the argument and twelve pages making the same one is the proposition sameness
  the October reviewers caught by hand. Nothing is ever exempt WITHIN a page.
- **`_build/names.js`** — whole-word name matching with no regex and no backslashes. Exists because
  **a competitor name can contain regex metacharacters**: `Cut+Dry` compiled into a RegExp makes the
  `+` mean "one or more t", so the template and claims checks silently matched "Cuttttdry" and
  missed the real name. Unit-tested: matches "on Cut+Dry today" and "with BlueCart.", rejects
  "Cuttttdry", does not match "Pepper" inside "Pepperi".
- **`claims.js` exempts the page's own `competitor`** from the named-integrations ban, and only that
  rule. The ban list includes Choco, BlueCart, Entree, Restaurant365 and MarketMan, so without this
  a correct Choco page raised 28 bans. Negative-tested: the Choco page may say "Choco" and still
  bans "NetSuite".
- **`trigram.js` and `phrasecheck.js` also strip `.feature-link` labels**, as they already did
  button labels. A link label is navigation, not prose.

### The per-page build recipe
1. Research live, write `_build/research/competitors/<slug>.md` with the date and the angle.
2. Add the `registry.js` entry (`kind: 'compare'`, `competitor`, `cluster: 'compare'`) and the
   `keywords.js` entry.
3. Write `_build/pages/<slug>.js`. Copy the VOS-side sections from a sibling verbatim: they are
   meant to be identical and the gate now knows it.
4. `node build.js <slug> && node gen-site.js`
5. Gates: `structure.js`, `template.js`, `kwaudit.js`, `qa.js`, `claims.js`, then the dedupe loop
   (`trigram.js --cross 3`, `where.js <slug>`), then `python layout.py <slug>`.
6. Dedupe: map each collision to its sentence, batch candidate rewordings through
   `phrasecheck.js <slug> "..." "..."` (about 10 per call, roughly a third come back colliding),
   apply, re-measure. **Steady state is ~16-30 rewordings per page.**
7. Read the outline before calling it done. Rewording breaks grammar and no gate sees it.

### The six review passes (run 2026-10-10 on all twelve; replaces the older three-pass plan)
Four read-only, no-context reviewers (three fact-checkers split 3/2/7 pages, one buyer) plus two
new mechanical tools. **Every finding was re-verified by hand before anything changed**, and
several reviewer claims were right about the fact but wrong about the fix.

**`_build/grid.js`** prints every template slot across the twelve side by side (H1, hero lead and
trust, stat labels, comparison eyebrow/H2/lead/row labels/VOS cells, problem H2+lead+cards, feature
H2/eyebrows/H3s, steps, coexistence H2+lead+cards, mid-CTA, FAQ H2 and questions, final H2),
masking the competitor name so real sameness shows. `--dupes` lists only values on 2+ pages. It
prints, it never fails: the judgement is human. **This is the tool the proposition-sameness note
asked for and never had.**

**`_build/balance.js`** counts who takes each comparison row per page: VOS tick, competitor tick,
both, negative cells, text/text.

What they found, and the lessons:
- **The compare-sections exemption is how four pages went word-for-word identical with every gate
  green.** burnt-ai, grubmarket-ai, cut-dry and bluecart shared an IDENTICAL stats strip, identical
  feature-row H3s for rows 3 and 4, and identical step headings. All VOS-side slots, all exempt
  from the cross-page trigram count by design. **Run `grid.js --dupes` whenever you add a compare
  page**; the trigram gate cannot see this and never will.
- **Conceding generously has an opposite failure, and we hit it.** On five pages the VOS column had
  ZERO ticks against the competitor's 5 or 6, so the table read as a wall of "Not offered". A buyer
  closes the tab before row 6. Fix it by giving VOS a tick for what it genuinely does, NOT by
  deleting concessions. CLAUDE.md already had the rule ("phrase rows so VOS's strengths get a
  tick"); nothing enforced it. `balance.js` now shows it.
- **Every final CTA closed on a promise of limitations** ("a plain account of where VOS stops", all
  twelve). The honest-about-a-specific-limit material is what the buyer trusted; honest-about-our-
  overall-worth in the last line before the button is what lost them. Keep the limits in the FAQ.
- **Honest about a specific limit = persuasive. Honest about your overall worth = fatal.** The
  reviewer's own formulation, and the test to apply to any self-deprecating line.
- **Do not write a marketing choice up as a product deficiency.** Three tables had a row conceding
  that the competitor publishes a price and VOS does not, which contradicted the same page's cost
  FAQ arguing quote-only is parity. That concession belongs in the FAQ.
- **FETCH THE PRODUCT SUB-PAGES, not just the homepage and pricing.** This caused all five HIGH
  findings. Per competitor, read every product/module page, the industry pages, pricing, and
  onboarding/implementation. The reviewers found: Choco's free restaurant ordering app, Cut+Dry's
  AI Order Desk transcribing voicemails and calls, Cut+Dry's general "Go Live in Under 90 Days",
  Pepperi's barcode scanning / quick order / CSV import, WizCommerce's published price tiers,
  REKKI's "without any need for ... human intervention", and Fresho's two published timelines.
- **A capability you treat as absent is the recurring failure of this whole cluster.** Six of twelve
  pages did it at least once. Before writing any sentence of the form "they cannot" or "nobody
  does", search their site for that capability by name.
- **Check whether the page contradicts its own table.** The grubmarket page's problem lead said none
  of their products move the order off your desk, two sections below a table row conceding exactly
  that. Internal contradiction is the cheapest finding a buyer gets for free.
- **Scope a claim to the product it is true of.** Several errors were true of one module and false
  of the vendor: "nothing changes for them" is OrderPilot only, "your team checks it" is
  WizCommerce's AI path only, "you do the checking" is Pepper's Order Agent only.
- **A competitor's unaudited number must not be repeated even as paraphrase.** "tens of thousands
  are on it" is Choco's 30K homepage stat; "tens of thousands of restaurants" is BlueCart's 48,000+
  headline (their own blog says 119,000). Attribute it or drop the magnitude.
- **Fixing one within-page repeat exposes the next.** rekki went 0 to 7 to 3 to 0 over three rounds.
  Budget for rounds and re-measure after every single one.
- **Not every measured repeat is a defect.** The residual counts on cut-dry and necs-entree are
  table labels matching the prose that explains them, plus each page's central concept recurring.
  That is consistency. Judge the idea, not the trigram.
**Passes 5 and 6 (promotion), and what they changed:**
- **The pages explained the product and did not sell it.** Measured, not opined: **ZERO of twelve
  claimed "Available 24/7 / Never Miss An Order"**, a verified client homepage fact, while FIVE of
  the twelve competitors publish a 24/7 claim of their own. Every Voice Ordering bullet said WHERE
  the order is spoken and never WHEN. Now 12/12. **Run `node vosfacts.js` on any new page**: it
  shows which verified VOS proof points the page actually uses.
- **Two verified VOS facts were unused or used only as a LOSING comparison cell:** interruption
  recovery (which no competitor in the set publishes) and "Free Your Sales Reps to Sell". A
  capability spent inside a row VOS loses is worse than not mentioning it.
- **Do not hedge the client's own flat figure.** Every page wrote "Roughly"/"Around" 20 to 30
  minutes while its own stats strip stated it flat. The hedge was strictly weaker than the source.
- **`_build/interleave.js`** reorders comparison rows so VOS never shows a long vertical run of
  negative cells, changing no cell content. The first VOS tick had been at row 6 of 9 on six pages.
  "Put the competitor's biggest win first" had been applied as "put ALL of them first".
- **Draw the row label, and you have chosen who wins it.** Pepper and Choco read as comparisons
  because their rows describe the ordering job ("A number and a timestamp on the order"). The later
  pages read as confessions because their rows describe the competitor's product surface, where VOS
  can only answer "Not offered". When a table looks lopsided, change the labels, not the facts.
- **A competitor win belongs in the table when it bears on the order, and in the coexistence
  section when it does not.** Still open: cut-dry, pepperi, wizcommerce and fresho each carry two
  or three rows (payments, store audits, AI catalog photography, delivery runs) that are nothing to
  do with how an order arrives. Relocating them is a real improvement nobody has done yet.
- ⚠ **FOUR of pass 5's "unsourced concession" findings were WRONG, all for one reason: it measured
  against the DIGESTS, which predated the pass-1 re-check.** Cut+Dry does publish "Go Live in Under
  90 Days", OrderEase does publish "go live in days, not months", REKKI does publish "checks every
  detail twice" and a "full refund guarantee", and Choco does have a free restaurant ordering app.
  The pages were right and the digests were stale. **When a reviewer says a page claim is
  unsourced, check the live site before believing it**, and update the digest either way: all four
  now carry a dated re-check section. Third occurrence of "check what window your checker measured
  in".
- **Audit your own measurement tool too.** `vosfacts.js` reported 0/12 on a fact that was by then
  on seven pages, because its regexes predated the new wording. A tool that under-reports is worse
  than no tool. Update the pattern whenever you add a phrasing.
- **Two defects my own fixes introduced, both invisible to every gate:** a broken sentence on the
  REKKI page ("lands on the people who were also something your team has to do") and a doubled
  sentence on Choco, where a replacement duplicated the clause that already followed it. Read the
  outline after every edit round, and prefer replacing a WHOLE sentence over its tail.

### Passes 7 and 8 (Eugene's ask, 2026-10-10): "did we describe VOS right" and "are we overselling them"
Eight no-context reviewers (four fact-checkers against the KB, four distributor-buyers with the
tables) plus one new tool. **Every finding was re-verified by hand before anything changed**, and
several reviewer claims were right about the fact and wrong about the fix.

**`_build/promote.js`** is the answer to "are we promoting VOS, not competitors". It scores only the
HIGH-ATTENTION slots, because a fact buried in bullet 5 of 5 is not promoted: H1, the hero lead's
first sentence, the trust line, the stats, the comparison lead, the problem cards, the table, both
CTAs. It prints, it never fails. **Mean tilt went 5.4/11 to 0.9/11**; five pages now score 0. Run it
whenever a compare page is added or its copy changes.

What the two passes found, and the lessons:
- ⚠ **`interleave.js` silently made six pages lie about their own tables.** The leads said "the first
  five rows all go to them" and "all six belong to them", written against the pre-interleave row
  order; after the reorder, rows 2 and 4 were VOS wins on six pages, and OrderEase's lead pointed at
  a pricing row that does not exist. **After any transform over structured content, re-verify the
  prose that describes it**, and prefer prose that does not encode the arrangement ("the rows below
  mark where each one answers" survives a reorder). Scripting the check found all six in one pass.
- ⚠ **A claim removed once can come back in new wording.** 10 of 12 pages asserted a pricing BASIS
  ("quoted on how many accounts you want opened") that KB Q19 lists as an open client question and
  that batch 4 had already had stripped. All four fact-checkers caught it independently. **Grep the
  KB's open questions against the built pages; never trust the log.**
- **`vosfacts.js` OVER-reported, having previously under-reported.** It claimed the 24/7 fact on
  12/12 while the literal claim was on 0/12, because its regex matched the loose bullet "at any
  hour" and scored it as the promoted claim. A tool that misreports in either direction is worse
  than no tool. 24/7 now holds a stats slot on five pages, replacing a duplicate setup-speed stat.
- **Fixing a lopsided table can overshoot into the opposite defect.** Relabelling cut-dry and
  bluecart left the competitor with **zero** ticks, which reads as marketing and invites a
  fact-check. Restore their genuine wins; the goal is that VOS does not lose, not that they do.
- **Three competitors legitimately keep more ticks** (pepperi 2/4, wizcommerce 2/3, fresho 3/4).
  They are broader. Forcing a tie there would be the dishonest fix.
- **The mid-CTA was the pass-6 defect's hiding place.** Pass 6 removed "a plain account of where VOS
  stops" from every FINAL CTA and 8 of 12 MID CTAs still closed on a promise of limitations. When
  you fix a pattern, grep for it in the sibling slot.
- **Two pages promised the demo would run on the visitor's own guide, prices or account.** A
  20-minute demo cannot: the guide upload is onboarding. "See how", never "watch your".
- **My own edit rounds added 43 within-page repeats**, cleared over three measured rounds to 32,
  below the 35 I started with. Budget for the rounds and re-measure after each one.
- **Check a register "finding" before fixing it.** "realistically" on the wizcommerce page tripped a
  British-spelling sweep and is correct US English, exactly as this file already warns.

- **Airtable is reachable without the MCP.** A PAT sits in `E:\Claude projects\Link building
  OS\.env.local` as `AIRTABLE_API_KEY`. Read it inside a script, never print it. Base
  `appyUSl7qCyguvABD`, table `Content plan`; filter `Asset type = Landing page` because the
  September blog rows target the PLURAL keyword and are a different asset.
- **All 12 pages carry their Airtable primary and all four secondaries, verified against the live
  base, 0 missing.** Re-run that check after any claim or copy pass, because fixing claims is what
  breaks keywords.

### Lessons from pages 11 and 12 (REKKI, Fresho, 2026-10-10)
- **Re-pull every competitor live before writing, even one you think you know.** Both of these had
  changed shape so completely that the planned angle was unusable. Second time the 2026-07
  baseline has been materially stale.
- **FOUR of the twelve competitors touch voice:** WizCommerce (voice notes), Fresho (voicemails),
  GrubMarket (a voice assistant) and REKKI (messages of every kind). "They type, we speak" is the
  single most tempting and most wrong sentence in this cluster. Grep the competitor's feature list
  for "voice" and "voicemail" before drafting a word.
- **THREE of the twelve publish prices**, so "pricing is parity" is the exception, not the rule:
  OrderEase (a monthly floor), REKKI (per customer, in GBP) and Fresho (a floor, a setup fee,
  worked examples, a calculator and per-region pages). Each of those pages gives the competitor
  the ✓ on that row. **Keep their figures off the page**: a published price goes stale and that is
  what a fact-checking buyer catches. Say they publish one, and let the sourcing FAQ carry the date.
- **Engaging a competitor's strongest published claim beats ignoring it.** REKKI advertises an
  accuracy rate; the page takes it seriously, concedes that publishing one is more than most
  vendors do, and makes the argument that a rate exists because something is being inferred. That
  required two guard FAQs: one refusing to claim a better percentage, one saying plainly that a
  VOS order can still be wrong. **Never let an argument like this drift into implying VOS is
  100% accurate**, and restate the phone/voicemail limit on the same page.
- **Do not repeat the competitor's number even as colour.** A problem card read "which is more
  than most vendors will do, and it is low" — that last clause endorses an unaudited figure as
  fact. Cut it.
- **Watch for accidental price implications in coexistence copy.** "Adding VOS costs you nothing
  elsewhere" reads as "VOS is free". Reworded to "Nothing else has to give way for it".
- **A competitor whose own promise is the inverse of ours is a gift, not a threat.** Fresho
  publishes "customers continue ordering the same way they always have"; VOS's whole value is that
  the habit moves. Written as a fork in the road the buyer should choose knowingly, which is more
  persuasive than claiming they are wrong.
- **Check a competitor's additive story before arguing scope.** Fresho's OrderPilot explicitly
  "works with your existing ERP", so Pepper's "a platform you move onto" does not transfer and the
  page says neither product is a rip-and-replace.
- **`template.js` fails a cross-audience related card.** `/order-entry-software` is an OPERATOR
  page, so it cannot sit in a distributor page's strip; `/order-taking-software` is its
  distributor counterpart.
- **Fixing one within-page repeat exposes the next.** Fresho went 2 → 8 → 2 → 0 over three rounds
  because each reword surfaced a pair the previous wording had masked. Budget for the rounds
  rather than one pass.

### Lessons from pages 8 to 10 (Pepperi, OrderEase, WizCommerce, 2026-10-10)
- **`trigram.js` had a latent crash, now fixed.** A trigram that is VOS-side on EVERY page it
  appears on is never added to `df` (compare-sections.js skips it), so `df.get(g)` returned
  undefined and `.length` threw. It only fires when a new compare page introduces VOS-side wording
  that exists nowhere else, which is why seven pages never hit it. All reads now go through
  `dfOf(g)`, where a missing entry means "measured on no pages", exactly what the exemption
  intends. If you add a gate that reads `df`, use `dfOf`.
- **"Pricing is parity" is NOT universal.** OrderEase publishes a starting price and says there is
  no free tier; VOS publishes nothing. So on that page pricing is a row OrderEase **wins**, and the
  page concedes it. Check each competitor's pricing page rather than assuming quote-only.
  **Keep the figure off the page**: a published price goes stale and a stale number is the one
  thing a fact-checking buyer catches. Say they publish a starting price, let the sourcing FAQ
  carry the date, and never pair it with anything implying a VOS price.
- **The "they type, we speak" argument is dead on arrival for some competitors.** WizCommerce's AI
  reads "emails, PDFs, spreadsheets, scans, **voice notes**, and handwritten documents". Third
  instance of the same class of near-miss after NECS Entree and GrubMarket. **Grep the
  competitor's own feature list for "voice" before building any page on it.** The honest axis there
  was whether an interpretation step exists at all, not the input method.
- **Check the competitor's industry pages before writing "not food native".** WizCommerce has a
  real Food & Beverage page (promotions, multi-warehouse, route-level stock, UOM pricing) and food
  customers. OrderEase lists food as 1 of 8 industries, which is breadth, not absence: write it as
  breadth or it is simply false.
- **A competitor's own anti-narrow-tool argument has to be answered, not dodged.** OrderEase's site
  says "OrderEase covers the whole order path, not one piece of it" over a grid where narrow tools
  lose. VOS **is** one piece, deliberately. The page meets it directly; pretending they never made
  the argument is what a buyer reading both pages would catch.
- **Writing all three pages before the dedupe loop was cheaper than one at a time.** Registering
  all three slugs up front breaks `trigram.js` until every file exists (it reads every registry
  page), but one central dedupe pass across the batch beat three sequential loops: 55 cross-page
  trigrams and 24 within-page repeats cleared in three rounds.
- **Rewriting the shared slots DIFFERENTLY per page fixes the trigrams and the proposition
  sameness in one pass.** The collisions clustered in exactly the slots copied from a sibling:
  comparison lead, problem H2 and lead, FAQ section H2, FAQ 1, the setup FAQ, the sourcing FAQ and
  coexistence card 3. Those are the same slots the October reviewers meant by "the pages read as
  one page", so treat a cluster of collisions there as an editorial signal, not a gate chore.
- **These three carry 0 within-page trigram repeats.** The shipped compare pages carry 17
  (necs-entree), 17 (cut-dry), 11 (bluecart) and 4 (grubmarket). That debt is still open and
  `where.js <slug>` lists it.
- **Read the outline, every time.** On top of the usual broken grammar, the dedupe rewrites
  introduced two dangling pronouns ("Three of those..." after the antecedent was reworded away),
  three comma splices, one incomplete sentence, a British idiom ("call round"), British register
  ("tidies") and two British spellings ("unrecognised"). No gate saw any of it.
- **Sweep British spellings WITHOUT a leading word-boundary anchor.** A pattern anchored to the
  start of a word misses "un**recognis**ed", and the prefixed forms are the ones that survive.
  Match the stem alone (`recognis`, `organis`, `realis`) and eyeball the hits, because
  `specialists` and `realistic` are correct US English. The sweep also turned up four
  pre-existing ones in this cluster: `licence` x2 (necs-entree), `labelled` (bluecart), `programme`
  (burnt-ai), all now fixed.
- **`template.js` accepts only `voice|speak|say|talk` plus "app" in a distributor hero lead.**
  "A buyer **dictates** the order in the app" fails. It does not require the literal "VOS app",
  so "into the app" is fine when the dedupe gate wants "the VOS app" gone.
- **`apply.js` `@row` rewrites EVERY cell**, so read the row first. Guessing the other two cells
  nearly overwrote BlueCart's "Pricing Insights grades value" with invented copy. For a one-word
  change use a plain text swap.

### Recurring gotchas, every one of which has bitten
- **kwaudit wants the primary in a FAQ ANSWER too**, not just a question: "2 headings, 2 body, in
  >=1 FAQ question AND in a DIFFERENT FAQ answer". Three pages needed a fix for exactly this.
- **A secondary must appear with the full brand**, e.g. "necs entree replacement", not "Entree
  replacement".
- **Fixing a keyword count by extending the hero lead breaks the ~50 word cap.** Put the extra
  instance in a section lead instead.
- **A shell heredoc collapses double backslashes before Python sees them**, so a pattern written as
  `\\b` arrives as a backspace. Write replacements with no backslashes at all, or they silently
  fail to match. This has caused three separate bugs now.
- **Page source wraps mid-sentence**, so exact-string replacement misses roughly a third of targets.
  Join the search words with `\s+` and it always hits.
- **`io.open(...).write()` without closing the handle can silently not land.** Use `with`, then read
  the file back and assert.
- **A failed assertion in a chained heredoc does not reliably stop the `&&` chain**, so stale gate
  output can read as success. Check the output, not the exit code.
- **Spell a competitor the way the registry does.** "entrée" with the accent is not masked by an
  exemption keyed on "Entree".
- **`<tfoot>` closed with `</tbody>`** slipped through authoring once; `structure.js` catches it.

### Open on this batch
- **8 of the 12 competitors are outside the client-approved set.** The VOS knowledge base §7
  approves only **Pepper, Choco, Cut+Dry, Burnt**. BlueCart, Fresho, GrubMarket AI, NECS Entree,
  OrderEase, Pepperi, REKKI and WizCommerce come only from the Airtable plan, which is being
  treated as approval. **Still unconfirmed with Eugene.**
- **Three competitors already have live blog posts targeting the plural** (`/blog/pepper-alternatives`,
  `/blog/choco-alternatives`, `/blog/cut-dry-alternatives`). Recommendation given, not yet actioned:
  keep both and cross-link them, keeping the landing page head-to-head rather than a listicle.
- **The Pepper Webflow draft is one schema push behind** its latest FAQ answers, and has never been
  looked at rendered. Both are one action each.

### The three verification passes (Eugene's ask, to run after all twelve)
1. **Competitor facts.** Every competitor claim must trace to a dated line in its digest, and each
   digest gets re-pulled live at review time. The mechanical half does not exist yet: a gate that
   extracts competitor-attributed sentences and fails any with no source line. The human half is a
   fact-checker per page with the competitor's site open and no prior context.
2. **VOS facts and the distributor tie.** `claims.js` at 0 bans, plus grepping the knowledge base's
   own wording against the built pages rather than trusting its log (a claim recorded as fixed was
   still live on two pages in October). Plus the distributor-ICP rule: "you" is the distributor,
   never a restaurant-side usage scene, never "hands-free", never "nothing to mishear".
3. **Logic, flow and repetition.** `trigram.js` and `repeat.js` cover phrasing. The third layer is
   the one no gate sees: a side-by-side grid of all twelve pages' feature-row H3s, card H4s,
   problem-card H4s and comparison row labels, read as a table. That is what caught batch 4's
   "the pages read as one page" while every gate was green.

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

### ▶ Compare-cluster port state (2026-10-10, afternoon)
**All 12 Webflow pages now exist as drafts and the content JSONs are generated.** What is done:
- **11 pages created** with `create_page` + `duplicateOf` the usual donor, so `map.json` applies
  unchanged. **Their ids are in `_webflow/pages.json` under `compare`.** All `draft: true`.
- **UUID preservation verified** on a fresh page, including the drifting `Strong` nodes that
  `map.json._drifts` warns are page-specific: they come across because every page is duplicated
  from the same donor. Probed `stats.labels[0]`, `faq.h2` and `stats.number_strongs[0]`, 3/3 match.
- **`openGraph.titleCopied` / `descriptionCopied` set true on all 11.** Duplication leaves them
  null, which would ship empty OG tags while the SEO fields look correct.
- **`_webflow/extract-compare.py` is new**: it projects a `compare` page onto the same content
  slots `extract-content.py` produces, so the 12 content JSONs are generated rather than
  hand-authored (Pepper's was hand-authored and drifted). Validated by regenerating Pepper and
  diffing against the reviewed hand-authored file: shapes matched exactly and every content delta
  was a pass 5-8 copy change. **Two bugs it was written around, both of which returned empty
  values silently: a nested icon/answer `<div>` means "lazily match to `</div></div>`" swallows
  the sibling cards (1 card instead of 3, and every FAQ answer blank) so slice on the next
  container opening instead; and the metas are not in `registry.js`, they come off the built head.**
- **The two donor constraints are decided and recorded** in `overrides.json` under
  `_compare_structural`: bullet index 2 (the handset fact, already in the hero trust line) is the
  one dropped from each 5-bullet feature row, keeping index 4 because it carries a verified fact
  pass 8 promoted; and FAQ 1 + FAQ 2 merge on every page, since both ask "is this an alternative /
  is it better" and the merged question must carry both keyword phrases.

**The copy push is proven and written up in `_webflow/PUSH-RUNBOOK.md`** (choco first, 2026-10-10:
100/100 text, 11/11 embed, 6/6 styles, 4 links, 4 deletes, 2 prop groups, all success). Four
generated batches per page via `batches.py <slug> text|embed|styles|rest`, then the hero and
final-CTA component props by hand. **50 actions per call is confirmed safe**, which is more than the
~31-47 recorded earlier.

**Three shapes that cost a round trip each, on top of the six already recorded:**
- `set_component_instance_prop_values` wraps on **`element_id`** and **`values`**.
  `component_instance_id` and `prop_values` are both rejected.
- `data_element_tool`, `data_element_settings_tool` and `data_component_props_tool` all take
  `session_id`, `siteId` and `pageId` at the **tool's top level**, not inside the action. The first
  call of a session issues the `session_id` in its error message.
- `data_pages_tool` takes `actions: [{label, <action_name>: {...}}]`. There is no bare `action` key.

**Two latent bugs in `batches.py`, both of which failed silently or would have:**
- it looked page ids up in `pages.json['pages']` only, so a compare slug printed **nothing** rather
  than failing. It now resolves across `pages` + `compare` and raises on an unknown slug.
- its `styles` mode emitted the key `styles`; the API wants **`style_names`**. That is the key the
  89-broken-cells defect of 2026-10-09 turns on, so it would have failed every cell conversion.

**ALL 12 PAGES NOW CARRY THEIR OWN COPY AND ARE VERIFIED** (2026-10-10 pm). 1196 text ops,
~150 embed operations, ~100 styles, 48 links + 48 labels, 44 deletes, 24 prop groups.
`_webflow/verify-compare.py` reads each page back and reports **12/12 pages at 100% text coverage
and 8/8 schema FAQ questions live.**

- **Pepper was further behind than its note said:** not one schema push, but passes 5 to 8. It still
  carried "The checking lands on your side" where pass 5 had scoped that limit to the Order Agent
  path only. Re-ported from the repo and verified; it is the only page with **0 donor leaks**,
  because Eugene's restructuring had already dropped its 4th column.
- **Pepper's 4 `remove_element` ops failed with "Element not found", correctly.** Those elements
  (the donor's spare cards and a comparison cell) had already been removed in that restructuring.
  Verified by listing the page's 655 element ids and confirming all four are absent: a failure on
  Pepper is not evidence of a bad shape, because its structure legitimately differs from the other 11.
- **The `hard` cell (a donor TEXT cell that must become an ICON cell) cannot be done with
  `set_settings`:** the cell is `Block > Block > String` and an SVG needs an `HtmlEmbed`. Use
  `data_element_builder` with `{build_label, parent_element_id, creation_position, element_schema:
  {type: "HtmlEmbed"}}`, then set its `code`, then `set_style` the icon class, then
  `remove_element` the old text Block. Done on necs-entree, pepperi and fresho; each page's leak
  count fell from 5 to 4, which is how the fix was confirmed.
- ⚠ **`get_all_elements` omits an HtmlEmbed's `code`**, so a tree read cannot confirm an icon
  landed. Confirm with `get_settings` + `type: "all_raw_settings"`. Fourth instance of "check what
  window your checker measured in".

**What is left:** drop the 4th comparison column on the 11 non-Pepper pages (the page-scoped
`is-2col` combo plus the cell removals) **which is what the 4 remaining donor leaks per page are**;
push the 12 schema files; and **look at a rendered page** (string-level green says nothing about
rendering, which is the 2026-10-09 lesson). Everything stays `draft: true` until then.

### Porting a comparison page (first done 2026-10-10, Pepper)
`/pepper-alternative` (page `6ac9efa5b080336cebb1456a`, **draft**) is the first compare page in
Webflow. Eugene's instruction was **existing blocks only, no design changes**, and the Webflow
template cannot hold the repo's `compare` order, so the Webflow copy is the standard 16-section
shape. Divergences and their reasons are in `_webflow/overrides.json` under `pepper-alternative`:
- **No `split` block and no `whatis` block.** The with/without split and the "what is Pepper"
  explainer are carried by the **problem section** (its lead states factually what Pepper is; its
  three cards carry the reasons to look elsewhere) and by FAQ 1.
- **One mid-CTA, and it has no button.** The Webflow mid-CTA block is a heading plus body only
  (verified on the live tree), so the repo's second CTA and the button label have nowhere to go.
- **The table is 4 columns x 9 rows**, not the repo's 3 x 11. Rebuilt as
  Feature / VoiceOrder Solutions / Pepper / Phone + Email, which keeps the manual baseline the
  other 26 pages show. Pepper keeps 4 check marks and 5 factual text cells and takes no false mark.
- **9 FAQs merge to 8**, same IX2 accordion limit as batch 4.

`content/<slug>.json` is **hand-authored** for these (extract-content.py reads the 16-section
shape and the repo compare page is not that shape). Lift the copy from the gated repo page, then
**diff it back**: on Pepper, 132 of 162 strings matched the repo page verbatim and the 30 deltas
were reviewed one by one. Do that diff, or claim drift goes unnoticed.

**Six API shapes that cost a round trip each** (all verified against the live API 2026-10-10;
`batches.py` now emits the right ones):
- `set_settings` is **one action carrying an `operations` array**, each entry
  `{element_id, settings}`. Not one action per element, and the key is `element_id`, not `id`.
- `set_style` lives on **`data_element_tool`**, not `data_style_tool`, and takes
  `{id, style_names}`, not `styles`. It **replaces the element's whole style list**.
- `bulk_update_pages_schema_markup` needs **`site_id`** alongside `pages`.
- `query_elements` takes `siteId`/`pageId` at the top level and each query's `element_id` as an
  **object**, like every other id.
- Component prop values: `set_component_instance_prop_values` with
  `{prop_id, type: "string", string_value}`. `type` must be one of
  string/number/boolean/null/link/video/richText/bindable: **"text" is rejected**.
- `update_page_settings` (not `update_static_page_settings`) sets `openGraph`.

**`create_page` with `duplicateOf` preserves the three `_drifts` id groups too**, because the new
page is duplicated from the same donor. Verified by probing the stat-number and FAQ-question
`Strong` ids on the fresh page before pushing 104 ops. Re-derive only if the donor ever changes.

**Duplication does NOT copy `openGraph.titleCopied` / `descriptionCopied`.** They come back null,
so the page would ship with empty OG tags while the SEO fields look fine. Set both to true.

**`get_all_elements` does not include an HtmlEmbed's `code` setting.** A checker that reads the
tree will report every comparison cell as unwritten: it said **0/16 embeds** while all 16 were
correct. Verify embeds with `get_settings` (`type: "all_raw_settings"`) on a sample instead. Third
instance of the same lesson: check what window your checker measured in.

**Three slots were unmapped on every page ported before today**, found by running the
unported-slot detector with **no length floor**, as the Webflow port section insists:
- the **comparison section eyebrow** (`comparison.eyebrow_string`), so the donor's
  "Why VoiceOrder Solutions" sits on all ten batch-4 pages. Generic, so harmless there, but it was
  a silently dropped content field.
- the **FAQ eyebrow** (`faq.eyebrow_string`). The donor's value is "FAQ", which is what every page
  wants, so nothing visible broke.
- **`cards.lead` written as `""` makes `gen-ops.py` skip it**, so the donor's "Small details that
  keep the routine the same, whoever is ordering." was live on a Pepper comparison page.
  **Never leave a content field empty to mean "keep the donor's"**: there is no such thing, the
  donor's copy is always wrong for the new page.

> Because `gen-ops.py` now writes both eyebrows, the ten batch-4 `ops/*.json` each gained two ops
> that have **not been pushed**. Their live comparison eyebrow is still the donor's. Harmless, but
> it is two MCP calls to clean up whenever those pages are next touched.

**`gen-ops.py` now carries a coverage guard** for exactly that defect class: after building, every
non-trivial string in `content/` that reaches no op prints
`! DECLARED BUT NEVER SENT <path> <text>`. Paths that legitimately have no Webflow slot live in
`overrides.json` under `_unmapped`, each with its reason, so the guard stays silent (0 warnings
across all 11 pages) and a real finding is visible. **Read its output on every run.**

**Verification, all four green on Pepper:** 104/104 text ops match the live Strings, 27/27
comparison cells carry the style matching their kind, 8/8 schema questions and 8/8 answers match
the rendered accordion, and 0 donor leaks with no length floor. Trees are archived in
`_webflow/derived/tree-<slug>-<date>.json`.

**Two of those four checks were green only after fixing the checker, not the page.** The embed
check read the tree (which omits `code`) and the schema check read `textContent` on a `Strong`
node instead of its `String` child. Both reported total failure on a correct page. When a check
fails wholesale rather than partially, suspect the checker first.

⚠ **Still not done on Pepper: the eyeball.** Every check above is string level, and the 2026-10-09
lesson is that string-level green says nothing about rendering. The page is unpublished, so
`layout.py` cannot reach it. **Look at it in the Designer preview, one pass per template section,
before calling the port done.**

⚠ **Never transcribe a UUID from truncated output.** The FAQ eyebrow id was typed from an 8-char
display and the rest invented; `set_text` returned "Element not found". Read the id from the tree.

#### Restructuring a ported page (Eugene's revisions, 2026-10-10)
Eugene revised the Pepper draft after seeing it: two comparison columns only, table much higher, the
sourcing note moved into its own FAQ, a "why teams compare" card section, and a coexistence section
at the end. All of it was done with existing blocks, deletions, moves and one combo class.

**`move_element` works and keeps bindings and styles** (`{id, anchor_element_id, creation_position}`,
positions `append`/`prepend`/`before`/`after`). This is how the table got to section 3. Earlier notes
here said reordering was not possible; it is.

**Two structural facts about this template that only a tree read reveals:**
- **The mid-CTA block is nested INSIDE the cards section** (`tools-section`), not a sibling of it. Move
  the cards section and the mid-CTA travels with it. That is usually what you want (cards then CTA),
  but never assume a section is top level: read `tree.children` first.
- **There is no logo bar.** The repo page has one via `@LOGOBAR`; the Webflow template does not. The
  top level is navbar, hero, then the content sections, then Main CTA and Final Footer.

**Dropping a comparison column needs a combo class, and nothing else will do.**
`.uui-pricing11_row` and `.uui-pricing11_top-row` are **global** classes with a fixed
`grid-template-columns: 1.5fr 1fr 1fr 1fr`, shared by all 26 landing pages. Deleting the fourth cell
alone leaves an empty fourth track, and editing the global class would reflow every other page's
table. The fix is a page-scoped combo:

```
create_style  name "is-2col", parent_style_names ["uui-pricing11_row"],
              properties [{grid-template-columns: "1.5fr 1fr 1fr"}]
create_style  same under ["uui-pricing11_top-row"]
set_style     each row grid -> ["uui-pricing11_row", "is-2col"]
set_style     the header grid -> ["uui-pricing11_top-row", "is-2col"]
remove_element the 4th child of the header grid and of each row grid
```

Only elements carrying both classes change, so the other 26 pages are untouched. **Verify by counting
children per row grid (want 3) and checking `is-2col` is on all ten grids**, which is cheap and exact.
`set_style` replaces the whole list, so always pass the base class too or the row loses its styling.

**Content shape follows the table shape.** Trim each row's `cells` to 2 and `heads` to 3 in
`content/`, or `gen-ops.py` writes into the cell you just deleted.

**Reallocating blocks is how you add a section without adding elements.** The page now reads:
hero, **comparison** (3rd), **problem reused as "Why teams compare Pepper alternatives"**, stats,
features, steps, testimonials, integrations, **cards reused as "When VOS and Pepper work together"**
(+ the nested mid-CTA), FAQ, Main CTA. "Also Built In" was dropped, which the batch-4 reviewers had
called filler anyway.

⚠ **"Why teams switch from X" is a claim we cannot make.** We have no evidence of distributors leaving
a named competitor. SimplyDepo's own page says "Why teams **compare** Repsly alternatives", which is
both honest and carries the keyword. Use *compare*, not *switch*.

⚠ **The coexistence section has to stay honest too.** VOS being additive is a verified fact, so
"nothing has to come out for it to go in" is safe. Do not imply a partnership, an integration or any
joint support arrangement with the competitor, because none exists.

**Apostrophes: straight, not curly.** The page had one curly apostrophe from hand-authored JSON
against 7 straight. Normalise before pushing; the site runs 397 straight to 1 curly.

### The `/solutions` page (Webflow only, no repo counterpart)
`/solutions` (page `6a73a33a046f0997fdcf7964`) holds **one card per feature page**, so it needs a new
card whenever a page ships. Each card is a `Link` wrapping an `Image` (the icon), a `Heading` and an
`HtmlEmbed` (the arrow, `uui-button-icon 4`, not the icon). The card's icon is the **Image**, and the
Image comes **before** the heading in the DOM, so pair them by containment, never by proximity.

**Only monochrome-white 256x256 SVGs may be used as icons.** The tile is
`walsh-icon-wrapper-circle gradient solid`, which the live stylesheet renders as a **solid `#0099e6`
56x56 rounded square**, and `walsh-solid-icon` only sets `height: 32px`: **nothing recolours the
image**, so the SVG has to be white already. (An earlier note here called it a purple tile that
recolours a white glyph. Both halves were wrong, measured 2026-10-10.) Of the 62 `icons8-*` files in
the library only **32** qualify; the other 30 are multicolour 48x48 or carry a fixed colour
(`#2c94d1`, `#107c41`, ...) and render as a coloured blob on the blue tile.
`icons8-phone-ringing`, `icons8-web`, `icons8-integration` and
`icons8-synchronize` all look right by name and are all unusable. The vetted pool, the rejects and
the current card-to-icon mapping are in **`_webflow/solutions-icons.json`**.

**To judge an icon, render it; do not read its name.** `get_asset_preview` returns the raw SVG, which
cannot be looked at. Fetch the `hostedUrl`, inline the SVGs on a dark tile in an HTML sheet, screenshot
it with the same headless Chrome `layout.py` uses, and read the PNG. That is how the near-duplicate
traps turned up: `icons8-restaurant` and `icons8-cutlery` are both fork-and-knife, and
`icons8-flash-on` and `icons8-lightning` are both bolts.

State on 2026-10-10: 26 cards, 26 distinct icons, verified by re-reading the page. Before the fix,
**17 of 26 cards shared `icons8-restaurant`**, so most pages (including all ten batch-4 ones) showed
cutlery. Three picks are still weak and are noted in the JSON: Distribution Workflow (a wrench),
Distributor Sales (a "NEW" badge) and the two automation pages (two near-identical bolts). Fixing
them needs 3-4 new white 256x256 icons uploaded. Changes made in the Designer need a Webflow
publish to go live.

`/solutions` also carries the **wrong JSON-LD**: its native schema field holds an `AboutPage` node
named "About VoiceOrder Solutions" with `url: /about`, copied from the About page. Found 2026-10-10
and left as-is pending Eugene's call; it is live.

### The `/free-tools` page (Webflow only, no repo counterpart)
`/free-tools` (page `6ac9dd37e59829e6290b8e2b`, created 2026-10-10, **still a draft**) is the hub for
the **23 free calculators** that live in the sister project `Lead magnets VOS`. Same template as
`/solutions`, one card per calculator. The full card map (element ids, target page ids, icons, asset
ids, copy) and the JSON-LD are in **`_webflow/free-tools.json`**; the 23 icons are committed in
`_webflow/free-tools-icons/`.

**`create_page` duplicates a page and preserves every element UUID**, exactly like duplicating in the
Designer: pass `duplicateOf: "<pageId>"` plus `title`, `slug`, `draft`, `seo`. Verified: all 26 card
UUIDs came across identical, so a map built from the donor works on the copy with only the `component`
half of the id changed. It does **not** copy the donor's schema markup, which was a mercy here.

**Element-tool call shapes that cost a round trip each** (the guide does not spell them out):
- every `id` is an **object**, `{"component": "<pageId>", "element": "<uuid>"}`, never a bare string;
- `set_link` is **flat**: `{"id": ..., "linkType": "page", "link": "<pageId>"}`, not a nested `link` object;
- `query_pages_schema_markup` and `bulk_update_pages_schema_markup` take `pages: [{"id": ...}]`;
- ~31 actions per call ran fine.

**Asset upload needs the S3 leg, and the presigned details are too bulky to retype.**
`data_assets_tool > create_asset` (site_id, file_name, MD5 `file_hash`) only creates a metadata row;
the bytes go in a separate multipart POST to the returned `uploadUrl` with every `uploadDetails`
property as a form field (camelCase keys map to AWS names: `xAmzAlgorithm` -> `X-Amz-Algorithm`,
`successActionStatus` -> `success_action_status`, `contentType` -> `Content-Type`). Until the POST
lands the asset exists with `size: 0`. **Batch all the `create_asset` calls into one MCP call**: the
result then overflows the inline limit and is persisted to a file, which a script can read and POST
from directly. Transcribing the policy and signature by hand is the slow way. Re-creating an asset
with the same name and hash **revives the soft-deleted row and reuses its id**.

**The three cards the donor has spare must be removed, not left blank**, and `remove_element` needs
the card's full `Link` UUID.

**None of the 23 calculators are reachable on the live domain yet.** All 23 report `draft: false` in
the API, but every one of them 404s on `voiceordersolutions.com` while the batch-4 landing pages and
`/solutions` return 200, so the site has not been published since they came out of draft. The card
links are page-id links and will resolve on publish, but **`/free-tools` must not be published before
the calculators are**, or it ships 23 dead links and an `ItemList` of 23 dead URLs.

**Nav dropdown icons are a third icon family**, unrelated to the card icons above. They are inline
icons8 glyphs pasted into the nav, not Webflow assets: `24x24`, `viewBox="0,0,256,256"`,
`fill="currentColor"`, `fill-rule="nonzero"`, wrapped in `<g transform="scale(5.12,5.12)">`, so the
path is authored in a **50x50** space and inherits the menu's text colour. The Free Tools entry is
`_webflow/free-tools-icons/_nav-dropdown-calculator.svg`.

> **Holes are counter-wound subpaths.** Under `fill-rule="nonzero"` the calculator's screen and keys
> read as holes only because they are drawn in the opposite direction to the body (body clockwise,
> `sweep-flag 1`; holes counter-clockwise, `sweep-flag 0`). Redraw one the same way round as the body
> and it fills in solid. This is also how to add a knockout to any of these glyphs.

Size them by rendering against the glyph they will sit next to, never by eye in the markup: the first
Free Tools draft was optically small beside Solutions (body 11-39 of 50; 9-41 matches), and a 4-row
keypad that looked fine at 72px went muddy at the real 24px.

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