# Odoo (odoo.com) — competitor research for `/alternatives/odoo-alternative`

**Verified live 2026-11-09.** odoo.com pages fetched directly; two documentation pages rendered
empty to the fetcher and were read through r.jina.ai or the alternate URL noted. No prior entry exists.

## Positioning (verbatim)
- Homepage (https://www.odoo.com/): H1 **"All your business on one platform."**, tagline
  **"Simple, efficient, yet affordable!"**, **"There is an app for that."**, "very easy to use and
  fully integrated", **"Native AI across all your business"**, "Open Source + AI". Also "40k+ community
  apps" and "Join 28 million happy users": their own unaudited figures, **do not repeat either**.
- Pricing page (https://www.odoo.com/pricing): "Odoo is a suite of open source business apps that cover
  all your company needs."
- Editions (https://www.odoo.com/page/editions): "Odoo Community (open-source) and Odoo Enterprise
  (licensed)"; Community is "the core upon which Odoo Enterprise is built". Mobile "Android and iOS"
  listed under "User interface" (for Odoo's own users).
- eCommerce (https://www.odoo.com/app/ecommerce): "One need, one app." / "Built using our apps".

⇒ The Odoo-specific shape: **one database, and every need is answered by adding (installing and
configuring) another Odoo app.** That is what the page argues around.

## Food distribution (their industry page)
- https://www.odoo.com/industries/food-distribution: H1 **"All-in-one software for Food distribution"**;
  "Perishable products delivered just in time"; "Track expiration dates, lot numbers, and inspections";
  "Track every product from supplier to shelf with lot numbers, expiration dates, and complete compliance
  records"; "From quotation to delivery, streamline every step and keep customers happy with faster,
  error-free orders"; "Capture delivery dates at order". Apps named: Sales, Invoicing, Manufacturing,
  Shop floor, Quality, Inventory, plus Odoo AI for "daily production briefings and replenishment questions".
- The page does NOT describe a customer self-ordering channel, phone orders or reps on the road.
  Their customer stories include food wholesalers (e.g. odoo.com/blog/customer-reviews-6/
  scaling-smart-bombay-imports-runs-on-odoo-1725). Odoo is used by small food distributors: never
  write "too big", "enterprise-only" or "not built for food".

## What it does for a distributor (concede all of it)
- Inventory (https://www.odoo.com/app/inventory): "Flawless replenishments", min-max rules, MTO,
  master production schedule, can "propose or automatically trigger purchase orders"; "serial numbers,
  lots, packaging", cycle counting; "multiple warehouses"; **"Fast barcode scanner" ("Supports barcode,
  QR Code and GS-1")**; "Works offline". ⇒ Odoo is a full stock system with barcode scanning.
- Sales (https://www.odoo.com/app/sales): "e-signatures on quotations", online payments, "Close deals
  faster with the customer portal" ("Customers can access their quotations, sales orders, delivery
  orders, and more"), pricelists ("Create custom pricing strategies"), optional products for upsell,
  "AI-powered lead scoring".
- Accounting, invoicing, purchase, quality, manufacturing: all native apps.

## ⚠ Customer-facing ordering: THEY HAVE IT. Do not claim otherwise.
- eCommerce features (https://www.odoo.com/app/ecommerce-features): "Configure B2B and B2C websites
  independently, and display different pricelists"; "Create and display different pricelists according
  to your customer's profile"; "Website content is automatically adapted to mobile devices".
- B2B setup docs (https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/configuration/b2b_b2c.html):
  "When running a B2B business, you usually hide the pricing on the web shop and make it available for
  logged-in users only."; **"To prevent anyone from signing up freely, set the Customer Account setting
  option to On invitation."**; checkout policy can disallow guest checkout.
- Reorder (https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/checkout.html):
  customers reorder "from their customer portal, using the **Order Again** button"; "Quick reorder" at
  the order summary step. Odoo 19 release notes (https://www.odoo.com/odoo-19-release-notes):
  **"Customers can now reorder products from a previous order directly from the Cart page or the portal."**
  and "portal users able to select quantities for those lines directly in the portal".
- Portal users are free: pricing page, **"A paying user is someone who has access to the Odoo backend
  to create, view, or edit documents."** Portal users (customers, suppliers) are not paying users.
  ⇒ Never argue cost per customer login against Odoo. It is free for them.
- The honest distinction: Odoo's customer ordering is a **web shop / portal the kitchen signs in to,
  then searches, taps and types quantities**, which the distributor sets up in the eCommerce app.
  VoiceOrder Solutions is a spoken order in an app, reviewed line by line, set up from a spreadsheet,
  with nothing installed in Odoo.

## ⚠ AI and voice (native, Odoo 19)
- Release notes (https://www.odoo.com/odoo-19-release-notes): "Chat with AI agents that can learn from
  your documents and perform actions."; **"Internal users can now chat with an AI agent to query their
  own database records."**; **"Transcribe meetings or dictate text in real-time and get a summary."**;
  phone: "view transcripts or recordings when available"; **"Connect an AI Agent to your livechat."** /
  "The Livechat AI agent can now generate leads."; "Create server actions to create journal entries,
  such as vendor bills and customer invoices from documents."
- Odoo blog on AI agents (https://www.odoo.com/it_IT/blog/business-hacks-1/5-surprising-ways-ai-in-business-management-transforms-productivity-1967):
  "First, a team member inputs a predefined prompt into the AI system, such as requesting the creation
  of a sales order." → the agent "generates the sales order for approval". **It works for staff.**
- Odoo Experience 2025 session "Transcription across Odoo apps: Exploring speech-to-text features"
  (odoo.com/event/odoo-experience-2025-6601/track/transcription-across-odoo-apps-exploring-speech-to-text-features-8766).
⇒ **Odoo HAS voice: dictation into text fields and meeting/call transcription, for its own users.**
Never write "Odoo has no voice" or "Odoo has no AI". The defensible line: Odoo's voice and AI serve
the people logged in to Odoo (your staff); the kitchen placing the order is not one of them.
- WhatsApp app (https://www.odoo.com/app/whatsapp): "Complete business transactions all via a WhatsApp
  message!", invoices and templates. Do not claim Odoo cannot message customers.

## ⚠⚠ Third-party voice ordering for Odoo EXISTS
- **Voicle Voice Agent – AI Phone Ordering for Odoo** (https://apps.odoo.com/apps/modules/19.0/voicle_voice_agent_order_creation):
  an AI agent answers the customer's phone call ("Callers dial your business number"), matches spoken
  product names and creates the sale order during the call. Needs eCommerce; Odoo Online not supported.
  Versions 16 to 19.
- Voice-command modules (Botspot "bsi_voice_command", "bsi_access_so_po_voice_commands") navigate the
  Odoo screens by voice for staff.
- Email/PDF order readers for Odoo 19 (third party): Automaited, TechFinna "AI Email → Sale Order",
  Oplify, Workist. No native reader of customer PDF orders confirmed.
⇒ Never "the only voice option for Odoo". The difference to state without naming anyone: those tools
listen to a phone call or read a message on your side; VoiceOrder Solutions puts the voice app in the
**customer's** hands, and the customer checks each line before sending.

## Pricing (PUBLISHED: Odoo wins this; figures stay OFF the page)
- https://www.odoo.com/pricing: "One App Free" ("One app, unlimited users", free "forever"), "Standard"
  ("All apps"), "Custom" (adds Odoo.sh / on-premise, multi-company, external API), per user per month in
  euros, with first-year discount. "All our plans include unlimited support, hosting and maintenance."
  "Implementation service and access to Odoo expert services" not included.
- Success Packs (https://www.odoo.com/pricing-packs): consultant hours "4 hours" to "200 hours", prices
  published; "98% implementation success rate" (their unaudited claim, do not repeat); "80% of projects
  within this scope are put in production in 200 hours or less". **No calendar go-live time stated.**
  Third-party partner estimates (8-12 weeks etc.) vary widely: not used.
⇒ Unlike most rivals, Odoo publishes its prices and VoiceOrder Solutions does not. Concede it in the
cost FAQ and the sourcing FAQ; keep every figure off the page; never compare costs.

## Integrations / the connection path
- Custom plan lists "External API". Odoo Apps store (apps.odoo.com) holds the third-party modules above.
- **VoiceOrder Solutions + Odoo: no published connection found** (web search "VoiceOrder Solutions"
  Odoo, 2026-11-09; nothing on apps.odoo.com). VoiceOrder Solutions' verified routes are
  Email/PDF/Excel/Word, EDI, API, QuickBooks: so whether an Odoo database takes one in directly is a
  demo question, never a claim.

## Angle for the VOS page
- **Odoo answers each new need with another app in the same database.** For the kitchen that still
  phones, Odoo's own next app is a web shop and portal: the distributor configures it, invites the
  customer, and the kitchen signs in, searches and types. VoiceOrder Solutions is the one piece that
  is NOT installed into Odoo: kitchens say the order into our app, check each line, and it goes out as a
  file or over EDI/API. Nothing is added to the database, and the kitchen never needs an Odoo login.
- Odoo's AI and dictation serve the people logged in to Odoo. Ours starts with the customer.
- Concede generously: accounting, invoicing, inventory, lots and expiry, barcode, replenishment rules,
  pricelists, an invitation-only B2B shop with Order Again, a customer portal, AI agents, dictation,
  published prices, free portal users.
- Different from NECS Entree ("typed vs spoken; inside vs beside") and NetSuite ("where the order ends
  up vs starts; web store add-on; AI for staff"): this page is about **the app model** (add an app vs
  add nothing to the database) and **the login** (portal vs a voice app).

## Must NOT claim
- No customer ordering / no reorder / no portal / no mobile / no B2B pricing in Odoo.
- "Odoo has no AI" or "no voice" (it has dictation, transcription, AI agents).
- "No one offers voice ordering for Odoo" (Voicle does, as a phone agent).
- Any Odoo integration, Odoo app listing, partnership or certification.
- Odoo's prices, Success Pack prices, user counts, app counts, the 98% figure, any go-live time for Odoo.
- That customer logins cost money in Odoo (portal users are free).
- That eCommerce is a paid extra (Standard includes all apps for one fee): say it has to be set up.
- Odoo is too big / enterprise-only / not for food.
- That VoiceOrder Solutions counts, plans or scans stock.
