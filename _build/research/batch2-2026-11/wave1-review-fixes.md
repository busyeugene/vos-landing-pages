# Wave 1 (8 ERP compare pages): verified review fixes, 2026-11-09

Five no-context reviewers (2 fact-checkers, 2 distributor-owner buyers, 1 proposition-sameness reviewer).
Every item below was checked against the digest / KB before being listed. Apply ALL shared fixes and
your page's section. Where a fix asks for new copy, write it from facts already on your page or in your
digest (`_build/research/competitors/<slug>.md`); never invent a fact.

## SHARED FIXES (all 8 pages)

S1. **Say plainly what each delivery route means for the distributor's desk.** Both buyers' #1 issue:
the pages never say whether the desk still types the order. Rewrite the "is it connected" FAQ answer
(and any line that implies nobody keys anything) to this logic, in your own words:
- the two products are separate, with no built-in link, and neither company supports the other's software;
- over EDI or the API, the order can go straight in and nobody retypes it, if your <ERP> setup can take it
  that way; the demo shows whether it can (never promise it);
- by email, it arrives as a PDF, Excel or Word file with every line already checked by the kitchen, and your
  team enters it from that instead of from a phone call or voicemail.
Check the hero, H1, trust line, feature rows and coexistence cards for absolute lines ("nobody keys in a
call", "your desk stops typing", "inside sales freed") and scope them so they stay true on the email route.

S2. **"Do not connect" vs stock.** Replace "the two products do not connect" in the comparison lead with
"they are separate products with no built-in link" (or similar), so it does not contradict the canonical
stock sentence "a demo shows how the levels connect". Keep the canonical stock sentences as they are.

S3. **Records.** Delete every claim that VoiceOrder Solutions holds nothing / "no second set of records" /
"only the order guides" / "and nothing more" / "never hold a copy you would keep in step". True version:
the ERP stays the record for customers, stock and invoices; VoiceOrder Solutions holds each account's
order guide and prices (which the distributor keeps current in our admin platform) and the orders sent
through the app.

S4. **No color or position words for the table.** Remove "shaded", "highlighted", "tinted", "first value
column", "left/middle column". Name the column by its header ("the <ERP> + VoiceOrder Solutions column")
or say "with both running" without pointing.

S5. **Do not call VoiceOrder Solutions "this <ERP> alternative".** Feature H2s like "What this X alternative
adds" contradict the "Not a X Alternative" H1. Use the Business Central pattern ("Why this is not a X
alternative, and what it adds") or another heading that keeps the keyword without the contradiction.
Meta descriptions may keep the "a X alternative that adds..." form, but must not read as "adds nothing".

S6. **Scope login / install / partner claims to setup.** "No <ERP> login", "nothing installed", "no partner
needed" are true for setup and email delivery only. Scope: "Setting up needs no <ERP> login and installs
nothing: we work from a spreadsheet you export. If you later want orders over EDI or the API, the demo
covers what that would need on your side."

S7. **Vocabulary.** "buyer" alone -> "the kitchen's buyer" or "chef" (a distributor hears its own purchaser);
"route" for a delivery path -> "way" / "format" (a distributor hears truck route); "ring" -> "call";
"tick" as a verb -> "gets a check mark"; "the record" -> "your ERP" / "system of record"; stat labels opening
"Back ..." -> "Saved ..."; "would sooner" -> "would rather". Step 1 file claims ("is enough", "does the job")
-> "is usually all we need" (format unconfirmed in the KB).

S8. **Proposition sameness (the sameness reviewer's ranked list).** Across the 8 pages the same argument
sits in the same slot. Make each slot argue YOUR page's angle:
- Problem section: the lead's 2nd sentence states your page's angle, not "the trouble sits upstream".
  Cards must be specific to your ERP. The "a replacement is a whole ERP project" proposition may appear in
  at most ONE place per page (keep it in the cost FAQ; keep it as card 3 only on prophet-21 and aptean, where
  a fact makes it specific). Cut every "we'd rather say so before a demo" flourish. If removing card 3
  removes your `<x> replacement` secondary, put that phrase in another sentence or heading (kwaudit must
  stay at 0).
- FAQ "better than <ERP>": answer with your page's own "one job", and drop the "no ledger, no lots, no
  warehouse" list (the table already shows it).
- FAQ 1 answer: page-specific, not "VOS changes one thing: how a kitchen's order gets to you".
- Coexistence lead and cards: specific to your ERP. The phone-orders-get-no-number limit must stay on the
  page, but as one sentence in an FAQ or card, not a whole card restating it.
- "Their AI serves your staff" may stay only on sage-x3 and prophet-21.
- Cost-FAQ closer ("adding us is a far smaller decision") must be worded uniquely or cut.
- Placeholder testimonials (`[Customer Name]`): rewrite both so each echoes YOUR page's angle, not
  "our ERP did not change" / "some chefs never used the portal". Keep them modest; no numbers.
- VOS-side literal duplicates: steps lead, step H4s, voice-row H3, delivery-row H3, testimonials H2, mid-CTA
  H3 and body, final-CTA H2. Write fresh ones for your page (`node grid.js --dupes` shows clashes).

S9. **Inventory filler.** Replace the "slow lines as well as fast ones" bullet with something concrete from the
KB (e.g. "The catalog updates as stock levels change", worded your own way).

S10. **Do not touch:** the canonical lines in CLAUDE.md ("Saves 20 to 30 minutes compared with the same order by
phone", "Over EDI, the API or QuickBooks, nobody on your team retypes it", "It does not replace your stock
system: that stays in charge, and a demo shows how the levels connect.", "Stock numbers come from the system
you count with today"); keyword placement; "most" on setup; no other product names (claims.js).

## PAGE: netsuite-alternative
- Table: "Warehouse picking, voice picking included" -> "Warehouse picking and mobile scanning" (voice
  picking is on a page that says some features need partners). "Lot tracing, catch weight and recalls" ->
  "Lot tracing and recalls". "Per-customer catalogs and negotiated prices" -> "Customer-segment catalogs and
  negotiated prices" (source says segments). "Online reordering from past purchases" ticks both columns but
  is the store add-on: make the label say so (e.g. "Online reordering, with the store add-on"). The row "Set
  up from an item export, with nothing installed" has a mismatched NetSuite cell: relabel both so the cell
  answers the label. "Typed into their online store" -> "Typed into NetSuite's web store".
- Problem card "Each sales order starts as a call" -> scope ("Many sales orders still start as a call").
- Angle: NetSuite has the least angle of its own. Its distinct fact is that NetSuite's own customer ordering
  is a store add-on licensed on top (platform + modules + users), so ordering online is another module to
  license, while VoiceOrder Solutions needs nothing licensed in NetSuite. Build the H1 (plain words, 6-8),
  problem card 2 and one coexistence card on that. Do not build anything on voice picking.
- Coexistence card 3 ("Its AI serves your staff") -> a different NetSuite-specific point.
- Buyer lines: FAQ 1 "give the kitchens that call our app" (reads as kitchens calling the app); "route" twice;
  "buyer" in the mid-CTA; "keep ringing your office"; "Better you hear it from us before booking a demo";
  "Orders arrive checked" (by whom?); stat "Is when kitchens can send the order"; FAQ 5's last sentence;
  sourcing FAQ "our error, not theirs" -> "tell us and we will fix it".
- Voice-tools FAQ: keep it (partners genuinely sell voice for NetSuite) but word it uniquely.

## PAGE: odoo-alternative
- H1 "Nothing Added To Odoo" sells an absence and pairs with a meta saying "adds nothing to it". New angle
  from the page's own facts: Odoo's "Order Again" refills the cart from a previous order, while a chef says
  what is short today. H1 e.g. "Not An Odoo Alternative: Order What Is Short Today" (verify fit). Fix the meta
  description so it cannot read as "adds nothing".
- Hero: "Turn the calls, texts and late voicemails you still get into finished orders" (sounds like we
  transcribe voicemails) and "with no new app to install" (kitchens DO install our app) -> fix both.
- FAQ 4 (app-store phone AI): add the contrast: with a phone bot the chef never sees the order; in our app the
  chef sees and fixes every line before sending. "others read emailed orders" -> "other tools read emailed
  orders" (not confirmed on the app store).
- Coexistence card 3 ("Odoo's voice tools work for your staff") -> a different Odoo-specific point.
- Table: rows 1-7 mirror NetSuite's order; add an angle row (e.g. today's short list vs last order refilled).
  "Pricelists per customer, with the shop open by invitation" -> one idea per row. The "Set up from one
  spreadsheet" row's Odoo cell must answer its label.
- Problem H2 "Why an Odoo competitor comes up at all" -> plainer. Comparison lead "tinted column". FAQ 5
  "Your demo is where we find out whether ... this page does not promise it" -> plain (S1).

## PAGE: acumatica-alternative
- Problem card 1 "a portal login for each kitchen adds nothing to the bill" -> "carries no seat fee" (pricing
  page lists resources/transactions; portal may need suites). H4 "A free login did not change the habit" ->
  e.g. "A login was never the problem". FAQ "Acumatica gives us unlimited users" -> "does not charge per user
  seat".
- Table: DROP the row "Unlimited users with no charge per seat" (a tick in our column implies VoiceOrder
  Solutions pricing, which is unconfirmed) and the published-price row (a marketing choice is not a product
  row; concede it in the cost FAQ instead). Replace both with ordering rows true for both columns or won by
  us (e.g. a customer ordering app is "Not listed on their site").
- FAQ "Does our Acumatica partner have to be involved?" -> scope (S6): "Not to get started. If you want orders
  to import automatically, the demo covers what that takes on your side."
- H1 "Let Kitchens Speak Orders" is generic: build it on the page's real angle (kitchens that skip the free
  portal), plain words, 6-9 words, layout-checked.
- Buyer lines: problem H2 "So why price an Acumatica competitor?"; "would sooner call"; card 2's credit-check
  non sequitur; features H2 "What a kitchen gets from this Acumatica alternative" (S5; the reader is the
  distributor); "with your codes and its prices"; "Update a guide today and tomorrow's orders use it";
  FAQ 3 "it can be"; FAQ 6 "a partner has no customization to scope"; FAQ 7 "a modest one".
- Coexistence card on Available-to-Promise was called filler: keep it only if it says what the distributor
  gains; otherwise replace with another Acumatica-specific point.
- Remove the AI-for-staff tail from the voice-add-ons FAQ.

## PAGE: business-central-alternative
- Problem cards: keep card 1 (quote first, verified) and card 2 (mix-ups after the request); fix card 2's
  "When the agent is unsure which item was meant, it emails the customer to ask" -> "it can email the
  customer to clarify, or ask your staff for help". Replace card 3 (replacement) with: phoned orders never
  reach the agent at all (it reads email), so a call is still typed in by someone. That gives the page the
  phone pain the buyer missed. Keep the `business central replacement` secondary elsewhere.
- Table: replace the pricing row ("Plan prices you can read before calling") with "A customer ordering app for
  kitchens | ✓ | Needs a partner add-on" (BC has no customer ordering portal of its own; partners sell them).
  Merge the two near-identical rows ("Kitchens speak the order, then fix each line" and "The buyer checks the
  order before it is sent") and use the freed row for another true row. Cell "Checked afterwards, by email and
  your staff" -> "Checked after the email is sent: a quote back to the customer, replies approved by staff".
  Cell "Typed: an email or your staff" -> "Emailed in, or typed by your staff".
- Coexistence card on the portal: "has no customer ordering portal of its own; partners sell them as add-on apps".
- Voice-tools FAQ: the evidence is one kiosk/drive-thru add-on and "plain-language ordering add-ons" traces to
  nothing. Replace the FAQ with "Can kitchens use Business Central's own mobile app?" (the digest: it is built
  for staff), and move a one-line concession that voice add-ons exist for counters and kiosks into it.
- Buyer lines: stat "Back on each order"; eyebrow "Both Columns Keep It"; "buyer" x3; mid-CTA H3 (17 words);
  FAQ 5 "neither one supports the product of the other"; testimonial "They pick it from their own list"
  (implies tapping) -> say and check.
- "We keep only the order guides" -> S3 wording.

## PAGE: sage-x3-alternative
- Table cell "Typed in by your staff" -> "Entered by your staff or through an add-on" (Sage says up to 75% of
  orders automated; partners sell PDF order capture).
- "We hold the order guides kitchens order from, and nothing more." -> S3 wording.
- "No portal password, no search box" -> "No portal to log in to, no search box" (app login unverified).
- "usually with a new implementation partner" -> "often ...".
- H1 "Your Setup Stays Put" is generic (Odoo and Aptean argue the same). Build it on the partner build:
  X3 was set up by a partner around lots, quality and the warehouse, and the kitchen's side was left out.
  Plain words, 6-9 words. Make the hero's third sentence partner-centric too (lots/recalls belong to Aptean).
- Problem card 3 (replacement) -> "Copilot answers your team, not your kitchens" (Feb 2026 release; AI for
  staff stays on this page). Keep the `sage x3 replacement` secondary elsewhere.
- Add an FAQ "Does our Sage partner need to be involved?" (scoped per S6), replacing the generic one that
  repeats most.
- Buyer lines: stat "Back per order"; comparison lead "one new way in" and the column instruction; H4s "The
  project was scoped around the product" and "Kitchen self-service sits in Sage's marketplace" (consultant
  talk); H3 "Guides cut from what each account buys"; FAQ "is a thing to settle in a demo, and the partner who
  set it up may want a say"; coexistence card 2's robotic order-number sentence.

## PAGE: syspro-alternative
- Torque is in a Controlled Availability Program, not generally available (syspro.com/syspro-torque/). Scope
  every Torque / rules-engine line: "Syspro's new Torque rules engine (in early release) can check draft
  orders before release". Replace "rules engine" jargon with "order rules" where possible.
- "no second set of records for you to maintain" -> S3 wording.
- "Most serve your staff or read messages once they land" -> "Some ..." (no Syspro-specific voice tool found).
- "made by someone who can see what is short" -> "made by someone looking at their own shelves" (customers
  seeing stock is unconfirmed).
- H1 "Orders Nobody Writes Down" reads as "unrecorded orders". Keep the angle (Syspro's AI and rules need a
  written order; a chef who calls gives it nothing), say it plainly, 6-9 words.
- Sameness: drop the "when the check happens" argument (row "Call-in kitchens check their own lines | Its rules
  check what staff enter" and coexistence card "Two checks, at two ends of the order"); Business Central owns
  that. Rows 2, 5 and 8 say the same thing: merge and use the freed rows for true, different rows. "A written
  order from a kitchen that only ever calls" -> "Kitchens that always phone now send a written order".
- Problem card 1: a text IS written. Fix: "They call, or send a quick text someone still has to type in."
- Problem card 3 (replacement) -> e.g. "Its rules start after the typing" (input, not timing).
- Voice FAQ opening "Possibly." is evasive; replace that FAQ with "We make product too. Does this touch
  production?" (food page is manufacturing; VoiceOrder Solutions touches only the kitchen's order), keeping a
  one-line concession that API-based voice/AI order tools exist.
- Buyer lines: "Syspro keeps its role"; "A chef who simply calls gives it neither" (referent); "ring" x2;
  "Slow sellers stay in view" (S9); "this page does not promise it" (S1).

## PAGE: prophet-21-alternative
- Table contradiction: row 2 "Typed into the Epicor web store", row 5 "Web reordering at each buyer's own
  prices ✓ ✓", row 7 "Web ordering is sold as a separate product". Make it consistent: Epicor Commerce is a
  separate eCommerce product (not "another ERP product"). Relabel row 7 to something we genuinely win (e.g.
  "Ordering for kitchens that never sign in to a website" | "Needs the Epicor Commerce web store") and mark
  row 5 "(Epicor Commerce)". "deploy" -> plain words.
- "None of it is built for the kitchen to use" -> "None of the Prism agents Epicor lists for P21 lets a kitchen
  place an order by speaking."
- 2028 line: "Epicor has tentatively set May 2028 for the last on-premises feature release, so a cloud move is
  on many P21 shops' horizon." (support continues to 2029).
- Sourcing FAQ: add that the other-tools facts came from a search for ordering tools sold for P21.
- The H1 "Free Up Inside Sales" must survive S1: on the email route someone still enters the order in P21
  (faster than a call). Say it honestly in the Inside Sales row.
- Features H2 "Where this Prophet 21 alternative fits beside your order desk" -> S5.
- Problem card 2 (Epicor web store) -> sameness: replace with "Counter customers wait while a call is taken"
  (counter and inside sales share the Order Entry screen: facts already on the page). The web store fact can
  stay in the table and an FAQ.
- Voice-tools FAQ -> "We're planning the cloud move. Should we wait?" (no: nothing of ours is installed in P21),
  keeping a one-line concession that partners sell voice and text tools for P21 reps.
- Buyer lines: "The split is who must be on the phone"; "the shaded side"; "Our side delivers by email
  attachment, EDI or the API"; "A chef reads down the walk-in"; the Inside Sales bullets repeat EDI and the API
  back to back.

## PAGE: aptean-alternative
- Table row "A half-built order is kept if the kitchen is interrupted | Not listed on their site" reads as a cheap
  shot (Aptean eCommerce has a cart). Replace with a row about the order itself (e.g. kitchens that used to call
  send a numbered, timed order).
- "Warehouse picking, with voice as an option" comes from Indigo WMS, outside the page's stated scope: drop the
  voice part ("Warehouse picking and lot tracking" or similar), or add Indigo to the scope and sourcing FAQs.
- "holds Push to Speak" -> "presses" or "taps" (hold-to-talk unverified). "names what the kitchen needs" -> "says".
- Problem card 2 (portal sourced only to a third-party listing) -> sameness: replace with "Whichever Aptean food
  ERP you run, the call is the same" (F&B ERP, Produce Pro, Ignition: FAQ 3's facts). The portal fact can stay
  in the table and sourcing FAQ, attributed.
- Problem H4 "Calls are on Aptean's own list of order formats" -> plainer ("Aptean takes phone orders, but someone
  still has to answer").
- Coexistence card 3 (email agent): keep only "keep the agent if Aptean built you one"; drop the "earlier point"
  timing argument (Business Central owns it). Or replace with another food-depth point.
- Voice-tools FAQ -> "Who decides the swap when an item is short?" (Aptean does; VoiceOrder Solutions takes the
  order the kitchen says; KB Q15: never claim we handle substitutions). Keep a one-line note that other tools
  turn calls into orders if it fits.
- Buyer lines: "handling the swaps"; "tick on both sides"; "first value column"; "Typed into their web portal";
  feature H2 "Called an Aptean alternative, built to sit beside it" (S5); testimonial "our buyers"; FAQ "the
  question does not fit"; mid-CTA "we voice an order".
