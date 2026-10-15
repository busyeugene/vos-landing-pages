# Fact-check A: 11 calculator section specs (2026-10-15)

Pages: product-pricing, product-markup, material-markup, retail-margin, wholesale-markup, food-markup,
wholesale-to-retail-markup, price-change, landed-cost, unit-price, purchase-price-variance.

Method: each spec read against its copySpec (shipped copy + verified figures table), the fragment's
`DEFAULTS` and formula, BRIEF.md's verified VOS facts, the KB CURRENT STATE, and the
`free-tools.json` card descriptions. Every figure recomputed from the fragment defaults, not from the
writer's `figures` list. Edits applied by an exact-once replacement script; JSON re-parsed after.
`python -I lint.py` is 0 errors on all 11 after the changes.

**Numbers: all clean.** No wrong, unrendered or invented figure on any of the 11. Checked:
$22.00 / $31.00 / $9.00 / $30.56 / $51,360 (pricing); $33.00 / $11.00 / $30.80 / $31.43 (markup);
$20.30 / 3% (material); $2.38 / $3.97 / $1.59 / 40.1% / 12 units (retail); $29.70 / 35% / 60%
(wholesale); 40 lb / 85% / 34 lb / $48.00 (food); 30% / 66.8% / 2.17x / $1.59 (W2R, both from the
verified table); $22.00 / 5% (price change); $19.00 / $20.20 / $2.02 / 24 units / 6,000 (landed);
$1.00 / $1.11 (unit price); $22.00 / 1.8% / 6,000 / $28,800 (PPV). All VOS facts are from the
brief's verified list, setup carries "most", 20-30 minutes is stated flat.

## Changes (16 edits, 8 files)

