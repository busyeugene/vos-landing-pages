# -*- coding: utf-8 -*-
"""Print ready-to-send Webflow MCP action batches for one page.

All ten pages were duplicated from the same donor, so every element id lives in map.json
and nothing needs substituting at apply time.

Usage: python batches.py <slug> text|embed|rest [batch_size]
"""
import io, os, sys, json

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
HERE = os.path.dirname(os.path.abspath(__file__))


def main():
    slug, what = sys.argv[1], sys.argv[2]
    size = int(sys.argv[3]) if len(sys.argv) > 3 else 30
    ops = json.load(io.open(os.path.join(HERE, 'ops', slug + '.json'), encoding='utf-8'))
    pid = json.load(io.open(os.path.join(HERE, 'pages.json'), encoding='utf-8'))['pages'][slug]

    if what == 'rest':
        pg = json.load(io.open(os.path.join(HERE, 'pages.json'), encoding='utf-8'))
        known = dict(pg['existing']); known.update(pg['pages'])
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

    items = ops['text'] if what == 'text' else ops['embed']
    for n in range(0, len(items), size):
        chunk = items[n:n + size]
        if what == 'text':
            acts = [{'label': 't%d' % (n + i),
                     'set_text': {'id': {'component': pid, 'element': e}, 'text': v}}
                    for i, (e, v) in enumerate(chunk)]
        else:
            acts = [{'label': 'e%d' % (n + i),
                     'element_id': {'component': pid, 'element': e},
                     'settings': [{'key': 'code', 'static_text': {'value': v}}]}
                    for i, (e, v) in enumerate(chunk)]
        print('----- %s batch %d (%d) -----' % (what, n // size + 1, len(chunk)))
        print(json.dumps(acts, ensure_ascii=False))
        print()


if __name__ == '__main__':
    main()
