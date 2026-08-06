# VOS pSEO, Batch 2 content plan (8 pages)

**Status: BUILT.** All 8 pages shipped, plus the 4 batch-1 pages retrofitted. 12 total.

Decisions Eugene made on this plan:
1. **Checklist page: reframe to ordering checklists.** Built, scoped to ordering and
   stock routines, with the limit stated in the hero, made visual in the comparison
   table (honest ✗ rows for opening/closing and cleaning), and answered outright in
   the first FAQ. See section 4, page 12.
2. **Tier C keywords: disambiguating FAQ.** Built as specified in section 3.
3. **Build all 8 on assumptions.** Done. Every assumption is logged in
   `knowledge-base/vos-product-facts.md` under "Claims used across batch 2" and
   flagged in the page source. Section 5 below is the list to take to the client.

Sections 1 to 4 describe what was built. Section 5 is still open. Sections 6 and 7
are done and marked below.

---

## 1. The 8 pages

| # | Primary keyword | Slug | File | Assigned angle (the page's job) |
|---|---|---|---|---|
| 5 | inventory planning software | `/inventory-planning-software` | `vos-inventory-planning-landing.html` | **Forward looking.** How much to order next week. |
| 6 | order fulfillment software | `/order-fulfillment-software` | `vos-order-fulfillment-landing.html` | **Distributor side, after the order lands.** Received to delivered. |
| 7 | order tracking software | `/order-tracking-software` | `vos-order-tracking-landing.html` | **Status of an order already placed.** Where is it, did it get confirmed. |
| 8 | inventory visibility software | `/inventory-visibility-software` | `vos-inventory-visibility-landing.html` | **Who can see the stock.** Shared, real time, across locations and roles. |
| 9 | inventory control software | `/inventory-control-software` | `vos-inventory-control-landing.html` | **The money.** Food cost, waste, variance, over ordering. |
| 10 | restaurant stock management software | `/restaurant-stock-management-software` | `vos-restaurant-stock-management-landing.html` | **Restaurant qualified.** Highest intent page in the batch. |
| 11 | restaurant purchasing software | `/restaurant-purchasing-software` | `vos-restaurant-purchasing-landing.html` | **Procurement.** Vendors, POs, spend by category. |
| 12 | restaurant checklist software | `/restaurant-checklist-software` | `vos-restaurant-checklist-landing.html` | **Repeatable routines.** See open question Q1, this one is not confirmed. |

---

## 2. Cannibalization map

The five inventory pages have to answer five different questions. This is the separation contract. If a page starts drifting into a neighbour's territory during the build, cut it and link across instead.

| Page | The question it answers | Never covers |
|---|---|---|
| inventory tracking (live) | "What do I have right now?" | Forecasting, cost |
| inventory planning | "How much should I order for next week?" | Live counts, who can see it |
| inventory visibility | "Can my other location and my chef see it too?" | Forecasting, cost |
| inventory control | "Why is my food cost up and where is the waste?" | Live counts, forecasting |
| restaurant stock management | "I run a restaurant, just show me the whole thing" | Nothing, this is the cluster's catch all |

Same rule for the four order pages:

| Page | The question it answers |
|---|---|
| order entry (live) | "How do I place the order?" (buyer) |
| order taking (live) | "How do I receive orders?" (seller) |
| order fulfillment | "How do I get the order picked and out the door?" (seller, after receipt) |
| order tracking | "The order is placed, where is it?" (both sides) |

**Hierarchy:** `restaurant stock management` and `restaurant purchasing` are the two restaurant qualified pages. Treat them as mini hubs. The generic inventory pages should each link up to them, not sideways to each other.

---

## 3. Keyword fit audit and the 3-tier rule

Every secondary keyword gets sorted into one of three tiers. This is how we keep the KB's "Do NOT claim" list intact while still covering the query.

- **Tier A, on fit.** Goes in an H2 or H3 plus body copy. Full product claim.
- **Tier B, adjacent, reframe honestly.** Goes in one H3 or one body sentence that translates the term into what VOS actually does. Example: "multi channel order fulfillment" becomes "voice, web, and app orders all land in one queue." True, and it matches the query.
- **Tier C, wrong industry.** Gets exactly one FAQ that disambiguates, plus optionally one comparison table row. Format: "Is VoiceOrder Solutions warehouse order fulfillment software? No. It is built for restaurants ordering supplies from food distributors. If you need warehouse pick and pack, this is not the right fit." We still rank, we set the right expectation, and we make zero false claims.

