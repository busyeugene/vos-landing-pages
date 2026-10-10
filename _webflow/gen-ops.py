# -*- coding: utf-8 -*-
"""Turn content/<slug>.json + map.json into the exact Webflow MCP action batches.

Writes ops/<slug>.json:
  { "text":    [ [element_id, text], ... ]          -> data_element_tool set_text
    "embed":   [ [element_id, code], ... ]          -> data_element_settings_tool set_settings
    "links":   [ [element_id, href, text], ... ]    -> set_link + set_text
    "delete":  [ element_id, ... ]                  -> remove_element
    "hard":    [ {cell, want, text} ... ]           -> text cell that must become an icon cell
    "props":   { hero: {...}, mainCta: {...} }      -> component prop overrides
    "schema":  { ...JSON-LD... } }

Usage: python gen-ops.py            (all pages)
       python gen-ops.py <slug>     (one page)
"""
import io, os, sys, json, re

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
HERE = os.path.dirname(os.path.abspath(__file__))
MAP = json.load(io.open(os.path.join(HERE, 'map.json'), encoding='utf-8'))
OVR = json.load(io.open(os.path.join(HERE, 'overrides.json'), encoding='utf-8'))
DONOR = json.load(io.open(os.path.join(HERE, 'donor-cells.json'), encoding='utf-8'))
OUT = os.path.join(HERE, 'ops')
os.makedirs(OUT, exist_ok=True)

LIVE = 'https://www.voiceordersolutions.com'
# The repo's CTA labels carry a trailing arrow; the Webflow buttons draw their own.
ARROW = re.compile(r'\s*(?:→|->)\s*$')


def clean_cta(s):
    return ARROW.sub('', s).strip()


def faq_items(d, slug):
    items = [dict(x) for x in d['faq']['items']]
    ov = OVR.get(slug, {}).get('faq_merge')
    if ov:
        i, j = ov['replace_indexes']
        assert j == i + 1, 'merge expects two adjacent FAQs'
        items[i:j + 1] = [{'q': ov['q'], 'a': ov['a']}]
    return items


