# Apicbase (apicbase.com) — competitor research for /apicbase-alternative

**Verified live 2026-10-27** (get.apicbase.com: `/`, `/procurement-management/`, `/inventory-management/`
(both halves), `/internal-ordering/`, `/invoice-matching-software/`, `/recipe-management-software/`,
`/pricing-plans/`, `/restaurants/`, `/hotels/`, `/catering-software/`, `/about/`, `/request-demo/`;
support.apicbase.com: `/` , `/help/procurement`, `/help/supplier-integrations`,
`/help/us-foods-integration-united-states`, `/help/gordons-food-service`, `/help/purchase-order`,
`/help/how-do-i-check-a-purchase-order-with-ai-before-i-send-it`, `/help/barcode-scanner-app`,
`/help/barcode-scanner-app-1`, `/help/inventory`, `/help/inventory-3.0-the-new-way-of-counting`,
`/help/ai`, `/help/sales`).

**Could not read:** `partners.apicbase.com/integrations`, `/integrations/suppliers` and `/integrations/pos`
return only a title (JS-rendered); the supplier and POS lists below come from the help center instead.
`get.apicbase.com/ai/` returned an SVG, so the "AI across the platform" page was not read. No onboarding
or implementation timeline was found anywhere. Quotes below were extracted by a fetch tool; re-open the
URL before quoting a line on the page.

## 1. What Apicbase is, in their words
- Homepage title: **"F&B Management System for Multi-site Restaurants, Catering & Hotels"**. H1: **"AI-Native
  OS For Large and Enterprise Food Businesses"**. Sub: **"Replace spreadsheets and disconnected tools with a
  single source of truth for multi-site hospitality."** Other H2s: **"Run All Your Sites From One Platform"**,
  **"The Backbone of Multi-site Restaurants"** (get.apicbase.com/).
- /restaurants/: **"Back-of-house software for multi-site restaurants"**, **"Apicbase is the central operating
  system of your restaurant chain."**, **"the most complete F&B management platform for multi-unit restaurants,
  hotels, ghost kitchens."**
- Buyer: segments Restaurant Groups, Catering Business, Hotels; role pages C-Level, Finance, Operations,
  Executive Chef, IT & Technology. Pricing: the Growth plan is **"Starting from 5 outlets"** (/pricing-plans/).
  This is a head-office purchase for a GROUP, not a single-site tool.
- Named customers: RCE (Restaurant Company Europe), citizenM, Heavenly Desserts, Loetje, Laplace, Brammibals,
  Laag (/restaurants/); Penta Hotels, Vela Hotels, Corendon, HasHotel (/hotels/); Baxter Storey, Vermaat,
  Sodexo, gategroup, Pure Goods (/catering-software/).
- Company: **"a scale up head quartered in Belgium with an extensive remote team"** (/about/). Site languages
  EN, NL, FR, DE.

## 2. Markets
Europe-first (Belgium HQ; supplier integrations overwhelmingly BE/NL/DE/Nordics/UK), **but the US is live**:
US Foods and DSSI listed under "United States", Gordon Food Service as "Canada & United States", and US POS
integrations (Toast not seen; Clover, Square, NCR Aloha, Oracle Micros Simphony, Revel, Lightspeed are).
⚠ Do not write "Apicbase is not in the US" or "European only".

## 3. Modules (nav, get.apicbase.com/)
Recipe Management, Menu Engineering, Menu Planning, Production Planning, Central Production Unit (internal
ordering), Purchase & Receive Goods, Inventory, Demand Forecasting, Group Wide Analytics, Invoice Matching,
Allergen Communication, HACCP & Tasks, Traceability, Food Labelling, Scope 3 Purchase Analysis / CO2 Tracking.
Plus API and an MCP server ("Query operational data with AI through MCP", /inventory-management/).
Recipe page H1: **"AI Recipe Management Software for Restaurants"**; AI imports recipes **from PDFs, URLs, scans,
and handwritten notes** and **"Apicbase automatically updates recipe costs and margins."**

## 4. ORDERING / PROCUREMENT (the overlap — read this)
**They have full supplier ordering.** Not an absence anywhere.
- How an order is built (/procurement-management/): **"procurement suggestions based on actual stock levels,
  sales predictions and supplier lead times"**; turns **bills-of-materials** into a PO per supplier; saved
  **"Standardised order list"**; **"Set par-levels for inventory items and re-stock up to par."** FAQ: order by
  PAR, BoM, production plans, menu cycles or forecasted demand, and Apicbase **"will automatically choose the
  right supplier and packaging option."** Hotels page: POs **"based on expected guests, par levels, or demand
  forecasts"**, heading **"Order From All Suppliers At Once"**. Recipes drive it: **"Purchasing: correct
  ingredient orders based on current recipes."** (/recipe-management-software/).