### Sorted

| Keyword | Page | Tier | Note |
|---|---|---|---|
| inventory planning tool | 5 | A | |
| inventory planning platform | 5 | A | |
| demand and inventory planning software | 5 | B | Reframe to "plan from your own order history" |
| supply chain inventory planning software | 5 | B | Reframe to "your supply chain is your distributors" |
| inventory planning and optimization software | 5 | B | Only if Q2 comes back yes, else Tier C |
| order fulfillment tool | 6 | A | |
| order fulfillment platform | 6 | A | |
| order fulfillment software for small business | 6 | A | Strong fit, independent distributors |
| multi channel order fulfillment software | 6 | B | Voice, web, app into one queue |
| ecommerce order fulfillment software | 6 | C | Different buyer entirely |
| warehouse order fulfillment software | 6 | C | Not a WMS |
| purchase order tracking software | 7 | A | Buyer view, gets its own H2 |
| sales order tracking software | 7 | A | Seller view, gets its own H2 |
| order tracking tool | 7 | A | |
| order tracking platform | 7 | A | |
| order tracking app | 7 | A | Mobile app is a confirmed feature |
| order tracking software for small business | 7 | A | |
| ecommerce order tracking software | 7 | C | Parcel tracking intent, totally different |
| real-time inventory visibility software | 8 | A | |
| software for comprehensive inventory visibility | 8 | A | Awkward phrasing, use in an H3 verbatim once |
| inventory visibility platform | 8 | A | |
| erp add-ons inventory visibility control software | 8 | B | Maps cleanly to "no rip and replace" |
| warehouse inventory visibility software solutions | 8 | C | |
| food inventory control software | 9 | A | Lead with this one |
| inventory control software for small business | 9 | A | |
| small business inventory control software | 9 | A | Near duplicate of the above, use once each |
| inventory control system software | 9 | A | |
| warehouse inventory control software | 9 | C | |
| retail inventory control software | 9 | C | |
| manufacturing inventory control software | 9 | C | |
| restaurant stock control software | 10 | A | |
| restaurant stock management app | 10 | A | |
| restaurant checklist software for managers | 12 | A* | *pending Q1 |
| checklist software for restaurant managers | 12 | A* | Near duplicate, use once each |
| restaurant owner checklist software | 12 | A* | |
| multi location restaurant checklist software | 12 | A* | |
| restaurant operations checklist software | 12 | A* | |
| restaurant checklist software pricing | 12 | **Blocked** | KB forbids pricing claims. See Q6. |

Page 11, restaurant purchasing, arrived with no secondaries. Proposed set, all Tier A: `restaurant purchasing system`, `restaurant procurement software`, `food purchasing software for restaurants`, `restaurant purchase order software`, `multi location restaurant purchasing software`. Confirm or swap before build.

**Density rules per page (unchanged from batch 1):** primary keyword 6 times total, 2 in headings, 2 in body, 1 split across the FAQ. Each secondary once, with at least one secondary sitting in an H2 or H3.

---

## 4. Per page briefs

### Page 5, inventory planning software
**Angle:** stop guessing next week's order. Plan from what you actually used.
**H1 options:** "Inventory Planning Software Built on Your Real Usage." / "Know What to Order Before You Run Out."
**Feature rows:** 1) usage history from every order you have placed, 2) par levels per item and per location, 3) plan on the app, order by voice in the same session, 4) plan against live distributor availability so you do not plan around an out of stock item.
**Tier C FAQ:** none needed, this page has no Tier C terms.
**Links out:** inventory tracking (live counts), inventory control (the cost angle), restaurant stock management (hub).
**Risk:** depends on Q2. If VOS does not derive suggested quantities, the whole page shifts from "it plans for you" to "it gives you the history so you can plan," which is weaker but honest.

### Page 6, order fulfillment software
**Angle:** distributor side, the hours between "order received" and "truck leaves."
**H1 options:** "Order Fulfillment Software Without the Phone Queue." / "From Order Received to Out the Door, Faster."
**Feature rows:** 1) every order arrives structured and legible, no transcribing voicemails, 2) voice, web, and app orders in one queue (Tier B: multi channel), 3) confirm and flag substitutions before picking starts, 4) fewer returns because the order was right the first time.
**Tier C FAQs:** one for ecommerce, one for warehouse.
**Links out:** order taking (live), order tracking, catalog management (live).
**Risk:** low. Closest of the batch to a confirmed VOS capability.

