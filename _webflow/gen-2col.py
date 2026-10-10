# -*- coding: utf-8 -*-
"""Print the action array that drops a comparison table's 4th column.

WHY THIS EXISTS
Eugene, 2026-10-10: "let's get rid of the 4th column - we don't need it". The donor's table is
Feature / VOS / Competitor / Phone+Email, and the compare pages only want two value columns. The
4th column's cells are also the only remaining donor copy on the ported pages ("Manual",
"Paper / Clipboard", "By eye, before the call", "Only if copied"), so this is what clears the last
4 findings from verify-compare.py.

`.uui-pricing11_row` and `.uui-pricing11_top-row` are GLOBAL classes with a fixed
`grid-template-columns: 1.5fr 1fr 1fr 1fr`, shared by all 26 landing pages. Deleting the 4th cell
alone leaves an empty 4th track, and editing the global class would reflow every other page's
table. So each grid gets the combo class `is-2col` (already created site-wide for the Pepper
revision, verified applied there) and only elements carrying both classes change.

`set_style` REPLACES the element's whole style list, so the base class is always passed too.

Element ids are identical on every page because all 12 are duplicated from the same donor; only
the `component` differs. Verified before use: every row grid has the feature cell first and
`map.json comparison.rows[i].cells[2]` fourth.

Usage: python gen-2col.py <slug>
"""
import io
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
MAP = json.load(io.open(os.path.join(HERE, 'map.json'), encoding='utf-8'))
PAGES = json.load(io.open(os.path.join(HERE, 'pages.json'), encoding='utf-8'))

TOP_ROW_GRID = '37b58628-5e21-7c67-2967-24e3b5a7a188'
TOP_ROW_4TH = '37b58628-5e21-7c67-2967-24e3b5a7a1aa'   # uui-pricing11_top-row-content right
ROW_GRIDS = [
    '37b58628-5e21-7c67-2967-24e3b5a7a1bb', '37b58628-5e21-7c67-2967-24e3b5a7a1c5',
    '37b58628-5e21-7c67-2967-24e3b5a7a1d2', '37b58628-5e21-7c67-2967-24e3b5a7a1df',
    '37b58628-5e21-7c67-2967-24e3b5a7a1e9', '37b58628-5e21-7c67-2967-24e3b5a7a1f3',
    '37b58628-5e21-7c67-2967-24e3b5a7a20d', '37b58628-5e21-7c67-2967-24e3b5a7a217',
    '37b58628-5e21-7c67-2967-24e3b5a7a221',
]


def main():
    slug = sys.argv[1]
    allp = dict(PAGES.get('pages') or {})
    allp.update(PAGES.get('compare') or {})
    if slug not in allp:
        raise SystemExit('unknown slug %r' % slug)
    pid = allp[slug]
    eid = lambda e: {'component': pid, 'element': e}

    acts = []
    # styles first, so the grid is already 3-track when the cell goes
    acts.append({'label': 'st-top', 'set_style': {
        'id': eid(TOP_ROW_GRID), 'style_names': ['uui-pricing11_top-row', 'is-2col']}})
    for i, g in enumerate(ROW_GRIDS):
        acts.append({'label': 'st-r%d' % (i + 1), 'set_style': {
            'id': eid(g), 'style_names': ['uui-pricing11_row', 'is-2col']}})
    acts.append({'label': 'rm-top4', 'remove_element': {'id': eid(TOP_ROW_4TH)}})
    for i, row in enumerate(MAP['comparison']['rows'][:9]):
        acts.append({'label': 'rm-r%d' % (i + 1), 'remove_element': {'id': eid(row['cells'][2])}})

    print(json.dumps(acts, ensure_ascii=False))
    print('\n# %s  page %s  %d actions (10 set_style + 10 remove_element)'
          % (slug, pid, len(acts)), file=sys.stderr)


if __name__ == '__main__':
    main()
