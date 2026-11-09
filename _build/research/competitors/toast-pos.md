# Toast POS — competitor research for /toast-pos-alternative (OPERATOR page)

**Verified live 2026-11-09** (WebFetch; pos.toasttab.com read through r.jina.ai because it 403s the
plain fetcher; support.toasttab.com read directly):
- https://pos.toasttab.com/ (product menu and headlines)
- https://pos.toasttab.com/pricing
- https://pos.toasttab.com/products/inventory-management
- https://pos.toasttab.com/products/xtrachef
- https://pos.toasttab.com/products/toast-now
- https://support.toasttab.com/en/article/86-an-Item (last updated Oct 6, 2026)
- https://support.toasttab.com/en/article/Toast-IQ-Overview (last updated Oct 6, 2026)
- https://support.toasttab.com/en/article/Toast-IQ-Inventory-Overview (last updated Sep 10, 2026)
- https://support.toasttab.com/en/article/Get-Started-with-Toast-Inventory (last updated May 22, 2026)
- https://support.toasttab.com/en/article/xtraCHEF-Create-Orders (last updated Apr 28, 2026)
- Trade press / releases (not Toast's site): digitaltransactions.net SoundHound + Toast (Jan 10, 2023);
  Toast Drive-Thru release (businesswire, Apr 14, 2026); Presto + Toast (businesswire, Sep 21, 2026).
- Sibling digest `xtrachef.md` (2026-10-27) covers xtraCHEF by Toast in depth; re-checked the ordering
  article above on 2026-11-09 and it still holds.

## 1. What it is, and what to call it
- Toast is a restaurant POS and platform. Product menu (homepage): **"Point of sale"**, **"Toast IQ
  assistant"**, **"Hardware"**, **"Online ordering"**, **"Kitchen display system"**, **"Payments"**,
  **"Handheld POS"**, **"Self-ordering kiosk"**, **"Toast Mobile Order & Pay®"**, **"Toast Now management
  app"**, **"Payroll"**, **"Scheduling"**, **"Loyalty"**, **"Toast Tables™"**, **"Toast Delivery
  Services®"**, **"Multilocation management"**, and under a **"Supplier & Accounting Suite"** heading:
  **"xtraCHEF cost analytics"** and **"Inventory management"**.
- Buyer: the restaurant owner/operator. The keyword is "toast pos alternative": people searching it are
  usually weighing a POS change.
- **Naming on the page:** "Toast POS" where the keyword needs it, otherwise "Toast". "xtraCHEF by Toast"
  may be named once as Toast's own supplier-ordering tool (registry `competitorAlso` is not needed:
  claims.js does not ban xtraCHEF; it bans "Toast", which is the registry competitor).

