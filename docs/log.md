# Log

## 2026-11-09: Batch 2 compare pages, waves 1-2 (14 pages)
- Imported the 30 "Batch 2 pick" rows of Eugene's sheet into Airtable (Content plan, Planned); files in
  `_build/research/batch2-2026-11/`. Duplicate-KW check skipped on Eugene's word.
- Built NetSuite as the pilot (`29162e4`), then wave 1 (7 ERPs, `da57489`) and wave 2 (6 inventory systems,
  `2521219`): worktree agent per page, central dedupe, 5 reviewers, one fix list, verification round.
- Eugene's rulings: no known named integrations (safe wording everywhere); TradeGecko = honest replacement page.
- Sitewide: compare integrations line now conditional on the ERP's setup (`build.js`); batch-2 delivery
  bullet no longer promises QuickBooks needs no retyping; a few registry blurbs de-"buyer"-ed.

## 2026-11-09: Batch 2 compare pages, waves 3-5 (16 pages)
- Wave 3 (9 webshop / EDI / order-capture distributor pages, `ed58b91`) and waves 4-5 (6 restaurant OPERATOR
  POS/back-office pages + TradeGecko replacement page, `fa26a9e`). Same recipe per wave: worktree agent per page,
  merge, central dedupe, 5 reviewers (2 live fact-checks, 2 reader roles, 1 sameness), fix round, changed-lines
  verification round, fixes. Related strips re-pointed to same-wave siblings; 6 operator slugs added to OPERATOR
  sets in template.js/claims.js.
- Notable fact fixes: SPS sells PDF Order Automation; TrueCommerce still hosts an emailed-order connector;
  Crunchtime voice counts are a paid add-on since 2026-06-30; TradeGecko retired in stages (2022, last 2023-08-31).
- Airtable: 30 batch-2 rows Planned -> Proofreading.

## 2026-11-09: Batch 2 (30 compare pages) ported to Webflow as drafts
- 30 pages created by duplicating fresho-alternative into /alternatives (draft), SEO metas + OG copied flags
  at creation. Copy, cells, links, props, JSON-LD pushed by 4 parallel workers after a NetSuite pilot;
  every page verified from stored state (text/props, styles, cells, Fresho-leak, schema equality).
- 30 /alternatives hub cards added via a temporary component (unregistered, 0 left); hub JSON-LD 50 items.
- Tool fixes: gen-repush takes slugs, maps fresho duplicates to the converted cell embed, removes unused
  bullet slots, and no longer writes the donor's cell-1,2 String on converted pages (it failed harmlessly
  on crunchtime); gen-schema knows the 6 new operator slugs; leak-check ignores strings in the page's own
  repo HTML (the shared "Delivery Formats" badge was a false positive).

## 2026-11-11: Batch 2 compare pages published live
- Eugene checked the 30 drafts in Webflow and asked to publish. All 30 taken out of draft (per page with
  update_page_settings; bulk_update_pages draft:false reported success but stored nothing), then a full site
  publish to both custom domains (it also shipped anything else saved since 2026-10-28).
- Checked live: 30 pages + /alternatives hub return 200, hub shows 50 cards, sitemap lists 50 /alternatives/ pages.
- Gave Eugene the 30 URLs (plus the hub) for indexing.
