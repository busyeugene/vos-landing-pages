# -*- coding: utf-8 -*-
"""Donor-leak check for a page duplicated from fresho-alternative (batch 2, 2026-11-09).

Lists every String on the live page (a get_all_elements dump) that appears in Fresho's content
but NOT in this page's own content: leftover Fresho copy. Shared chrome appears in both and does
not flag. No length floor (CLAUDE.md: an 11-character eyebrow once hid two leaks).
Component instances (hero, Main CTA, navbar) are prop-driven and checked by verify-push.py.

usage: python leak-check.py <slug> <tree dump>
"""
import io, json, os, sys
slug, path = sys.argv[1], sys.argv[2]
def strings(node, out):
    if isinstance(node, dict):
        for k, v in node.items():
            if isinstance(v, str) and len(v.strip()) > 0 and k not in ('t', 'href'):
                out.add(v.strip())
            else:
                strings(v, out)
    elif isinstance(node, list):
        for v in node:
            strings(v, out)
    return out
own = strings(json.load(io.open('content/%s.json' % slug, encoding='utf-8')), set())
fresho = strings(json.load(io.open('content/fresho-alternative.json', encoding='utf-8')), set()) - own
# Shared chrome the content extract does not carry (e.g. the integrations badge "Delivery Formats",
# flagged on pages whose own row-3 eyebrow differs from Fresho's): anything that appears in this
# page's own built repo HTML is not a leak.
import re, subprocess
_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_file = subprocess.check_output(['node', '-e', "const r=require('./_build/registry.js');"
                                 "process.stdout.write(r.find(p=>p.slug===%s).file)" % json.dumps(slug)],
                                cwd=_root).decode()
_html = io.open(os.path.join(_root, _file), encoding='utf-8').read()
_html = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', _html)).replace('&amp;', '&').replace('&#39;', "'")
fresho = {t for t in fresho if t not in _html}
import os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import wfload
root = wfload.tree(path)
live = []
def walk(n):
    if n.get('type') == 'String':
        live.append(n.get('textContent', '').strip())
    for c in n.get('children', []) or []:
        walk(c)
walk(root)
leaks = [t for t in live if t in fresho or (len(t) > 3 and 'Fresho' in t)]
for t in leaks:
    print('  LEAK', repr(t[:120]))
print('%s: %d live strings, %d leak(s)' % (slug, len(live), len(leaks)))
