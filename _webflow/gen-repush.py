# -*- coding: utf-8 -*-
"""Re-push the 12 reframed compare pages (2026-10-21) into their EXISTING Webflow pages.

WHY THIS EXISTS, AND NOT `batches.py`
gen-ops.py decides each comparison cell's operation by comparing the new content against the
DONOR page (donor-cells.json). That is right for a first port, and wrong for a re-push: these
pages are no longer donor-shaped. Earlier pushes turned icon cells into text cells (restyled),
and three pages (necs-entree, pepperi, fresho) had cell 1,2 rebuilt by hand as an HtmlEmbed
whose id is in no map. Run gen-ops' cell logic against that, and a cell that was text and is now
a tick gets NO op ("donor is an icon, want an icon, same value"), so the old text stays.

So the cell ops here are built from the STORED state, read live on 2026-10-21:
  - every donor-icon cell holds an HtmlEmbed at its map.json cell_children id: always write
    BOTH the code and the matching style, so the cell ends up right whatever it held before;
  - the one donor-text cell (row 1, competitor column) is a Block>String, except on the three
    hand-converted pages, where it is an HtmlEmbed with the id recorded in CONVERTED below;
  - on bluecart, orderease and rekki that Block must now become a tick: the HARD recipe
    (build an HtmlEmbed in the cell, set its code and style, remove the Block). See `hard`.

Everything that is not a table cell (text, links, props) comes straight from ops/<slug>.json,
which gen-ops.py generated from content/ (extract-compare.py) and which carries no cell-state
assumption except the 1,2 text String, which is only emitted when that cell stays text.

Usage: python gen-repush.py            -> writes repush/<slug>.json for all 12
"""
import io
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
J = lambda p: json.load(io.open(os.path.join(HERE, p), encoding='utf-8'))
MAP, PG, DONOR = J('map.json'), J('pages.json'), J('donor-cells.json')
OUT = os.path.join(HERE, 'repush')
os.makedirs(OUT, exist_ok=True)

# Row 1, competitor column: the HtmlEmbed built by hand in the 2026-10-10 port. Read live.
CONVERTED = {
    'necs-entree-alternative': 'f02320c3-ab42-fde8-4443-536d646bc8d7',
    'pepperi-alternative': 'bf5a9f5e-936e-ddb6-b4d6-faf74fdce4ce',
    'fresho-alternative': 'e2015e89-172b-6799-28b9-3361d496abc0',
    # Built by this script's `hard` recipe on 2026-10-21, ids from the builder results.
    'bluecart-alternative': '6cf857fa-6ed9-3570-25c3-04932f604fc8',
    'orderease-alternative': '1a333c59-a1da-9f28-9f66-0be205d7c12b',
    'rekki-alternative': '4048ed5f-2c91-e7b5-05ee-cce1baaabcd1',
}
IC = MAP['icons']


def code_for(cell):
    return IC[cell['v']] if cell['t'] == 'icon' else IC['text_wrapper'] % cell['v']


def style_for(cell):
    return [IC['icon_style'] if cell['t'] == 'icon' else IC['text_style']]


def build(slug):
    pid = PG['compare'][slug]
    eid = lambda e: {'component': pid, 'element': e}
    d = J('content/%s.json' % slug)
    ops = J('ops/%s.json' % slug)
    rows = d['comparison']['rows']
    assert len(rows) == 9 and all(len(r['cells']) == 2 for r in rows), slug

    codes, styles, hard = [], [], None
    for i, row in enumerate(rows):
        for k, cell in enumerate(row['cells']):
            key = '%d,%d' % (i + 1, k + 1)
            child = MAP['comparison']['cell_children'][key]
            if DONOR[i][k]['t'] == 'icon':
                codes.append((child, code_for(cell)))
                styles.append((child, style_for(cell)))
            elif slug in CONVERTED:                       # hand-built embed, not in the map
                codes.append((CONVERTED[slug], code_for(cell)))
                styles.append((CONVERTED[slug], style_for(cell)))
            elif cell['t'] == 'icon':                     # Block>String that must become a tick
                hard = {'cell': MAP['comparison']['rows'][i]['cells'][k], 'old_block': child,
                        'code': code_for(cell), 'style': style_for(cell)}
            # else: stays a text Block; ops['text'] already carries its String

    text = ops['text']
    # A text op must never target a cell this script rewrites as an embed.
    embed_ids = {e for e, _ in codes}
    assert not [e for e, _ in text if e in embed_ids], slug

    out = {'slug': slug, 'pageId': pid}
    out['text_batches'] = [[{'label': 't%d' % (n + j), 'set_text': {'id': eid(e), 'text': v}}
                            for j, (e, v) in enumerate(text[n:n + 50])]
                           for n in range(0, len(text), 50)]
    out['settings'] = [{'label': 'cells', 'set_settings': {'operations': [
        {'element_id': eid(e), 'settings': [{'key': 'code', 'static_text': {'value': v}}]}
        for e, v in codes]}}]
    el = [{'label': 'st%d' % j, 'set_style': {'id': eid(e), 'style_names': s}}
          for j, (e, s) in enumerate(styles)]
    known = dict(PG['existing']); known.update(PG['pages']); known.update(PG['compare'])
    for j, (row, href, txt) in enumerate(ops['links']):
        slot = PG['links'][str(row)]
        t = href.lstrip('/')
        lt, lv = ('page', known[t]) if t in known else ('url', href)
        el.append({'label': 'lk%d' % j, 'set_link': {'id': eid(slot['a']), 'linkType': lt, 'link': lv}})
        el.append({'label': 'lt%d' % j, 'set_text': {'id': eid(slot['t']), 'text': txt}})
    out['element'] = el
    out['hard'] = hard and {
        'build': [{'build_label': 'tick 1,2', 'parent_element_id': eid(hard['cell']),
                   'creation_position': 'append', 'element_schema': {'type': 'HtmlEmbed'}}],
        'then_code': hard['code'], 'then_style': hard['style'],
        'then_remove': eid(hard['old_block'])}
    C, P = MAP['components'], ops['props']
    out['props'] = [
        {'label': 'hero', 'set_component_instance_prop_values': {
            'element_id': eid(C['hero']['element']),
            'values': [{'prop_id': C['hero']['props'][k], 'type': 'string', 'string_value': P['hero'][k]}
                       for k in ('eyebrow', 'h1', 'lead', 'cta')]}},
        {'label': 'mainCta', 'set_component_instance_prop_values': {
            'element_id': eid(C['mainCta']['element']),
            'values': [{'prop_id': C['mainCta']['props'][k], 'type': 'string', 'string_value': P['mainCta'][k]}
                       for k in ('h2', 'body', 'cta')]}}]
    out['seo'] = {'id': pid, 'seo': {'title': d['meta_title'], 'description': d['meta_desc']},
                  'openGraph': {'titleCopied': True, 'descriptionCopied': True}}
    return out


if __name__ == '__main__':
    for slug in sorted(PG['compare']):
        o = build(slug)
        with io.open(os.path.join(OUT, slug + '.json'), 'w', encoding='utf-8') as f:
            json.dump(o, f, ensure_ascii=False, indent=1)
        print('%-28s text %3d in %d batch(es), cells %2d, element %2d, hard %s' % (
            slug, sum(len(b) for b in o['text_batches']), len(o['text_batches']),
            len(o['settings'][0]['set_settings']['operations']), len(o['element']), 'YES' if o['hard'] else '-'))
