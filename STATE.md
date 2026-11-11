# State

## Batch 2 compare pages (30, Eugene's "Competitors Batch 2" sheet): LIVE since 2026-11-11
- Built + reviewed in the repo (`2521219`, `ed58b91`, `fa26a9e`), ported to Webflow (`fa278e5`), published
  2026-11-11 at /alternatives/<slug>; hub shows 50 cards, sitemap lists them. 31/31 URLs return 200.
- Webflow ids/paths: `_webflow/pages.json` (`compare`, `comparePaths`, `compareFromFresho`); hub cards in
  `_webflow/newcards-batch2.json`, copy in `gen-alternatives.py` BATCH2_*_CARDS.
- To change copy later: edit `_build/pages/<slug>.js`, rebuild + gates, then `extract-compare.py <slug>`,
  `gen-ops.py`, `gen-repush.py <slug>`, `gen-schema.py`, push per `_webflow/BATCH2-WORKER-BRIEF.md`.
- Next: Eugene submits the 30 URLs (+ hub) for indexing. Airtable rows are still "Proofreading": move them
  on if Eugene wants (not asked).
- Blocked on the client (via Eugene): see `docs/open-items.md`.

## Webflow (carried from 2026-10-28)
- The 8 operator compare pages from 2026-10-28 are out of draft (read 2026-11-09: draft false).
- The 12 older distributor compare pages in Webflow still show the old integrations line ("...the ERP you
  run"); carry the new `build.js` line over when they are next pushed.