## 2. The POS-centered day: what Toast is built around
- Guest orders in, from every channel: POS terminals, handhelds, kiosks, online ordering, Mobile Order &
  Pay, third-party delivery toggles (Toast Now: **"toggle online ordering, Local by Toast, and third-party
  apps ... on or off"**), the kitchen display.
- Payments, payroll, scheduling, loyalty, marketing.
- **Hardware:** pricing page: **"Toast's services do not function with every device and may only be used
  on approved Toast hardware."** Upfront costs: **"The upfront costs for Toast are hardware and
  implementation."** (Used on the page only as "leaving means new terminals", no figures.)
- Toast Now app: **"View hour-by-hour totals"**, **"Mark items in stock and out of stock"**, edit shifts.

## 3. ⚠ Out of stock / "86" (the Toast-specific hook for this page)
- 86-an-Item: **"you can 86 it to mark it as out of stock so guests can't order it on the POS, online,
  or through third-party channels."** It **"stays out of stock, or 86'd, until you mark it back in
  stock."** In Toast Web you **"enter 0 to 86 the item"**; Toast Now lists 86'd items **"on the Stock
  page"**. The article mentions **no supplier and no reordering**: 86 stops guests ordering the dish; it
  does not order the ingredient back in.
- Menu-item quantity countdown (Toast platform guide): a "Quantity" status counts down as the item sells
  and flips to Out of Stock at zero; an "86 report" lists items at or below a threshold. Toast's own guide
  says this status **"is not related to the Toast Inventory module"**.
- Page use: "when you 86 a dish, Toast tells your guests it is gone; getting the ingredient back is an
  order to your distributor". Never imply VoiceOrder Solutions reads the 86 list or Toast's stock.

## 4. ⚠ Supplier ordering inside Toast (concede ALL of it)
- **xtraCHEF by Toast** (US): pos.toasttab.com/products/inventory-management: **"Send orders directly to
  your suppliers with our seamless purchasing & order management capabilities."**, **"Take inventory once,
  and we'll create an order guide for you based on what's on hand and what's required to maintain par."**,
  **"Schedule recurring orders to ensure you're maintaining par levels for your most-used products."**,
  **"Get counts done quicker on your phone"**. xtraCHEF is **"a restaurant inventory tool that combines
  invoice automation, recipe costing, vendor management, ordering, product catalogs"** **"and Toast POS
  sales data."**
- How an xtraCHEF order reaches the supplier (Create-Orders, Apr 28, 2026): **"either by a downloadable
  PDF you can pass on or send to your vendor"** or **"via email, directly from xtraCHEF account."**
- xtraCHEF sits in the **"Supplier and Accounting Suite"** on the pricing page with **"Essentials"** and
  **"Pro"** tiers: a separate product from the POS plans. (Its per-location price is published on a help
  article; see xtrachef.md. Keep it off the page.)
- **Toast IQ Inventory**: **"a real-time inventory platform built into Toast Web."** **"currently in
  limited release with select customers."** It can **"Create purchase orders, send them to suppliers, and
  receive against them."** Pars: min/max, **"not yet supported for ingredients and supplies."**
- **Toast Inventory** (outside the US): **"currently in a Beta testing release in Australia, Canada,
  Ireland, and the UK"**; purchase orders, suppliers, counts from an iOS app (Early Access).
- POS plans list **"Perpetual inventory management"** and **"Automated inventory"** as options (pricing
  page; the check marks did not come through the fetch, so which plan includes what is unread).
- **Net:** Toast DOES have supplier ordering, through xtraCHEF (email or PDF) in the US and newer
  inventory products elsewhere or in limited release. Never "Toast can't order from suppliers".
  The honest line: the POS itself is built around the guest's order; ordering supplies is a separate
  Toast product, and the order still has to reach a distributor somehow.

## 5. ⚠ TRAP: voice, AI, phone — every hit
- **Guest voice ordering exists around Toast.** SoundHound + Toast (digitaltransactions, Jan 10, 2023):
  **"Toast Inc. has partnered with SoundHound AI Inc. to add voice ordering over the phone to its
  point-of-sale system."** **"The application can be deployed by any restaurant to take food and drink
  orders over the phone."** Toast Drive-Thru (Apr 14, 2026): **"AI voice ordering integrations with
  partners"**. Partner phone answerers (Incept AI on support.toasttab.com, others) take guests' calls.
- So on a Toast page "voice ordering" reads as GUESTS calling the restaurant. The page must say early
  that this is the restaurant ordering supplies FROM ITS DISTRIBUTOR, and concede in one line that
  Toast's voice ordering (via partners) is for guests and a different thing.
- **Toast IQ** (Overview, Oct 6, 2026): a conversational assistant in Toast Web and Toast Now that
  answers questions and makes changes **"only with your approval"** (front-of-house settings, kitchen
  settings, KDS routing, catering setup, drafting email/SMS campaigns). The article does not mention
  supplier orders or voice input. Write nothing about Toast IQ beyond "Toast's AI assistant".
- Never "Toast has no voice", "they type, we speak", "no AI".

## 6. Pricing
- ⚠ **Published starting prices** on pos.toasttab.com/pricing (Starter Kit, Point of Sale, a bundle;
  "Build Your Own" is custom). Extra terminals cost extra. xtraCHEF tiers listed with no price on that
  page. → Page: "Toast publishes starting prices on its pricing page". No figures. No pricing row.

## 7. Integrations
- Toast integrates through its partner ecosystem (Partner Connect): delivery, online ordering, phone AI,
  inventory tools. Nothing connects Toast to VoiceOrder Solutions. No integration, no partnership.

## 8. Unaudited numbers — do NOT repeat
- Toast IQ usage counts, location counts, drive-thru market figures, any "X restaurants" line.

## Real strengths to concede (biggest first)
1. Takes guest orders from every channel (POS, handhelds, kiosk, online, mobile order & pay, partner
   phone and drive-thru voice), straight to the kitchen display.
2. Payments, payroll, scheduling, loyalty and sales reports in one system.
3. 86 an item once and it stops selling everywhere (POS, online, third party).
4. Supplier ordering through xtraCHEF by Toast: order guides from counts and pars, recurring orders,
   email or PDF to any vendor.
5. A management app (Toast Now) on the owner's phone.

## Angle for the VOS page
**Two kinds of order.** Toast POS is built around the order a GUEST places with you: it takes it from
every channel, sends it to the kitchen, takes the payment, and 86es a dish when you run out. VoiceOrder
Solutions is for the opposite order, the one YOU place with your food distributor to restock: spoken
into the app your distributor gives you, checked line by line, sent with an order number. The Toast hook:
"86" tells guests a dish is gone; restocking it is an order to your distributor, and that is a separate
step you can change without touching the POS. Leaving Toast means new terminals, menus and staff
training, and would not change how the distributor's order is placed.
Not taken by any sibling: xtraCHEF owns "whose guide" (invoice-priced list vs distributor's guide) and
this page must not argue it.

## Must NOT claim
- That Toast cannot order from suppliers, has no order guides, pars or recurring orders (xtraCHEF does).
- That Toast has no voice ordering or no AI (guest-side voice via partners; Toast IQ).
- That VoiceOrder Solutions reads Toast sales, the 86 list, menu-item counts or stock; or sets pars.
- Any integration, sync, partnership or "works with Toast".
- Any Toast or xtraCHEF price figure; any VoiceOrder Solutions price; whether the restaurant pays.
- That xtraCHEF is being retired, or that Toast IQ Inventory is generally available.
- Toast hardware claims beyond "approved Toast hardware" (their own words).
