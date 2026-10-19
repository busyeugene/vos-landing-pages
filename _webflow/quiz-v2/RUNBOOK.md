# Swap a calculator page to its V2 quiz (2026-10-19)

> **State after the rollout:** done on all 23, and the old calculator embeds (`calcEmbed`) were
> DELETED afterwards, so steps 1-7 refer to elements that no longer exist. To UPDATE a quiz now:
> rebuild in the lead magnets project, `python -I split.py`, rewrite embed A and/or B (ids:
> last line per page in `staged.jsonl`) with `set_settings`, verify with `verify_code.py`. If
> `shared/*.html` changed, write it once into the component definition instead
> (`scope_component_id` = `64c7cf9f-...` CSS or `d06c143a-...` engine). For a NEW calculator page,
> follow steps 2-12 with "after the hero's CSS embed" in place of "after calcEmbed".

Everything is SAVED in Webflow, never published. Never call publish_site. The 23 pages are live,
so the swap is staged: the new embeds go in HIDDEN (a hidden element is left out of the published
HTML), are verified byte for byte, and only then does one flip show them and hide the old
calculator. A client publish at any moment shows either the old calculator or the finished quiz.

Data: `plan.json` (`_shared` ids + one entry per page). Files: `parts/<page>.a.html`,
`parts/<page>.b.html`. Checker: `verify_code.py`.

Fixed call params: siteId `69bc131a5fdaa09a10456d46`, session_id `ses_3Ktp5rHXWSCFx94YeZzyVjwyIV5`,
your own agent_id, pageId = the page. Element ids are objects `{component: <pageId>, element: <uuid>}`.
On `429 Too Many Requests`, wait and retry; before retrying a CREATE, re-read the page so you
never create twice.

Target order of Body children after the swap:
`Navbar, landing-hero, <css embed>, <old calc embed: HIDDEN>, VOS Quiz CSS instance, embed A, embed B, VOS Quiz Engine instance, sections...`

## Stage (nothing visible changes)
1. `get_all_elements {depth: 1}`. Confirm `calcEmbed` from plan.json is a Body child HtmlEmbed and
   there is no VOS Quiz CSS / Engine instance and no extra HtmlEmbed after it yet (if there is,
   a previous run got partway: inspect, do not duplicate).
2. `data_element_builder`, two actions in ONE call, both `creation_position: "after"`,
   `parent_element_id: <calcEmbed>`, `element_schema: {type: "HtmlEmbed"}`: first `embedB`, then
   `embedA` (each lands directly after the calc embed, so the result is calc, A, B).
3. `data_element_settings_tool`: `set_visibility {element_id: A, static_value: false}` and the same
   for B. Then `data_element_tool set_style {id: A, style_names: ["uui-padding-vertical-xhuge 7"]}`
   (the class the old calculator embed carries, for the same vertical spacing).
4. `set_settings` code of A = `parts/<page>.a.html` verbatim (one call), then code of B =
   `parts/<page>.b.html` verbatim (another call).
5. Verify: one `data_element_settings_tool` call with `get_settings {type: "all_raw_settings"}` on A,
   then on B, repeated (A, B, A, B, ...) until the result spills to a file (about 100,000 chars,
   so 3 pairs is usually enough). Run
   `python -I verify_code.py <saved file> parts/<page>.a.html parts/<page>.b.html`.
   Both must print MATCH. Never judge by eye. On DIFFER, rewrite that embed and re-verify.

## Flip (do these back to back)
6. `data_component_tool insert_component_instance` x2 in one call:
   `{component_id: <cssComponent>, creation_position: "before", parent_element_id: A}` and
   `{component_id: <engineComponent>, creation_position: "after", parent_element_id: B}`.
7. `data_element_settings_tool`: `set_visibility` A true, B true, `calcEmbed` false (one call).
8. Links to the quiz anchor `newAnchor` (e.g. `#vos-q-reorder-point`):
   - `data_element_tool set_link {id: <each of the 4 rowLinks>, linkType: "url", link: <newAnchor>}`
   - `data_component_props_tool set_component_instance_prop_values {element_id: <heroInstance>,
     values: [{prop_id: <heroLinkProp>, type: "link", link_mode: "url", link_to: <newAnchor>}]}`
9. Copy fix, only if the page has `copyFix`: `data_element_tool set_text {id: copyFix.id, text: copyFix.after}`.
   If set_text refuses the node, query it and target its String child; report what you did.

## Verify the flip
10. `get_all_elements {depth: 1}`: the order above, A/B visible, calcEmbed hidden, exactly one
    instance of each shared component.
11. `get_settings all_raw_settings` on each of the 4 row links: url = newAnchor.
    `get_component_instance_props` on the hero instance: Link = `{mode: url, to: newAnchor}`,
    Text 3 still "Use the Calculator".
12. If copyFix: `query_elements` with `element_id` = copyFix.id returns the new text.

Rollback for a page: show `calcEmbed`, remove A, B and the two instances, set the 5 links back to
`oldAnchor`, set the copy back to `copyFix.before`.
