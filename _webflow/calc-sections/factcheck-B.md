# Fact-check B, 2026-10-15

Scope: early-payment-discount, procurement-savings, reorder-point, safety-stock, par-level,
inventory-turnover, inventory-carrying-cost, warehouse-space, warehouse-size, delivery-cost,
accounts-receivable-turnover. Each page was checked against its copySpec, its calculator fragment
(defaults and formula recomputed independently, not taken from the writer's `figures` list), the KB
CURRENT STATE and `free-tools.json`. Every edit was applied with an exact-once assertion, and
`python -I lint.py` is at 0 errors and 0 warnings on all eleven.

All default-derived figures used in the new copy reconcile: EPD $22.56 / $22.11 / 37.2%, procurement
$1.44 / 72,000, reorder 709 / 141, safety 229 / 5.0%, par 1,080 / $23,760 / 740, turnover 12.0,
carrying 27% / $35,640 / $0.50 (49.5 cents), space 725 sq ft, size 12,400 cases, delivery $27.18 and a
58.9% driver share, AR 9.4 / 38.8 days / 8.8 days past terms.

## Changes

| Page | Slot | Before | After | Reason |
|---|---|---|---|---|
| safety-stock | whatis.cards[2].body | ...irregularly. The buffer is paying for their pattern. | ...irregularly. Part of the buffer is paying for their pattern. | With the defaults, the demand swing is 4,900 of the 19,300 variance (25.4%). Setting the swing to zero only takes the buffer from 229 to 198 cases. The fragment's own on-load tip says "Most of your buffer is there to cover late deliveries, not busy days". "The buffer" overstated it. |
| par-level | whatis.cards[1].body | Which days run busy. Par uses one average day for the whole cycle, so a heavy Friday is paid for out of the 2 buffer days. | Which days run busy. Par prices every day at the average, so a short cycle that holds your heaviest days draws on the 2 buffer days. | Wrong for the default 7-day cycle. Every cycle contains a Friday, and the 120 a day average already includes it (fragment hint: "across a normal week, slow days included"), so the 840 cases of cycle cover absorb a heavy Friday. The buffer is only drawn when a short cycle, such as a 3 or 4 day DSD route, catches the heavy days. |
| inventory-carrying-cost | whatis.cards[2].body | ...so a case of beef carries far more than a case of napkins. | ...so a case of beef carries far more than a case of napkins held as long. | Carrying cost per case shipped depends on dwell time as well as value, and card 1 of the same section says so. Beef turns in days and paper goods sit for weeks, so the unqualified claim can come out backwards. |
| warehouse-size | look.steps[0].body | A lease's square footage can include walls, columns and office. Measure the warehouse floor itself before you enter 3,000, or every figure after it starts too high. | A lease can measure to the outside of the walls, so measure the floor itself before you enter 3,000. Leave the office in it: the 55% usable share already takes the office out. | Contradicted the calculator. The building input is "Total floor area under roof", and the 55% usable share is "What is left after aisles, dock, staging and office" (fragment hints). The shipped copy agrees: "The other 1,350 sq ft is aisles, dock, staging and office". Taking the office out before entering the figure subtracts it twice and understates capacity. Columns sit inside the floor, so they were dropped from the list. |
| warehouse-size | figures | `24 to 48 hours` entry | `55% usable share` entry | The setup figure appears nowhere in the copy. The 55% is now used in look step 1. |
| delivery-cost | whatis.cards[0].body | The truck on the road and nothing before it. ... | The route day and nothing before it. ... | The calculator's route hours are "Clock in to clock out, including the pre-trip check and the load" (fragment hint), so the $27.18 does cover time before the truck is on the road. The rest of the card (picking and order taking sit outside) is unchanged and correct. |
| accounts-receivable-turnover | whatis.cards[2].body | You collect from accounts in 38.8 days while your own suppliers expect payment on their terms. Any gap between the two is cash you fund yourself. | You collect from accounts in 38.8 days, and that clock only starts once a case sells. Every day between paying your supplier and getting paid is cash you fund yourself. | DSO compared straight against supplier terms leaves out the days the stock sits before it sells (the cash conversion cycle). "Any gap" was also wrong whenever supplier terms run longer than DSO, because that gap is in your favor. |
| procurement-savings | figures | `24 to 48 hours` entry | (removed) | The setup figure appears nowhere in the copy. |

## Checked, no change

- **early-payment-discount, whatis card 3 (37.2% as the cost of offering 2/10 net 30).** The math is
  right. The seller takes 98 on day 10 instead of 100 on day 30, which is 2/98 x 365/20 = 37.2% simple
  annualized: the same rate, seen from the other side. It is consistent with the page, because
  something that is cheap money for the buyer to take is dear money for the seller to offer. It also
  stays clear of VOS. The page is buy-side, and the card is the only sell-side line, framed as the
  distributor wrinkle. It holds only if the account would otherwise pay on day 30, which "to get paid
  20 days sooner" already states. Left for the editor (see the report).
- **safety-stock, look step 1 ("weekly totals divided by seven").** The statement is sound.
  sigma_week = sqrt(7) x sigma_day for independent days, so sigma_week / 7 = sigma_day / sqrt(7),
  about 0.38 of the true daily swing. Dividing each weekly total by 7 and taking their spread gives
  the same number. Weekly totals also erase any day-of-week pattern. The result comes out too small in
  every case except perfectly correlated days. Kept as written.
- **safety-stock, look step 3.** Cycle service level against fill rate is correct, and the 5.0% is
  rendered.
- **warehouse-space, look step 1 (sum of peaks overstates).** True for shared (random) storage, which
  is how the calculator models it: aggregate cases into pallets. For dedicated pick slots, the sum of
  each SKU's maximum is the real need. The shipped lever card 6 leans that way ("a position you cannot
  share"). Not an error against the calculator, so it was not changed.
- **All 33 next cards** match their `free-tools.json` descriptions. The AR card's "costs you a year"
  matches the AR calculator's yearly delay-cost card ($20,786). The par card's "costs a year" matches
  the carrying cost calculator's annual card.
- **All VOS sections** carry exactly 3 VOS mentions, say plainly that VOS does not calculate the
  thing, and use only verified facts. None claims forecasting, setting par or reorder points, counting
  or buying stock, a WMS, routing, invoicing or collecting, and none implies a measured result.

## Near-duplicates flagged, not rewritten (editor's call)

- **warehouse-size, whatis card 1** ("Square feet is the landlord's unit ... cases are the buyer's")
  restates shipped FAQ a7 and features row 3 (cases, not square feet, are what a buyer holds a PO
  against).
- **warehouse-size, who chips 1 and 2** ("Owners deciding rack or lease", "Ops weighing racking
  against rent") are the same job twice.
- **early-payment-discount, look step 2** overlaps shipped FAQ a5 and after-the-numbers label 6
  (rebates on their own line). It does add the "enter 0%" input instruction.
- **procurement-savings, look step 2** (cases bought at the new price) sits close to shipped lever
  card 2 (the volume behind the price), but its angle is the partial year. Note that entering
  part-year cases also makes the calculator's per-month card divide by 12.

## Live page, reported only (not edited): safety stock lever card 2

Shipped text (copySpec `5368ca22-...5a6f`): "A 35 case swing on 120 a day is most of what you are
buffering. Steadier ordering from your accounts shrinks it."

**Wrong.** The fragment uses sigma^2 = LT x SD^2 + D^2 x SLT^2. With the defaults:
- Demand term: 4 x 35^2 = 4,900, which is **25.4%**.
- Lead-time term: 120^2 x 1^2 = 14,400, which is **74.6%**.
- Total: 19,300, so sigma = 138.92 and the buffer is ceil(1.6449 x 138.92) = 229.

Measured as standard deviations, it is 70 (demand) against 120 (lead time). Removing the whole demand
swing would leave **198** cases, 31 fewer. Removing the lead-time swing would leave **116**, 113 fewer.
On load the calculator's own tip fires, because D x SLT = 120 > sqrt(LT) x SD = 70, and it reads:
"Most of your buffer is there to cover late deliveries, not busy days." **The shipped card contradicts
the tool directly beneath it.**

The main CTA ("Steadier orders need a smaller buffer ... the swing you buffer against gets smaller"),
the banner heading ("smooths the demand swing you buffer against") and lever card 6 lean on the same
premise. They are not false, but with these defaults the demand side is the smaller lever. The CTA
line is also close to an implied VOS result.

## Editor decisions on the handed-back items (2026-10-15)
- early-payment-discount whatis.cards[2].body: added "An account that would otherwise pay on day 30", since 37.2% holds only against day-30 payment.
- warehouse-space look.steps[0].body: scoped to "In shared storage", which is how the calculator models space.
- warehouse-size who.chips[1]: "Ops weighing racking against rent" -> "Ops leads planning peak season" (duplicated chip 0's job).
- Kept: warehouse-size whatis card 1 (a definition overlapping an FAQ, as the approved marginal cost reference does), early-payment look step 2 (adds an input instruction FAQ a5 lacks), procurement look step 2 (partial-year deals, a different point from lever card 2).
