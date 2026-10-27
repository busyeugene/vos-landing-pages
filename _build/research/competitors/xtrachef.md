# xtraCHEF / Toast Inventory — competitor research for /xtrachef-alternative

**Verified live 2026-10-27** (WebFetch, read in full or in part):
- https://www.xtrachef.com/ (still live, own brand, "by Toast" banner)
- https://xtrachef.com/xtrachef-by-toast/ (rebrand announcement + FAQ)
- https://support.toasttab.com/en/article/xtraCHEF-101
- https://support.toasttab.com/en/article/xtraCHEF-by-Toast (help-center index)
- https://support.toasttab.com/en/article/xtraCHEF-by-Toast-Requesting-a-Demo
- https://support.toasttab.com/en/article/xtraCHEF-Create-Orders
- https://support.toasttab.com/en/article/xtraCHEF-Mobile-Order
- https://support.toasttab.com/en/article/xtraCHEF-Order-Guides
- https://support.toasttab.com/en/article/xtraCHEF-Outbound-Orders
- https://support.toasttab.com/en/article/xtraCHEF-EDI-Integrations
- https://support.toasttab.com/en/article/xtraCHEF-Integrations
- https://support.toasttab.com/en/article/xtraCHEF-Onboarding-Frequently-Asked-Questions-FAQ
- https://support.toasttab.com/en/article/xtraCHEF-Multi-Unit-Onboarding-Guide
- https://support.toasttab.com/en/article/Using-xtraCHEF-with-Toast
- https://support.toasttab.com/en/article/Toast-IQ-Inventory-Overview and -FAQ
- https://support.toasttab.com/en/article/Toast-IQ-Overview
- https://support.toasttab.com/en/article/Get-Started-With-AI-Invoice-Scanning
- https://support.toasttab.com/en/article/Toast-Inventory-Generate-Purchase-Orders-Receive-Inventory

⚠ **NOT read directly: every `pos.toasttab.com` page returned HTTP 403** to the fetcher
(`/products/inventory-management`, `/products/xtrachef`, `/integrations/xtrachef`, `/pricing`, the
`/zh-us/` mirror). `xtrachef.com/features/inventory-management/` 301s to
`pos.toasttab.com/products/inventory-management` and `/features/purchase-order-management/` 301s to
`pos.toasttab.com/products/xtrachef`, so that is where Toast's marketing copy now lives. Lines below
marked *(search snippet)* come from search-engine extracts of those pages, not a full read. Have
someone open `/products/inventory-management` in a browser before the page ships.

## 1. What it is now, and what to call it
- Name today: **"xtraCHEF by Toast"**. xtrachef.com banner: **"xtraCHEF is now xtraCHEF by Toast!"**
  (xtrachef.com). Help center: **"Help Center: xtraCHEF by Toast."** Toast's product URL is
  `/products/xtrachef`; the inventory page frames it under "Restaurant Inventory Management Software".
- Toast acquired xtraCHEF in 2021 (third-party: softabase; xtraCHEF's 2020 "partners with Toast" post
  predates it). The live announcement page gives no date.
- Self-description: **"xtraCHEF by Toast is a cloud-based restaurant management platform that provides
  automated financial and operational management solutions."** (xtrachef-by-toast). Homepage tagline:
  **"You serve food. We serve profits."**
- Buyer: the restaurant operator / owner / controller (back office, accounting, food cost). US only:
  **"exclusively available in the US"**, not Australia, Canada, Ireland or the UK (xtraCHEF-101).
- ⚠ **A second product is coming: "Toast IQ Inventory"** — **"a real-time inventory platform built
  into Toast Web"**, **"currently in limited release with select customers"** (Toast-IQ-Inventory-
  Overview). FAQ: xtraCHEF customers will move later; **"No firm timelines around migration are yet
  defined for existing customers of these products."** and **"You are not moved off a product you are
  actively using before Toast IQ Inventory is proven for your operation."** Write the page about
  xtraCHEF by Toast; do not state it is being retired.
