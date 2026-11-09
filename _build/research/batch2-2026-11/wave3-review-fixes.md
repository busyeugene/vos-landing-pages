# Wave 3 (9 webshop / EDI / order-capture compare pages): verified review fixes, 2026-11-09

Five reviewers (2 fact-checkers who re-checked the rivals live, 2 distributor-owner buyers, 1 proposition-
sameness reviewer). Their full files are in `...\scratchpad\wave3\review\out\`: factcheck-a.md (oro, shopify,
sana, b2b-wave, repzio), factcheck-b.md (sps, truecommerce, conexiom, esker), buyer-a.md, buyer-b.md,
sameness.md (clusters S1-S14). The lead checked the findings below against the KB and digests. Apply ALL
shared items U1-U14 and your page's section. Where your section says "apply factcheck-x Mn", the fix wording
in that file is approved (you may reword to clear a phrasecheck collision, keeping the meaning). Where a
sameness item gives you a replacement, use it or a better one from your own page's facts.

## SHARED (all 9)
U1. ONBOARDING, in the setup + cost FAQ (no new FAQ; keep exactly 8). KB onboarding flow: the distributor
  shares each account's usual items (often a spreadsheet export), VoiceOrder Solutions loads them into the
  admin platform and sets up each account, the restaurants download the app, and most send a first order the
  same day. Say that plainly, in your own words. Do NOT say who invites or trains the restaurants, or whether
  a restaurant pays anything (both unconfirmed). Replace "one export / one spreadsheet / one file" with "each
  account's usual items, usually as a spreadsheet export" (factcheck-b L7) wherever it appears.
U2. PRICES, said once plainly (in the typing/records FAQ or a guide bullet): "You update each account's guide
  and prices in our admin platform, where you also manage the accounts. Whether price changes can come over
  from <X> or your ERP in bulk is a question for the demo." Never "sync", never promise bulk updates, at most
  two mentions of prices-in-our-admin per page.
U3. WHOSE TIME. Keep the stat as is. In the "will my desk still type it" FAQ, say what the desk saves on the
  email route in plain words: no call to take, write down and read back; they enter the order from a list the
  chef already checked. Never imply the 20-30 minutes is saved typing.
U4. RETYPING, at most three places: one clause in the problem lead (in the rival's own terms, e.g. shopify "an
  emailed order still becomes a draft someone builds"), the "will my desk still type it" FAQ (full per-route
  answer), and the delivery-formats paragraph. Cut it from cards, testimonials, CTAs and other FAQs.
U5. RECORDS CARD -> FAQ (sameness S10). Move the "who holds what" fact (your ERP / <X> keeps customers, stock
  and invoices; we hold each account's guide and prices plus the orders sent through the app) into the
  "will my desk still type it" FAQ answer, and replace that coexistence card with your page's rival-specific
  point (your section). The fact must stay on the page (never "no second set of records").
U6. "A call gets no number from us": keep it ONCE, inside the order-number bullet or the typing FAQ, never as
  a tacked-on card tail.
U7. GUIDE TIMING: remove every stated delay ("that night", "by dinner service", "by evening"). Use "A change
  you make in our admin is what the chef orders from next" or drop it (factcheck-a L1).
U8. GUIDE LIMITS: do not state that the app cannot take items outside the guide (KB silent). "Items are matched
  to that restaurant's guide" is fine (factcheck-b L4). Do not answer the off-guide question either way.
U9. PROBLEM LEAD + H2 (sameness S8): open the lead with the rival's own fact, not "a <X> alternative would not
  change...". Keep "<x> replacement" in the cost FAQ ONLY (kwaudit must stay 0: the comparison lead's "not an
  <X> alternative" keeps body counts; check). Counterfactual problem H2s become plain questions in the rival's
  terms (your section). Problem eyebrows must be unique (no "Why People Search").
U10. TESTIMONIALS (S1): both placeholders echo YOUR angle, modest, no numbers; never "<X> handled accounts A,
  the callers order in the app now". Use the S1 replacement for your page or better.
U11. CTAs (S3, S11): final-CTA H2 must not be "Keep <X> for A. Give/Let <callers> an app" (RepZio alone keeps
  that formula). Use the S3 replacement or better. The final-CTA paragraph gets your page's own demo payoff
  (S11) instead of re-running the mid-CTA script.
U12. VOS-SIDE HEADINGS (S12, S14): voice-row H3 carries your angle (S12 list); take "codes" out of the guide
  H3 on sana and sps (conexiom owns it); vary the hero opener (shopify, sana, b2b-wave, esker and truecommerce must not
  open with "Get"); hero trust middle item
  rival-specific (S14).
U13. WORDS: no "slip" (packing slip), no "check" as a noun for the chef's review (payment), no "upstream /
  downstream" (a distributor hears suppliers), no "talk through" (= discuss), no "pretend", no labels for
  customers ("typists", "talkers"), no "on-ramp", no "the one account". "a sample order".
U14. DO NOT TOUCH: the canonical bullet "Over EDI or the API, when your setup takes it, nobody retypes it", the
  canonical stock sentences, the stats numbers, "most" on setup, keyword placement (re-run kwaudit), the
  "Not A <X> Alternative" H1 prefix, the sourcing FAQ date. Do not add facts beyond the KB / your digest.
  The inventory section is a known KB gap: leave it canonical, do not invent what anyone sees.

## orocommerce-alternative
- H1 "For Quick Reorders" says nothing (buyer-a): build it on the page's angle (one chef, a short reorder, no
  approval chain / no sign-in), plain words, ≤4 lines at 1440px (`layout.py`; "OroCommerce" is long). Fix
  the hero lead (buyer-a: "Swap the short reorders that now arrive as calls for lists..." took three reads).
- factcheck-a M5 (delivery paragraph contradiction), L9 (Alexa line: "for reading OroCommerce data", or cut
  the aside; buyer-a called it a research memo, as is "Oro publishes what shapes its license").
- S7: trust item -> "Approval rules left in place"; T2 -> the SmartAgent quote (S1). S13: swap the
  after-hours row for the SmartAgent sign-in row. S10 coexistence card -> "Quotes stay with your reps".
  S3 final H2. "talk through" in the final H2 (U13).

## shopify-b2b-alternative
- H1: leave the "For Chefs Who Phone" family (S5; it echoes inflow/zoho/acumatica). Build it on draft orders
  / the Plus catalog limit, plain words (S5 suggests "Drafts From Checked Lists": only if it reads plainly).
- factcheck-a M6 (API line), L2 ("Shopify, or the ERP behind it, stays the record..."), L3 (sales-staff
  permissions are Grow and up: scope the row), L4 ("three active catalog assignments across B2B markets").
- buyer-a: say plainly whether each restaurant's prices are kept in Shopify AND our admin (U2 wording).
- S3 coexistence H2 -> "What Shopify keeps, and where app orders sit"; S1 T1; S3 final H2; S11 payoff;
  S12 voice H3 "No cart and no checkout"; S14 trust "Any Shopify plan" only if true of the page's claims.
- The table label "Former callers' orders arrive stamped with a number and time" reads oddly: "A restaurant
  that phoned before now sends a numbered, timed order" or similar (check grid.js --dupes).

## sana-commerce-alternative
- factcheck-a M4 is the big one: Sana ALSO moves routine reorders online ("Buyers reorder at their contract
  price without calling their rep", subscriptions). Rewrite the problem lead and card 1 as factcheck-a gives;
  keep the angle that Sana needs the buyer to log in and the chef who calls IS placing the order. L6 card 3
  last line. L7 optional.
- H1 -> "Not A Sana Commerce Alternative: For Calls That Are Orders" (S5), layout-checked. Cut card 2's
  log-in/check-out sentence if it duplicates the store-asks-a-chef-to-shop card.
- S9: fold the "can it still be wrong" FAQ into the typing answer; new FAQ "Sana already cut our price and
  stock calls. Which calls are left?" (watch: factcheck-a M4 means reorder calls are also Sana's target; answer
  honestly: the calls from chefs who will not log in).
- buyer-a: "Two Directions" eyebrow, "Sana shows chefs what your ERP holds..." and "A call that is the order
  asks nothing" each took two reads: plainer wording. buyer-a Q: "Sana reads prices from my ERP, so why do I
  type them into yours?" -> U2 answers it honestly.
- S10 card -> "Sana's account pages can still list it" ONLY in the attributed, hedged form already in FAQ 5
  (Sana says its account pages also list orders entered straight in your ERP; whether ours would show depends
  on how it gets into your ERP). S1 T1, S3 final H2, S11 payoff, S12 guide H3 without "codes".

## b2b-wave-alternative (RE-ANGLE: weakest angle)
- New angle from your own row 7 and rep FAQ: B2B Wave's advice for the chef who phones is a rep who builds
  the order during the call and saves it for the chef to approve later in the portal; with us the chef
  approves each item as it is said. H1 (S5 suggests "Approved As It Is Said"), comparison H2 (S3), problem
  card 2 (S4: "Approval comes later, in the portal"), card 3 (S5: "Quick Order still means item codes",
  and factcheck-a L5), testimonials (S1), final H2 (S3), voice H3 (S12 "No item codes to look up").
- Drop "typists/talkers" everywhere (U13, buyer-a). Drop the rep's-app card and coexistence card (S7; RepZio
  owns reps' apps): coexistence card -> "Standing orders and cut-offs stay in B2B Wave". Keep the reps FAQ only
  as it carries the approve-later angle.
- factcheck-a M6 (API line in the FAQ and feature row). "pretend kitchen order" -> "a sample order".
- S8: problem H2 "What a B2B Wave competitor would not change" duplicates esker's: -> "Where a portal leaves
  the chef who calls" (keep "b2b wave competitor" in a heading elsewhere if kwaudit needs it); eyebrow unique.

## repzio-alternative
- factcheck-a M1 (card 2 contradiction: B2B Direct takes reorders without a rep), M2 (problem lead: RepZio is
  built around the sale, plus a storefront for approved buyers), M3 (NO per-account rep routing: "to a rep or
  your order desk"; whether each account's orders can go to its own rep is a demo question), L8 H4.
- Angle (S7, without M3's unverified routing): what a rep sells, you add to that account's guide (KB: the
  distributor updates guides), and the chef reorders it by voice. Rebuild the H1 ("Reorders Need No Pitch" is
  cryptic to buyer-a and echoes Pepperi) on that, plain words. Do not reuse Unleashed's "reps sell, chefs
  order" wording or Pepperi's "between visits".
- S9: replace the "Doesn't RepZio already have B2B Direct?" FAQ or the coexistence card that repeats it (keep
  one of the two) with "A rep just sold a restaurant something new. How does it get on their list?"
- buyer-a: "market orders" in the hero is unexplained to a food buyer; the market-season card reads as
  knocking the reader's tool (keep the fact, say it neutrally: RepZio is built for trade-show selling);
  "We do not make that claim for our app" (offline) sounds lawyerly -> plain ("Our app is not described as
  working offline, so ask in the demo").
- S10 card -> a RepZio-specific point that needs no routing claim (e.g. "New products go on the guide").
  S1 testimonials (no per-rep routing). Keep the "Keep RepZio for the sale. Hand the reorders to the chef."
  final H2 formula (yours alone).

## sps-commerce-alternative
- factcheck-b H1: SPS sells "SPS Commerce PDF Order Automation" (AI that brings non-EDI PDF orders into the
  EDI workflow). Concede it in the FAQ as factcheck-b gives (a restaurant that phones sends no PDF; we make
  no claim it reads ours) and add it to the sourcing FAQ. UPDATE the digest `_build/research/competitors/
  sps-commerce.md` (its "No email/PDF order capture product" line is wrong): add a dated 2026-11-09
  re-check section with the URL and quotes.
- factcheck-b M1 (confirmations: the restaurant gets a confirmation in the app), M2 (stat label -> "Setup for
  most distributors; restaurants need no EDI"), L3 (set up and tested).
- buyer-b #5: say plainly that our EDI orders do NOT go through SPS Commerce and would need their own way into
  your ERP, which the demo checks, or come by email.
- S2: SPS keeps "restaurants have no system that produces EDI". Give the supplier-EDI point to truecommerce:
  replace coexistence card 3 with "Lot and traceability data stay with SPS" (and fix buyer-b's note that the
  lot line has nothing to do with its heading). Drop the "no EDI map" row 9 (truecommerce owns the no-map
  setup): row 9 -> a true row you win or a text/text row ("Our EDI is our own delivery format..." as S2 says).
- buyer-b #8: "if the chef misses a slip" and testimonial "the chef's own check on it" (U13). Testimonial 2
  abbreviates the brand to "SPS": write it in full.
- S3 comparison H2 + final H2, S8 problem H2 "Why restaurants never reach your EDI" + eyebrow "Where EDI
  Stops", S11 mid-H3 + payoff, S12 voice H3 and delivery H3, guide H3 without "codes".

## truecommerce-alternative (RE-ANGLE: separate it from SPS)
- Own ONBOARDING end to end (S2): card 1 "A managed service maps partners, not phone calls"; card 3 = the
  go-live contrast (invite, connect, test before go-live vs your list of each account's usual items and an app
  download for the chef); card 2 keeps only "designed for suppliers". FAQ "Couldn't restaurants just send us
  EDI through TrueCommerce instead?" -> "What does a restaurant have to set up?" (install the app; no EDI map,
  portal invite or testing round; the guide comes from your items; most send a first order the same day).
  Keep the supplier-EDI FAQ (it is yours now). S13 row swap (go-live row instead of the number row).
- H1 "Onboard Chefs Too" read as "more work for me" (buyer-b): say what the distributor gets, plain words
  (e.g. restaurants go live without EDI). Cut "on-ramp", "the one account", and thin the onboard/on board
  repetition (buyer-b).
- buyer-b #6: the after-hours point is undercut by the ticked "24/7 Shop storefront": scope it to restaurants
  that do not use Shop.
- factcheck-b L1 (the Order Automation Connector for emailed/faxed orders still exists: one clause, we make no
  claim it reads ours; update the digest with a dated re-check line), L2 (scope "every trading partner,
  whatever its size" to suppliers).
- S10 card -> "Retail replenishment stays in TrueCommerce". S1 T1, S3 final H2 (onboarding), S8 eyebrow.

## conexiom-alternative
- factcheck-b M5 (CLIENT QUESTION: whether our emailed/EDI/API order shows the distributor's item codes is
  unconfirmed). Re-scope every OUTPUT claim to the guide as factcheck-b gives (hero, comparison lead, row 2,
  step 3 H4, mid-CTA H3). H1: "Orders In Your Codes" asserts the output: change to a guide-scoped form, plain,
  6-8 words, e.g. "Chefs Order From Your Item List" (layout-check). Final-CTA payoff must not promise codes
  in the received order (S11's "see the order arrive in your item numbers" is NOT approved).
- factcheck-b M6 (availability bullet), M7 (Relay matches against master data on its own), L4 (guide limits).
  Cut the "Headless Platform ... AI agents you build" jargon (buyer-b) to a plain one-line concession or drop.
- buyer-b #1 (HIGH): "Your staff still type in any of our orders delivered by email" right after the ticked
  "Emailed PDF and spreadsheet POs converted for your ERP" reads as an oversight. Say: whether your Conexiom
  setup can read the file we email is a question to put to Conexiom; we have built nothing for it and make no
  promise; if it cannot, your team enters it from the chef's checked list.
- S10 card -> "Chefs who prefer texting can keep texting" (Relay reads texts). S1 T2. Keep the standalone
  "can it still be wrong" FAQ (S9). S3 final H2 per the H1 change. Conexiom keeps the "calls missing from the
  format list" problem card (S6).

## esker-alternative (RE-ANGLE: the inbox, off "the step before")
- S6: H1 on the orders Esker's inbox never sees today (calls, texts to reps), plain words, layout-checked.
  Coexistence lead off "we look after the order until it leaves the chef's phone" (brightpearl's).
  Card 1 -> Esker's own "protect cash upstream ... still begins at your inbox" in plain words (no "upstream"
  in our voice: U13); drop the "calls are not on its channel list" card (conexiom keeps it).
- factcheck-b M3 (Esker Anywhere: a rep can key a text in from the app; H4 vs body contradiction), M4
  (coexistence card 3: Esker's order-stage checks see our order only if it is entered through Esker), M8
  ("with no changes made to Esker"), L5 (FAQ question wording), L6 (read-back).
- buyer-b #2 (HIGH): "We make no claim that Esker reads our files, so plan on your team entering them" reads as
  a dodge: same fix as conexiom's (ask Esker; we built nothing for it; if it cannot, your team enters it).
- S9: fold the "can it still be wrong" FAQ into the typing answer; new FAQ "Esker checks credit on each order.
  Does an app order get the same check?" (answer per M4: only if it is entered through Esker; how it gets in is
  a demo question). Then repurpose coexistence card 3 -> "Deductions and claims stay in Esker" (S10).
- Remove "Upstream Of The Inbox" / "Upstream And Downstream" headings (U13). "straight to your ERP" promises
  more than the paragraph under it: scope it. S1 T1 + T2 (no reps-forwarding quote: Unleashed owns it).


# Wave 3 verification-round fixes (2026-11-09). Small edits only.

Two verifiers read the changed lines: `out\claims.md` (C) and `out\reading.md` (R), in this folder. For YOUR
page apply every HIGH and MEDIUM item in both files, plus the LOW items that are one-line wording fixes,
with the lead's decisions below taking precedence. Each file gives current text and replacement wording; you
may reword to clear a phrasecheck collision, keeping the meaning exactly.

## Lead decisions (override the files where they differ)
D1. "Ask <X> whether it can read our file": keep it ONLY in the "will my desk still type it" FAQ, always with
    "we have built nothing for it and make no promise". Remove it from problem leads, final CTAs and any other
    high-attention slot (conexiom C1, esker E1).
D2. Guide-change timing: no "next", "that night", etc. Use "You edit each guide yourself in our admin" or
    similar (C: G1).
D3. Generalisations: no "most orders", "mostly", "tend to" about the reader's own business or a rival's users
    unless the digest quotes a source (repzio R1, sana N2). Use "often", "a weekly reorder", or describe.
D4. Final-CTA H2 shape "Keep <X> for A. <Verb> B.": only repzio keeps it. sana, b2b-wave and esker must use a
    different shape (R: X2).
D5. sps vs truecommerce (R: X1): SPS keeps "restaurants have no EDI system" in its H1, final H2 and problem
    lead ("from another EDI provider" stays on SPS only). truecommerce's H1, final H2 and problem lead must not
    mention "no EDI": build them on onboarding (partners are set up and tested before go-live; a restaurant
    gets an app and a guide of its usual items), 6-8 words, plain, layout-checked. And per C: T1, do not assert
    how restaurants are invited or that there is "nothing else to do": keep only "no EDI map or testing round
    for the restaurant" and "the chef installs the app".
D6. H1s: shopify-b2b -> must not say "no drafting" (emailed orders still become drafts); C suggests "Callers
    Send Checked Lists". esker -> must not imply our orders bypass the inbox (they arrive by email): build on
    the orders that today start as calls or texts to reps. b2b-wave -> say WHO approves (the chef), e.g. "Chefs
    Approve As They Speak". sana -> plainer than "Calls That Are Orders" if R: N1's reading holds; oro -> R: O1
    (benefit before complaint). All: 6-8 words (9 for a two-word brand), ≤4 lines at 1440px, plain words, and
    the hero trust line must not contradict the body (esker E1 "Starts before your inbox").
D7. Repetition caps: b2b-wave's "rep saves it, chef approves later" at most 4 times on the page (R: W4);
    shopify's "own guide whatever the plan" at most 2 (R: S3); truecommerce "nothing to map, invite or test" at
    most 2 (R: T3); sps "built from what it buys" at most 2 (R: P3).
D8. shopify-b2b coexistence card (C: S1 HIGH): no queue or hand-off. "App orders sit in our admin, not in
    Shopify"; Shopify counts one only once your team builds it or your setup takes it in over EDI or the API.
    Delivery H3 per C: S2.
D9. sana N1: say only that the older Sana mobile app for sales agents is no longer on its current site (drop
    "replaced by" unless your digest quotes it).
D10. esker E2 (credit-check FAQ): use C's rewritten answer, or say plainly that how Esker's credit tools treat an
    order depends on how it enters your ERP, a question for Esker and the demo; never "it skips those checks".

## How
Same limits as before: edit ONLY `_build/pages/<slug>.js`, rebuild only your page, scratch in
`...\scratchpad\wave3\vf-<slug>\`, no commit. Test new sentences with `node phrasecheck.js <slug> "..."`.
Final gates for your page: structure, template, kwaudit (0), qa (0/0), claims (0 ban), trigram (0 within;
`--cross 3` nothing involving your page), repeat (0 within), promote (≤1/11), grid --dupes, and from the repo
root `python _build/layout.py <slug>`. Read the changed sections of `node outline.js <slug>` once more.
Report: items applied/skipped (with why), new H1 and final H2 if changed, final gate lines. Keep it short.
