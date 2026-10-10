# Pushing one comparison page's copy into Webflow

Proven end to end on `choco-alternative` (2026-10-10): 100/100 text, 11/11 embeds, 6/6 styles,
4 links, 4 deletes, 2 prop groups, all `success`. Follow it exactly; every shape below was wrong
on the first attempt and is recorded because of that.

## Before you start
- Site id: `69bc131a5fdaa09a10456d46`
- Page ids: `_webflow/pages.json` -> `compare` -> `<slug>`. **Never type an id from memory or from
  truncated output.** Read it from the file.
- Everything is generated. **Do not write copy, do not fix wording, do not reorder anything.** If a
  string looks wrong, stop and report it: the repo is the source of truth and a copy change belongs
  there, not here.

## The four pushes, in order

Run each command, then send its printed JSON array as the `actions` parameter of the named tool.
All of these tools also need `session_id`, `siteId` and `pageId` at the **top level** (not inside
the action).

| # | Command | Tool |
|---|---|---|
| 1 | `python batches.py <slug> text 50` | `data_element_tool` |
| 2 | `python batches.py <slug> embed 40` | `data_element_settings_tool` |
| 3 | `python batches.py <slug> styles 40` | `data_element_tool` |
| 4 | `python batches.py <slug> rest 40` | `data_element_tool` |

`text` prints two batches of 50 (one per `----- text batch N -----` header). Send each as its own
call. 50 actions per call is confirmed safe.

Steps 3 and 4 can go in ONE `data_element_tool` call together (styles + links + deletes), which is
what was done on choco.

**Step 2 is one action carrying an `operations` array**, not one action per element. Its key is
`element_id`, not `id`.

## 5. Component props (the hero and the final CTA)

`batches.py <slug> rest` prints a `PROPS:` line at the end. It is NOT an action array, so build the
call by hand with `data_component_props_tool`:

```
{"label":"hero props","set_component_instance_prop_values":{
  "element_id":{"component":"<pageId>","element":"<map.json components.hero.element>"},
  "values":[{"prop_id":"<components.hero.props.eyebrow>","type":"string","string_value":"<props.hero.eyebrow>"},
            ... h1, lead, cta ...]}}
```

- The wrapper keys are **`element_id`** and **`values`**. `component_instance_id` and `prop_values`
  are both rejected.
- Each value is `{prop_id, type: "string", string_value}`. `type: "text"` is rejected.
- Prop ids are in `map.json` -> `components` -> `hero` / `mainCta` -> `props`. They are the same on
  every page, because every page is duplicated from the same donor.
- Send hero and mainCta as two actions in one call.

## What NOT to do here
- **Do not touch the comparison table's 4th column.** Dropping it to two value columns needs the
  page-scoped `is-2col` combo plus 10 `remove_element` calls, and it is a separate step done after
  the copy lands. Leaving it means the page shows a 4th column of donor text for now, which is
  expected and visible only in the draft.
- **Do not publish anything.** Every page stays `draft: true`.
- **Do not run `gen-ops.py` or `extract-compare.py`.** The ops are already generated and committed.

## Report back
Per slug: the counts applied per step, and any action whose status was not `success`, quoted. If a
call is rejected, report the error verbatim rather than guessing a new shape.
