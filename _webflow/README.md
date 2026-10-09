# `_webflow/` — porting repo pages into the client's Webflow site

One-way pipeline: the root HTML stays the source of truth, and this pushes it into Webflow via the
Webflow MCP. Excluded from the Vercel deploy by `.vercelignore`.

The method, the element-id conventions and the API gotchas are documented in **CLAUDE.md, section
"Webflow port (`_webflow/`)"**. Read that first; this file only covers what the files are.

## Run order

```
python extract-content.py     # root HTML      -> content/<slug>.json
python gen-ops.py             # content + map  -> ops/<slug>.json   (text, embed, links, delete)
python gen-schema.py          # content + map  -> schema/<slug>.json (JSON-LD, 40 nodes per page)
python batches.py <slug> text|embed|rest [size]   # print ready-to-send MCP action arrays
```

`gen-ops.py` and `gen-schema.py` are pure functions of `content/`, `map.json`, `overrides.json` and
`donor-cells.json`, so they are safe to re-run at any time.

## Files

| File | What it is |
|---|---|
| `map.json` | **The linchpin.** Webflow element ids for every content slot. Valid on any page duplicated from a batch-1/2/3 landing page, because duplication preserves element UUIDs. Carries `_kinds` and `_h2note`, which explain the String-child and two-line-H2 rules. |
| `pages.json` | The 10 new page ids, the 16 existing ones (for resolving inline links), and the 4 feature-row link slots. |
| `donor-cells.json` | The donor's comparison matrix, 10 rows x 3 cells, so `gen-ops.py` knows which cells need a structural icon/text conversion. |
| `overrides.json` | Deliberate divergences from the repo, with reasons. Currently the two 9-to-8 FAQ merges forced by the per-element IX2 accordion binding. |
| `content/` | Extracted page copy, one JSON per page. Generated. |
| `ops/` | The MCP action payloads. Generated. |
| `schema/` | Per-page JSON-LD for Webflow's native schema field. Generated. |
| `derived/` | Scratch output from element-tree exploration. Not an input to anything. |

## Verifying a port

Never assume a push landed. Read the pages back (`data_element_tool` / `get_all_elements`, which
persists to a file rather than flooding context) and check three things:

1. every `ops[].text` pair matches the live String,
2. every schema `Question` matches the rendered accordion,
3. **no string on the page comes from the donor's repo page but not its own** — this is how eight
   unmapped slots went unnoticed through every gate on 2026-10-09.

Last verified 2026-10-09: 1004/1004 text ops, 160/160 schema FAQ nodes, 0 leftovers, all 10 pages
`draft: true` and unpublished.
