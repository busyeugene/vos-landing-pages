# Microsoft Dynamics 365 Business Central — competitor research for `/alternatives/business-central-alternative`

**Verified live 2026-11-09.** Read directly (no 403s): microsoft.com product and pricing pages, and
Microsoft Learn docs. No prior entry exists. On the page, write "Business Central" throughout:
claims.js bans "Microsoft Dynamics" (named integrations). "Microsoft's Business Central" at most once.

## Positioning (verbatim)
- Product page (https://www.microsoft.com/en-us/dynamics-365/products/business-central):
  **"Get AI-powered enterprise resource planning (ERP) for small and midsize businesses—trusted by
  55,000 companies."** Also "agentic resource planning in Business Central". "55,000" is their own
  unaudited figure: do NOT repeat it, even as "tens of thousands".
- Industry list on the same page includes wholesale distribution, with a section
  **"Build a responsive, profitable distribution business."** Food is not mentioned on that page;
  food depth (catch weight etc.) comes from partner apps on AppSource.
- Sold and implemented through partners: pricing page, **"Contact a partner to purchase or to get an
  assessment, consulting services, or additional pricing."**
- ⇒ It is BUILT for small and midsize businesses, i.e. the same size band as VOS's buyer. Never write
  "too big for you", "enterprise ERP", or anything implying it does not fit a small distributor.

## What it does for a distributor (concede all of it)
- Product page headings: "Accelerate sales processes", "Drive supply chain optimization", "Improve
  inventory management", "Optimize warehouse management", "Control financial data"; inventory:
  "Replenish inventory based on actuals, demand, and availability using AI-powered sales and inventory
  forecasting." ⇒ a full stock system of record with replenishment planning.
- Item tracking (https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-work-item-tracking):
  "You can assign serial numbers, lot numbers, and package numbers to outbound and inbound documents";
  expiration dates; "Picking by FEFO"; item tracing; barcode scanning "with the Business Central mobile app".
- Catch weight: NOT native; partner apps, e.g. AppSource "AL Catch Weight Management". So the table
  must not tick "catch weight" as Business Central on its own. Lots, expiry and FEFO picking are native.
- EDI: not a native engine found in Microsoft docs; partner apps on AppSource. Do not tick "EDI" as
  native; do not say "no EDI" either.

## ⚠⚠ AI ORDER CAPTURE: the Sales Order Agent (native, generally available)
Source: https://learn.microsoft.com/en-us/dynamics365/business-central/sales-order-agent (doc dated
2026-10-02) and https://learn.microsoft.com/en-us/dynamics365/business-central/sales-order-agent-setup.
- **"The agent uses AI to analyze customer requests received via email and locates the customer in
  Business Central. If important details are missing or more choices are available, the agent engages
  in multiturn email conversations to clarify the request. It checks inventory and informs the customer
  about the availability of the items they're looking for. The agent then follows up with a sales quote
  or order, based on configuration."**
- Reads attachments: **"The agent reads order details directly from supported PDF, PNG, and JPG
  attachments."** (Excel/Word are not in that list; do not make an argument of it, it may change.)
- **"The agent always creates a sales quote as the first step, even when the customer asks for an
  order."** Default flow: quote PDF emailed to the customer, customer confirms by email, then the quote
  becomes an order. Can be configured to go straight to an order ("Send quotes for confirmation" off).
- Human in the loop: **"The agent always involves designated Business Central users to review and
  approve all outgoing messages before it sends them to customers."**
- Item matching: exact identifier, then "Semantic attribute matching", then "Broader fuzzy search";
  "the quality of product information in Business Central affects its effectiveness."
- Customer identification: **"For security, the agent identifies contacts exclusively by matching the
  sender's email address to the E-Mail field on contact cards."** Forwarded emails are not matched
  automatically.
- Also: "You can start a Sales Order Agent task manually ... Enter the request in the Message text
  field." ⇒ staff CAN type a phoned order into a task by hand. Do not write "it cannot handle phone
  orders"; write that it starts from what was written down.
- Status: setup page, "Sales Order Agent is listed under **Generally available**." Languages include
  English (United States) among others. Billing: **"Sales Order Agent uses Copilot Credits"**
  (consumption billing). Mailbox must be Microsoft 365.
- ⇒ The honest contrast: the agent reads what a customer WROTE (an email or a PDF/photo), then checks
  happen AFTER it is sent, by email back-and-forth and by your staff approving each outgoing message.
  VOS: the kitchen speaks, sees lines from its own guide, and fixes them BEFORE sending. Both have a
  review; the difference is WHO reviews and WHEN. Never imply the agent is unreliable, and never imply
  a VOS order cannot be wrong.

