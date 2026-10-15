# Fixes applied to the 23 live calculator pages (2026-10-15)

Applied from `fixes-apply/<slug>.json` exactly as stored (payloads printed by script and pasted, never retyped).
Agent `opus-5|claude-code|r8t4wz`, session `ses_3KiSVlMtL4iIs9lvICdrmXq7quP`, site `69bc131a5fdaa09a10456d46`.
**Not published.** `publish_site` was never called; the changes are saved and ship with the next site publish.

## Totals
- Element writes: 21 `set_text` + 92 `set_link` (4 row buttons x 23 pages), all returned success.
- Alt text: 1 (unit-price `icons.tools[5]`). Component props: 8 values on 4 pages (5 set actions).
- Schema: `bulk_update_pages_schema_markup` in 3 batches (8, 8, 7 pages), all accepted.
- Verification from stored state: **A 23/23 PASS, B 4/4 PASS, C 23/23 PASS.** Extra: schema FAQ vs live accordion 23/23 match.

## Per page
| Page | Writes done | A (text, links, alt) | B (props) | C (schema exact) | Schema FAQ vs accordion |
|---|---|---|---|---|---|
| `product-pricing-calculator` | 0 text, 4 links -> `#vos-pricing`, schema (batch 1) | PASS | n/a | PASS | match |
| `product-markup-calculator` | 0 text, 4 links -> `#vos-prodmarkup`, schema (batch 1) | PASS | n/a | PASS | match |
| `material-markup-calculator` | 0 text, 4 links -> `#vos-markup`, schema (batch 1) | PASS | n/a | PASS | match |
| `retail-margin-calculator` | 1 text, 4 links -> `#vos-retmargin`, schema (batch 1) | PASS | n/a | PASS | match |
| `wholesale-markup-calculator` | 0 text, 4 links -> `#vos-wmarkup`, schema (batch 1) | PASS | n/a | PASS | match |
| `food-markup-calculator` | 0 text, 4 links -> `#vos-foodmarkup`, schema (batch 1) | PASS | n/a | PASS | match |
| `wholesale-to-retail-markup-calculator` | 0 text, 4 links -> `#vos-w2r`, schema (batch 1) | PASS | n/a | PASS | match |
| `price-change-calculator` | 1 text, 4 links -> `#vos-pricechg`, schema (batch 1) | PASS | n/a | PASS | match |
| `landed-cost-calculator` | 3 text, 4 links -> `#vos-pricecomp`, 3 prop values, schema (batch 2) | PASS | PASS | PASS | match |
| `unit-price-calculator` | 3 text, 4 links -> `#vos-unit`, 1 alt, 2 prop values, schema (batch 2) | PASS | PASS | PASS | match |
| `purchase-price-variance-calculator` | 0 text, 4 links -> `#vos-pricevar`, schema (batch 2) | PASS | n/a | PASS | match |
| `early-payment-discount-calculator` | 2 text, 4 links -> `#vos-purchprice`, schema (batch 2) | PASS | n/a | PASS | match |
| `procurement-savings-calculator` | 0 text, 4 links -> `#vos-procsave`, schema (batch 2) | PASS | n/a | PASS | match |
| `marginal-cost-calculator` | 2 text, 4 links -> `#vos-marginal`, schema (batch 2) | PASS | n/a | PASS | match |
| `reorder-point-calculator` | 4 text, 4 links -> `#vos-reorder`, schema (batch 2) | PASS | n/a | PASS | match |
| `safety-stock-calculator` | 3 text, 4 links -> `#vos-safety`, 2 prop values, schema (batch 2) | PASS | PASS | PASS | match |
| `par-level-calculator` | 2 text, 4 links -> `#vos-parlevel`, schema (batch 3) | PASS | n/a | PASS | match |
| `inventory-turnover-calculator` | 0 text, 4 links -> `#vos-invturn`, 1 prop value, schema (batch 3) | PASS | PASS | PASS | match |
| `inventory-carrying-cost-calculator` | 0 text, 4 links -> `#vos-carrycost`, schema (batch 3) | PASS | n/a | PASS | match |
| `warehouse-space-calculator` | 0 text, 4 links -> `#vos-wspace`, schema (batch 3) | PASS | n/a | PASS | match |
| `warehouse-size-calculator` | 0 text, 4 links -> `#vos-wsize`, schema (batch 3) | PASS | n/a | PASS | match |
| `delivery-cost-calculator` | 0 text, 4 links -> `#vos-delivery`, schema (batch 3) | PASS | n/a | PASS | match |
| `accounts-receivable-turnover-calculator` | 0 text, 4 links -> `#vos-ar`, schema (batch 3) | PASS | n/a | PASS | match |

## How each check was made
- **A.** One `query_elements` per page with every `expect.text` and `expect.links` uuid (`children_depth: 1`) plus the
  pain, chips, tools, features and FAQ sections at full depth, so the reply spilled to a file byte-exact. A text uuid
  passes when its own `textContent`, or the joined text of its String descendants, equals the expected string. Links:
  the element is a `Link` in the tree **and** `get_settings` (`all_raw_settings`) returns
  `link = {"mode": "url", "to": "#vos-..."}` for all 4. Alt: `get_settings` `altText` on the unit-price icon.
  `query_elements` does not expose link targets, which is why `get_settings` was needed. The checker was negative-tested
  (a tampered anchor and a tampered heading both FAIL).
- **B.** `get_component_instance_props` on the hero (`989faf8b-...f470`, landed-cost only) and Main CTA
  (`f9bd322f-...0ed2`) instances; every `expect.props` value equal.
- **C.** One `query_pages_schema_markup` for all 23 (spilled to file); each stored `jsonLdSchema` compared to the file's
  `schema` by JSON equality: 0 differences on all 23. `lastUpdated` on every page is this session's write
  (07:19 / 07:21 / 07:23 UTC), `rawJsonLdSchema` null, nothing inherited.
- **Before the schema push** the stored schema was snapshotted and diffed against the files: the only changes were the
  page URLs and `@id`s moving under `/free-tools/` (7 per page) and the 5 FAQ pairs matching the approved accordion
  fixes (landed-cost, early-payment, marginal-cost, reorder-point, par-level). Nothing unexpected.
- Before writing links, every anchor (`#vos-...`) was confirmed to exist as an `id` in that page's calculator fragment.

## Notes
- The brief said 5 pages carry props; the files have props on **4** (landed-cost, unit-price, safety-stock,
  inventory-turnover). All 4 were written and verified.
- Two anchors do not read like their page but are correct per the fragments: landed-cost uses `#vos-pricecomp`,
  early-payment-discount uses `#vos-purchprice`.
- Raw read-backs and the checkers are in the session scratchpad (`verify/`, `vcheck.py`, `bcheck.py`,
  `schemadiff.py`, `faqcross.py`), not in the repo.
