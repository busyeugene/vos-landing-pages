# Brief: five new sections for each VOS calculator page

Eugene approved five new sections on the marginal cost calculator page (draft test page
`6ad05858af84441219bf54be`). They now get written for the other 22 calculator pages. **You write copy
specs only: local JSON files. Never call any Webflow tool.**

## What you produce
One file per page: `specs/<slug>.json` in this folder, in **exactly** the schema of
`specs/marginal-cost-calculator.json` (the approved reference). Read the reference first and match its
voice, length and level of detail. Same keys, same counts: 3 what-is cards, 9 who chips, 3 look steps,
4 VOS bullets, 3 next cards. Add `"figures"`: every number you use, with where it comes from.

## Inputs per page (paths in `pages.json`)
- `copySpec`: the copy the page ships today, plus its **verified figures table** (what the calculator
  renders on load). Read it fully. It tells you the reader, the default inputs and every figure.
- `fragment`: the calculator HTML. Check default `value="..."` inputs when the spec is unclear.
- `related`: the three calculators for the "What to run next" cards, **in that order**. Use them as given.
- `E:\Claude projects\VOS landing pages\knowledge-base\vos-product-facts.md`, section CURRENT STATE.

## The five sections
1. **whatis**: "What is <the concept>?" (the concept, not the calculator: "What is a reorder point?").
   Intro = a plain 40-55 word definition, extractable as an answer. Three cards that split the concept
   (what it counts / what it leaves out / the distributor wrinkle, or a better split for this concept).
   Use one or two of the calculator's default figures so the page and tool stay reconciled.
2. **who**: "Who uses a <keyword>" (the page's H1 keyword, lowercased). Intro names the reader.
   9 chips, each a role plus the job they use it for, 5 words max ("Buyers comparing supplier quotes").
3. **look**: "What to look for before you trust the number" (or a close variant). Three checks on the
   **inputs and assumptions**, the places this calculation goes wrong in practice. Not a recap of the
   output: the page's features rows already explain the output.
4. **vos**: where VOS honestly sits relative to this calculation. The body must say plainly that VOS
   does not calculate it, then name one real touchpoint from the verified facts below. If the honest
   answer is that VOS works on a different part of the business (the selling side when the page is about
   buying), say exactly that. 4 bullets, verified facts only, picked for relevance. `link_label` stays
   "Book A Demo". `img_alt` stays the reference's. **"VOS" or "VoiceOrder" appears exactly 3 times in
   this section (h2 once, body twice, like the reference) and nowhere else in the five sections.**
5. **next**: "What to run after <concept>". Three cards for the three `related` calculators, in order:
   a title that says the job, a one-sentence body that is true of that calculator (read its
   `free-tools.json` description: `E:\Claude projects\VOS landing pages\_webflow\free-tools.json`),
   `link_label` "Open the <name> calculator", `link_slug` = the related slug.

## Do not repeat the page
The page already has: a pain section, "how to use" steps, "what the calculator shows you" rows, an
"after the numbers" chip list, a levers card grid, a comparison table and an FAQ. Your sections must not
restate them. Say something new in each slot.

## Icons are fixed per slot, so alt text starts with the icon
`alt` = "<icon>, for <this slot's topic>".
- whatis cards 1-3: "Floor plan grid", "Stacked cases", "Case box"
- who chips 1-9: "Dollar sign", "Balance scale", "Rising chart", "Delivery truck", "Cash bills",
  "Cycling arrows", "Price tag", "Downward trend line", "Side by side bars"
- next cards 1-3: "Percent sign", "Rising line", "Check mark"
Order the chips so the role suits its icon where you can (a delivery role on the truck chip).

## Hard rules
- **Reader:** the distributor, unless the copy spec says the page is operator-side. Never a restaurant
  usage scene for VOS. If operator-side, VOS comes through their distributor.
- **Numbers:** only figures the calculator renders on load (from the spec's verified figures table or the
  fragment defaults) or the VOS facts below. List each in `figures` with its source. No invented stats.
- **Style:** no em dashes or en dashes anywhere (use commas, colons, periods). Straight quotes only.
  American English. Sentences 24 words max. H2s, card titles and step titles in sentence case; eyebrows
  and badges in Title Case. Plain words, 8th-grade reading level. Match the reference's mostly
  uncontracted voice ("does not").
- **Banned words:** delve, crucial, pivotal, foster, showcase, underscore, landscape, tapestry,
  seamless, robust, powerful, game-changing, skyrocket, supercharge, streamline, leverage, utilize,
  enhance. No sentence starting with Additionally, Furthermore, Moreover or However.
- **VOS never:** calculates costs or prices, forecasts demand, creates purchase orders to the
  distributor's own suppliers, counts or buys stock, runs a warehouse (WMS), plans routes, tracks
  shipments, invoices or collects, or is an ERP or accounting system. No prices, ROI figures or named
  integrations. Never "hands-free", "nothing to mishear", "fewer stockouts" (write "fewer stockout
  surprises"). Setup always carries "most".

## Verified VOS facts (the only VOS claims you may make)
- Customers order by voice in the VOS app (iOS and Android), 24/7; after-hours orders are captured.
- The customer reviews each line before sending; orders arrive confirmed.
- Each app order gets an order number, date and timestamp: who ordered and when.
- Orders reach the distributor in the format it uses: email to a rep or purchasing team as PDF, Excel or
  Word; EDI; API; QuickBooks.
- Each account has its own order guide: the items it orders, at the prices the distributor set, tied to
  the distributor's SKUs. The distributor updates guides and accounts and sees order history in one
  admin platform.
- 20-30 minutes saved per order compared with a phone order (state it flat, never "about").
- Real-time inventory visibility tied to order activity; the catalog updates as stock changes; fewer
  stockout surprises. VOS runs alongside the current inventory system and is not the stock system of
  record; stock figures come from the system the distributor runs today.
- Frees sales reps to sell. For DSD, drivers show up with the right product and the back office gets
  clean orders.
- Promos and confirmations reach accounts by notification and text.
- Most distributors are live in 24 to 48 hours; most customers place a first order the same day.
- Additive: works alongside existing ERPs and distribution platforms, nothing to rip out.

## Before you hand back
Run `python -I lint.py specs/<slug>.json` for each file you wrote and fix every error it prints.
Then reread each file once as the buyer would: does each section say something the page does not
already say, and is every number one the calculator really shows?