def build(slug):
    d = json.load(io.open(os.path.join(HERE, 'content', slug + '.json'), encoding='utf-8'))
    text, embed, links, delete, hard, styles = [], [], [], [], [], []

    # ---- stats (number blocks: set_text replaces the inner <strong>; the block itself
    # carries the number styling, so the figure still renders large) ----
    for i, s in enumerate(d['stats'][:3]):
        text.append([MAP['stats']['number_strongs'][i], s['num']])  # <strong>, keeps the bold figure
        text.append([MAP['stats']['labels'][i], s['label']])        # Heading, direct

    # ---- problem ----
    p = d['problem']
    text.append([MAP['problem']['eyebrow_string'], p['eyebrow'] or 'Sound Familiar?'])
    text.append([MAP['problem']['h2'], p['h2']])
    if p['lead']:
        text.append([S(MAP['problem']['lead']), p['lead']])
    for i, c in enumerate(p['cards'][:3]):
        text.append([MAP['problem']['cards'][i]['h3'], c['h3']])
        text.append([S(MAP['problem']['cards'][i]['body']), c['body']])

    # ---- feature rows ----
    f = d['features']
    text.append([MAP['features']['h2'], f['h2']])
    if f.get('eyebrow'):
        text.append([MAP['features']['eyebrow_string'], f['eyebrow']])
    for i, r in enumerate(f['rows'][:4]):
        m = MAP['features']['rows'][i]
        # Each row carries its own eyebrow. Miss these and the donor's survive.
        if r.get('eyebrow'):
            text.append([m['eyebrow_string'], r['eyebrow']])
        text.append([m['h3'], r['h3']])
        text.append([S(m['body']), r['body']])
        # The donor row has 4 bullet slots. A repo row with 5 must DROP one, and which one is an
        # editorial decision, not "the last": on the compare pages bullet 4 carries a verified fact
        # (reps freed to sell, or interruption recovery) that review pass 8 deliberately promoted,
        # while bullet 2 repeats the hero trust line's "iOS + Android". `bullets_keep` in
        # overrides.json names the indexes to keep; without it, a naive [:4] would silently undo
        # pass 8. See overrides.json `_compare_structural`.
        keep = (OVR.get(slug, {}).get('bullets_keep') or {}).get(str(i))
        bl = [r['bullets'][x] for x in keep if x < len(r['bullets'])] if keep else r['bullets']
        if len(bl) > 4:
            raise SystemExit('%s feature row %d: %d bullets for 4 slots and no bullets_keep override'
                             % (slug, i + 1, len(bl)))
        for k, b in enumerate(bl):
            text.append([S(m['bullets'][k]), b])
        if r.get('link'):
            href = r['link']['href']
            if href.startswith('/'):
                href = href  # same-site path, Webflow resolves it
            links.append([i, href, clean_cta(r['link']['text'])])

    # ---- supporting cards (keep 3, delete the donor's other 3) ----
    c = d['cards']
    text.append([MAP['cards']['eyebrow_string'], c['eyebrow'] or 'Also Built In'])
    text.append([MAP['cards']['h2'], c['h2']])
    if c['lead']:
        text.append([S(MAP['cards']['lead']), c['lead']])
    for i, it in enumerate(c['items'][:3]):
        text.append([MAP['cards']['keep'][i]['h3'], it['h3']])
        text.append([S(MAP['cards']['keep'][i]['body']), it['body']])
    delete += MAP['cards']['delete_containers']['restaurant-checklist-software']

    # ---- mid-page CTA ----
    text.append([MAP['midcta']['h3'], d['midcta']['h3']])
    if d['midcta']['body']:
        text.append([S(MAP['midcta']['body']), d['midcta']['body']])

    # ---- steps ----
    s = d['steps']
    text.append([MAP['steps']['eyebrow_string'], s['eyebrow'] or 'Simple Setup'])
    text.append([MAP['steps']['h2'], s['h2']])
    if s['lead']:
        text.append([S(MAP['steps']['lead']), s['lead']])
    for i, it in enumerate(s['items'][:3]):
        text.append([MAP['steps']['items'][i]['h3'], it['h3']])
        text.append([S(MAP['steps']['items'][i]['body']), it['body']])

    # ---- comparison: identity row order, so the author's argument is preserved ----
    # A cell holds either an HtmlEmbed (icon) or a Block>String (text). Same-kind edits are
    # one call; a donor text cell that must become an icon is the only structural case.
    cmp_ = d['comparison']
    # Section intro: two h2 halves and the lead. The column heads alone are not enough;
    # without these the donor's comparison pitch stays on the page.
    if len(cmp_.get('h2_lines') or []) == 2:
        text.append([MAP['comparison']['h2_line1'], cmp_['h2_lines'][0]])
        text.append([MAP['comparison']['h2_line2'], cmp_['h2_lines'][1]])
    if cmp_.get('eyebrow') and MAP['comparison'].get('eyebrow_string'):
        text.append([MAP['comparison']['eyebrow_string'], cmp_['eyebrow']])
    if cmp_.get('lead'):
        text.append([MAP['comparison']['lead_string'], cmp_['lead']])
    for i, hd in enumerate(cmp_['heads'][:4]):
        text.append([MAP['comparison']['colheads'][i], hd])
    for i, row in enumerate(cmp_['rows'][:9]):
        rm = MAP['comparison']['rows'][i]
        text.append([S(rm['label']), row['label']])
        for k, cell in enumerate(row['cells'][:3]):
            cid = rm['cells'][k]
            child = MAP['comparison']['cell_children']['%d,%d' % (i + 1, k + 1)]
            have = DONOR[i][k]
            if cell['t'] == 'icon':
                if have['t'] == 'icon':
                    if have['v'] != cell['v']:                      # swap check <-> dash
                        embed.append([child, MAP['icons'][cell['v']]])
                else:
                    hard.append({'cell': cid, 'child': child, 'want': cell['v'],
                                 'row': i + 1, 'col': k + 1,
                                 'style': MAP['icons']['icon_style']})  # text block -> embed
            else:
                if have['t'] == 'icon':
                    embed.append([child, MAP['icons']['text_wrapper'] % cell['v']])
                    # The donor cell is a 24px icon box. Swapping its contents for text
                    # without restyling leaves the text wrapping one word per line and
                    # spilling into the next row, so restyle it as a text cell.
                    styles.append([child, [MAP['icons']['text_style']]])
                elif have['v'] != cell['v']:
                    # A donor text cell's String does not follow the cell+1 rule.
                    text.append([MAP['comparison']['text_cell_strings']['%d,%d' % (i + 1, k + 1)],
                                 cell['v']])
    # The 10th donor row is surplus to a 9-row page; remove the whole row grid.
    delete.append(bump(MAP['comparison']['rows'][9]['feature'], -1))

    # ---- faq ----
    fq = faq_items(d, slug)
    if d['faq'].get('eyebrow') and MAP['faq'].get('eyebrow_string'):
        text.append([MAP['faq']['eyebrow_string'], d['faq']['eyebrow']])
    text.append([MAP['faq']['h2'], d['faq']['h2']])
    for i, x in enumerate(fq[:8]):
        text.append([MAP['faq']['question_strongs'][i], x['q']])
        text.append([S(MAP['faq']['answer_blocks'][i]), x['a']])

    # ---- component props ----
    props = {
        'hero': {'eyebrow': d['hero']['eyebrow'], 'h1': d['hero']['h1'],
                 'lead': d['hero']['lead'], 'cta': clean_cta(d['hero']['cta'])},
        'mainCta': {'h2': d['mainCta']['h2'], 'body': d['mainCta']['body'],
                    'cta': clean_cta(d['mainCta']['cta'])},
    }

    schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {'@type': 'FAQPage',
             'mainEntity': [{'@type': 'Question', 'name': x['q'],
                             'acceptedAnswer': {'@type': 'Answer', 'text': x['a']}} for x in fq]},
            {'@type': 'BreadcrumbList',
             'itemListElement': [
                 {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': LIVE + '/'},
                 {'@type': 'ListItem', 'position': 2, 'name': d['hero']['h1'].rstrip('.'),
                  'item': '%s/%s' % (LIVE, slug)}]},
            {'@type': 'SoftwareApplication', 'name': 'VoiceOrder Solutions',
             'applicationCategory': 'BusinessApplication',
             'operatingSystem': 'iOS, Android, Web',
             'description': d['meta_desc'],
             'url': '%s/%s' % (LIVE, slug),
             'offers': {'@type': 'Offer', 'price': '0',
                        'priceCurrency': 'USD',
                        'description': 'Pricing is quote based. Book a demo for a quote.'}},
        ],
    }

    # Coverage guard. The 2026-10-09 port extracted eight slots and silently never wrote
    # them, so the donor's copy shipped on ten pages. Any non-trivial string declared in
    # content/ that reaches no op is a slot we forgot to map: say so loudly, here, every run.
    sent = set()
    for _, v in text: sent.add(v.strip())
    for _, v in embed: sent.add(re.sub(r'<[^>]+>', '', v).strip())
    for _, _h, t in links: sent.add(t.strip())
    for grp in props.values():
        for v in grp.values(): sent.add(str(v).strip())
    for c in cmp_['rows'][:9]:
        for cell in c['cells'][:3]: sent.add(str(cell['v']).strip())
    unsent = []
    def scan(node, path=''):
        if isinstance(node, dict):
            for k, v in node.items():
                if not k.startswith('_'):
                    scan(v, path + '.' + k)
        elif isinstance(node, list):
            for i, v in enumerate(node):
                scan(v, '%s[%d]' % (path, i))
        elif isinstance(node, str) and len(node.strip()) > 2:
            t = node.strip()
            # .t holds a cell's KIND ('icon'/'text'), not copy; hrefs and the slug are not copy;
            # and the two FAQs an override merges away are deliberately unsent.
            if path.endswith('.t') or t.startswith('/') or t == slug:
                return
            if path in OVR.get('_unmapped', {}):
                return
            ov = OVR.get(slug, {}).get('faq_merge')
            if ov and re.match(r'\.faq\.items\[(%d|%d)\]\.' % tuple(ov['replace_indexes']), path):
                return
            if t not in sent and clean_cta(t) not in sent:
                unsent.append((path, t))
    scan(d)
    for path, t in unsent:
        print('  ! DECLARED BUT NEVER SENT  %s  %r' % (path, t[:70]))

    return {'slug': slug, 'meta_title': d['meta_title'], 'meta_desc': d['meta_desc'],
            'text': text, 'embed': embed, 'styles': styles, 'links': links, 'delete': delete,
            'hard': hard, 'props': props, 'faq': fq, 'schema': schema}


