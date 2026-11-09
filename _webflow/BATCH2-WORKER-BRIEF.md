# Worker brief: push batch-2 compare pages into their Webflow drafts (2026-11-09)

You push generated copy into Webflow DRAFT pages that already exist, then verify each page from
what Webflow STORED. Everything is generated: **do not write, fix or reword any copy**. If a
string looks wrong, report it; the repo is the source of truth.

**Never call `publish_site`. Never change a page's `draft` flag. Never touch a page not in your list.**

## Fixed values
- Repo: `E:\Claude projects\VOS landing pages`, work in its `_webflow` folder. Run Python as `python -I`.
- Site id: `69bc131a5fdaa09a10456d46`
- Page id per slug: `_webflow/pages.json` -> `compare` -> `<slug>`. Read it from the file, never type from memory.
- Webflow MCP session: pass `session_id` = the `ses_...` value given in your task message on EVERY
  call. Pick your own `agent_id` once (`<model>|claude-code|<5 random chars>`) and keep it.
- Element, settings and props tools take `siteId`, `pageId`, `session_id`, `agent_id`, `context`
  at the TOOL top level, and `actions: [...]`.
- Your private scratch folder for saved results: given in your task message. Use only that.

## Per page, in this order
Each page has `_webflow/repush/<slug>.json`. Send its parts exactly as stored (copy the arrays
verbatim; print them with `python -I -c` and `json.dumps(..., ensure_ascii=False)` if needed):

1. `text_batches`: each inner array is ONE `data_element_tool` call (`actions` = that array). Usually 2 calls.
2. `settings`: ONE `data_element_settings_tool` call (`actions` = the array; one action with an
   `operations` list of 18 cells).
3. `element`: ONE `data_element_tool` call (`set_style`, `set_link`, `set_text`, and on some
   pages `remove_element` for unused bullet slots).
4. `props`: ONE `data_component_props_tool` call (`actions` = the 2-action array, hero + mainCta).
5. Schema: run `python -I batches.py <slug> schema`, send the printed array as `actions` of ONE
   `data_pages_tool` call (no siteId/pageId at the top level for that tool).

SEO title/description and OG flags were already set when the page was created; do not send `seo`.
Every action must come back `success`. A `remove_element` "Element not found" means the slot was
already removed (only acceptable on a retry). Any other failure: retry that call once, then report
the error verbatim. On `429 Too Many Requests`, wait briefly and retry the same call.

## Verify from stored state (per page)
a. **Text, props, styles, leaks.** `data_element_tool` with `get_all_elements` repeated 3 times in
   one call (labels t1,t2,t3) so the result is saved to a file. Then, with that saved file path:
   - `python -I verify-push.py repush/<slug>.json <file>` -> want `bad 0` and `styles ok 18 bad 0`.
   - `python -I leak-check.py <slug> <file>` -> want `0 leak(s)`.
b. **Table cells.** `data_element_settings_tool`: one `get_settings` action
   (`type: "all_raw_settings"`, label = the cell's element uuid) for each of the 18
   `element_id`s in `settings[0].set_settings.operations`, and repeat that list 6 times in the same
   call so it spills to a file. Then `python -I verify-cells.py <slug> <file>` -> want `18/18`.
c. **Schema.** `data_pages_tool` with `query_pages_schema_markup` for this page, as 6 separate
   identical actions (a duplicate page id inside ONE action is rejected) so it spills to a file.
   Then `python -I verify-schema-stored.py <slug> <file>` -> want `True`.

If a result does NOT spill to a file (it came back inline), add more repeats and call again; do
not hand-copy large results into files. If a verify script itself crashes or reports total
failure on everything, suspect the script/the file shape first and report it with the traceback;
do not rewrite the scripts.

If a check fails: re-send only the part that failed (e.g. one text batch), then re-verify.

## Report back (keep it short)
One line per slug: `slug: text a/b, props x/x, styles 18/18, cells 18/18, leaks 0, schema True`,
plus every non-success action quoted verbatim and anything you could not resolve.
