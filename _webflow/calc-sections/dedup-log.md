# Cross-page dedup log, 2026-10-15

Rewrites of the slots `repeats.py` flagged as repeated across the 22 calculator specs. `marginal-cost-calculator.json` (the approved reference) is unchanged. No other slot was touched: every string slot was diffed against a pre-edit backup and only the six target slot types differ.

| Slot type | Slots changed |
|---|---|
| `whatis.cards.N.title` | 23 |
| `who.intro` | 22 |
| `look.h2` | 22 |
| `look.intro` | 11 |
| `vos.body` | 12 |
| `next.cards.N.body` | 22 |
| **Total** | **112** |

**Checks after the edit:** `python -I repeats.py --strict` exits 0 (0 issues). `python -I lint.py all` reports no error outside the icon alts. Its alt check now reads the new per-page icon picks in `icons/assign/` (lint.py changed 10:12, mid-task), and the specs still carry template-icon alts until `gen_update.py` writes the new alts back. On a scratch copy with the alts rebuilt by gen_update's own rule, `lint.py all` exits 0.

**What stayed fixed on purpose:** VOS facts in `vos.body` are the same facts in a new sentence shape, with 2 VOS mentions in each body (3 in the section). Next-card bodies stay true to the linked calculator's `free-tools.json` description. No numbers, alts, links, eyebrows or badges changed.

## accounts-receivable-turnover-calculator

| Slot | Before | After |
|---|---|---|
| `who.intro` | It is for independent food distributors who sell to accounts on credit. Anyone who sets terms, grants credit or answers to a lender about cash should know the number. | Food distributors that sell to accounts on credit use it to see how fast those accounts pay. Whoever sets terms, grants credit or answers to a lender about cash should know the number. |
| `look.h2` | What to check before you quote the ratio | Inputs that bend a receivables turnover ratio |
| `next.cards.1.body` | Find the cash a slow stock turn keeps tied up, and how long a case sits before it sells. | Measure the cash sitting in stock and the days a case waits on your shelf, then see what trimming those days frees. |
| `next.cards.2.body` | See the profit swing per case, and how much volume a raise can afford to lose before it costs you. | Work out the volume a raise can lose, or a cut must win, before the change starts costing you profit. |

## delivery-cost-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | Only the route day is counted |
| `who.intro` | It is for distributors that deliver on their own trucks, from one route to a full fleet. Whoever sets the minimum, quotes a new stop or cuts a route should have the number. | Any distributor running its own trucks can use it, from a single route to a full fleet. Whoever sets the delivery minimum, quotes a new stop or cuts a route should have that figure. |
| `look.h2` | What to check before you trust the drop cost | Count the whole route day in the drop cost |
| `next.cards.0.body` | Find what one more case really costs, including the step cost when new volume needs another truck or route. | Split variable from fixed cost and see what extra volume costs per case once a new truck or route is needed. |
| `next.cards.2.body` | Rank three supplier quotes on landed cost per unit, with freight counted, not the case price alone. | Put inbound freight on each supplier's case and rank three offers by what one unit really costs you. |

## early-payment-discount-calculator

| Slot | Before | After |
|---|---|---|
| `who.intro` | It is for independent food distributors who buy from suppliers on terms. Whoever approves supplier invoices, plans the payment run or negotiates terms should run it first. | Each invoice on early pay terms asks a distributor's payables team the same thing: pay early for the discount, or keep the cash? The person who approves supplier invoices, plans the payment run or negotiates terms should run it first. |
| `look.h2` | What to check before you take the discount | Read the terms before you take the discount |
| `look.intro` | The yearly rate is plain arithmetic. The risk sits in the terms you enter and the invoice behind them. Check these three against a real invoice first. | The yearly rate is plain arithmetic. The risk sits in the terms you enter and the invoice behind them, so test both against a real invoice. |
| `vos.body` | VOS does not calculate discounts, pay suppliers or touch your payables. It works on the selling side: orders your accounts place by voice in the VOS app, each one confirmed and timestamped. Paying early stays your decision, made in your own books. | VOS does not calculate discounts, pay suppliers or touch your payables. Its part is the sale, not the purchase: each order your accounts place by voice in the VOS app comes in confirmed and timestamped. Paying early stays your decision, made in your own books. |

