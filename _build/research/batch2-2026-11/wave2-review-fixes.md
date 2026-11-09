# Wave 2 (6 inventory compare pages): verified review fixes, 2026-11-09

Five reviewers (2 fact-checkers who re-checked the rivals' sites live, 2 distributor-owner buyers, 1
proposition-sameness reviewer). Every item was checked against the digest or KB before being listed.
Already done centrally: the bullet "Over EDI, the API or QuickBooks, nobody on your team retypes it" is now
"Over EDI or the API, when your setup takes it, nobody retypes it" (an order put into QuickBooks is not an
order in the rival's stock system). Do not reintroduce the old line.

## SHARED (all 6)
T1. STOCK SECTION. On an inventory-system page, "real-time inventory visibility" + "the catalog follows /
keeps pace / updates on its own / automatically" + "nothing links the two" reads as a contradiction and as
VoiceOrder Solutions outdoing the rival's stock system. Keep the canonical paragraph (it already says "a demo
shows how the levels connect"). Remove any "on its own", "automatically", "keeps pace" or "catalog follows
stock" bullet you wrote; replace with e.g. "Your stock counts stay in <X>; the demo shows how levels would
reach the app". Scope "Fewer stockout surprises" to the distributor's team (never "for chefs": customers
seeing stock is unconfirmed). On inFlow, which already shows customers live stock, keep the section minimal.
T2. RETYPING, SAID ONCE AND EARLY. In the hero or problem lead, in plain words: by email your desk still
enters the order, from a list the chef already checked; over EDI or the API it may go straight in, and the
demo checks. No headline, table label or card may imply the desk stops typing on every route.
T3. PRICES IN TWO PLACES. One plain line per page (guide row or coexistence card): "You keep each guide's
prices current in our admin; whether they can update from <X> is a question for the demo." Never claim
prices "don't sync" or "sync" (unconfirmed). Rival pricing features ticked in both columns must not imply
the app uses the rival's pricing rules.
T4. CALL-IN ROWS. Table labels like "A call-in account's order arrives numbered" contradict "a call gets no
number from us". Scope to "A kitchen that used to call now sends a numbered, timed order".
T5. WORDS. "line"/"lines" for order items -> "item"/"items" (chefs hear the cook line); "the kitchen's buyer"
and "chef" for the same person -> use "chef" consistently; "your kitchens" (the distributor owns none) ->
"your restaurant customers"/"restaurants"; "purchasing team" for incoming customer orders -> "order desk";
jargon to explain or cut: IDR, MCP, FEFO, "early access", "allocates"; never point at the page ("both columns",
"rows below", "See Both Columns" button -> "See What Changes"); cut keyword-stuffed sentences in the cost FAQ
(one keyword use per sentence, read naturally); "a made-up order" -> "a sample order".
T6. TABLES. 6-7 of 9 rows are ties on every page. Swap one tie per page for a true row VoiceOrder Solutions
wins on an ordering point specific to your angle. No pricing rows; no row implying our pricing.
T7. SAMENESS (from the sameness reviewer): give each slot your page's angle.
- Testimonials (both placeholders): echo YOUR angle; never "our other channels already flowed in", "chefs
  never used the portal", "the system runs as it always did", "now the chef checks the list first" (all on
  2-5 pages). Modest, no numbers.
- The "other tools / their AI work at your desk; ours sits with the chef" FAQ is on 5 of 6: keep it as its
  own FAQ only on zoho and unleashed; elsewhere fold a one-line concession into another relevant answer and
  use the slot for a page-specific question (listed per page below).
- Hero trust line: swap one of the three items for your angle.
- VOS-side headings: voice-row H3, guides H3, step H4s, mid-CTA H3 and body, final-CTA H2 and body,
  coexistence H2 and eyebrow must be your own (check `node grid.js --dupes`; the mid-CTA and final-CTA should
  name your angle).
- "Change a guide and the next order uses it" (4 pages), "...remains <X>'s job" (4), "corrects anything that
  came out wrong" (5): reword yours.
- Problem lead sentence 1 ("few searchers want to leave <X>") opens 5 of 6: open on your angle instead, with
  the keyword inside it.