### Page 7, order tracking software
**Angle:** the order is placed, now what. Two audiences on one page.
**H1 options:** "Order Tracking Software for Every Supply Order." / "Know Where Every Supply Order Stands."
**Structure note:** this page earns two parallel H2s, "Purchase order tracking for restaurants" and "Sales order tracking for distributors." Both are Tier A primaries in their own right and this is the cleanest way to land both without keyword stuffing.
**Feature rows:** 1) status from submitted to delivered, 2) full order history, searchable, 3) track from the mobile app (Tier A: order tracking app), 4) catch a short or substituted item before it hits the invoice.
**Tier C FAQ:** one for ecommerce parcel tracking.
**Links out:** order entry (live), order taking (live), order fulfillment.
**Risk:** depends on Q3. If VOS does not expose post submission status, this page has to narrow to order history and confirmation only, and we should say so.

### Page 8, inventory visibility software
**Angle:** not counting stock, *sharing* it. The manager, the chef, and the second location all see the same number.
**H1 options:** "Real-Time Inventory Visibility Across Every Location." / "One Live Stock View Your Whole Team Can See."
**Feature rows:** 1) one live number, no end of day spreadsheet, 2) every location on one screen, 3) works alongside the system you already run (Tier B: erp add-ons), 4) see distributor availability, not just your own shelf.
**Tier C FAQ:** one for warehouse.
**Links out:** inventory tracking (live), inventory control, restaurant stock management (hub).
**Risk:** depends on Q4. Highest cannibalization risk against the live inventory tracking page, hold the separation contract in section 2 strictly.

### Page 9, inventory control software
**Angle:** the money page. Food cost percentage, waste, over ordering, variance.
**H1 options:** "Food Inventory Control Software That Protects Your Margin." / "Cut Waste and Over Ordering, Not Corners."
**Feature rows:** 1) stop over ordering because you could not see what was already in the walk in, 2) catch invoice and delivery mismatches, 3) spend visible by category and by location, 4) control without a new system to install.
**Tier C FAQs:** three, warehouse, retail, manufacturing. Consider one combined FAQ instead of three to avoid a bloated accordion, then one comparison table row each.
**Links out:** restaurant stock management (hub), inventory planning, restaurant purchasing.
**Risk:** broadest and most competitive head term in the batch. Expect this one to take the longest to rank. Do not lead the batch with it.

### Page 10, restaurant stock management software
**Angle:** the restaurant qualified catch all. This should be the best converting page of the eight.
**H1 options:** "Restaurant Stock Management Software That Runs Itself." / "Stock Management Built for Restaurant Kitchens."
**Feature rows:** 1) stock counts that update as you order, 2) manage stock from your phone (Tier A: restaurant stock management app), 3) stock control across every station and location (Tier A: restaurant stock control software), 4) reorder by voice the moment you spot a gap.
**Tier C FAQ:** none. Every secondary is on fit.
**Links out:** this is a hub. Link down to inventory tracking, planning, visibility, control.
**Risk:** lowest of the batch. Only 3 secondaries, all clean. **Build this one first.**

### Page 11, restaurant purchasing software
**Angle:** procurement. Multiple vendors, POs, approvals, what did we spend and on what.
**H1 options:** "Restaurant Purchasing Software Without the Paperwork." / "Every Vendor Order in One Place."
**Feature rows:** 1) order from every distributor in one place, 2) purchase orders that write themselves from the order, 3) spend visible by vendor and category, 4) 24/7, so purchasing is not stuck in a vendor's business hours.
**Links out:** order entry (live), catalog management (live), inventory control.
**Risk:** depends on Q5. Vendor price comparison and approval workflows are the two features this page wants most and neither is in the KB. If both are no, rows 2 and 3 need replacing.

### Page 12, restaurant checklist software
**Angle:** unresolved. See Q1. Three options, in order of preference:
- **(a) Confirm a real feature exists.** Best case, build normally.
- **(b) Reframe to ordering routines.** Order guides are effectively recurring checklists. Honest, but the H1 has to be "Ordering Checklists for Restaurant Teams," not a general ops checklist promise, and searchers looking for opening and closing checklists will bounce.
- **(c) Cut it from the batch.** Ship 7. This is the biggest product fit gap of the eight, and a page promising task management VOS does not have is a conversion and trust problem, not just an SEO one.