| Page | Slot | Before | After | Reason |
|---|---|---|---|---|
| product-pricing | whatis.cards[0].body | ...the floor is $22.00 a case, and every rule builds up from it. | ...the floor is $22.00 a case, and every rule's margin is measured from it. | False of the tool: the competitor-match rule takes the competitor's price, it is not built up from cost. Every rule's margin is measured from it. |
| product-markup | whatis.intro | It is a rule for reaching a price, not a measure of what you keep. | It is a rule for reaching a price, not the share of the price you keep. | Markup is profit over cost, so it does measure what you keep, against cost. What it is not is the share of the price (that is margin). This is the extractable definition, so it has to be exact. |
| product-markup | whatis.cards[1].body | Distributors mark up on cost. Store accounting often states markup on the selling price instead, so a retail buyer's 40% may already be a margin. | Distributors usually state markup on cost. Retail pricing often states it on the selling price instead, so a store buyer's 40% may already be a margin. | The substance is true (retail math states "markup on retail", on the selling price). Two fixes: it is a retail pricing convention rather than "store accounting", and "Distributors mark up on cost" was stated as universal on a page whose whole premise is that distributors mix the two. |
| product-markup | vos.body | It supplies one input the ladder needs: what each account orders through the app. | It touches one input, the case count behind your monthly gross profit. | Implied capability. VOS does not supply a case count; the distributor sees app-order history in the admin platform. The ladder itself needs only a cost; the case count feeds the monthly gross profit card. Now matches the approved reference's framing ("Order history per account to check your case counts"). |
| retail-margin | look.steps[1].body | ...take it off their unit cost. Leave it in... | ...take it off their unit cost for the weeks it runs. Leave it in... | The billback check is true (retailers count vendor allowances in their margin, so leaving it in understates what the buyer sees). But a billback or promo allowance is tied to a promo period; netting it off the everyday cost would overstate the everyday margin. |
| wholesale-markup | look.steps[1].body | If those lines carry different markups, type their average, weighted by sales. | If those lines carry different markups, type one combined markup: their total profit divided by their total cost. | Math error. A sales-weighted average of markups does not reproduce the tier's margin (20% and 50% markups at equal sales average 35%; the true combined markup is 33.3%). Markups combine by cost; total profit over total cost is exact. |
| food-markup | whatis.cards[2].body | Catch-weight items are billed by the pound, and each case weighs in differently. The usable-lb price still holds whatever a case weighs; yield is what moves it. | Catch-weight items are billed by the pound, so a light case also costs less. The price per usable lb holds whatever a case weighs, as long as the yield holds. | The conclusion was true but the reason was missing (the cost moves with the weight), and "yield is what moves it" overstated: the supplier's price per pound moves it too. Now pairs cleanly with look step 1 (a fixed-price case that weighs in light costs more per lb). |
| food-markup | vos.bullets[1] | Each order carries a number, so who ordered what is on record | Each app order carries a number, so who ordered what is on record | Claim rule: numbers and timestamps apply only to orders placed in VOS. |
| wholesale-to-retail | whatis.intro | A wholesale to retail markup is the climb a product's price makes from your landed cost to the store shelf. It comes in two steps: your markup sets the case price, then the retailer's markup sets the shelf. Each step is measured on the cost in front of it. | A wholesale to retail markup is what a store adds to your wholesale price to set its shelf price. It is stated as a share of the store's cost. For a distributor it is the second of two steps: your markup sets the case price, then the store's markup sets the shelf. | Wrong definition in the snippet slot. The trade term (and the SERP's "30% to 50% markup from wholesale to retail") means the retailer's markup over the wholesale price, not the climb from the distributor's landed cost. The two-step chain is kept so card 1 still reads. 51 words. |
| wholesale-to-retail | next.cards[1].body | ...pull your blended markup below the quote. | ...pull your blended margin below the quote. | The wholesale markup calculator renders "Blended margin across the line", not a blended markup. |
| wholesale-to-retail | next.cards[1].alt | Rising line, for your markup blended across the book | Rising line, for your margin blended across the book | Same. |
| price-change | next.cards[2].body | ...drag the blended markup below the number you quoted. | ...drag the blended margin below the number you quoted. | Same: the linked calculator shows a blended margin. |
| price-change | next.cards[2].alt | Check mark, for checking the markup blended across your book | Check mark, for checking the margin blended across your book | Same. |
| purchase-price-variance | whatis.cards[0].body | Books differ on when they record it: when the order is placed, when the goods arrive or when the invoice posts. | Teams differ on when they count it: when the goods arrive or when the invoice posts. | Accounting books post no entry when an order is placed (PPV posts at receipt or invoice; "PO PPV" is a procurement KPI, not a book entry). It also contradicted the shipped FAQ a2: "Multiply the gap by the cases you received, not the cases you ordered." |
| purchase-price-variance | vos.h3 | Customer orders land in the system you already keep | Customer orders arrive in a format you already use | Overclaim. Emailed PDF, Excel or Word orders land in an inbox and may still be keyed in; only EDI, API and QuickBooks reach a system. Bullet 1 of the same section is the email route. |
| purchase-price-variance | vos.body | ...reach you by email, EDI, API or QuickBooks, in the format you already use. | ...reach you by email, EDI, API or QuickBooks. | Removes the phrase the new h3 now carries, so the section does not say it twice. VOS count still 3. |

## Checked hard and kept (the writers' general-trade-knowledge flags)

- **product-pricing, "$9.00 room"**: rendered (the match card's "$9.00 profit per case", 31.00 - 22.00), and true: cost-plus keeps $8.56, target profit $8.00, the match $9.00. Kept.
- **product-pricing, rebate check**: true and conservative. Netting a conditional volume rebate into the sell-price cost and then missing the tier means every case was priced off a cost you did not pay. Kept.
- **wholesale-markup, street vs contract accounts**: true. "Street" (independent, list-priced, higher margin, higher cost to serve) and contract/chain accounts on cost plus a fixed fee per case or a set markup are standard foodservice terms; a fixed per-case fee does thin the margin percent as cost rises (the dollar fee holds). Kept.
- **retail-margin, "six twin packs"**: arithmetic holds (12 units scanning as 6 twin packs: unit cost is the case over 6, tag per twin). Illustrative count, not a stat. Kept.
- **food-markup, trim credit (look step 3)**: the standard yield-test by-product credit. Kept.
- **unit-price, drained vs net weight; catch weight**: both true. Kept.
- **landed-cost, backhaul freight**: true. Kept.

## Flagged, not changed (editor's call)

Near-duplicates of the shipped page (the brief says flag; these are restatements of a fact or example
the page already carries, not errors):
- **material-markup** whatis.cards[0]: "$18.00 + $1.40 + $0.90 = $20.30" is the 5th statement of that sum on the page (step1, pain card2, row1, FAQ a4).
- **retail-margin** whatis.cards[0]: formula + $2.38 / $3.97 / $1.59 / 40.1% near-verbatim of FAQ a1 and step1. whatis.intro's last sentence restates tools card3 ("The store's cost is your case price split out").
- **product-markup** whatis.intro: the 50% / $22.00 / $33.00 / $11.00 example is already in pain card1, tools card1 and FAQ a1. whatis.cards[1] echoes pain card2 and tools card3 (the buyer's 40%), though it adds the why.
- **purchase-price-variance** whatis.cards[2]: "1.8% ... $28,800 a year" is FAQ a3's point and stat3; only "start with the lines you buy most" is new.
- **product-pricing** vos.h3 "The price you choose is the price they order at" is close to the shipped banner "the price you set is the price they order against". The approved reference tolerates VOS-section overlap with the banner, so left.
- **food-markup** vos section (a confirmed order for the cut room) restates the shipped banner's proposition. Same tolerance.

Cross-page sameness between sibling pages (linked to each other by the next cards):
- **retail-margin look step 3** and **wholesale-to-retail look step 1** both make the twin-pack point.
- **food-markup whatis card 3** and **unit-price whatis card 3** are both catch-weight cards.

Outside this scope, seen while reading: the **shipped** unit-price page asserts pack sizes in order
guides (Main CTA "built from your own SKUs and pack sizes", banner heading "keeps pack sizes current on
every order guide", banner body, tools card6). KB Q14 lists pack size in order guides as unconfirmed.
The new unit-price sections correctly stay on SKUs only.

## Editor decisions on the handed-back items (2026-10-15)
- material-markup whatis.cards[0].body: dropped the $18.00 + $1.40 + $0.90 = $20.30 sum, its fifth statement on the page.
- product-markup whatis.intro: dropped the 50% / $33.00 example, already on the page three more times.
- purchase-price-variance whatis.cards[2].body: dropped "$28,800 a year", which repeats shipped FAQ a3.
- Kept: retail-margin card 1 and product-pricing VOS h3 (definition / banner overlap, as the approved reference tolerates); the twin-pack checks on retail-margin and wholesale-to-retail and the catch-weight cards on food-markup and unit-price (each is relevant to its own calculation; every alternative checked repeated that page's shipped copy: target margin, category norms, shrink, storage).
