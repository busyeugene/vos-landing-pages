# -*- coding: utf-8 -*-
"""Root HTML of a `compare` page -> content/<slug>.json, in the same shape extract-content.py
emits for a 16-section page.

WHY THIS EXISTS
extract-content.py reads the 16-section feature-page shape. A compare page uses the `compare`
block order (registry kind='compare'), so it does not fit, and the first compare port (Pepper,
2026-10-10) hand-authored its content JSON. Hand-authoring 162 strings per page for twelve pages
is both slow and exactly how claim drift gets in, so this projects the compare page onto the same
slots instead. The mapping is Pepper's, which Eugene reviewed:

  repo `problem`      -> problem        ("Why teams compare <X>")
  repo `cards`        -> cards          ("When VOS and <X> work together")
  repo `comparison`   -> comparison     (3 cols: Feature / VOS / <X>; the CTA row is dropped)
  repo `features`     -> features, repo `steps` -> steps, repo `midcta`/`finalcta` -> midcta/mainCta

Validated by regenerating Pepper and diffing against the reviewed hand-authored file: every
delta has to be a copy change made in the repo since, and nothing else.

Usage: python extract-compare.py [slug ...]      (no args = every compare page)
"""
import io
import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def registry():
    """Read the compare pages out of _build/registry.js via node, so there is one source of truth."""
    out = subprocess.check_output(
        ['node', '-e',
         "const r=require('./_build/registry.js');"
         "console.log(JSON.stringify(r.filter(p=>p.kind==='compare')"
         ".map(p=>({slug:p.slug,file:p.file,competitor:p.competitor,title:p.title,description:p.description}))))"],
        cwd=ROOT)
    return json.loads(out.decode('utf-8'))


# ---------- html helpers ----------
def txt(s):
    s = re.sub(r'<br\s*/?>', ' ', s)
    s = re.sub(r'<[^>]+>', ' ', s)
    s = (s.replace('&amp;', '&').replace('&nbsp;', ' ')
          .replace('&quot;', '"').replace('&#39;', "'")
          .replace('&lt;', '<').replace('&gt;', '>'))
    return re.sub(r'\s+', ' ', s).strip()


def sect(html, pattern):
    m = re.search(pattern, html, re.I)
    return m.group(0) if m else ''


def one(block, pattern, group=1):
    m = re.search(pattern, block, re.I)
    return txt(m.group(group)) if m else ''


def many(block, pattern, group=1):
    return [txt(m.group(group)) for m in re.finditer(pattern, block, re.I)]


SEC = {
    'hero':   r'<section class="hero"[\s\S]*?</section>',
    'stats':  r'<section class="stats-strip"[\s\S]*?</section>',
    'problem': r'<section[^>]*id="problem"[\s\S]*?\n</section>',
    'features': r'<section[^>]*id="features"[\s\S]*?\n</section>',
    'cards':  r'<section class="section-pad bg-light" aria-label="Additional features"[\s\S]*?\n</section>',
    'midcta': r'<section aria-label="Mid-page call to action"[\s\S]*?</section>',
    'steps':  r'<section[^>]*id="how-it-works"[\s\S]*?\n</section>',
    'cmp':    r'<section[^>]*id="comparison"[\s\S]*?\n</section>',
    'faq':    r'<section[^>]*id="faq"[\s\S]*?\n</section>',
    'final':  r'<section class="final-cta"[\s\S]*?</section>',
}

EYEBROW = r'<span class="eyebrow">([\s\S]*?)</span>'
LEAD = r'<p class="lead mt-16">([\s\S]*?)</p>'
CTA_LABEL = r'<a[^>]*class="[^"]*btn[^"]*"[^>]*>([\s\S]*?)</a>'


def h4_pairs(block, container_class):
    """[{h3, body}] for .problem-card / .feature-card / .step-card, which use <h4> + <p>.

    Each card holds a nested icon <div>, so "lazily match to </div></div>" runs past the card and
    swallows its siblings (it produced 1 card instead of 3). Slice on the next container opening
    instead, the way the feature rows are read.
    """
    opener = r'<div class="%s">' % container_class
    out = []
    for m in re.finditer(opener + r'([\s\S]*?)(?=' + opener + r'|\Z)', block, re.I):
        chunk = m.group(1)
        h = one(chunk, r'<h4>([\s\S]*?)</h4>')
        b = one(chunk, r'<p[^>]*>([\s\S]*?)</p>')
        if h:
            out.append({'h3': h, 'body': b})
    return out


