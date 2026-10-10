# -*- coding: utf-8 -*-
"""Verify a pushed comparison page against what we meant to push.

WHY THIS EXISTS
The 2026-10-09 port reported 1004/1004 text ops green while the tables were visibly broken and
the DONOR's copy was live in eight unmapped slots. Counting successful API calls proves nothing.
This reads the page back and checks three things that a success count cannot:

  1. COVERAGE  every ops[].text pair appears on the live page, by element id, string equal.
  2. DONOR LEAK  no string on the live page comes from the donor's repo page but not from this
     page's own repo source. This is the check with no length floor, because an 11-character
     eyebrow hid two of the eight leaks last time.
  3. SCHEMA  every FAQ question in schema/<slug>.json appears as a live accordion question.

Usage: python verify-compare.py <slug> <tree-json-file>
  where <tree-json-file> is the persisted output of a get_all_elements call on that page.
"""
import io
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DONOR_SLUG = 'restaurant-checklist-software'


def strings_of(node, out):
    """Collect every text-bearing value in the element tree, whatever the nesting."""
    if isinstance(node, dict):
        for k, v in node.items():
            if k in ('text', 'textContent', 'value') and isinstance(v, str):
                s = v.strip()
                if s:
                    out.append(s)
            else:
                strings_of(v, out)
    elif isinstance(node, list):
        for v in node:
            strings_of(v, out)
    return out


def by_element(node, acc):
    """element uuid -> its own text value, for the coverage check."""
    if isinstance(node, dict):
        eid = None
        i = node.get('id')
        if isinstance(i, dict):
            eid = i.get('element')
        for k in ('text', 'textContent', 'value'):
            v = node.get(k)
            if eid and isinstance(v, str) and v.strip():
                acc.setdefault(eid, set()).add(v.strip())
        for v in node.values():
            by_element(v, acc)
    elif isinstance(node, list):
        for v in node:
            by_element(v, acc)
    return acc


def repo_text(slug):
    """Visible copy of a repo page, as a set of normalized strings."""
    import glob
    cands = glob.glob(os.path.join(ROOT, 'vos-*%s-landing.html' % slug.replace('-software', '')))
    path = None
    for c in cands:
        path = c
        break
    if not path:
        for c in glob.glob(os.path.join(ROOT, 'vos-*.html')):
            if slug.replace('-software', '').replace('-alternative', '') in os.path.basename(c):
                path = c
                break
    if not path:
        return set(), None
    html = io.open(path, encoding='utf-8').read()
    html = re.sub(r'<script[\s\S]*?</script>', ' ', html)
    html = re.sub(r'<style[\s\S]*?</style>', ' ', html)
    html = re.sub(r'<!--[\s\S]*?-->', ' ', html)
    txt = re.sub(r'<[^>]+>', '\n', html)
    txt = (txt.replace('&amp;', '&').replace('&nbsp;', ' ')
              .replace('&quot;', '"').replace('&#39;', "'"))
    out = set()
    for line in txt.split('\n'):
        s = re.sub(r'\s+', ' ', line).strip()
        if s:
            out.add(s)
    return out, path


def norm(s):
    return re.sub(r'\s+', ' ', s).strip()


def main():
    slug, treefile = sys.argv[1], sys.argv[2]
    tree = json.load(io.open(treefile, encoding='utf-8'))
    ops = json.load(io.open(os.path.join(HERE, 'ops', slug + '.json'), encoding='utf-8'))

    live_by_el = by_element(tree, {})
    live_all = set(norm(s) for s in strings_of(tree, []))

    # 1. coverage, by VALUE.
    # set_text targets a Heading/Block, but the tree stores the text on that element's child
    # `String` node, which carries its OWN uuid. So keying the check on the id we wrote to reports
    # a false 64/100. Checking that the string is present anywhere on the page is what actually
    # answers "did the copy land", and the donor-leak check below catches anything stale.
    missing = []
    for eid, want in ops['text']:
        if norm(want) not in live_all:
            missing.append((eid, want))
    print('1. COVERAGE  %d/%d text ops present on the live page'
          % (len(ops['text']) - len(missing), len(ops['text'])))
    for eid, want in missing[:12]:
        print('   MISSING %s  %r' % (eid, want[:80]))

    # 2. donor leak, no length floor
    own, own_path = repo_text(slug)
    donor, donor_path = repo_text(DONOR_SLUG)
    if not own or not donor:
        print('2. DONOR LEAK  SKIPPED (own=%s donor=%s)' % (own_path, donor_path))
    else:
        own_n = set(norm(x) for x in own)
        donor_n = set(norm(x) for x in donor)
        leaks = sorted(s for s in live_all if s in donor_n and s not in own_n)
        print('2. DONOR LEAK  %d string(s) from the donor that are not in this page\'s repo source'
              % len(leaks))
        for s in leaks[:25]:
            print('   LEAK %r' % s[:100])

    # 3. schema questions vs live accordion
    spath = os.path.join(HERE, 'schema', slug + '.json')
    if not os.path.exists(spath):
        print('3. SCHEMA  no schema file')
    else:
        sch = json.load(io.open(spath, encoding='utf-8'))
        graph = sch.get('@graph', [])
        # mainEntity holds {"@id": "...#faq-N"} REFERENCES, not inline Question nodes, so reading
        # `name` off them returns '' and reports a false 0/8. Resolve the ids against @graph.
        byid = {n.get('@id'): n for n in graph if isinstance(n, dict) and n.get('@id')}
        qs = []
        for n in graph:
            t = n.get('@type')
            t = t if isinstance(t, list) else [t]
            if 'FAQPage' in t:
                for m in n.get('mainEntity', []):
                    node = byid.get(m.get('@id')) if isinstance(m, dict) and '@id' in m and 'name' not in m else m
                    if isinstance(node, dict) and node.get('name'):
                        qs.append(node['name'])
        absent = [q for q in qs if norm(q) not in live_all]
        print('3. SCHEMA  %d/%d FAQ questions found on the live page' % (len(qs) - len(absent), len(qs)))
        for q in absent:
            print('   NOT LIVE %r' % q[:90])

    bad = len(missing) + len(absent if 'absent' in dir() else [])
    print('\n%s: %s' % (slug, 'OK' if bad == 0 else '%d issue(s)' % bad))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
