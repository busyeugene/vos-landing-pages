"""Scan the 23 calculator-page element trees saved in trees/<slug>.json.

Read-only. Inputs:
  map.json              slug -> pageId, oldAnchor
  trees/<slug>.json     raw get_all_elements {depth: -1} result, one per page
  links/row-links.json  link settings of the 4 feature-row Link elements, read
                        with get_settings all_raw_settings. get_all_elements
                        OMITS url-mode link settings and a Link's own text
                        (it shows page-mode links only), so a tree-only scan
                        reports 0 row links on a page that has 4. This file
                        fills that gap; every record from it is tagged
                        source="get_settings".

Outputs:
  scan.json         per page: anchorLinks, heroText3, calcEmbed, texts
  scan-report.txt   every string matching the watch terms, all 23 pages

Note: HtmlEmbed `code` is also omitted by get_all_elements, so the calculator
embed's own copy is NOT in `texts`. Read it with get_settings if needed.
"""
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
TREES = os.path.join(HERE, 'trees')

TERMS = ["as you type", "instant", "no sign", "sign up", "sign-up", "no email",
         "email", "no form", "form", "free", "no strings", "type your",
         "enter your", "real time", "real-time", "live", "update", "recalculat",
         "re-rank", "moves the highlight", "results", "download", "no login",
         "account", "calculator"]


def load(p):
    with open(p, encoding='utf-8') as f:
        return json.load(f)


def label(n):
    t = n.get('type', '?')
    if t == 'ComponentInstance':
        return 'CI:' + (n.get('instanceDetails') or {}).get('name', '?')
    s = n.get('styleNames') or []
    dom = (n.get('attributes') or {}).get('id')
    out = t + (':' + s[0] if s else '')
    if dom:
        out += '#' + dom
    return out


def is_target(to, anchor):
    if not isinstance(to, str):
        return False
    return to == '#' + anchor or to.startswith('#vos-')


def scan_page(slug, meta, row_links):
    d = load(os.path.join(TREES, slug + '.json'))
    body = d['result'][0]['data']
    assert body['id']['component'] == meta['pageId']['pageId'], slug
    anchor = meta['oldAnchor']
    res = {'pageId': meta['pageId']['pageId'], 'oldAnchor': anchor,
           'anchorLinks': [], 'heroText3': None, 'heroLink': None,
           'calcEmbed': [], 'bodyEmbeds': [], 'texts': []}
    seen_link_ids = set()

    def walk(n, path):
        here = path + [label(n)]
        summary = ' > '.join(here[-4:])
        settings = n.get('settings') or {}
        link = settings.get('link')
        if isinstance(link, dict):
            to = link.get('to') or link.get('url') or link.get('href')
            if is_target(to, anchor):
                res['anchorLinks'].append({'id': n['id'], 'type': n['type'], 'kind': 'element',
                                           'link': link, 'path': summary, 'source': 'tree'})
                seen_link_ids.add(n['id']['element'])
        if n.get('type') == 'String' and isinstance(n.get('textContent'), str):
            res['texts'].append({'id': n['id'], 'kind': 'String', 'text': n['textContent'],
                                 'path': summary})
        if n.get('type') == 'ComponentInstance':
            det = n.get('instanceDetails') or {}
            for p in det.get('props') or []:
                v = p.get('value')
                if isinstance(v, dict) and is_target(v.get('to'), anchor):
                    res['anchorLinks'].append({'id': n['id'], 'type': 'ComponentInstance',
                                               'kind': 'prop', 'instance': det.get('name'),
                                               'propId': p.get('propId'), 'propName': p.get('name'),
                                               'link': v, 'path': summary, 'source': 'tree'})
                if isinstance(v, str) and not re.fullmatch(r'[0-9a-f]{24}', v):
                    res['texts'].append({'id': n['id'], 'kind': 'prop', 'instance': det.get('name'),
                                         'propId': p.get('propId'), 'propName': p.get('name'),
                                         'text': v, 'path': summary})
                if det.get('name') == 'landing-hero':
                    if p.get('name') == 'Text 3':
                        res['heroText3'] = {'id': n['id'], 'propId': p.get('propId'), 'value': v}
                    if p.get('name') == 'Link':
                        res['heroLink'] = {'id': n['id'], 'propId': p.get('propId'), 'value': v}
        for c in n.get('children') or []:
            walk(c, here)

    # Direct Body children: the HtmlEmbeds
    for c in body.get('children') or []:
        if c.get('type') == 'HtmlEmbed':
            rec = {'id': c['id'], 'styleNames': c.get('styleNames') or [],
                   'visibility': (c.get('settings') or {}).get('visibility')}
            res['bodyEmbeds'].append(rec)
            if any('uui-padding-vertical-xhuge' in s for s in rec['styleNames']):
                res['calcEmbed'].append(rec)
    walk(body, [])

    # Row links from get_settings (absent from the tree)
    for r in row_links.get(slug, []):
        if r['element'] in seen_link_ids:
            continue
        if is_target(r['link'].get('to'), anchor):
            res['anchorLinks'].append({'id': {'component': res['pageId'], 'element': r['element']},
                                       'type': 'Link', 'kind': 'element', 'row': r['row'],
                                       'link': r['link'], 'path': 'features row %d button' % r['row'],
                                       'source': 'get_settings'})
        res['texts'].append({'id': {'component': res['pageId'], 'element': r['element']},
                             'kind': 'LinkText', 'text': r['text'],
                             'path': 'features row %d button' % r['row'], 'source': 'get_settings'})
    return res


