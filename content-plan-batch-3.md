# VOS pSEO, Batch 3 content plan

**Status: BUILT** (2026-09-11). 4 new pages, 16 total.

## Decisions (Eugene, 2026-09-11)

| Cluster as briefed | Decision |
|---|---|
| vendor management software | **Built** |
| inventory replenishment software | **Built** |
| distribution resource planning software | **Built as a reframe** for food distributors. Eugene's call. The data suggested swapping to "food distribution software" (section 2); that option is still open. |
| stock control software | **Dropped.** Duplicates the live inventory control page. |
| inventory automation software | **Built.** Eugene's replacement 4th page. |

The brief originally said 6 pages; it contained 4 clusters. Confirmed: 4.

---

## 1. Pages

| Page | Slug | Cluster | Its one question |
|---|---|---|---|
| Vendor management software | `/vendor-management-software` | Ops | "Which suppliers work for me, on what terms, and how do they want orders?" |
| Inventory replenishment software | `/inventory-replenishment-software` | Inventory | "It's running low. How do I get more in, fast?" |
| Inventory automation software | `/inventory-automation-software` | Inventory | "What can I stop doing by hand?" |
| Distribution resource planning software | `/distribution-resource-planning-software` | Ordering | "What order data does my planning run on?" |

### Keywords

| Page | Primary | Secondaries | Tiering |
|---|---|---|---|
| Vendor management | vendor management software | restaurant vendor management software (**added**, data-backed), vendor relationship management software, vendor management system software, vendor contract management software | A, A, B, C |
| Replenishment | inventory replenishment software | iphone inventory replenishment software, automated inventory replenishment software, replenishment inventory optimization software | A, B, B |
| Automation | inventory automation software | inventory automation management software, restaurant inventory automation software (**added**, data-backed) | A, A |
| DRP | distribution resource planning software | distribution planning software, distribution capacity planning software | B, B |

### Honesty guardrails written into the pages
- **DRP:** hero lead says "VoiceOrder Solutions is not distribution resource planning software. It is the ordering layer that feeds it." First FAQ (open by default) says no outright. Comparison table has honest ✗ rows for network planning, forecasting, and transport optimization.
- **Vendor management:** honest ✗ rows for contract drafting and vendor risk. Tier C FAQs for contract management and for the staffing / third-party-risk meanings of "vendor management system".
- **Replenishment + automation:** both say VOS never sends an order on its own. Automation says VOS does not deduct stock from POS sales (Q13) and needs no scanners or sensors.

---

## 2. Search Console evidence

Source: `sc-domain:voiceordersolutions.com`, 2025-05-01 to 2026-09-09. The landing page site is not in Search Console (section 4), so the client's main domain is the best available signal.

| Term family | Query | Impressions | Avg position | Main-domain page ranking |
|---|---|---|---|---|
| vendor | restaurant vendor management | 13 | 2.4 | /blog/restaurant-vendor-management (pos 2.9) |
| | restaurant vendor management software | 7 | 11.7 | |
| | vendor management software (head) | 0 | n/a | |
| stock control | food stock control software | 29 | 10.7 | /blog/best-food-inventory-software |
| | stock control software (head) | 0 | n/a | |
| replenishment | what is the best replenishment software for wholesale distributors? | 21 | 7.2 | wholesale / ERP blog posts |
| | inventory replenishment software (head) | 0 | n/a | |
| automation | restaurant inventory automation | 2 | 11.0 | /blog/best-food-inventory-software |
| | inventory automation software that integrates with multiple systems | 12 | 7.3 | /blog/wholesale-inventory-management-software |
| DRP | distribution resource planning software | 30 | 62.5 | nothing on page 1 |
| | all DRP / planning / capacity variants | 81 total | 35 to 62 | |
| food distribution | food distribution software | 865 | 11.3 | /blog/wholesale-food-distribution-software (2,821 impr, pos 10.6) |
| | wholesale food distribution software | 724 | 8.3 | |

**Pattern:** the food- or restaurant-qualified variant ranks; the generic head term does not. That is why two secondaries were added.

---

## 3. New assumptions (Q9 to Q13)

Logged in `knowledge-base/vos-product-facts.md` under "Claims used across batch 3".

| # | Assumption | Pages |
|---|---|---|
| Q9 | History, spend, shorts, substitutions filterable by supplier | vendor management |
| Q10 | Suggested reorder built from par gaps; a person always sends | replenishment, automation |
| Q11 | Order format set per supplier | vendor management, DRP, automation |
| Q12 | Distributor sees a delivery day's orders totalled by item | DRP |
| Q13 | No POS-based stock depletion | automation |

---

## 4. Open items

1. **vos-landing-pages.vercel.app is not in Search Console.** Now 16 pages live with no indexing data and no submitted sitemap. Add it as a URL-prefix property (HTML file or meta tag verification can be committed to the repo once there's a token) and submit `/sitemap.xml`.
2. **Cross-domain links.** The main-domain blog posts that already rank (restaurant-vendor-management at position 2.9, best-food-inventory-software, wholesale-food-distribution-software with 2,821 impressions) are the fastest way to get the new pages discovered. Ask the client for one link from each to its matching landing page.
3. **Food distribution software** is still the strongest untapped distributor-side term: 2,821 impressions at position ~10.6, zero clicks, only a blog post ranking. Candidate for batch 4.
4. Q7 / Q8 from batch 2 (real testimonial quotes, named integrations) are now debts across 16 pages.