## food-markup-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | Only the pounds you can bill |
| `whatis.cards.1.title` | What it leaves out | Saw hours and packaging stay outside |
| `who.intro` | It is built for independent food distributors that cut, trim or portion product in-house. Anyone who prices a cut item, sets a yield standard or manages cutters should run it. | Distributors with a cut room of their own need it: the ones that cut, trim or portion product before it ships. Anyone who prices a cut item, sets a yield standard or manages cutters should run it. |
| `look.h2` | What to check before you price the cut | Three checks on yield before you price a cut |
| `look.intro` | Yield moves this price the most, and it is the input most often guessed. Check these three before a rep quotes the cut. | Yield moves this price the most, and it is the input most often guessed. Pin down these three before a rep quotes the cut. |

## inventory-carrying-cost-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | A cost that grows by the week |
| `whatis.cards.1.title` | What it leaves out | Running short has a cost too |
| `who.intro` | It is built for independent food distributors who hold dated and dry stock in their own warehouse. Anyone who decides how much stock to hold, or signs off on a large buy, should know what holding it costs. | The people who decide how much dated and dry stock a distributor keeps run it to put a rate on holding it. Whoever signs off on a large buy should know that rate before the order goes out. |
| `look.h2` | What to look for before you trust the rate | Each carrying cost rate needs a second look |
| `look.intro` | Five rates add up in seconds. Whether each one is honest takes longer. Check these three before the 27% goes into a buying decision. | Five rates add up in seconds. Whether each one is honest takes longer. Run through the points below before the 27% steers a buying decision. |
| `vos.body` | VOS does not price your holding costs or change any of the five rates. It works on the selling side: your customers order by voice in the VOS app, and promos reach them by notification and text. | VOS does not price your holding costs or change any of the five rates. Its part is on the selling side, where dated stock goes out. Promos reach your customers by notification and text, and they order by voice in the VOS app. |
| `next.cards.0.body` | Find how many times a year your stock turns, how long a case sits, and the cash a slow turn ties up. | Turn cost of goods and average stock into turns a year, days on hand, and the dollars a slow turn leaves sitting. |

## inventory-turnover-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | Speed, with costly lines weighing most |
| `whatis.cards.1.title` | What it leaves out | Fast is not the same as profitable |
| `who.intro` | It is built for independent food distributors who want to know how hard their stock is working. Owners, finance and buying teams use it to set targets and to spot cash sitting still. | Finance leads, buyers and owners at independent distributors use it to ask one question: how hard is the stock working? It helps them set turn targets and spot cash sitting still. |
| `look.h2` | What to look for before you trust the ratio | What can skew an inventory turnover ratio |
| `look.intro` | The division is simple. The two numbers you divide are where the ratio drifts. Check these three before you set a target off it. | Turns come from one division, and the division never fails. The two numbers you divide are where the ratio drifts, so look here before setting a target. |
| `vos.body` | VOS does not calculate your turns or keep your books. It works where stock leaves the shelf: your customers order by voice in the VOS app and review each line first. | VOS does not calculate your turns or keep your books. It handles the order that takes stock off the shelf: customers speak it into the VOS app and review each line first. |

## landed-cost-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | Case price plus freight, per unit |
| `whatis.cards.1.title` | What it leaves out | The cash a bigger case ties up |
| `who.intro` | It is built for independent food distributors who buy the same item from more than one supplier. Anyone who signs off on a supplier switch should see the per unit ranking first. | When the same item can come from more than one supplier, a distributor's buyer runs it before choosing. Anyone who signs off on a supplier switch should see the per unit ranking first. |
| `look.h2` | What to look for before you trust the ranking | Match the quotes before ranking landed cost |
| `vos.body` | VOS does not compare supplier quotes or buy stock. It works on the selling side, where the calculator's units a month come from. Each order placed in the VOS app arrives with a number, a date and a timestamp. | VOS does not compare supplier quotes or buy stock. The units a month you enter come from what your accounts order, and that is the side it works on. Each order placed in the VOS app arrives with a number, a date and a timestamp. |