def extract(page, html):
    hero = sect(html, SEC['hero'])
    stats = sect(html, SEC['stats'])
    prob = sect(html, SEC['problem'])
    feat = sect(html, SEC['features'])
    cards = sect(html, SEC['cards'])
    mid = sect(html, SEC['midcta'])
    steps = sect(html, SEC['steps'])
    cmp_ = sect(html, SEC['cmp'])
    faq = sect(html, SEC['faq'])
    final = sect(html, SEC['final'])

    # features: the section eyebrow is the one before the first .feature-row
    feat_head = feat.split('feature-row')[0]
    rows = []
    for m in re.finditer(r'<div class="feature-row(?: reverse)?">([\s\S]*?)(?=<div class="feature-row|\Z)', feat, re.I):
        chunk = m.group(1)
        rows.append({
            'eyebrow': one(chunk, EYEBROW),
            'h3': one(chunk, r'<h3>([\s\S]*?)</h3>'),
            'body': one(chunk, r'<p class="mt-12 text-muted">([\s\S]*?)</p>'),
            'bullets': [txt(b.group(1)) for b in
                        re.finditer(r'<span class="bullet-check">[\s\S]*?</span>\s*<span>([\s\S]*?)</span>', chunk, re.I)],
            'link': {
                'href': (lambda m: m.group(1) if m else '')(
                    re.search(r'<a[^>]*class="feature-link"[^>]*href="([^"]+)"', chunk, re.I)
                    or re.search(r'<a[^>]*href="([^"]+)"[^>]*class="feature-link"', chunk, re.I)),
                'text': one(chunk, r'<a[^>]*class="feature-link"[^>]*>([\s\S]*?)</a>'),
            },
        })

    # comparison: two-line H2, and the trailing CTA row is not content
    h2_raw = re.search(r'<h2>([\s\S]*?)</h2>', cmp_, re.I)
    h2_html = h2_raw.group(1) if h2_raw else ''
    h2_lines = [txt(p) for p in re.split(r'<br\s*/?>', h2_html) if txt(p)]
    heads = many(cmp_, r'<th[^>]*>([\s\S]*?)</th>')
    cmp_rows = []
    body = sect(cmp_, r'<tbody>[\s\S]*?</tbody>')
    for m in re.finditer(r'<tr>([\s\S]*?)</tr>', body, re.I):
        cells_html = re.findall(r'<td[^>]*>([\s\S]*?)</td>', m.group(1), re.I)
        if not cells_html:
            continue
        label = txt(cells_html[0])
        if not label:
            continue  # the Book a Demo row
        # {t,v}: gen-ops.py needs the KIND, because converting a cell between icon and text is two
        # operations (contents AND style) and getting that wrong rendered 89 cells one-word-per-line.
        vals = []
        for c in cells_html[1:]:
            if 'check-yes' in c:
                vals.append({'t': 'icon', 'v': 'yes'})
            elif 'check-no' in c:
                vals.append({'t': 'icon', 'v': 'no'})
            else:
                vals.append({'t': 'text', 'v': txt(c)})
        cmp_rows.append({'label': label, 'cells': vals})

    # Same nested-div trap as the cards: slice on the next .faq-item opening, or every answer
    # comes back empty (it did).
    faq_items = []
    for m in re.finditer(r'<div class="faq-item">([\s\S]*?)(?=<div class="faq-item">|\Z)', faq, re.I):
        chunk = m.group(1)
        q = one(chunk, r'<button class="faq-question"[^>]*>([\s\S]*?)<span class="faq-icon">')
        a = one(chunk, r'<div class="faq-answer"[^>]*>([\s\S]*?)</div>')
        if q:
            faq_items.append({'q': q, 'a': a})

    # Metas come off the built HTML, not the registry: registry.js does not carry them, and reading
    # the rendered head is the same source the SEO fields are set from.
    return {
        'slug': page['slug'],
        'meta_title': one(html, r'<title>([\s\S]*?)</title>'),
        'meta_desc': (lambda m: txt(m.group(1)) if m else '')(
            re.search(r'<meta name="description" content="([^"]*)"', html, re.I)),
        'hero': {
            'eyebrow': one(hero, EYEBROW),
            'h1': one(hero, r'<h1>([\s\S]*?)</h1>'),
            'lead': one(hero, LEAD),
            'cta': one(hero, CTA_LABEL),
        },
        'stats': [{'num': n, 'label': l} for n, l in zip(
            many(stats, r'<div class="stat-number">([\s\S]*?)</div>'),
            many(stats, r'<div class="stat-label">([\s\S]*?)</div>'))],
        'problem': {
            'eyebrow': one(prob, EYEBROW),
            'h2': one(prob, r'<h2>([\s\S]*?)</h2>'),
            'lead': one(prob, LEAD),
            'cards': h4_pairs(prob, 'problem-card'),
        },
        'features': {
            'eyebrow': one(feat_head, EYEBROW),
            'h2': one(feat_head, r'<h2>([\s\S]*?)</h2>'),
            'rows': rows,
        },
        'cards': {
            'eyebrow': one(cards, EYEBROW),
            'h2': one(cards, r'<h2>([\s\S]*?)</h2>'),
            'lead': one(cards, LEAD),
            'items': h4_pairs(cards, 'feature-card'),
        },
        'midcta': {
            'h3': one(mid, r'<h3[^>]*>([\s\S]*?)</h3>'),
            'body': one(mid, r'<p[^>]*>([\s\S]*?)</p>'),
            'cta': one(mid, CTA_LABEL),
        },
        'steps': {
            'eyebrow': one(steps, EYEBROW),
            'h2': one(steps, r'<h2>([\s\S]*?)</h2>'),
            'lead': one(steps, LEAD),
            'items': h4_pairs(steps, 'step-card'),
        },
        'comparison': {
            'h2': txt(h2_html),
            'h2_lines': h2_lines,
            'eyebrow': one(cmp_, EYEBROW),
            'lead': one(cmp_, LEAD),
            'heads': heads,
            'rows': cmp_rows,
        },
        'faq': {
            'eyebrow': one(faq, EYEBROW),
            'h2': one(faq, r'<h2>([\s\S]*?)</h2>'),
            'items': faq_items,
        },
        'mainCta': {
            'h2': one(final, r'<h2>([\s\S]*?)</h2>'),
            'body': one(final, r'<p[^>]*>([\s\S]*?)</p>'),
            'cta': one(final, CTA_LABEL),
        },
    }


