"""Check the icon picks for the three new icon sections on each calculator page.

Per page, icons/assign/<slug>.json must hold 3 whatis + 9 who + 3 next = 15 names, every
name must be in icons/catalog.json, and the 15 new picks plus the 18 icons the page already
shows (scratch/live-data.json: pain 3, chips 9, tools 6) must be 33 different icons
(Eugene's rule: no icon repeats within a page).

Also printed, never failing: near-identical pairs inside one new section, and any truck pick
(truck must only sit on a slot about the reader's own route or delivery: check it by hand).

Usage: python icons/check_assign.py      exit 1 on any failure
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
COUNTS = {'whatis': 3, 'who': 9, 'next': 3}
NEAR = [{'trend-up', 'chart-up'}, {'verified', 'plus'}, {'store', 'warehouse'}]

catalog = json.load(open(os.path.join(HERE, 'catalog.json'), encoding='utf-8'))
id2name = {v['id']: k for k, v in catalog.items()}
live = json.load(open(os.path.join(ROOT, 'scratch', 'live-data.json'), encoding='utf-8'))
pages = list(json.load(open(os.path.join(ROOT, 'pages.json'), encoding='utf-8')))

failed = 0
for slug in pages:
    errs, warns = [], []
    path = os.path.join(HERE, 'assign', slug + '.json')
    if not os.path.exists(path):
        print('FAIL %-42s missing %s' % (slug, path))
        failed += 1
        continue
    a = json.load(open(path, encoding='utf-8'))

    new = []
    for sec, n in COUNTS.items():
        names = a.get(sec, [])
        if len(names) != n:
            errs.append('%s has %d names, want %d' % (sec, len(names), n))
        for name in names:
            if name not in catalog:
                errs.append('%s: %r not in catalog' % (sec, name))
        for pair in NEAR:
            if pair <= set(names):
                warns.append('%s holds near-identical %s' % (sec, '/'.join(sorted(pair))))
        new += names

    icons = live.get(slug, {}).get('icons', {})
    existing = []
    for group, n in (('pain', 3), ('chips', 9), ('tools', 6)):
        got = icons.get(group, [])
        if len(got) != n:
            errs.append('live %s has %d icons, want %d' % (group, len(got), n))
        for x in got:
            name = id2name.get(x.get('assetId'))
            if name is None:
                errs.append('live %s asset %s not in catalog' % (group, x.get('assetId')))
            existing.append(name)

    allnames = existing + new
    dupes = sorted({n for n in allnames if n is not None and allnames.count(n) > 1})
    if dupes:
        errs.append('repeated on the page: %s' % ', '.join(dupes))
    distinct = len({n for n in allnames if n is not None})
    if distinct != 33:
        errs.append('%d distinct icons, want 33' % distinct)

    if 'truck' in new:
        where = [sec for sec in COUNTS if 'truck' in a.get(sec, [])]
        warns.append('truck used in %s: confirm the slot is the reader\'s own route' % ','.join(where))

    status = 'FAIL' if errs else 'PASS'
    if errs:
        failed += 1
    line = '%s %-42s %d new, %d distinct on page' % (status, slug, len(new), distinct)
    if errs:
        line += ' | ' + '; '.join(errs)
    if warns:
        line += ' | note: ' + '; '.join(warns)
    print(line)

print('%d/%d pages pass' % (len(pages) - failed, len(pages)))
sys.exit(1 if failed else 0)