## material-markup-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | Everything it takes to reach your dock |
| `whatis.cards.1.title` | What it leaves out | Overhead stays out of the case |
| `who.intro` | It is built for independent food distributors who buy product in and resell it by the case. Anyone who builds a case cost, sets the markup rule or tracks freight should run it. | A distributor that buys product in and resells it by the case needs a true case cost before any markup goes on. Anyone who builds a case cost, sets the markup rule or tracks freight should run it. |
| `look.h2` | What to check before you trust the margin | Where a material markup leaks margin |
| `next.cards.0.body` | Compare three supplier quotes per unit with freight counted, since the cheapest case price is rarely the cheapest unit. | Line up three suppliers once freight is added, and see which one gives the lowest cost per unit. |
| `next.cards.1.body` | Take a landed cost to a wholesale price, then watch thin staple markups pull your blended margin down. | Price a case at wholesale, then watch how thin staple markups drag the margin across your whole mix. |

## par-level-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | A full cycle plus a reserve |
| `whatis.cards.1.title` | What it leaves out | Busy days look like average ones |
| `who.intro` | It is built for independent food distributors who restock their own warehouse on a regular delivery cycle. Anyone who sizes the next top up order, or answers for the cash it ties up, should run it. | Whoever restocks a distributor's warehouse on a regular supplier delivery cycle uses it to set par, one line at a time. Anyone who sizes the next top up order, or answers for the cash it ties up, should run it. |
| `look.h2` | What to look for before you trust the level | When a par level comes out wrong |
| `look.intro` | Par is one multiplication. The count and the days you feed it are where a top up goes wrong. Check these three first. | Par is one multiplication. The count, the days and the way your supplier ships are where a top up goes wrong. |
| `vos.body` | VOS does not set par levels, count your stock or buy from your suppliers. Par is set line by line, and that is how orders reach you. Your customers order by voice in the VOS app from guides tied to your SKUs. | VOS does not set par levels, count your stock or buy from your suppliers. Par is set line by line, and that is how orders reach you. Each account orders by voice in the VOS app, from a guide tied to your SKUs. |
| `next.cards.2.body` | Build a carrying rate from capital, storage, spoilage, insurance and obsolescence, then read what holding stock costs a year. | See what holding that stock costs a year, at a rate built from your own capital, space and spoilage figures. |

## price-change-calculator

| Slot | Before | After |
|---|---|---|
| `who.intro` | It is built for independent food distributors deciding whether to move a price. Anyone who has to defend a raise or sign off on a cut should know the volume line first. | Before a distributor moves a price, someone has to say how much volume the change can survive. Anyone who defends a raise or signs off on a cut should know the volume line first. |
| `look.h2` | What to look for before you trust the breakeven | Get the inputs right before you read the breakeven |
| `next.cards.1.body` | Work out what one more case really costs, including the step cost when new volume needs another truck or route. | Learn what each extra case costs you to buy, pick and deliver, so a price cut has a floor to stop at. |

## procurement-savings-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | Lower prices on cases you already buy |
| `whatis.cards.1.title` | What it leaves out | Rebates, terms and free goods sit apart |
| `who.intro` | It is for independent food distributors whose buyers negotiate supplier prices. Anyone who reports a saving, checks one or signs off a renewal should run it. | Supplier negotiations at a food distributor end in a savings figure, and this is where buyers and finance test it. Anyone who reports a saving, checks one or signs off a renewal should run it. |
| `look.h2` | What to check before you report the saving | Test a saving before it goes in the report |
| `vos.body` | VOS does not measure savings or deal with your suppliers. It works on the selling side, where each account orders from its own guide at the prices you set. When a deal changes a sell price, you update the guides in the VOS admin platform. | VOS does not measure savings or deal with your suppliers. It comes in after the deal: each account orders from its own guide, at the prices you set. When a deal changes a sell price, you update the guides in the VOS admin platform. |
| `next.cards.1.body` | Compare three supplier quotes on landed cost per unit, because the cheapest case price is rarely the cheapest unit. | Before you book a lower case price as a saving, check that it still wins per unit once freight is in. |