- Cost FAQ closer and "Only at one job" opener: your own words; the "better than" answer names your angle.

## cin7-alternative (keeps the CHANNEL angle; the others move off it)
- Problem card 3 (portal built for restocking shelves) -> a card on the EDI split from your own table:
  retail chains get EDI (built in on Omni, through partners on Core), restaurants get a phone line. Move the
  portal fact into a new FAQ "Doesn't Cin7's B2B portal already let restaurants reorder?".
- Problem card H4 "It was written for brands selling product" is mis-scoped (Cin7 has a wholesale &
  distribution page): drop this card's argument or make the H4 "Its food page is written for brands and makers".
- Coexistence card 3 (IDR reads PO files; a calling chef sends none) is the Syspro argument: replace with an
  Omni/Core point or cut to one sentence.
- FAQ 4 phone agents: "AI phone agents can answer your calls" (the digest does not show one creating Cin7
  sales). Fold this concession into another answer (T7).
- FAQ 6 (setup) repeats FAQ 3's "we install nothing": merge.
- Table: add "(forecasting add-on)" to the demand-planning row and "(add-on)" to the POS row.
- "Export what each restaurant buys from Cin7" -> "Export from Cin7 the items each restaurant buys from you".
- Reduce "channel" (about 12 uses) to where it carries the argument.

## zoho-inventory-alternative (portal you can pay in but not order in: strong, keep)
- Table row 2 cell -> "Phoned in, or typed into a separate online store such as Zoho Commerce"; row 4 cell ->
  "Not in the customer portal; ordering needs a separate online store" (Zoho's help page offers Zoho Commerce,
  Amazon or Shopify; never name the last two).
- Problem card 3 "Ordering online needs a second Zoho product" (copies netsuite's module card and is
  overstated) -> the automation-services fact: phone voice agents and smart speakers can already create Zoho
  sales orders through connectors you build and maintain, and the caller sees no list to correct.
- Guides H3/body: a price list is not a guide -> "Guides built from what each account buys in Zoho" /
  "Send us a spreadsheet of what each account buys, with its prices from Zoho Inventory."
- Comparison lead "whether your team assembles the order or the kitchen does" -> state the portal gap.
- Cost FAQ: drop "a free plan among them".
- Hero lead: do not assume the reader uses the portal ("Your kitchens can pay bills in Zoho's portal but cannot
  place an order there...").
- Mid-CTA "voiced order", final H2 "calling kitchens" -> plain words.

## inflow-inventory-alternative (keeps "chefs who won't shop the Showroom"; Acumatica owns "skip the portal")
- Build the H1 and hero sentence 1 on inFlow's own verbatim promise "No more phone orders" and the calls it did
  not end. The current H1 "Say It, Skip Browsing" is cryptic.
- Problem card 3 (its chat ordering sits at your desk) is the "their AI serves your staff" argument: replace;
  keep the AI/MCP fact in FAQ 4 only and fix it: "inFlow's built-in AI writes reports on request, and through
  its MCP server an outside AI assistant can raise an order that someone on your team asks for." (they are
  separate things). Fold FAQ 7 (the inFlow mobile app is for your team) into FAQ 4; use the freed slot for an
  inFlow Pay point (invoices and card payments stay in inFlow; we send only the order), which also lets
  coexistence card 3 stop copying odoo's "Billing stays with Odoo".
- "spotting new lines and paying online" -> "browsing pictures and checking out online" (unsourced; Pay is
  US/Canada only).
- Comparison lead "hand you the list in writing" -> fix (the chef speaks).
- Add a table angle row, e.g. "Order without scrolling a catalog | ✓ | Showroom: browse, add to cart, check out".
- "so a chef orders from its own lines" -> "so each chef orders only from that restaurant's usual items".
- H2 "How a calling kitchen becomes a speaking one" -> plain words.
- Avoid "what is short tonight" (Odoo owns "today's shortages").

