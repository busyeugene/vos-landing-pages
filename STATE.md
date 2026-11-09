# State

## Batch 2 compare pages (Eugene's "Competitors Batch 2" sheet, 30 pages)
- ALL 30 built, reviewed, verified and pushed: waves 1-2 (`2521219`), wave 3 (`ed58b91`: orocommerce,
  shopify-b2b, sana-commerce, b2b-wave, repzio, sps-commerce, truecommerce, conexiom, esker), waves 4-5
  (`fa26a9e`: OPERATOR pages toast-pos, lightspeed-pos, touchbistro, lavu-pos, altametrics, crunchtime, plus
  the distributor replacement page tradegecko). All gates 0. Repo + Vercel mirror only.
- Airtable: the 30 rows moved Planned -> Proofreading (2026-11-09, read back 30/30; there is no "Proofread"
  option). Nothing else is on the landing-page roadmap (3 unscheduled Backlog rows only).
- WEBFLOW (2026-11-09): all 30 are in Webflow as DRAFTS in the /alternatives folder, duplicated from
  fresho-alternative (ids + paths in `_webflow/pages.json` `compare`/`comparePaths`/`compareFromFresho`).
  Pushed and verified 30/30 from stored state: text+props bad 0, styles 18/18, cells 18/18, leaks 0,
  JSON-LD == schema file. Bullet slots: 27 pages drop the handset bullet (`overrides.json` bullets_keep),
  6 rows with 3 bullets had the empty slot removed (gen-repush emits it). Worker brief:
  `_webflow/BATCH2-WORKER-BRIEF.md`; new checks `leak-check.py`, `verify-schema-stored.py`, `wfload.py`.
- /alternatives HUB (Eugene chose cards now): 30 cards added (24 after Fresho, 6 after Restaurant365),
  copy in `gen-alternatives.py` BATCH2_*_CARDS, ids in `_webflow/newcards-batch2.json`; hub JSON-LD now
  50 items. Read back from the stored tree: 50 cards, 50 distinct targets, 30/30 text exact.
  !! The hub is PUBLISHED: take the 30 pages out of draft BEFORE the next site publish, or it ships
  30 dead links (bulk_update_pages draft:false on the 30 ids). Eugene publishes; never publish_site.
- Not done: nobody has looked at a rendered page in the Designer preview.
- Review rules per wave: `_build/research/batch2-2026-11/wave1..4-review-fixes.md`.
- Blocked on the client (via Eugene): see `docs/open-items.md`.

## Webflow (carried from 2026-10-28)
- The 8 operator compare pages from 2026-10-28 are out of draft (read 2026-11-09: draft false).
- The 12 older distributor compare pages in Webflow still show the old integrations line ("...the ERP you
  run"); carry the new `build.js` line over when they are next pushed.
