# -*- coding: utf-8 -*-
"""Compare the JSON-LD Webflow STORED for a page with schema/<slug>.json, by exact equality.

Feed it a saved query_pages_schema_markup result (repeat the action so it spills to a file).
usage: python verify-schema-stored.py <slug> <saved result file>
"""
import io, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import wfload
slug, path = sys.argv[1], sys.argv[2]
want = json.load(io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'schema', slug + '.json'),
                         encoding='utf-8'))
pid = json.load(io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'pages.json'),
                        encoding='utf-8'))['compare'][slug]
found = []
def scan(n, under_page=False):
    if isinstance(n, dict):
        here = under_page or n.get('id') == pid or n.get('pageId') == pid
        for k, v in n.items():
            if k in ('jsonLdSchema', 'schema', 'jsonLd') and here:
                if isinstance(v, str):
                    try:
                        v = json.loads(v)
                    except ValueError:
                        pass
                found.append(v)
            else:
                scan(v, here)
    elif isinstance(n, list):
        for v in n:
            scan(v, under_page)
for r in wfload.results(path):
    scan(r)
if not found:
    raise SystemExit('%s: no stored schema for page %s found in %s' % (slug, pid, path))
ok = all(f == want for f in found)
print('%s: %d read(s), stored == schema file: %s' % (slug, len(found), ok))
if not ok:
    for f in found:
        if f != want:
            print('  first differing read:', json.dumps(f)[:300])
            break
