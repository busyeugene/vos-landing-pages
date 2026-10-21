# -*- coding: utf-8 -*-
"""Byte-check the stored comparison-cell embed code against repush/<slug>.json.

get_all_elements omits an HtmlEmbed's `code`, so a tree read can never confirm a cell. Run one
data_element_settings_tool call per page with a get_settings (type all_raw_settings) action per
cell, labelled with the cell's element id, save the raw result to a file, then:

    python verify-cells.py <slug> <result-file>

Prints every cell whose stored code differs from what repush says it should hold.
"""
import io, json, re, sys
slug, path = sys.argv[1], sys.argv[2]
want = {op['element_id']['element']: op['settings'][0]['static_text']['value']
        for op in json.load(io.open('repush/%s.json' % slug, encoding='utf-8'))['settings'][0]['set_settings']['operations']}
raw = io.open(path, encoding='utf-8').read()
try:
    blob = ' '.join(x.get('text', '') for x in json.loads(raw))
except Exception:
    blob = raw
got = {}
for m in re.finditer(r'\{"label":"([0-9a-f-]{36})","action":"get_settings","result":(\[.*?\])\}(?=\{"label"|$)', blob, re.S):
    res = json.loads(m.group(2))
    s = json.dumps(res)
    c = re.search(r'"key": "code".*?"value": "((?:[^"\]|\.)*)"', s)
    got[m.group(1)] = json.loads('"%s"' % c.group(1)) if c else None
bad = [e for e in want if got.get(e) != want[e]]
print('%s: %d/%d cells match%s' % (slug, len(want) - len(bad), len(want), '' if not bad else ''))
for e in bad:
    print('  MISMATCH', e, '\n    want', want[e][:90], '\n    got ', (got.get(e) or 'NOT FOUND')[:90])