- **Naming on the page:** "xtraCHEF by Toast" at first mention (users search "xtrachef"), then
  "xtraCHEF". Explain once in plain words: "Toast's back-office tool for invoices, food cost and
  inventory". Keep the capitalization xtraCHEF (lower x, CHEF in caps). Never "Toast Inventory" as its
  name: that is a different, international PO beta and Toast IQ Inventory is a third product.

## 2. Feature list
- Tiers (xtraCHEF-101): **"xtraCHEF is available in two tiers, Essentials (formerly Lite) and Pro."**
  Essentials = **Invoice Automation, Sync (accounting integrations), Class and Location Tracking, Food
  Cost Reporting, Ingredient Price Tracker, and Vendor & Order Management.** Pro = everything plus
  **Recipe Costing and Inventory Management.** ⚠ **Ordering is in BOTH tiers.**
- xtrachef.com feature list: **AP Automation, Food Cost Management, Inventory Management, Recipe
  Management, Procurement, Budgets + Forecasting, Manufacturer Rebates.**
- Help-center sections: Invoice Automation; Products and the Item Library; Recipe Costing and Inventory
  Management; Analytics and Reporting; **Budgets, Vendors, and Ordering**; Mobile App.
- Toast POS tie-ins (xtrachef-by-toast): menu item margin variances and **"Actual vs. Theoretical (AvT)
  inventory reporting"**; **"par ordering quantities"** calculated from recipe and menu data once Toast
  menu items are mapped to recipes.
- Mobile app (iOS + Android): invoice photo capture, counts, ordering. **"View invoices, approvals,
  inventory values, ingredient price fluctuations and more from any mobile/desktop device."** (xtrachef.com)

## 3. Ordering / purchasing — the overlap (read closely)
**Supplier ordering exists, is in both tiers, and runs on desktop and mobile.** It is not a minor feature.
- How an order is built: from the vendor's previously invoiced items or from an order guide —
  **"select invoice items previously purchased from your vendors"**, then **"add the Quantity to be
  shipped"** (Create-Orders). Mobile: **"Order on mobile enables you to order items directly from your
  Vendors and Existing Order Guides that have been created from xtraCHEF Desktop."** (search snippet of
  Mobile-Order). Mobile estimated total uses prices **from your most recent invoice** (Mobile-Order).
- Order guides: per vendor, built by hand (**"+ New Vendor Order Guide"**, enter **"the Quantity you will
  typically order"**) or by uploading a vendor **bid sheet** (.csv/.xls/.xlsx). Only items that passed
  Item Review appear. Guides can be **scheduled for recurring weekly orders** with **"Auto Submission"**:
  **"automatically send this order guide to your vendor's Sales Representatives"** (Order-Guides).
- Pars: **"Setting these allows xtraCHEF to create 'to-be-ordered' amounts for you"** (inventory count
  lists, search snippet of xtraCHEF-Inventory-Getting-Started). Toast marketing *(search snippet)*:
  **"Take inventory once, and we'll create an order guide for you based on what's on hand and what's
  required to maintain par."** and **"schedule recurring orders to ensure you're maintaining par levels
  for your most-used products."**
- How it reaches the supplier: **"either by a downloadable PDF you can pass on or send to your vendor"**
  **"or via email, directly from xtraCHEF account."** (Create-Orders). Mobile: **"save your order as a
  PDF or send it directly via email."** No EDI, no text, no supplier portal for outbound orders.
- ⚠ **Vendor confirmation exists:** **"Statuses update automatically once a vendor selects Confirm
  Order."** (Outbound-Orders). Do not write "no confirmation" or "you never know if it arrived".
- EDI is **inbound invoices only**: **"a way for your vendors to transfer invoice data to your account
  automatically."** Named EDI vendors: Baldor, Ben E. Keith, Chefs' Warehouse, Cheney Brothers, DiCarlo,
  FreshPoint, Gordon Food Service, Greco and Sons, Labatt, Performance Food Group, Shamrock Foods,
  Sysco, US Foods and others (EDI-Integrations). Never say EDI carries the order.
- **Net:** the restaurant builds the order (typed quantities, from guides it built off its own invoices)
  and xtraCHEF sends it as an email or PDF to the rep. The distributor receives an email/PDF it still
  has to key in. The order guide is the restaurant's own list built from past invoices, priced from the
  last invoice, not the distributor's catalog at the distributor's current prices.

## 4. ⚠ TRAP: voice, AI, scan, camera, photo — every hit
- **AI:** **"artificial intelligence and machine learning capture your purchases from invoices"**
  (xtraCHEF-101). Toast IQ conversational assistant: **"you can ask Toast IQ a question in natural
  language"** — typed chat in Toast Web and the Toast Now app; no voice input documented (Toast-IQ-
  Overview). Toast IQ Inventory FAQ: **"You can ask questions about your inventory data in plain
  language instead of building a report."**