**Recommendation: hold this page until Q1 is answered.** Do not build it on spec.

---

## 5. Open questions, need Eugene or the client

These block real copy decisions. The KB does not answer any of them.

| # | Question | Blocks |
|---|---|---|
| Q1 | Does VOS have any checklist, task, or recurring routine feature? | Page 12 entirely |
| Q2 | Does VOS suggest order quantities or par levels from order history, or does it only show the history? | Page 5, part of 9 |
| Q3 | After an order is submitted, does the restaurant see status (confirmed, shipped, delivered)? | Page 7 |
| Q4 | Can one account see stock across multiple locations on one screen? | Page 8, part of 10 |
| Q5 | Does VOS support multiple vendors, price comparison across them, and approval workflows? | Page 11 |
| Q6 | Any pricing we can publish? KB currently says no, but "restaurant checklist software pricing" is a target. | Page 12 secondary |
| Q7 | Real testimonial quotes. KB still has Tony Luna marked "exact quote TBD." | All 8 |
| Q8 | Confirmed distributor and POS names for the integrations row. | All 8 |

Q7 and Q8 are batch 1 debts already. Worth clearing now rather than shipping eight more pages with placeholders.

---

## 6. Technical SEO shipped with this batch ✅ DONE

All six items below shipped across all 12 pages, not just the new 8.

1. **FAQPage JSON-LD.** Every page already has 8 FAQ items in the accordion. Marking them up is the single highest value change here, it competes for FAQ rich results on all 12 pages. No visible change to the page.
2. **Canonical tags.** None of the four live pages have one. With 12 pages across five overlapping inventory and order clusters, self referencing canonicals are not optional.
3. **Open Graph and Twitter card tags.** No `og:title`, `og:description`, or `og:image` anywhere. Every share of these URLs currently renders as a bare link.
4. **Cross page internal linking.** Right now all 24 `.feature-link` anchors on the live pages point at `contact-us`. Zero page to page links exist. Proposal: keep one `.feature-link` per page pointing at contact-us, repoint the rest at cluster siblings per the links-out lines in section 4, and add a "Related pages" strip above the footer. This is what makes a pSEO cluster actually work.
5. **`sitemap.xml` plus `robots.txt`.** Neither exists. Twelve pages is the point where they start mattering.
6. **Breadcrumb JSON-LD** back to the pillar, once the hub-and-spoke linking in item 4 is real.

---

## 7. Build sequence ✅ DONE

Eugene chose to build all 8 at once on stated assumptions rather than wave by wave,
so the original wave plan is moot. All 8 shipped, plus the 4 retrofits.

**Per page checklist, all items completed on all 12 pages:**
- 16 section VOS template (15 original + new Related pages strip)
- Rewrite in `vercel.json`
- Card in `index.html`, now grouped by cluster
- Entry in `sitemap.xml`
- Cross links per section 4 (3 Related cards + 4-5 footer links + 2-4 inline)
- FAQPage, BreadcrumbList and SoftwareApplication JSON-LD
- Canonical, Open Graph, Twitter card
- Meta title and description reviewed for length

---

## 8. What is still open

1. **Section 5 questions Q1 to Q8.** All 8 pages are live on assumptions. The two
   worth chasing first are **Q3** (does the buyer actually see post-submission order
   status) because the order tracking page leans hardest on it, and **Q5** (vendor
   price comparison and approvals) because restaurant purchasing had to route around
   it. Full list in `knowledge-base/vos-product-facts.md`.
2. **Q7, real testimonial quotes.** All 12 pages carry paraphrased placeholders with
   a DEVS comment. This is a batch-1 debt now spread across 12 pages.
3. **Q8, named integrations.** The integrations row still lists delivery formats
   rather than named distributors or POS systems.
4. **Product screenshots.** Every page has `img-placeholder` blocks with a DEVS note
   describing the shot needed. That is 5 to 6 screenshots per page.
5. **Canonical domain.** Canonicals currently point at
   `vos-landing-pages.vercel.app`. If these move to `voiceordersolutions.com`, every
   canonical, `og:url`, and sitemap entry needs updating.
6. **Secondaries for restaurant purchasing** were proposed by Claude, not supplied
   by Eugene. Confirm or swap the five in section 3.