- How a person enters it (/help/purchase-order): Procurement > "Create Orders", **"Click on the "+" or type
  the quantity"**, or "To Par" auto-calculates. **"You can create and send orders on a phone or tablet."**
  (mobile = phone browser; **"no native app covering the whole system"**, /help/barcode-scanner-app-1).
  **"You have to send each order to each supplier separately."** Also "Continue an unfinished order" and
  "How does order approval work?" articles exist (/help/procurement).
- How it reaches the supplier: non-integrated supplier = **email** ("E-mail Order"; **"Your supplier will
  receive the order per mail (and a copy goes to you)"**). Integrated supplier = "Send" straight into their
  system: **"Orders created in Apicbase are sent directly to the US Foods ERP system"**, with updates back
  (**"Adjusted delivery dates"**, **"Unavailable or deleted products"**) (/help/us-foods-...). GFS: **"Place
  orders directly from Apicbase to Gordon Food Service"**, but **"Order status and updates are visible in
  Gordon's platform only."** Integrations use **APIs or EDI** (/help/supplier-integrations).
- **Supplier does NOT have to be on Apicbase**: suppliers are "manual" (email, **"must be created by the
  user"**) or "integrated". Integrated catalog is contract-specific: **"Only the products included in your US
  Foods contract ... will be available in Apicbase"** at contract prices; **"When suppliers are integrated,
  pricing is updated daily."**
- Named integrated suppliers (/help/supplier-integrations + /help/procurement): US: **US Foods, DSSI (Direct
  Supply), Gordon Food Service**. UK: Bidfood UK, Brakes, Booker. BE/NL/DE/Nordics: Hanos, Sligro, Bidfood
  NL, Metro BE/DE, Transgourmet, Solucious, VHC Jongens, Kespro, Martin & Servera, Wihuri Metro-tukku and ~40
  more. Counts on their own pages: "60+ suppliers" (/inventory-management/).
- Receiving: "Receive Orders" tab, Barcode Scanner App receives orders; discrepancies ordered vs delivered.
- Central kitchens: outlets order from the CPU **"the same ease and efficiency as ordering a book online"**
  (/internal-ordering/). Add-on, not in base plans.

## 5. ⚠ TRAP: VOICE AND AI ARE ON THEIR SITE. Do not write "they type, we speak" without scoping it.
- **Voice counting**: **"Say what you see, Apicbase AI does the rest."** (homepage);
  **"Count stock fast and accurately with barcode scanning, voice counting, and count lists on phone or
  tablet."**; FAQ: staff **"can scan a barcode, type a quantity, or simply say it out loud"**
  (/inventory-management/). Voice is for STOCK COUNTS. No voice ORDERING found on any page or help article
  read (searched procurement page, purchase-order article, AI help category, mobile articles).
- **AI on the order itself**: **"Before you send a purchase order, Apicbase can review each line and flag the
  ones worth a second look."** Flags: First time / Pending delivery / Above par. Off by default, needs the AI
  module, **web app only** (/help/how-do-i-check-a-purchase-order-with-ai-before-i-send-it).
- **AI invoice reading**: **"Apicbase reads every line of an incoming invoice with AI"**, second AI pass,
  **"Handles scanned PDFs (OCR) and structured UBL/Peppol e-invoices."** (/invoice-matching-software/).
- AI recipe import (scans, handwritten notes), AI allergen fill, **"AI-driven sales-mix forecasting"**,
  "Apicbase AI Assistant" (pricing table), MCP server. Barcode scanning app (iOS/Android).
- Safe wording: "Apicbase's voice feature is for counting stock; ordering is typed or built from par, and
  VoiceOrder Solutions adds speaking the order itself." Never "Apicbase has no voice" or "no AI".
- ⚠ "Interrupted order picks up where it left off" is not unique here: "Continue an unfinished order" exists.

## 6. Pricing
**Quote-only, no figures published** ("Talk to our team" on every plan). Basis: **per location**, fee per
location drops as locations are added; Enterprise **"Bulk discount applies."** Plans Growth (**"Starting from
5 outlets"**; Menu Engineering, Procurement, Inventory, Sales Analytics, mobile app for intake and counts,
Order to Par), Professional (+ Demand Forecasting, BOM Ordering, SSO), Enterprise (+ 99% uptime SLA,
dedicated CS manager, custom integrations). Add-ons: HACCP & Tasks, Internal Ordering, Production Planning,
Traceability, API, Menu Planning, Carbon Footprint. Billing annual; **monthly carries a 15% surcharge**.
"Onboarding packs" mentioned, no fee shown. Pricing is parity with VOS (both quoted): do not fault it.

## 7. Onboarding
No timeline published. Setup runs through a Customer Success Manager; supplier integrations need the
supplier too (US Foods: a confidential agreement, a vendor form via your US Foods rep, three setup emails,
possibly a test order). An Implementation partner category exists. Do not invent a duration for them.

## 8. Integrations (named)
POS (help /help/sales): Lightspeed, Clover, Square, NCR Aloha, ORACLE Micros Simphony, Revel, Epos Now,
Zettle, Deliverect, Foodics, Vita Mojo, Mews, unTill, Vectron, Caspeco, GoodTill, ICRTouch, Infrasys, Revo,
Last.app and ~15 more. Site claim "40+ POS integrations". Accounting/ERP: generic only ("Share data with ERP,
P2P and accounting"; export CSV/Excel/PDF/API); none named on pages read. Label printing: Nicelabel.

## 9. ⚠ Unaudited numbers — do NOT repeat (they also contradict each other)
"Over 4000 Sites" (homepage) vs "3,000+ locations", "400+ brands" (/inventory-management/) vs "+1000
OUTLETS IN MORE THAN 25 COUNTRIES" (/request-demo/); "70% faster stock takes", "99% counting accuracy",
"85% lower stock variance", "20% lower spend", "Voice counting runs 70% faster than typing, with 99%
accuracy", "70–90% faster recipe development", Circus Kitchen "18%", "99.99% uptime", RCE "+75 locations".

## 10. Real strengths a fair page concedes (biggest first)
1. Recipe-first costing: recipe changes flow to plate cost, margins, orders and inventory automatically.
2. Multi-site group control from head office: one library, roles, approvals, approved suppliers per outlet.
3. Ordering built FROM the kitchen's own data (par, BoM, forecast, production plan, guests) and split per supplier.
4. Direct integrations with US Foods and Gordon Food Service (plus DSSI), contract catalogs and daily prices.
5. Central production unit / internal ordering between commissary and outlets.
6. Invoice three-way matching with AI reading; receiving with discrepancy tracking.
7. Stock counts by barcode and voice; HACCP, allergens, labelling, traceability, CO2.
8. 30+ named POS integrations, API, MCP, SOC 2 Type II.

## 11. Sentences that would be FALSE
"Apicbase can't send orders to suppliers" / "has no ordering" / "only does recipes"; "has no mobile ordering"
(browser on phone works); "has no voice" / "has no AI"; "doesn't work with US distributors" (US Foods, GFS,
DSSI); "your supplier must be on Apicbase" (email works for any supplier); "no par / no suggested orders";
"can't check an order before it goes" (AI PO verification); "no order status" (US Foods sends updates back).
Also do NOT claim "Apicbase has no order guide": they call it an order list, and integrated catalogs are the
contract assortment.

## 12. Proposed angle
**Apicbase works out what a site should order, from the recipe and the par level up, across every outlet;
VoiceOrder Solutions is the distributor's own app where the kitchen's buyer speaks that order, from the
guide and prices the distributor set for that account.** Distinctive vs the other seven: Apicbase is
recipe-first and group-wide (head office buys it, 5+ outlets), so the honest split is "plan centrally in
Apicbase, place the reorder by voice with a distributor who is on VoiceOrder Solutions". The two do not
connect: the Apicbase order and the VOS order are separate, and the page must say a site uses one or the
other for a given distributor's order (no double ordering, no sync of par or PO).

Candidate rows, `Apicbase + VoiceOrder Solutions` vs `Apicbase on its own`, both tick:
- Recipe costs and margins update when a recipe changes (Apicbase's strength, ticks both columns).
- Suggested quantities from par levels and forecasts (both columns; it is Apicbase doing it).
- Invoices checked against what was ordered and received (both columns).

Rows where only the ordering job differs:
- The order is spoken in the distributor's app and turned into lines to review (Apicbase alone: "Typed or
  built from par" text cell, not a cross; voice there is for stock counts).
- Comes set up by your distributor, with that account's items and prices; most kitchens order the same day
  (Apicbase alone: text cell "Set up with Apicbase's team"; NOT a cross, and no duration claimed for them).
- Distributor receives it with an order number and timestamp, any hour (Apicbase alone: "Email, or direct to
  integrated suppliers" text cell, since US Foods/GFS integrations are real).
