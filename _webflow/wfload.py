# -*- coding: utf-8 -*-
"""Load an MCP result the way the harness hands it back, inline-copied or saved to a file.

Accepts: the bare result object ({"label", "action", "result"}), a list of them, or the harness
wrapper (a list of {"type": "text", "text": "<one or more result objects>"}). Returns the list of
result objects. Concatenated objects in one text block are split with raw_decode.
"""
import io, json


def results(path):
    raw = json.load(io.open(path, encoding='utf-8'))
    items = raw if isinstance(raw, list) else [raw]
    out = []
    for it in items:
        if isinstance(it, dict) and 'text' in it and 'result' not in it:
            s, dec, i = it['text'], json.JSONDecoder(), 0
            while i < len(s):
                while i < len(s) and s[i] in ' \r\n\t':
                    i += 1
                if i >= len(s):
                    break
                if s[i] != '{':          # a "[session_id ...]" preamble or other prose
                    j = s.find('{', i)
                    if j < 0:
                        break
                    i = j
                try:
                    o, i = dec.raw_decode(s, i)
                except ValueError:
                    i += 1
                    continue
                out.append(o)
        else:
            out.append(it)
    return out


def tree(path):
    for r in results(path):
        res = r.get('result')
        if isinstance(res, list) and res and isinstance(res[0], dict) and isinstance(res[0].get('data'), dict) \
                and res[0]['data'].get('type') == 'Body':
            return res[0]['data']
    raise SystemExit('no get_all_elements tree in %s' % path)
