# -*- coding: utf-8 -*-
"""Does schema/<slug>.json match what is actually rendered on the live Webflow page?

WHY THIS EXISTS
CLAUDE.md: "The FAQPage JSON-LD must match the rendered FAQ exactly. Compare the Question nodes
against the page's own accordion text, not against the source." verify-compare.py checks the
QUESTIONS only; a wrong or stale ANSWER in the schema is invisible to it, and the schema is the
thing Google reads. This checks both, plus that the page-level nodes point at the right page.

Usage: python verify-schema.py <slug> <tree-json-file> [...]
       python verify-schema.py --all        (uses derived/tree-index.json: slug -> tree file)
"""
import io
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
LIVE = 'https://www.voiceordersolutions.com'


def norm(s):
    s = (s or '').replace('’', "'").replace('‘', "'")
    s = s.replace('“', '"').replace('”', '"')
    return re.sub(r'\s+', ' ', s).strip()


def live_strings(tree):
    """Every text value on the page, however nested."""
    out = []

    def walk(n):
        if isinstance(n, dict):
            for k, v in n.items():
                if k in ('textContent', 'text', 'value') and isinstance(v, str):
                    if v.strip():
                        out.append(norm(v))
                else:
                    walk(v)
        elif isinstance(n, list):
            for v in n:
                walk(v)
    walk(tree)
    return out


def faq_from_schema(graph):
    """Resolve mainEntity @id references into the real Question nodes."""
    byid = {n.get('@id'): n for n in graph if isinstance(n, dict) and n.get('@id')}
    qs = []
    for n in graph:
        t = n.get('@type')
        t = t if isinstance(t, list) else [t]
        if 'FAQPage' in t:
            for m in n.get('mainEntity', []):
                node = byid.get(m.get('@id')) if isinstance(m, dict) and 'name' not in m else m
                if isinstance(node, dict) and node.get('name'):
                    ans = node.get('acceptedAnswer') or {}
                    qs.append((node['name'], (ans or {}).get('text', '')))
    return qs


def check(slug, treefile):
    tree = json.load(io.open(treefile, encoding='utf-8'))
    spath = os.path.join(HERE, 'schema', slug + '.json')
    if not os.path.exists(spath):
        print('%-26s NO SCHEMA FILE' % slug)
        return 1
    sch = json.load(io.open(spath, encoding='utf-8'))
    graph = sch.get('@graph', [])
    strings = live_strings(tree)
    sset = set(strings)

    qa = faq_from_schema(graph)
    q_miss = [q for q, _ in qa if norm(q) not in sset]
    a_miss = [q for q, a in qa if a and norm(a) not in sset]

    # PAGE-level nodes must point at this page. Site-level nodes must NOT: an Organization and a
    # WebSite correctly carry the site root, and a first version of this check flagged all 24 of
    # those as "wrong url" on 12 clean pages. Only these types are page-scoped.
    PAGE_TYPES = {'WebPage', 'CollectionPage', 'FAQPage', 'ItemPage', 'AboutPage'}
    url_bad = []
    for n in graph:
        t = n.get('@type')
        t = set(t) if isinstance(t, list) else {t}
        if not (t & PAGE_TYPES):
            continue
        for k in ('url', '@id'):
            v = n.get(k)
            if isinstance(v, str) and v.startswith(LIVE) and '#' not in v:
                if not v.rstrip('/').endswith('/' + slug):
                    url_bad.append('%s %s=%s' % (n.get('@type'), k, v))

    # the live accordion should hold exactly as many questions as the schema claims
    live_q = sum(1 for s in strings if s.endswith('?') and len(s) > 15)

    bad = len(q_miss) + len(a_miss) + len(url_bad)
    print('%-26s Q %2d/%-2d  A %2d/%-2d  live "?" strings %2d  urls %s  %s'
          % (slug, len(qa) - len(q_miss), len(qa), len(qa) - len(a_miss), len(qa),
             live_q, 'ok' if not url_bad else 'BAD', 'OK' if bad == 0 else '%d ISSUE(S)' % bad))
    for q in q_miss:
        print('    QUESTION NOT ON PAGE: %r' % q[:88])
    for q in a_miss:
        print('    ANSWER NOT ON PAGE for: %r' % q[:88])
    for u in url_bad:
        print('    WRONG URL: %s' % u)
    return bad


def main():
    args = sys.argv[1:]
    if args and args[0] == '--all':
        idx = json.load(io.open(os.path.join(HERE, 'derived', 'tree-index.json'), encoding='utf-8'))
        pairs = sorted(idx.items())
    else:
        pairs = [(args[i], args[i + 1]) for i in range(0, len(args), 2)]
    total = 0
    for slug, tf in pairs:
        total += check(slug, tf)
    print('\n%d schema issue(s) across %d page(s)' % (total, len(pairs)))
    return 1 if total else 0


if __name__ == '__main__':
    sys.exit(main())
