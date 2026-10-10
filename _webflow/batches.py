# -*- coding: utf-8 -*-
"""Print ready-to-send Webflow MCP action batches for one page.

All ten pages were duplicated from the same donor, so every element id lives in map.json
and nothing needs substituting at apply time.

Usage: python batches.py <slug> text|embed|styles|rest [batch_size]
"""
import io, os, sys, json

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
HERE = os.path.dirname(os.path.abspath(__file__))


def main():
    slug, what = sys.argv[1], sys.argv[2]
    size = int(sys.argv[3]) if len(sys.argv) > 3 else 30
    ops = json.load(io.open(os.path.join(HERE, 'ops', slug + '.json'), encoding='utf-8'))
    pg = json.load(io.open(os.path.join(HERE, 'pages.json'), encoding='utf-8'))
    # Page ids live in `pages` (batch 4) and `compare` (the 12 comparison pages). Looking in only
    # one of them printed NOTHING for a compare slug instead of failing, so resolve across both and
    # raise on an unknown slug: a silent empty batch is the defect class this port keeps hitting.
    ALL_PAGES = dict(pg.get('pages') or {})
    ALL_PAGES.update(pg.get('compare') or {})
    if slug not in ALL_PAGES:
        raise SystemExit('unknown slug %r: not in pages.json `pages` or `compare`' % slug)
    pid = ALL_PAGES[slug]

    if what == 'rest':
        known = dict(pg['existing']); known.update(ALL_PAGES)
        acts = []
        for i, (row, href, txt) in enumerate(ops['links']):
            slot = pg['links'][str(row)]
            target = href.lstrip('/')
            if target in known:
                lt, lv = 'page', known[target]
            else:
                lt, lv = 'url', href
            acts.append({'label': 'lk%d' % i,
                         'set_link': {'id': {'component': pid, 'element': slot['a']},
                                      'linkType': lt, 'link': lv}})
            acts.append({'label': 'lt%d' % i,
                         'set_text': {'id': {'component': pid, 'element': slot['t']}, 'text': txt}})
        for i, e in enumerate(ops['delete']):
            acts.append({'label': 'del%d' % i,
                         'remove_element': {'id': {'component': pid, 'element': e}}})
        print(json.dumps(acts, ensure_ascii=False))
        print()
        print('HARD (text cell -> icon cell):', json.dumps(ops['hard'], ensure_ascii=False))
        print('PROPS:', json.dumps(ops['props'], ensure_ascii=False))
        return

    if what == 'styles':
        # gen-ops emits these so an icon-sized cell that now holds text gets the text style.
        # Without them the cell renders one word per line and spills into the row below,
        # which is the defect that shipped on 89 cells on 2026-10-09.
        # set_style lives on data_element_tool and the key is `style_names`, NOT `styles`.
        # It also REPLACES the element's whole style list, so st must carry every class the
        # cell needs, base classes included.
        acts = [{'label': 'st%d' % i,
                 'set_style': {'id': {'component': pid, 'element': e}, 'style_names': st}}
                for i, (e, st) in enumerate(ops['styles'])]
        print(json.dumps(acts, ensure_ascii=False))
        return

    items = ops['text'] if what == 'text' else ops['embed']
    for n in range(0, len(items), size):
        chunk = items[n:n + size]
        if what == 'text':
            acts = [{'label': 't%d' % (n + i),
                     'set_text': {'id': {'component': pid, 'element': e}, 'text': v}}
                    for i, (e, v) in enumerate(chunk)]
        else:
            # data_element_settings_tool wants ONE action carrying an `operations` array,
            # each operation {element_id, settings}. Not one action per element, and the key
            # is element_id, not id (verified against the live API 2026-10-10).
            acts = [{'label': 'embed%d' % (n // size + 1),
                     'set_settings': {'operations': [
                         {'element_id': {'component': pid, 'element': e},
                          'settings': [{'key': 'code', 'static_text': {'value': v}}]}
                         for e, v in chunk]}}]
        print('----- %s batch %d (%d) -----' % (what, n // size + 1, len(chunk)))
        print(json.dumps(acts, ensure_ascii=False))
        print()


if __name__ == '__main__':
    main()