## product-markup-calculator

| Slot | Before | After |
|---|---|---|
| `who.intro` | It is built for independent food distributors who price off a cost sheet. Anyone who sets a markup, translates a buyer's percentage or checks a price list should run it. | Pricing teams at distributors that work from a cost sheet use it to turn a markup into a price and a margin. Anyone who sets a markup, translates a buyer's percentage or checks a price list should run it. |
| `look.h2` | What to check before you set the rung | Before you pick a markup rung |
| `vos.body` | VOS does not calculate markups or set prices. It touches one input, the case count behind your monthly gross profit. Customers order by voice in the VOS app, and you see each account's order history in one admin platform. | VOS does not calculate markups or set prices. It touches one input, the case count behind your monthly gross profit. Every order a customer speaks into the VOS app is saved to that account's history, in one admin platform. |
| `next.cards.2.body` | Take a landed cost to a wholesale price, then see low-markup staples pull your blended margin below the quote. | Set staple and specialty markups side by side and read the blended margin the two leave together. |

## product-pricing-calculator

| Slot | Before | After |
|---|---|---|
| `who.intro` | It is built for independent food distributors who set their own prices. Anyone who quotes a case, answers a rival quote or adds a new line should run it before the price goes out. | Independent distributors that set their own prices use it to weigh one case against several pricing rules. Anyone who quotes a case, answers a rival quote or adds a new line should run it before the price goes out. |
| `look.h2` | What to check before you trust the price | Feed the pricing rules honest numbers first |
| `look.intro` | Each rule is only as honest as the numbers you feed it. Check these three before a rep quotes off the result. | Each rule is only as honest as the numbers you feed it. A rep quoting off the result is trusting all three of these. |
| `next.cards.1.body` | See the profit swing per case when a price moves, and how much volume a raise can lose before it costs you money. | Once you pick a price, see how the profit per case shifts and how many cases a raise can lose before profit drops. |
| `next.cards.2.body` | Work out what one more case really costs, including the step cost when that volume needs another truck or route. | See what added volume costs per case, including the jump when it takes a second truck or a new route. |

## purchase-price-variance-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.1.title` | What it leaves out | Shorter payment terms slip past it |
| `who.intro` | It is built for independent food distributors who buy against agreed supplier prices. Anyone who approves invoices or owns a cost budget should see each gap in dollars. | Purchasing and finance teams at food distributors use it when supplier invoices are checked against agreed prices. Anyone who approves invoices or owns a cost budget should see each gap in dollars. |
| `look.h2` | What to look for before you trust the variance | Make the price variance compare like with like |
| `vos.body` | VOS does not read supplier invoices or calculate variance. It works on the selling side of the same items. Customer orders from the VOS app reach you by email, EDI, API or QuickBooks. | VOS does not read supplier invoices or calculate variance. It covers the same items on the way out, as customer orders. Each one placed in the VOS app reaches you by email, EDI, API or QuickBooks. |
| `next.cards.1.body` | Compare three supplier quotes on landed cost per unit, freight in, before you set the next standard price. | Weigh three supplier offers unit by unit, freight in, before the next standard price is set. |