## ⚠ Other Copilot order help (staff-side)
- "Suggest lines on sales documents with Copilot": on the Lines FastTab a user chooses "Get line
  suggestions" and enters a prompt; works from "structured input or natural language", files included;
  suggestions "aren't saved ... until you choose the Keep it button"
  (https://learn.microsoft.com/dynamics365/business-central/sales-suggest-sales-lines-with-copilot).
  This is a tool for your staff inside Business Central.

## ⚠ Customer-facing ordering: NOT native as a B2B portal, but partners sell many
- No first-party B2B customer portal found in Microsoft docs. Partner portals on AppSource and partner
  sites: Intelegain, NuBeTech, dc AG dynamic commerce, inecta ("aimed at food distributors", catch
  weight), and others. Do NOT name them (OrderEase is also one; it is another compare page).
- Native **Shopify Connector** (https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/get-started):
  "The app is preinstalled for all new sign-ups and trials." It connects an outside online store (a
  separate subscription). claims.js bans "Shopify": on the page say "an online store connector" at most.
- ⇒ Safe wording: "Business Central has no customer ordering portal of its own; partners sell them as
  add-on apps." Concede that those portals exist and work.

## ⚠ Mobile
- https://learn.microsoft.com/en-us/dynamics365/business-central/install-mobile-app: staff app on App
  Store and Google Play; "Review your business data", "Email sales quotes and invoices", "view and edit
  data". It is for licensed users (signs in with the Business Central user name). Not a customer app.

## ⚠⚠ VOICE
- Native: no voice order entry found in Microsoft docs or the product page (searched 2026-11-09).
  Copilot line suggestions take typed prompts.
- **Third-party voice add-ons exist.** ECOSIRE "AI POS Assistant & Voice Order", a build-to-order
  Business Central extension: "Voice ordering for drive-thru and self-service kiosks — speech is
  transcribed and mapped to BC items" (https://ecosire.com/apps/dynamics-365-business-central/bc-ai-pos-assistant).
  Aimed at point of sale, not at a distributor's trade customers. Partners can also build custom
  extensions on AppSource.
- ⇒ Never write "the only voice option for Business Central" or "nobody offers voice". Concede in an
  FAQ without naming anyone: add-ons and custom builds exist, mostly at a counter or for staff.

## Pricing (PUBLISHED, so they win this row)
- https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing: three plans with
  per-user prices shown "user/month, paid yearly" (Essentials, Premium, Team Members). Agents billed on
  Copilot Credits. ⇒ Business Central PUBLISHES a price; VOS does not. Concede it (FAQ, and a table row
  they win). **Keep every figure off the page**; let the sourcing FAQ carry the date. Never pair it
  with anything that implies a VOS price or basis.

## Implementation
- No implementation duration published on the product or pricing pages ("Rapidly deploy and onboard",
  unquantified). Partner timelines vary and were not collected. Do not state or knock any figure.

## Integrations / the connection path
- VOS + Business Central: no published connection found (web search 2026-11-09). VOS's verified paths
  are Email/PDF/Excel/Word, EDI, API, QuickBooks. "Which format your Business Central setup takes in" is
  a demo question, never a claim. Note: the Sales Order Agent reads PDF attachments from a Microsoft 365
  mailbox, so a VOS PDF order *might* be read by it; that is a guess, unverified, and must NOT appear.

## Angle for the VOS page
**Their AI checks the order after it is sent; ours lets the kitchen check it before.** Business Central
already has AI order capture: its Sales Order Agent reads customer emails and PDFs, builds a quote first,
emails it back, and your staff approve every outgoing message. That is a check after the request has
left the kitchen, carried out by email and by your team. VoiceOrder Solutions moves the check to the
kitchen: the buyer speaks, sees lines from its own guide and fixes them before anything is sent. For the
kitchens that call rather than write, there is nothing in the inbox for the agent to read at all.
Secondary point: Business Central has no customer ordering portal of its own (partners sell them).

Distinct from NECS Entree (typed vs spoken, inside vs beside) and NetSuite (where the order starts vs
ends; web store add-on; AI for staff). Here the axis is WHEN and BY WHOM the order is checked.

## Must NOT claim
- That the Sales Order Agent is inaccurate, unreliable, preview-only, or unavailable in the US.
- That Business Central has no AI, no order capture, no mobile app, no lots/expiry/FEFO.
- That nobody offers voice ordering for Business Central.
- Any Business Central integration, AppSource listing, partnership or certification for VOS.
- That a VOS order cannot be wrong; the safeguard is the buyer's line review.
- That Business Central is too big / enterprise; it is built for small and midsize businesses.
- Their per-user price, the 55,000 figure, the Forrester payback, any implementation figure.
- Named partner apps (Shopify, OrderEase, ECOSIRE, inecta...), "Microsoft Dynamics".
- Native catch weight or native EDI (both are partner apps) as a tick in "on its own"; also not "no EDI".