- **Scan / camera / photo:** xtraCHEF mobile app camera captures invoices (Mobile-Invoice-Uploads,
  search snippet; the app detects and corrects the image). Toast Retail **"Scan, review, and process
  invoices using AI"**, **"currently available only in Toast Now for iOS devices"**. Toast IQ Inventory:
  **"scan an invoice on your phone, and it is scanned and received automatically"** and **"Barcode
  scanning is included"**.
- **Voice:** none found in xtraCHEF (searched "voice", "dictate", "speech"). BUT ⚠ **Toast does sell
  guest-facing voice ordering**: SoundHound partnership (since 2023) for diners ordering by phone,
  kiosk and drive-thru; a Toast voice-ordering beta and drive-thru voice partners; diners ordering from
  Toast restaurants **by voice or text** via Google Ask Maps (Aug 2026, trade press). That is a guest
  ordering FOOD from the restaurant, not the restaurant ordering supplies, but a reader who searches
  "Toast voice ordering" will find it.
- **So: never write "Toast has no voice ordering", "they type, we speak", or "no AI".** Safe form:
  "In xtraCHEF, a supplier order is built from your order guide and sent to the rep as an email or
  PDF." The difference is who the order is for and how it lands, not speech vs. AI.

## 5. Does it require Toast POS?
- **No**, per xtrachef.com: **"Do I need to use Toast POS to use xtraCHEF by Toast?" "No!" "Any
  restaurant that wants to streamline accounting processes, better manage inventory or improve
  operational efficiency and financial decision-making can use xtraCHEF by Toast."** It adds that AvT and
  margin-variance features work best on Toast: **"it is recommended to use Toast."**
- Onboarding FAQ: **"You do not need to be live on Toast POS to get started with xtraCHEF!"**
- But the purchase path runs through a Toast account: **"you will need to submit a demo request
  through the Toast shop"**, starting by logging in to Toast Web (Requesting-a-Demo). And
  **"the only true integrations xtraCHEF makes are to Toast and QuickBooks"** (Integrations).
- Page-safe wording: "xtraCHEF works best for restaurants on Toast POS." Never "Toast-only".

## 6. Pricing
- ⚠ **Published.** **"$179/month/location"** (Essentials) and **"$279/month/location"** (Pro) on the
  English help article xtraCHEF-by-Toast-Requesting-a-Demo (seen 2026-10-27). xtrachef.com and
  xtraCHEF-101 show no prices; the sales route is a demo. So this is one of the competitors that
  publishes a price: give them that row if pricing appears at all, keep the figures OFF the page, and
  let the sourcing FAQ carry the date.

## 7. Onboarding
- **"The typical implementation time of xtraCHEF can range from a few weeks to 90 days."** (Multi-Unit
  guide). **"onboarding for a Essentials account can take as little as a week."** Pro: **"about seven
  weeks of working closely with your OC"** (Onboarding FAQ). Self-onboarding step 15-30 minutes. Pro
  includes nine calls with an Onboarding Consultant.