## reorder-point-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | Supplier wait time, stated in cases |
| `whatis.cards.1.title` | What it leaves out | It misses cases already on order |
| `who.intro` | It is built for independent food distributors who buy from their own suppliers and hold stock in their own warehouse. Anyone who decides when the next supplier order goes out should run it line by line. | Buyers at distributors that hold stock in their own warehouse use it to decide when each line needs a supplier order. Whoever places supplier orders should run it for each line, not once for the whole range. |
| `look.h2` | What to look for before you trust the trigger | Three checks before you trust a reorder point |
| `look.intro` | The sum is simple. The trouble is in the stock and the buffer you feed it. Check these three before you set a trigger. | The sum is simple. The trouble is in the stock and the buffer you feed it, and in the units you count them in. |
| `vos.body` | VOS does not set your reorder point, count your stock or order from your suppliers. It works on the demand side: your customers order by voice in the VOS app, and inventory visibility moves with that order activity. | VOS does not set your reorder point, count your stock or order from your suppliers. It works on the demand side, where inventory visibility follows order activity as customers order by voice in the VOS app. |
| `next.cards.2.body` | Count your turns a year, how long a case sits before it sells, and the cash a slow turn keeps tied up. | Step back from single lines to the whole stock: turns per year, days on hand, and the cash that sits idle. |

## retail-margin-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | The store's share of the tag |
| `whatis.cards.1.title` | What it leaves out | Gross, before the store's running costs |
| `who.intro` | It is built for independent and DSD food distributors who sell into stores. Anyone who meets a store buyer, suggests a shelf price or defends a line should run it first. | Sales teams at DSD and independent distributors that sell into stores run it to see the shelf from the store buyer's side. Anyone who meets a buyer, suggests a shelf price or defends a line should run it first. |
| `look.h2` | What to check before you quote the margin | Store numbers to confirm before quoting margin |
| `look.intro` | Two of the inputs come from the store's side, and both drift. Check these three before a number goes in front of a buyer. | Two of the inputs come from the store's side, and both drift. Confirm all three below before a margin goes in front of a buyer. |

## safety-stock-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | How far demand and lead time stray |
| `whatis.cards.1.title` | What it leaves out | Partial deliveries are not in it |
| `who.intro` | It is built for independent food distributors who hold dated and dry lines in their own warehouse. Anyone who decides how much spare stock to keep, or defends that call in cash, should run it. | Inventory planners at distributors carrying dated and dry lines use it to size the buffer under each one. Anyone who decides how much spare stock to keep, or defends that call in cash, should run it. |
| `look.h2` | What to look for before you trust the buffer | How a safety stock buffer gets sized wrong |
| `look.intro` | The formula does the hard part. The swings you feed it decide the answer. Check these three before you commit cash to a buffer. | The formula does the hard part. The swings you feed it decide the answer, so get them right before cash goes into a buffer. |
| `next.cards.1.body` | Build a carrying rate from capital, storage, spoilage, insurance and obsolescence, instead of borrowing a rule of thumb. | Find what a bigger buffer costs to keep each year, using a carrying rate you build from your own numbers. |

## unit-price-calculator

| Slot | Before | After |
|---|---|---|
| `whatis.cards.0.title` | What it counts | Price per quantity, blind to grade |
| `who.intro` | It is built for independent food distributors choosing which pack to stock and quote. Anyone comparing two sizes of the same product should put them on one base first. | Pack choice falls to a distributor's buyers and pricing staff, who run it whenever two sizes of one product compete. Anyone comparing them should put both on one base before either is quoted. |
| `look.h2` | What to look for before you trust the comparison | Put both unit prices on the same footing |
| `vos.body` | VOS does not compare packs or buy stock. It works on the selling side, where the pack you chose meets the order. Customers order by voice in the VOS app from a guide tied to your SKUs, and review each line before sending. | VOS does not compare packs or buy stock. Once you choose a pack, you put it on each account's guide, tied to your SKUs. Customers build the order by voice in the VOS app, then review each line before sending. |
| `next.cards.0.body` | Rank three supplier quotes on landed cost per unit with freight counted, since the cheapest case is rarely the cheapest unit. | Carry the pack comparison further: add each supplier's freight and see which of three quotes lands cheapest per unit. |

