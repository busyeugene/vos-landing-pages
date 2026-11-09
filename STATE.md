# State

## Batch 2 compare pages (Eugene's "Competitors Batch 2" sheet, 30 pages)
- ALL 30 built, reviewed, verified and pushed: waves 1-2 (`2521219`), wave 3 (`ed58b91`: orocommerce,
  shopify-b2b, sana-commerce, b2b-wave, repzio, sps-commerce, truecommerce, conexiom, esker), waves 4-5
  (`fa26a9e`: OPERATOR pages toast-pos, lightspeed-pos, touchbistro, lavu-pos, altametrics, crunchtime, plus
  the distributor replacement page tradegecko). All gates 0. Repo + Vercel mirror only.
- Airtable: the 30 rows moved Planned -> Proofreading (2026-11-09, read back 30/30; there is no "Proofread"
  option). Nothing else is on the landing-page roadmap (3 unscheduled Backlog rows only).
- NEXT: Webflow port of all 30 (none started): create each page by duplicating fresho-alternative (distributor)
  or an operator compare page, record ids/paths in `_webflow/pages.json` (`compare`, `comparePaths`), run
  extract-compare / gen-repush / gen-schema (gen-schema needs the 6 new operator slugs + tradegecko), push,
  verify from stored state; then /alternatives hub cards for all 30. Recipe: CLAUDE.md "How to change copy on
  these 12 pages" and the 2026-10-28 section.
- Review rules per wave: `_build/research/batch2-2026-11/wave1..4-review-fixes.md`.
- Blocked on the client (via Eugene): see `docs/open-items.md`.

## Webflow (carried from 2026-10-28)
- The 8 operator compare pages are still DRAFTS in Webflow while the published /alternatives hub links to
  them: un-draft before the next site publish (ids in `_webflow/pages.json` `compare`). Eugene publishes.
- The 12 older distributor compare pages in Webflow still show the old integrations line ("...the ERP you
  run"); carry the new `build.js` line over when they are next pushed.