def main():
    m = load(os.path.join(HERE, 'map.json'))
    rl_path = os.path.join(HERE, 'links', 'row-links.json')
    row_links = load(rl_path)['pages'] if os.path.exists(rl_path) else {}
    scan = {}
    for slug in m:
        if not os.path.exists(os.path.join(TREES, slug + '.json')):
            print('MISSING TREE', slug)
            continue
        scan[slug] = scan_page(slug, m[slug], row_links)
    with open(os.path.join(HERE, 'scan.json'), 'w', encoding='utf-8') as f:
        json.dump(scan, f, indent=1, ensure_ascii=False)

    # Summary to stdout
    for slug, r in scan.items():
        rows = [a for a in r['anchorLinks'] if a['kind'] == 'element']
        props = [a for a in r['anchorLinks'] if a['kind'] == 'prop']
        flag = '' if (len(rows) == 4 and len(props) == 1) else '  <-- FLAG'
        t3 = (r['heroText3'] or {}).get('value')
        flag3 = '' if t3 == 'Use the Calculator' else '  <-- TEXT3 FLAG'
        print('%-42s rows=%d props=%d text3=%r calc=%s%s%s' % (
            slug, len(rows), len(props), t3,
            ','.join(e['id']['element'] for e in r['calcEmbed']), flag, flag3))

    # Pass 2: watch-term report
    pat = re.compile('|'.join(re.escape(t) for t in TERMS), re.I)
    lines = ['Watch-term scan over String textContent, component string props and',
             'feature-row button text (from get_settings). HtmlEmbed code is NOT included.',
             'Terms: ' + ', '.join(TERMS), '']
    total = 0
    for slug, r in scan.items():
        hits = []
        for t in r['texts']:
            found = sorted({x.group(0).lower() for x in pat.finditer(t['text'])})
            if found:
                where = t['id']['element'] + (('/' + t['propName']) if t.get('propName') else '')
                hits.append('  [%s] %s (%s)\n      %s' % (', '.join(found), where, t['kind'], t['text']))
        lines.append('=== %s  (%d hits)' % (slug, len(hits)))
        lines.extend(hits)
        lines.append('')
        total += len(hits)
    lines.insert(3, 'Total matching strings: %d' % total)
    with open(os.path.join(HERE, 'scan-report.txt'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print('report:', os.path.join(HERE, 'scan-report.txt'), 'strings matched:', total)


if __name__ == '__main__':
    main()
