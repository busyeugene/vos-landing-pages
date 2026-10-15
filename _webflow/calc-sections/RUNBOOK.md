# Applying the five new sections to one calculator page

Eugene approved the design on the draft test page `6ad05858af84441219bf54be` (2026-10-15). These pages
are LIVE (`/free-tools/<slug>`): every save ships with the client's next site publish. Never call
`publish_site`. **One writer per page, one call at a time.** Page ids and sources: `pages.json`.
Template component ids: `templates.json`. Copy: `specs/<slug>.json` (lint-clean with `lint.py`).

Every Webflow call carries top-level `siteId` `69bc131a5fdaa09a10456d46`, `pageId`, `session_id`,
`agent_id`, `context`. Element ids are objects `{component: <pageId>, element: <uuid>}`.

## Final block order (body children)
navbar, landing-hero, HtmlEmbed (hero CSS), HtmlEmbed (calculator), stats `3f7a12ca-...fe95`,
**whatis**, **who**, setup `a303abc3-...5ec0`, features `24599529-...a0e2`, **look**,
pain `964de5d5-...e8b5`, table `37b58628-...a16d`, tools `b1f1a02d-...64de`, **vos**,
chips `4e065caf-...b596`, **next**, testimonial `c1b218dc-...236f` (hidden), faq `cb55ed2c-...f94e`,
Main CTA, Final Footer. (Original-section uuids are the same on all 23 pages: duplicated from one donor.)

## Steps
1. **Read the order**: `data_element_tool` `get_all_elements {depth: 1}`. Expect the original order
   (stats, pain, setup, features, chips, tools, table, testimonial, faq). Anything else: stop and report.
2. **Insert the five templates** with `data_component_tool` `insert_component_instance`, each
   `creation_position: "before"` the faq `cb55ed2c-634b-b694-87d5-a43e7e3cf94e`, in the order whatis,
   who, look, vos, next. Record each returned instance element id.
3. **Unlink** each with `unlink_component_instance {component_instance_id: <instance id>}`. The root
   keeps the instance id and becomes a plain Block.
4. **Hide** (skip on marginal-cost, whose text is final): `data_element_settings_tool` `set_visibility`
   `static_value: false` on the five roots, so a publish mid-build never shows marginal cost copy.
5. **Read the five roots in ONE `query_elements` call**, labels exactly `whatis`, `who`, `look`, `vos`,
   `next` (`element_id` + `children_depth: -1`), plus a sixth query labelled `pad` on the features
   section `24599529-959c-8515-3ff2-44ca6d68a0e2` (`children_depth: -1`). The padding makes the result
   spill to a file, so it is saved byte-exact. Never retype the JSON.
6. **Generate**: `python -I gen_apply.py <slug> <spill file>`. It exits on any slot it cannot find.
   It writes `apply/<slug>/el-*.json`, `alt-*.json` and `map.json`.
7. **Send** each `el-*.json` as the `actions` of one `data_element_tool` call and each `alt-*.json` as
   the `actions` of one `data_element_settings_tool` call. Paste the file content exactly.
8. **Verify from stored state**: repeat step 5 (fresh spill file), then
   `python -I verify_apply.py <slug> <new spill file>`. Want `0 mismatches`. Fix and re-verify.
9. **Show**: `set_visibility` `static_value: true` on the five roots.
10. **Order**: `move_element` each of these `before` the faq, in this order: whatis, who, setup,
    features, look, pain, table, tools, vos, chips, next, testimonial. Then `get_all_elements {depth: 1}`
    and confirm the final order above, the testimonial still `visibility: false`, and the DOM ids
    `who-its-for`, `how-it-works`, `features`, `what-to-look-for`, `where-vos-fits`, `integrations`,
    `faq` each once.

## When all 23 are done
`get_component` with `includeInstanceCount` on each of the five templates (want 0), then
`unregister_component` each, then `query_components {keywords: ["TMP"]}` (want 0 matches).
