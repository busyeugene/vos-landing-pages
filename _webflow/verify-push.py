import json, sys
# Compare a live get_all_elements tree dump against repush/<slug>.json: every set_text string and
# every hero/mainCta prop value must match exactly. Written during the 2026-10-21 re-push.
# usage: verify_push.py <repush.json> <tree dump>
d = json.load(open(sys.argv[1], encoding='utf8'))
raw = json.load(open(sys.argv[2], encoding='utf8'))
root = raw['result'][0]['data'] if isinstance(raw, dict) else raw[0]['result'][0]['data']
text = {}
props = {}
def walk(n):
    eid = n['id']['element']
    def txt(x):
        if x.get('type') == 'String':
            return x.get('textContent', '')
        return ''.join(txt(c) for c in x.get('children', []))
    text[eid] = txt(n)
    inst = n.get('instanceDetails')
    if inst:
        for p in inst.get('props', []):
            props[(eid, p['propId'])] = p.get('value')
    for c in n.get('children', []):
        walk(c)
walk(root)
acts = [a for b in d['text_batches'] for a in b] + d['element']
ok = bad = 0
for a in acts:
    if 'set_text' in a:
        e = a['set_text']['id']['element']; want = a['set_text']['text']
        got = text.get(e)
        if got == want: ok += 1
        else:
            bad += 1; print('MISMATCH', a['label'], e, repr(got)[:120], '!=', repr(want)[:120])
for a in d['props']:
    s = a['set_component_instance_prop_values']; e = s['element_id']['element']
    for v in s['values']:
        got = props.get((e, v['prop_id']))
        if got == v['string_value']: ok += 1
        else:
            bad += 1; print('PROP MISMATCH', a['label'], v['prop_id'], repr(got)[:120])
for a in d['element']:
    if 'set_style' in a:
        pass
print('ok', ok, 'bad', bad)
styles = {}
def walk2(n):
    styles[n['id']['element']] = n.get('styleNames')
    for c in n.get('children', []): walk2(c)
walk2(root)
sok = sbad = 0
for a in d['element']:
    if 'set_style' in a:
        e = a['set_style']['id']['element']
        if styles.get(e) == a['set_style']['style_names']: sok += 1
        else: sbad += 1; print('STYLE MISMATCH', a['label'], e, styles.get(e))
print('styles ok', sok, 'bad', sbad)
if d.get('hard'):
    h = d['hard']; rm = h['then_remove']['element']
    print('removed element present?', rm in styles)
    par = h['build'][0]['parent_element_id']['element']
    for extra in sys.argv[3:]:
        print('new embed', extra, 'present', extra in styles, 'style', styles.get(extra))