## fishbowl-inventory-alternative (RE-ANGLE: off "channels" and off "in writing")
- New angle from your own facts: Fishbowl promises "Nothing typed twice", and the one typing left is the first:
  the phoned order keyed into Fishbowl. And the sales order must start in Fishbowl (the QuickBooks invoice
  follows it), so it has to be keyed into Fishbowl specifically. Keep the "retail morning" card as one card.
  "in writing" appears about 8 times and collides with Syspro's H1 and final CTA: cut most of them.
- H1 "For Restaurant Orders" reads like a label: rebuild on the new angle (plain, 6-9 words).
- Problem card 3 (a portal waits for the chef to log in) repeats your FAQ 3: replace with the QuickBooks point
  above. If any line keeps it, "picks each item from a list or a search" (portals have favorites lists).
- QuickBooks FAQ: Fishbowl's own QuickBooks page says "There is no way to automatically transfer sales orders
  and purchase orders directly between Fishbowl and QuickBooks"; its QBO page says Fishbowl exports to
  QuickBooks; QBO two-way sync is "coming soon". Rewrite: "Fishbowl's own QuickBooks page says sales orders do
  not pass automatically between the two, so do not count on an order we put into QuickBooks reaching
  Fishbowl. A file, EDI or the API is the more direct choice, and the demo settles which." Update the digest's
  "UNCLEAR" line with that quote and URL (https://www.fishbowlinventory.com/integrations/quickbooks).
- The other-tools FAQ admits no voice tool was found: fold the API / early-access AI line into the "linked"
  FAQ and use the slot for "Our retail chains send EDI. Can restaurant orders come in the same way?" (Fishbowl's
  EDI is built for retailer trading partners; the demo decides).
- Metaphors: "an extra door", "QuickBooks still hears from Fishbowl" -> plain ("QuickBooks still gets its
  invoices from Fishbowl").
- "Nothing typed twice, apart from the first entry" H4 -> plain; "Export what each account buys and pays from
  Fishbowl" -> "Export each account's usual items and prices from Fishbowl".

## unleashed-software-alternative (reps sell, chefs order: strongest, keep)
- Comparison lead and problem card 1 overstate the store checkout as the only rep route: "since Unleashed stopped
  supporting its rep ordering app in 2024, a rep who takes an order for a customer enters it through the store
  checkout or as a sales order in Unleashed." ("dropped" -> "stopped supporting").
- Problem lead "any order a customer does not type in themselves still has to be entered by one of your people"
  contradicts your FAQ 4 and ignores EDI -> "with Unleashed on its own, an order that does not come through the
  store or a customer's EDI is usually entered by one of your people."
- Table "The chef places the order, so the rep does not have to | A rep orders on the customer's behalf" ->
  label "A chef who skips the store still places the order" (store users place their own).
- "Fewer stockout surprises for chefs and reps alike" -> "...for your team and your reps".
- FAQ 2 "the books are Unleashed's work" -> "invoicing" (Unleashed exports to accounting software).
- FAQ 4 "Those work on something the customer has already sent" -> "...or give the customer an app to type
  into" (the marketplace app has a buyer app). End that answer on reps, not "the chef checks each line".
- Problem card 3 "Its answer to phone orders is a web store" -> "A chef's text to the rep is still an order
  someone types up" (your testimonial's evening write-ups).
- "Table: Buy by the pallet, sell in smaller units ✓ ✓" implies unit ordering in our app: drop or reword so
  the VoiceOrder Solutions side claims nothing about units (KB Q14).
- "Emailed to a rep, your purchasing team, or both" -> "your order desk".
- Hero "correct anything the app got wrong" -> "check each item and fix anything before sending".
- Meta "so reps write fewer up" -> "so reps write up fewer orders" (120-160, keyword kept).

## brightpearl-alternative (RE-ANGLE: off "channels" and off Unleashed's "who enters it")
- New angle from your own facts: Brightpearl's Automation Engine ("Automate the ordinary. Catch the
  exceptional.") routes, allocates and invoices orders under the rules you set. A wrong item typed from a call
  looks ordinary, so the rules carry it straight through. With VoiceOrder Solutions the chef sees the list and
  fixes it before it is sent. This is accuracy, not timing (Business Central owns "when the check happens") and
  not "who types" (Unleashed). Rebuild the H1, comparison eyebrow/H2, hero, FAQ 1 and 2, final CTA and the
  testimonials on it.
- STOP "the chef writes" (eyebrow, H2, hero, table): the product is voice; the chef SAYS the order.
- Problem card 2 "often over kitchen noise": drop the noise framing (invites "your app hears the same kitchen",
  KB Q21). The point is that nobody at the kitchen saw the list before it went in.
- Table "A chef can place tomorrow's order after you close" -> "A chef who would phone can still order after you
  close" (partner webstores take orders 24/7).
- Table "The chef, not your desk, writes up each line" -> scope to chefs who phone today, and fix "writes".
- FAQ 4 "so we are not the only add-on" (implies we plug into Brightpearl) -> "so ours is not the only way to add
  ordering", and end on our reason, not on competitors.
- Comparison lead "routes, allocates and invoices each one like any other" -> "can then route, reserve stock for
  and invoice it under the rules you set".
- "Prices updated per account whenever they change" -> "You update each account's prices whenever they change".
- "Retail ERP" FAQ reads as a passive-aggressive knock: cut it, or "Brightpearl is built mainly for retail, and
  wholesalers run on it too. If yours does, keep it." Cost FAQ: drop "includes unlimited users".
- Coexistence card 3 "Retail and wholesale keep one stock count" is channel residue: keep the fact in one place.
- "your kitchens" -> "your restaurant customers"; "When the office is shut" -> "closed".


# Wave 2 verification round (the changed-lines pass)

# Wave 2 verification-round fixes (2026-11-09). All checked against digests / KB.
Apply every item for your pages. Each gives the current line and a fix; you may reword the fix to clear a
phrasecheck collision, keeping its meaning exactly. Small edits only.

## cin7-alternative
1. H2 line 2 "Nothing you sell through today changes." (the phone does change) -> "Your other sales channels stay as they are."
2. Linked FAQ "Third-party tools reach Cin7 too, such as readers for emailed purchase orders and AI agents that answer calls; ours sits with the chef." (implies our app reaches Cin7) -> "Other tools are used beside Cin7 as well, such as readers for emailed purchase orders and AI agents that answer your phone. Ours is in the chef's hands."
3. Reports FAQ "Entered by your desk or sent in directly, it becomes a sale..." -> "Whether your desk enters it or it comes in over EDI or the API where your setup allows, it becomes a sale in Cin7 like any other and counts in your sales and stock figures."
4. Problem lead: "they" after the emailed-orders clause reads as emailed orders sent by EDI; "on the phone to your desk" is British. Split: "Orders the app emails you are still entered by your team, from items each chef has checked. Orders sent over EDI or the API can land in Cin7 directly if your setup accepts them, and a demo settles that."
5. Hero "Cin7 keeps the stock, the batches, the webstore and the portal." -> "...the stock, the batches and any webstore or portal you run." FAQ 1 "Your stock, your webstore, the portal and your EDI stay with Cin7." -> "Your stock, and any webstore, portal or EDI you run, stay with Cin7."
6. IDR card body: explain once: "On Cin7 Core, an add-on called IDR reads a customer's PO file and turns it into a sale your team approves."
7. Omni FAQ "If that interests you, the demo covers..." -> "If you would like orders to arrive that way, the demo covers..."
8. Card 3 H4 "Retail chains get EDI. Restaurants get a phone line." -> "Retail chains send EDI. Most restaurants still phone."
9. Card 1 H4 comma splice "Each connected channel sends data, a call sends nothing" -> "Every connected channel sends data. A call sends nothing."
10. Screenshot placeholder "line-by-line" -> "item-by-item".

## zoho-inventory-alternative
1. FAQ "Doesn't Zoho's own AI already create orders?" makes the "their AI serves your staff" argument (reserved for sage-x3/prophet-21). Make it a short concession: "Zoho's AI, Zia, answers questions about stock, orders and customers, and Zoho says AI agents can create orders through its tools. The voice links above are another route. Our app is a different thing: the chef says the order and checks each item from their own guide before it is sent." (Adjust "above" if the voice links are elsewhere.)
2. Problem lead 2nd sentence (~50 words; "see and settle its orders" loose; "we confirm that in the demo" promises an outcome) -> "...it can view its orders and pay its bills there, but has nowhere to put the next one, so that order still reaches you by phone. An order the app emails you is still keyed in by your team, though the chef has already checked every item. Through EDI or the API it can go into Zoho directly if your account allows it, and we check that in the demo."
3. Comparison lead "Zoho gives your customers a portal for invoices, with no ordering inside it." -> "Zoho's customer portal is built for invoices and payments, with no ordering inside it."
4. Guides body "every account's usual items, with its prices" -> "each account's usual items, with that account's prices from Zoho."
5. Step lead "your restaurant customers move their orders into the app" -> "...can start ordering in the app."
6. Testimonial "Now the order is off the phone too." -> "Now most of those orders come through the app instead."
7. Formats "a direct feed using EDI or the API" -> "...or sent straight over EDI or the API, if your Zoho Inventory account can take orders that way." If the formats list mentions QuickBooks, add that an order sent to QuickBooks is not in Zoho Inventory.

## inflow-inventory-alternative
1. Problem lead opener "A search for an inFlow Inventory alternative often starts with..." (same frame as Cin7's) -> "Look up an inFlow Inventory alternative and the reason is often a set of kitchens Showroom never won over: their chefs would rather name items than shop for them, so they keep calling."
2. Card 3 (lapsed invite reads as a nitpick) -> "Each customer gets into Showroom through an emailed invite, and inFlow's Learning Center says an invite is valid for two weeks. A chef who never opens it keeps calling, and that order still lands on your desk."
3. Hero lead (55 words; opens on inFlow) -> e.g. "Give the kitchens that still call, even with inFlow's Showroom promising "No more phone orders," an app to order in. Their chef speaks the items, fixes any that came out wrong, and sends a checked list. inFlow Inventory still looks after stock, the Showroom and your sales orders." (check promote.js stays 1/11)
4. Stock bullet "Counts stay in inFlow; a demo covers how its levels would reach the app" (reads as chefs seeing stock) -> "Counts stay in inFlow; a demo shows how its levels connect".
5. Mid-CTA "a trial order" (trade meaning: a new account's test order) -> "a sample order" (if phrasecheck blocks it, "an example order").
6. Guides body singular/plural -> "Send us an inFlow export of what each account normally buys, with its prices. We load that list as the account's guide under your own codes, so each chef orders from that restaurant's usual items."
7. Coexistence card 3 "still decide when you buy" -> "still guide when you buy. We never raise a purchase order; we only bring in what each restaurant orders."
8. FAQ 1 "You receive their orders already said and looked over by the chef" -> "You receive orders the chef has spoken and checked, and inFlow handles stock and sales orders as before."
9. Comparison lead: cut "with every one of those strengths intact". Final CTA "follow one walk-in list" -> "follow one spoken order all the way to your desk, checked by the chef on the way."
10. Screenshot placeholder "line-by-line" -> "item-by-item".

## fishbowl-inventory-alternative
1. Comparison lead "Fishbowl moves the order to the shelf, the truck and QuickBooks" (contradicts the QuickBooks FAQ) -> "After that, Fishbowl takes the order to the shelf and the truck, then posts its invoice to QuickBooks, with no second round of typing."
2. QuickBooks FAQ -> "Fishbowl's own QuickBooks page says sales orders do not transfer automatically between the two, and that invoices flow from Fishbowl to QuickBooks, so do not count on an order we put into QuickBooks reaching Fishbowl." Digest: add that the same page lists "Two-way sync of orders, bills, payments, contacts and adjustments" for QuickBooks Online Plus and Advanced (the page contradicts itself).
3. Voice row "Your desk gets the order the chef meant, not notes from a rushed call." -> "Your desk gets a list the chef has checked, not notes from a rushed call."
4. Table "At 11pm a chef can still speak the items and check them" -> "At 11pm a chef who would phone can still speak the items and check them".
5. EDI FAQ "something to test in the demo. If it cannot, email or our API will carry the order instead." -> "something we work out with you in the demo. If it cannot, email, or our API if your setup takes it, will carry the order instead."
6. Problem lead opener (unsupported claim about searchers) -> "Fishbowl Inventory already handles an order well once it arrives: stock moves and QuickBooks gets the invoice, so a Fishbowl Inventory alternative would not touch the restaurant call ahead of it."
7. Mid-CTA dangling "all inside twenty minutes" -> "In a twenty-minute demo we speak an example order into our app, fix one item, send it and open the file it turns into. Then we look at how it would get into Fishbowl: keyed from the file, or sent by EDI or API."
8. "its AI assistant drafts purchase orders and receipts for your staff" -> "its AI assistant, in beta, drafts purchase orders, transfers and sales orders for your staff to approve."

## unleashed-software-alternative
1. Table right cell "A rep or your desk enters it for them" (implies our column removes desk entry) -> "Phoned or texted to a rep or your desk".
2. Delivery "Pick the format for each order: email, EDI, our API or QuickBooks." -> "Choose how orders reach you: email, EDI, our API or QuickBooks, though an order sent to QuickBooks is not in Unleashed. Whether Unleashed can take the EDI or API version as it arrives depends on your setup, which a demo can confirm."
3. Problem lead "and we test that with you in a demo" -> "and the demo is where we check that with you".
4. FAQ 3 "it has also been where reps enter orders" -> "it has also been one place reps enter orders".
5. Final CTA body "while your reps get on with selling" -> "with no rep writing it up".
6. Table "Reps can spend the visit selling, since chefs order in the app" -> "...when the chef orders in the app".
7. Problem lead opener (unsourced claim about searchers) -> "An Unleashed Software competitor is rarely what a distributor needs when the real goal is getting reps' time back." (keep the keyword placement valid)

## brightpearl-alternative
1. Comparison H2 "Your rules get the order the chef meant." (contradicts "Can the app still send a wrong order? Yes") -> "Your rules get an order the chef has checked."
2. Comparison lead "any mistake shows up on their own screen before it goes" -> "every item is on their own screen to check before it goes". Also "no link joins them out of the box" -> "and the two are not linked".
3. Card 2 H4 "No one at the restaurant sees the typed order" -> "The restaurant never sees the order before it goes in"; body "only your desk ever looks at what got typed" -> "The chef knows what the kitchen is short of, but what got typed is checked, if at all, at your desk. If an item was misheard, nobody at the restaurant saw it before it was entered."
4. FAQ "Won't it spot a mistake?" -> "Its rules can flag the orders you define, such as risky or high-value ones, so a rule can catch some mistakes, like an amount far above normal. A misheard item usually looks ordinary: a product that account buys anyway, in a normal amount. Our app puts each item in front of the chef before sending, so the person who knows what the kitchen needs gets a chance to catch it."
5. FAQ 2 "getting a restaurant order right before your rules act on it" -> "letting the chef who decided an order see and fix each item before your rules act on it".
6. Delivery: add "An order sent to QuickBooks goes to your books, not into Brightpearl."
7. Table rows "A chef who phones today can speak instead and see each item" and "Kitchens that switch from calling fix mix-ups before sending" make one point twice: replace the second with "Each app order arrives with its own number and send time | ✓ | Numbered once your team enters it".
8. Testimonials H2 "When the order is right before it goes in" -> "When the chef checks the order before it goes in"; quote 1 -> "A misheard item used to land in Brightpearl and get picked before anyone noticed. Those chefs order in the app now, and the slip-ups get caught at their end."
9. Trust "The chef fixes items before sending" -> "The chef checks each item before sending".
10. FAQ Q "Couldn't our kitchens just order on a B2B webstore?" -> "Couldn't our restaurant customers just order on a B2B webstore?"
11. Problem lead "we test that in the demo" -> "the demo is where we check that with you".
12. Card 1 "For a call, that taking means someone..." -> "For a call, taking it means someone on your team listens and keys in every item." FAQ 6 "neither supports the other's software" -> "each company supports only its own software".
13. Digest `_build/research/competitors/brightpearl.md`: add a dated "Re-angle 2026-11-09" note (angle now: accuracy before automation; the chef says the order and checks each item before the Automation Engine acts; channels belong to the Cin7 page).