## 8. Integrations (named)
- True integrations: Toast (POS, Payroll, Toast Web) and QuickBooks (Online + Desktop); Sage Intacct
  sync documented separately. CSV "data exchanges" with: Bill.com, ChefTec, Compeat, CrunchTime, CTUIT,
  Jonas, Microsoft Dynamics, NCR Back Office, NetSuite, Oracle EBS, Restaurant365, Rosnet, Sage 50/100,
  Xero, Yardi and others (Integrations). Supplier side: inbound EDI invoices from the distributors in §3.
- Nothing connects xtraCHEF to VOS. No integration, no partnership.

## 9. Unaudited marketing numbers — do NOT repeat
- **"Thousands of restaurants use xtraCHEF"** (xtrachef.com). Customer location counts on logos.
- Testimonial: **"Not having to spend several hours a week managing paperwork is a game-changer"**.
- Toast IQ usage figures (125,000+ locations; 47% / 34% question shares) from Toast's Q1 2026 reporting.

## 10. Real strengths to concede (biggest first)
1. Invoice automation: photograph or email an invoice, line items extracted, EDI invoices from Sysco,
   US Foods, PFG, GFS and more. The core of the product.
2. Food cost: recipe costing, ingredient price tracker, AvT reporting, menu margin variances, tied to
   Toast POS sales.
3. Accounting/AP: GL coding, approvals, QuickBooks/Sage Intacct sync, CSV exchange with ~20 systems.
4. Inventory counts with pars that produce "to-be-ordered" amounts and par-based order guides.
5. Ordering across ALL your suppliers in one place, recurring auto-submitted orders, vendor confirm.
6. It lives inside the Toast ecosystem the restaurant already runs (one login, Toast Web, Toast Now).

## 11. Sentences that would be FALSE
- "xtraCHEF can't place orders / has no ordering" — false (both tiers, desktop + mobile).
- "No order guides / no pars / no recurring orders" — false.
- "Orders go out with no confirmation" — false for emailed orders (vendor Confirm Order).
- "Requires Toast POS" — false per their own FAQ.
- "No AI / no mobile app / no scanning" — false.
- "Toast has no voice ordering" — false (guest-side).
- "Pricing is quote-only" — false (help article publishes per-location prices).
- "EDI sends your order" — false the other way: their EDI is invoices in only.
- "xtraCHEF works with any supplier's catalog/prices live" — not documented; prices come from invoices.

## Proposed angle
Keep xtraCHEF by Toast for what happens after the truck leaves (invoices, food cost, counts, the books);
add VoiceOrder Solutions for one job before it: placing the order with a distributor that is on
VoiceOrder Solutions, by speaking it into your distributor's app, where the lines come from that
distributor's own guide at their prices and the order reaches them in VOS with an order number and
timestamp, not as an email or PDF in a rep's inbox. (Do not promise the distributor never retypes it:
per the claim rules that holds only over EDI, the API or QuickBooks on the distributor's side.) Distinctive to this page: xtraCHEF is the Toast back office and its order step is a
list of past invoice lines sent as email or PDF to every vendor; VOS covers only the distributors who
offer it, and stays out of the Toast stack entirely (nothing to connect, nothing to change in Toast).
Scope it honestly: VOS only reaches distributors on VOS, so xtraCHEF keeps ordering from everyone else.

## Candidate table rows (xtraCHEF by Toast + VoiceOrder Solutions vs xtraCHEF on its own)
Both columns tick (xtraCHEF's strengths, unchanged by adding VOS):
- Invoices captured and line items extracted (photo, email, EDI)
- Recipe costing and food cost reports tied to Toast sales
- Inventory counts with par levels

Only the VOS ordering job differs:
- Order spoken in the app, each line reviewed before it is sent (xtraCHEF: typed quantities on an
  order guide) — keep it to "spoken", never "no typing anywhere".
- Items and prices come from your distributor's own guide for your account (xtraCHEF: your list built
  from past invoices, priced from the last invoice).
- The order reaches the distributor in VOS with an order number and timestamp (xtraCHEF: an email or
  PDF to the rep, who can click Confirm Order). Do not claim "nothing to retype" here unless scoped to
  EDI/API/QuickBooks. xtraCHEF email also sends at any hour, so "after hours" must not be a VOS-only cell.
