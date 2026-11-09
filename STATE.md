# State

## Batch 2 compare pages (Eugene's "Competitors Batch 2" sheet, 30 pages)
- Done and pushed (`2521219`): wave 1, 8 ERP pages (netsuite, odoo, acumatica, business-central, sage-x3,
  syspro, prophet-21, aptean) and wave 2, 6 inventory pages (cin7, zoho-inventory, inflow-inventory,
  fishbowl-inventory, unleashed-software, brightpearl). All gates clean. Repo + Vercel mirror only.
- Next step: wave 3, 9 pages: OroCommerce, Shopify B2B, Sana Commerce, B2B Wave, RepZio, SPS Commerce,
  TrueCommerce, Conexiom, Esker. Rows, slugs and secondaries: `_build/research/batch2-2026-11/batch2-picks.csv`.
  Recipe and lessons: CLAUDE.md "RESUME HERE 2026-11-09"; rules for drafts:
  `_build/research/batch2-2026-11/wave1-review-fixes.md` (S1-S10) plus the wave-2 lessons in CLAUDE.md.
- Then wave 4 (6 restaurant OPERATOR pages: Toast, Lightspeed, TouchBistro, Lavu, Altametrics, Crunchtime)
  and wave 5 (TradeGecko, honest replacement page, gently).
- Not started: Webflow port of all 14 batch-2 pages (needs gen-schema, hub cards, compare paths).
- Blocked on the client (via Eugene): see `docs/open-items.md`.

## Webflow (carried from 2026-10-28)
- The 8 operator compare pages are still DRAFTS in Webflow while the published /alternatives hub links to
  them: un-draft before the next site publish (ids in `_webflow/pages.json` `compare`). Eugene publishes.
- The 12 older distributor compare pages in Webflow still show the old integrations line ("...the ERP you
  run"); carry the new `build.js` line over when they are next pushed.