def S(block_id):
    """A Block's text lives in a String child one id along; set_text only takes
    Heading, Strong and String nodes, not the wrapper Block."""
    return bump(block_id)


def bump(uuid_str, step=1):
    """Walk the element id by `step` in document order. These templates number siblings
    sequentially in the last hex block: a cell's only child is cell+1, a row's label is
    feature+1, and a row's grid is feature-1. Verified against two pages before use."""
    head, tail = uuid_str.rsplit('-', 1)
    return '%s-%s' % (head, format(int(tail, 16) + step, '0%dx' % len(tail)))


if __name__ == '__main__':
    slugs = sys.argv[1:] or [f[:-5] for f in sorted(os.listdir(os.path.join(HERE, 'content')))]
    print('%-34s %5s %6s %6s %5s %6s %5s %5s' % ('slug', 'text', 'embed', 'styles', 'link', 'delete', 'icon', 'faq'))
    for s in slugs:
        o = build(s)
        json.dump(o, io.open(os.path.join(OUT, s + '.json'), 'w', encoding='utf-8'),
                  indent=1, ensure_ascii=False)
        print('%-34s %5d %6d %6d %5d %6d %5d %5d' % (s, len(o['text']), len(o['embed']),
                                                     len(o['styles']), len(o['links']),
                                                     len(o['delete']), len(o['hard']),
                                                     len(o['faq'])))
