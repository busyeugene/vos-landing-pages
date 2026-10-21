# -*- coding: utf-8 -*-
"""Byte-check the stored comparison-cell embed code against repush/<slug>.json.

get_all_elements omits an HtmlEmbed's `code`, so a tree read can never confirm a cell. Send one
data_element_settings_tool call per page with a get_settings (type all_raw_settings) action per
cell, labelled with the cell's element id, and REPEAT the list (5-7 copies) so the result passes
the inline limit and the harness saves it to a file. Then:

    python verify-cells.py <slug> <saved-result-file>

Each saved text block is parsed as its own JSON. (The first version joined the blocks and ran a
regex over the whole string; the joining space broke its lookahead and it crashed on every file.
Both verification workers caught it on 2026-10-21.) Every repeated read of a cell must agree.
"""
import io
import json
import sys

slug, path = sys.argv[1], sys.argv[2]
want = {op['element_id']['element']: op['settings'][0]['static_text']['value']
        for op in json.load(io.open('repush/%s.json' % slug, encoding='utf-8'))['settings'][0]['set_settings']['operations']}
got = {}
for block in json.load(io.open(path, encoding='utf-8')):
    r = json.loads(block['text'])
    res = r['result'][0]
    code = None
    if res.get('status') == 'success':
        for m in res['data']['matches']:
            if m['key'] == 'code':
                code = m['value']
    else:
        code = 'ERROR ' + json.dumps(res)[:200]
    got.setdefault(r['label'], []).append(code)
bad = 0
for e, w in want.items():
    vals = got.get(e, [])
    if not vals or any(v != w for v in vals):
        bad += 1
        print('  MISMATCH', e, 'reads', len(vals))
        print('    want', w[:160])
        for v in set(vals):
            print('    got ', (v or 'NONE')[:160])
print('%s: %d/%d cells match (each read %s times)' % (
    slug, len(want) - bad, len(want), sorted(set(len(v) for v in got.values()))))
