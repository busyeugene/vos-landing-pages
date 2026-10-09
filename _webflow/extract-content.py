# -*- coding: utf-8 -*-
"""Pull every piece of copy a Webflow landing page needs out of the built repo HTML.

Output: content/<slug>.json, one object per page, keyed by the Webflow slot it fills.
The Webflow template is narrower than the repo's 16-section one: it has no related
strip and no email-form CTA, so those two repo sections are deliberately not read.
"""
import re, io, sys, os, json
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
OUT = os.path.join(HERE, 'content')
os.makedirs(OUT, exist_ok=True)

SLUGS = ['b2b-portal', 'wholesale-ordering', 'distributor-sales', 'dsd-sales',
         'supplier-management', 'distributor-analytics', 'inventory-forecasting',
         'wholesale-operations', 'distribution-automation', 'distribution-workflow']

ENT = [('&amp;', '&'), ('&#x27;', "'"), ('&quot;', '"'), ('&nbsp;', ' '),
       ('&lt;', '<'), ('&gt;', '>'), ('&rsquo;', "'"), ('&#39;', "'")]


def txt(s):
    s = re.sub(r'<br\s*/?>', ' ', s)
    s = re.sub(r'<[^>]+>', '', s)
    for a, b in ENT:
        s = s.replace(a, b)
    return re.sub(r'\s+', ' ', s).strip()


def one(pat, s, g=1):
    m = re.search(pat, s)
    return txt(m.group(g)) if m else ''