def main():
    want = sys.argv[1:]
    pages = [p for p in registry() if not want or p['slug'] in want]
    outdir = os.path.join(HERE, 'content')
    problems = 0
    for p in pages:
        html = io.open(os.path.join(ROOT, p['file']), encoding='utf-8').read()
        data = extract(p, html)
        # shape assertions: a silently empty slot is the 2026-10-09 defect class
        checks = [
            ('hero.h1', data['hero']['h1']),
            ('hero.lead', data['hero']['lead']),
            ('comparison.lead', data['comparison']['lead']),
            ('comparison.eyebrow', data['comparison']['eyebrow']),
            ('cards.lead', data['cards']['lead']),
            ('midcta.h3', data['midcta']['h3']),
            ('mainCta.h2', data['mainCta']['h2']),
        ]
        for name, v in checks:
            if not v:
                print('  ! EMPTY %s on %s' % (name, p['slug']))
                problems += 1
        counts = {'stats': 3, 'problem.cards': 3, 'features.rows': 4,
                  'cards.items': 3, 'steps.items': 3, 'comparison.rows': 9}
        got = {'stats': len(data['stats']), 'problem.cards': len(data['problem']['cards']),
               'features.rows': len(data['features']['rows']), 'cards.items': len(data['cards']['items']),
               'steps.items': len(data['steps']['items']), 'comparison.rows': len(data['comparison']['rows'])}
        for k, exp in counts.items():
            if got[k] != exp:
                print('  ! %s has %d, expected %d on %s' % (k, got[k], exp, p['slug']))
                problems += 1
        if len(data['faq']['items']) < 7:
            print('  ! only %d FAQs on %s' % (len(data['faq']['items']), p['slug']))
            problems += 1
        # Structural constraints of the Webflow donor, which have to be DECIDED, not silently
        # truncated: 4 bullet slots per feature row, 8 FAQ accordion slots (IX2 binds per element,
        # so an inserted item renders dead). Print them loudly; record each decision in
        # overrides.json the way pepper-alternative.faq_merge does.
        for i, r in enumerate(data['features']['rows']):
            if len(r['bullets']) > 4:
                print('  DECIDE %s feature row %d has %d bullets, donor has 4 slots:' % (
                    p['slug'], i + 1, len(r['bullets'])))
                for j, b in enumerate(r['bullets']):
                    print('           [%d] %s' % (j, b))
        if len(data['faq']['items']) > 8:
            print('  DECIDE %s has %d FAQs, donor has 8 slots: two must merge' % (
                p['slug'], len(data['faq']['items'])))
        with io.open(os.path.join(outdir, p['slug'] + '.json'), 'w', encoding='utf-8') as f:
            f.write(json.dumps(data, indent=1, ensure_ascii=False))
        print('%-28s %d stats, %d prob, %d rows, %d cards, %d steps, %d cmp, %d faq' % (
            p['slug'], len(data['stats']), len(data['problem']['cards']), len(data['features']['rows']),
            len(data['cards']['items']), len(data['steps']['items']), len(data['comparison']['rows']),
            len(data['faq']['items'])))
    print('\n%d shape problem(s)' % problems)
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(main())