## warehouse-size-calculator

| Slot | Before | After |
|---|---|---|
| `who.intro` | It is for independent food distributors working out what their current building holds. Anyone buying a bulk deal, booking a big inbound load or pricing new racking should check it. | Warehouse and operations managers at distributors reach for it when the question is what today's building holds. Anyone buying a bulk deal, booking a big inbound load or pricing new racking should check it. |
| `look.h2` | What to check before you trust the capacity | Before you plan a buy around capacity |
| `look.intro` | Capacity is only as true as the building figure and the flow you enter. Check these three before a buyer plans against it. | Capacity is only as true as the building figure and the flow you enter. A buyer planning against it should confirm each of these. |
| `vos.body` | VOS does not measure your building or run your warehouse. It sits on the order side: customers order by voice in the VOS app, and each order arrives with a number, date and timestamp. Those dated app orders give one check on the monthly cases you enter. | VOS does not measure your building or run your warehouse. It sits on the order side: every order placed by voice in the VOS app arrives with a number, date and timestamp. Those dated app orders give one check on the monthly cases you enter. |
| `next.cards.1.body` | See how many times a year you turn stock, and the cash a slow turn keeps tied up. | Find your days on hand and turns a year, and how much cash a shorter stay on the shelf would free. |

## warehouse-space-calculator

| Slot | Before | After |
|---|---|---|
| `who.intro` | It is for independent food distributors working out how much building their stock needs. Anyone briefing a broker, signing a lease or adding a range should run it first. | Owners planning a move or an expansion use it to work out how much building a distributor's stock needs. Anyone briefing a broker, signing a lease or adding a range should run it first. |
| `look.h2` | What to check before you trust the square footage | Keep the square footage estimate honest |
| `next.cards.1.body` | Add capital, storage, spoilage, insurance and obsolescence into one carrying rate, instead of a rule of thumb. | Floor space is only one cost of holding stock, so add capital, spoilage and the rest into one yearly carrying rate. |
| `next.cards.2.body` | See how many times a year your stock turns, and how long a case sits before it sells. | Get your yearly turns and the days a case spends in the building before it ships. |

## wholesale-markup-calculator

| Slot | Before | After |
|---|---|---|
| `who.intro` | It is built for independent food distributors who carry both staples and specialty lines. Anyone who sets category markups, prices a contract or plans overhead should run it. | Category managers and owners at distributors carrying both staples and specialty lines use it to check the blended margin. Anyone who sets category markups, prices a contract or plans overhead should run it. |
| `look.h2` | What to check before you plan on the blend | Check the mix before you budget on the blend |
| `look.intro` | The blend is only as true as the split you type. Check these three before anyone builds a budget on it. | The blend is only as true as the split you type. Anyone building a budget on it should settle these three questions first. |
| `vos.body` | VOS does not calculate markups or measure your blend. It moves routine order taking off your reps: customers order by voice in the VOS app, and orders arrive confirmed. | VOS does not calculate markups or measure your blend. Routine order taking moves off your reps: orders arrive confirmed once customers place them by voice in the VOS app. |
| `next.cards.2.body` | Before you move a staple's price, see the profit swing per case and how much volume a raise can lose before profit falls. | Move a staple's price on paper first, and find the case volume that holds profit steady after the change. |

## wholesale-to-retail-markup-calculator

| Slot | Before | After |
|---|---|---|
| `who.intro` | It is built for independent food distributors who sell into grocery and specialty retail. Anyone who sets a case price that a store will resell should check the shelf it leads to. | Selling into grocery and specialty retail means pricing a case the store will mark up again. Sales staff and owners who set that case price should check the shelf it leads to. |
| `look.h2` | What to check before you trust the shelf price | Three places the shelf price math slips |
| `next.cards.1.body` | Take a landed cost up to a wholesale price, then watch low-margin staples pull your blended margin below the quote. | Check your own step first: how a mix of staple and specialty markups blends into one margin for the business. |