def build(slug):
    h = io.open(os.path.join(REPO, 'vos-%s-landing.html' % slug),
                encoding='utf-8', errors='replace').read()
    head = re.search(r'<head>[\s\S]*?</head>', h).group(0)
    b = re.sub(r'<!--[\s\S]*?-->', '', h[h.find('</head>'):])

    def sec(aria):
        m = re.search(r'<section[^>]*aria-label="%s"[\s\S]*?(?=<section|</body)' % aria, b)
        return m.group(0) if m else ''

    d = {'slug': slug + '-software',
         'meta_title': one(r'<title>([^<]*)</title>', head),
         'meta_desc': one(r'<meta name="description" content="([^"]*)"', head)}

    hero = sec('Hero')
    d['hero'] = {
        'eyebrow': one(r'<span class="eyebrow">([\s\S]*?)</span>', hero),
        'h1': one(r'<h1[^>]*>([\s\S]*?)</h1>', hero),
        'lead': one(r'<p class="lead[^"]*">([\s\S]*?)</p>', hero),
        'cta': one(r'<a [^>]*class="btn btn-primary[^"]*"[^>]*>([\s\S]*?)</a>', hero),
    }

    st = sec('Key results')
    d['stats'] = [{'num': txt(n), 'label': txt(l)} for n, l in re.findall(
        r'<div class="stat-number">([\s\S]*?)</div>\s*<div class="stat-label">([\s\S]*?)</div>', st)]

    pr = sec('Problem statement')
    d['problem'] = {
        'eyebrow': one(r'<span class="eyebrow">([\s\S]*?)</span>', pr),
        'h2': one(r'<h2[^>]*>([\s\S]*?)</h2>', pr),
        'lead': one(r'<h2[^>]*>[\s\S]*?</h2>\s*<p[^>]*>([\s\S]*?)</p>', pr),
        'cards': [{'h3': txt(a), 'body': txt(c)} for a, c in re.findall(
            r'<div class="problem-card">[\s\S]*?<h4[^>]*>([\s\S]*?)</h4>\s*<p[^>]*>([\s\S]*?)</p>', pr)],
    }

    fe = sec('Feature details')
    d['features'] = {'eyebrow': one(r'<span class="eyebrow">([\s\S]*?)</span>', fe),
                     'h2': one(r'<h2[^>]*>([\s\S]*?)</h2>', fe), 'rows': []}
    chunks = re.findall(
        r'<div class="feature-row[^"]*">[\s\S]*?(?=<div class="feature-row|<div style="padding-bottom: 80px|</section)', fe)
    for r in chunks:
        link = re.search(r'<a href="([^"]*)" class="feature-link">([\s\S]*?)</a>', r)
        d['features']['rows'].append({
            'eyebrow': one(r'<span class="eyebrow">([\s\S]*?)</span>', r),
            'h3': one(r'<h3[^>]*>([\s\S]*?)</h3>', r),
            'body': one(r'<h3[^>]*>[\s\S]*?</h3>\s*<p[^>]*>([\s\S]*?)</p>', r),
            'bullets': [txt(x) for x in re.findall(
                r'<span class="bullet-check">[\s\S]*?</span>\s*<span>([\s\S]*?)</span>', r)],
            'link': ({'href': link.group(1), 'text': txt(link.group(2))} if link else None),
        })

    ca = sec('Additional features')
    d['cards'] = {
        'eyebrow': one(r'<span class="eyebrow">([\s\S]*?)</span>', ca),
        'h2': one(r'<h2[^>]*>([\s\S]*?)</h2>', ca),
        'lead': one(r'<h2[^>]*>[\s\S]*?</h2>\s*<p[^>]*>([\s\S]*?)</p>', ca),
        'items': [{'h3': txt(a), 'body': txt(c)} for a, c in re.findall(
            r'<div class="feature-card">[\s\S]*?<h4[^>]*>([\s\S]*?)</h4>\s*<p[^>]*>([\s\S]*?)</p>', ca)],
    }

    mc = sec('Mid-page call to action')
    d['midcta'] = {'h3': one(r'<h2[^>]*>([\s\S]*?)</h2>', mc) or one(r'<h3[^>]*>([\s\S]*?)</h3>', mc),
                   'body': one(r'<p[^>]*>([\s\S]*?)</p>', mc),
                   'cta': one(r'<a [^>]*class="btn[^"]*"[^>]*>([\s\S]*?)</a>', mc)}

    sp = sec('How it works')
    d['steps'] = {
        'eyebrow': one(r'<span class="eyebrow">([\s\S]*?)</span>', sp),
        'h2': one(r'<h2[^>]*>([\s\S]*?)</h2>', sp),
        'lead': one(r'<h2[^>]*>[\s\S]*?</h2>\s*<p[^>]*>([\s\S]*?)</p>', sp),
        'items': [{'h3': txt(a), 'body': txt(c)} for a, c in re.findall(
            r'<div class="step-card">[\s\S]*?<h[34][^>]*>([\s\S]*?)</h[34]>\s*<p[^>]*>([\s\S]*?)</p>', sp)],
    }

    cm = sec('Comparison')
    tbl = cm[cm.find('<table'):cm.find('</table>')]
    rows, heads = [], []
    for tr in re.findall(r'<tr>([\s\S]*?)</tr>', tbl):
        if '<th' in tr:
            heads = [txt(x) for x in re.findall(r'<th[^>]*>([\s\S]*?)</th>', tr)]
            continue
        cells = re.findall(r'<td[^>]*>([\s\S]*?)</td>', tr)
        if len(cells) < 4:
            continue
        lab = txt(cells[0])
        if not lab:
            continue
        vals = []
        for c in cells[1:4]:
            if 'check-yes' in c:
                vals.append({'t': 'icon', 'v': 'yes'})
            elif 'check-no' in c:
                vals.append({'t': 'icon', 'v': 'no'})
            else:
                vals.append({'t': 'text', 'v': txt(c)})
        rows.append({'label': lab, 'cells': vals})
    # The comparison h2 is two lines split by a <br>; Webflow holds them as two
    # String nodes, so keep the halves rather than flattening to one string.
    cmh2 = re.search(r'<h2[^>]*>([\s\S]*?)</h2>', cm)
    h2_lines = [txt(x) for x in re.split(r'<br\s*/?>', cmh2.group(1))] if cmh2 else []
    d['comparison'] = {'h2': one(r'<h2[^>]*>([\s\S]*?)</h2>', cm),
                       'h2_lines': [x for x in h2_lines if x],
                       'eyebrow': one(r'<span class="eyebrow">([\s\S]*?)</span>', cm),
                       'lead': one(r'<h2[^>]*>[\s\S]*?</h2>\s*<p[^>]*>([\s\S]*?)</p>', cm),
                       'heads': heads, 'rows': rows}

    fq = sec('Frequently asked questions')
    d['faq'] = {
        'eyebrow': one(r'<span class="eyebrow">([\s\S]*?)</span>', fq),
        'h2': one(r'<h2[^>]*>([\s\S]*?)</h2>', fq),
        'items': [{'q': txt(q), 'a': txt(a)} for q, a in re.findall(
            r'<button class="faq-question"[^>]*>([\s\S]*?)<span class="faq-icon"[\s\S]*?'
            r'<div class="faq-answer"[^>]*>([\s\S]*?)</div>', fq)],
    }

    fc = sec('Sign up call to action')
    # The final CTA label is not the hero's: operator pages close with "Ask About Getting
    # Started" while the hero says "Get Set Up With VOS". Read the button, don't assume.
    d['mainCta'] = {'h2': one(r'<h2[^>]*>([\s\S]*?)</h2>', fc),
                    'body': one(r'<p[^>]*>([\s\S]*?)</p>', fc),
                    'cta': (one(r'<button[^>]*>([\s\S]*?)</button>', fc)
                            or one(r'<a [^>]*class="btn[^"]*"[^>]*>([\s\S]*?)</a>', fc)
                            or d['hero']['cta'])}
    return d


if __name__ == '__main__':
    rows = []
    for s in SLUGS:
        d = build(s)
        json.dump(d, io.open(os.path.join(OUT, d['slug'] + '.json'), 'w', encoding='utf-8'),
                  indent=1, ensure_ascii=False)
        rows.append((d['slug'], len(d['stats']), len(d['problem']['cards']),
                     len(d['features']['rows']), len(d['cards']['items']),
                     len(d['steps']['items']), len(d['comparison']['rows']),
                     len(d['faq']['items']),
                     sum(1 for r in d['features']['rows'] if r['link']),
                     min([len(r['bullets']) for r in d['features']['rows']] or [0]),
                     max([len(r['bullets']) for r in d['features']['rows']] or [0])))
    hdr = ('slug', 'stat', 'prob', 'rows', 'card', 'step', 'cmp', 'faq', 'link', 'bmin', 'bmax')
    print('%-34s %4s %4s %4s %4s %4s %4s %4s %4s %4s %4s' % hdr)
    for r in rows:
        print('%-34s %4d %4d %4d %4d %4d %4d %4d %4d %4d %4d' % r)
