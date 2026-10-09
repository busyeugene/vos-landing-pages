# -*- coding: utf-8 -*-
"""Generate the per-page JSON-LD head block for each ported Webflow page.

Modelled node for node on what the client already ships on the 16 live landing pages
(read back from restaurant-checklist-software's page head code), so the ten new pages
carry the same graph shape rather than a thinner one. Webflow does NOT copy page head
code when a page is duplicated, which is why these have to be written explicitly.

Writes schema/<slug>.html, ready to paste into set_page_freeform_code.
"""
import io, os, re, json, sys, subprocess

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
OUT = os.path.join(HERE, 'schema')
os.makedirs(OUT, exist_ok=True)

LIVE = 'https://www.voiceordersolutions.com'
OPERATOR = {'supplier-management-software'}

OVR = json.load(io.open(os.path.join(HERE, 'overrides.json'), encoding='utf-8'))
PAGES = json.load(io.open(os.path.join(HERE, 'pages.json'), encoding='utf-8'))['pages']

HERO_IMG = ('https://cdn.prod.website-files.com/69bc131a5fdaa09a10456d46/'
            '6a208bdc32c3aee3e914c9e7_update-order%20(3)-p-1080.png')

ORG = {
    '@type': 'Organization',
    '@id': LIVE + '/#organization',
    'name': 'VoiceOrder Solutions',
    'alternateName': 'VOS',
    'url': LIVE + '/',
    'slogan': 'Your customers order. Your team delivers. We handle everything in between.',
    'logo': {
        '@type': 'ImageObject',
        '@id': LIVE + '/#logo',
        'url': ('https://cdn.prod.website-files.com/69bc131a5fdaa09a10456d46/'
                '69bc166c0e1d00dd7986930b_voiceorder_solutions_logo_color%20(1).webp'),
        'contentUrl': ('https://cdn.prod.website-files.com/69bc131a5fdaa09a10456d46/'
                       '69bc166c0e1d00dd7986930b_voiceorder_solutions_logo_color%20(1).webp'),
        'caption': 'VoiceOrder Solutions',
    },
    'image': {'@id': LIVE + '/#logo'},
    'sameAs': [
        'https://www.facebook.com/profile.php?id=61593117765627',
        'https://www.instagram.com/voiceorder_solutions/',
        'https://www.youtube.com/channel/UCyiPWGS1HeQZQVlx133x9fg',
        'https://www.linkedin.com/company/voiceorder-solutions/',
        'https://www.alignable.com/savannah-ga/voiceorder-solutions',
    ],
    'areaServed': {'@type': 'Country', 'name': 'United States'},
    'contactPoint': [{
        '@type': 'ContactPoint', 'contactType': 'sales', 'name': 'Book a demo',
        'url': LIVE + '/contact-us',
        'availableLanguage': {'@type': 'Language', 'name': 'English'},
    }],
}

SITE = {
    '@type': 'WebSite',
    '@id': LIVE + '/#website',
    'url': LIVE + '/',
    'name': 'VoiceOrder Solutions',
    'description': ('Voice-powered ordering and inventory visibility for independent food '
                    'distributors, DSD operators and the restaurants they supply.'),
    'publisher': {'@id': LIVE + '/#organization'},
    'inLanguage': 'en-US',
}

FORMATS = ['Email', 'PDF, Excel, Word', 'QuickBooks', 'EDI', 'API Direct',
           'iOS App', 'Android App', 'Web Admin', 'Distributor Platforms']


def keywords_for(slug):
    """Pull the page's primary + secondary targets straight out of _build/keywords.js."""
    js = ('const k=require(%s);process.stdout.write(JSON.stringify(k[%s]||{}))'
          % (json.dumps(os.path.join(REPO, '_build', 'keywords.js').replace('\\', '/')),
             json.dumps(slug)))
    out = subprocess.run(['node', '-e', js], capture_output=True, text=True,
                         encoding='utf-8').stdout
    return json.loads(out or '{}')


def faq_items(d, slug):
    items = [dict(x) for x in d['faq']['items']]
    ov = OVR.get(slug, {}).get('faq_merge')
    if ov:
        i, j = ov['replace_indexes']
        items[i:j + 1] = [{'q': ov['q'], 'a': ov['a']}]
    return items


def build(slug):
    d = json.load(io.open(os.path.join(HERE, 'content', slug + '.json'), encoding='utf-8'))
    kw = keywords_for(slug)
    url = '%s/%s' % (LIVE, slug)
    fq = faq_items(d, slug)
    label = ' '.join(w if w.isupper() else w.capitalize()
                     for w in slug.replace('-software', '').split('-')) + ' Software'
    label = label.replace('B2b', 'B2B').replace('Dsd', 'DSD')
    operator = slug in OPERATOR

    # featureList: the page's own feature-row bullets plus its three card headings,
    # so the schema states only what the page states.
    feats = [b for r in d['features']['rows'] for b in r['bullets']]
    feats += ['%s: %s' % (c['h3'], c['body']) for c in d['cards']['items']]

    graph = [ORG, SITE]

    graph.append({
        '@type': ['WebPage', 'FAQPage'],
        '@id': url + '#webpage',
        'url': url,
        'name': d['meta_title'],
        'headline': d['hero']['h1'],
        'description': d['meta_desc'],
        'inLanguage': 'en-US',
        'isPartOf': {'@id': LIVE + '/#website'},
        'about': {'@id': url + '#software'},
        'mainEntity': [{'@id': '%s#faq-%d' % (url, i + 1)} for i in range(len(fq))],
        'breadcrumb': {'@id': url + '#breadcrumb'},
        'hasPart': {'@id': url + '#howto'},
        'publisher': {'@id': LIVE + '/#organization'},
        'potentialAction': {
            '@type': 'ReserveAction', 'name': 'Book a free demo',
            'target': {'@type': 'EntryPoint', 'urlTemplate': LIVE + '/contact-us',
                       'actionPlatform': ['https://schema.org/DesktopWebPlatform',
                                          'https://schema.org/MobileWebPlatform']},
            'result': {'@type': 'Reservation', 'name': 'VoiceOrder Solutions product demo'},
        },
        'significantLink': sorted({LIVE + r['link']['href']
                                   for r in d['features']['rows'] if r.get('link')}),
    })

    graph.append({
        '@type': 'BreadcrumbList', '@id': url + '#breadcrumb',
        'itemListElement': [
            {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': LIVE + '/'},
            {'@type': 'ListItem', 'position': 2, 'name': 'Solutions', 'item': LIVE + '/solutions'},
            {'@type': 'ListItem', 'position': 3, 'name': label},
        ],
    })

    graph.append({
        '@type': 'SoftwareApplication', '@id': url + '#software',
        'name': 'VoiceOrder Solutions ' + label,
        'alternateName': ['VOS ' + label, label + ' by VoiceOrder Solutions'],
        'url': url,
        'headline': d['hero']['h1'],
        'description': d['hero']['lead'],
        'applicationCategory': 'BusinessApplication',
        'applicationSubCategory': label,
        'operatingSystem': 'iOS, Android, Web browser',
        'availableOnDevice': 'iPhone, iPad, Android smartphone, Android tablet, desktop web browser',
        'softwareRequirements': (
            'An account set up by a participating food distributor, plus an iOS or Android device '
            'for ordering or a web browser for the admin platform.' if operator else
            'An account set up by VoiceOrder Solutions, plus an iOS or Android device for the '
            'customers who place orders and a web browser for the admin platform.'),
        'permissions': 'Microphone access on the device, for voice ordering',
        'inLanguage': 'en-US',
        'isAccessibleForFree': False,
        'keywords': ([kw.get('primary')] if kw.get('primary') else []) + kw.get('secondary', []),
        'featureList': feats,
        'provider': {'@id': LIVE + '/#organization'},
        'publisher': {'@id': LIVE + '/#organization'},
        'audience': (
            {'@type': 'BusinessAudience', 'name': 'Restaurants and foodservice operators',
             'audienceType': ('Restaurant owners, chefs, kitchen managers and multi-site '
                              'restaurant groups that buy supplies from food distributors')}
            if operator else
            {'@type': 'BusinessAudience',
             'name': 'Independent food distributors and DSD operators',
             'audienceType': ('Owners and managers at small to mid-size independent food '
                              'distributors and direct store delivery operations that supply '
                              'restaurants and grocery stores')}),
        'offers': {
            '@type': 'Offer', '@id': url + '#offer',
            'name': 'VoiceOrder Solutions %s subscription' % label,
            'description': ('Pricing is quoted per distributor based on the number of accounts and '
                            'the setup required; there is no public list price. '
                            + ('Ask the distributor who supplies you.' if operator
                               else 'Book a free demo for a quote.')),
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock',
            'url': LIVE + '/contact-us',
            'seller': {'@id': LIVE + '/#organization'},
        },
        'review': {
            '@type': 'Review', '@id': url + '#review',
            'reviewBody': ("I used to spend hours every week ordering food. Now it's simple, "
                           "super easy, and I have free time to spend on other aspects of my "
                           "restaurant."),
            'author': {'@type': 'Person', 'name': 'Tony Luna', 'jobTitle': 'Owner-Chef',
                       'worksFor': {'@type': 'Restaurant', 'name': 'Prairie Moon'}},
        },
    })

    graph.append({
        '@type': 'HowTo', '@id': url + '#howto',
        'name': d['steps']['h2'],
        'description': d['steps']['lead'],
        'totalTime': 'PT48H',
        'step': [{'@type': 'HowToStep', 'position': i + 1, 'name': s['h3'], 'text': s['body'],
                  'url': url + '#how-it-works'} for i, s in enumerate(d['steps']['items'])],
    })

    for i, x in enumerate(fq):
        graph.append({
            '@type': 'Question', '@id': '%s#faq-%d' % (url, i + 1), 'position': i + 1,
            'name': x['q'],
            'acceptedAnswer': {'@type': 'Answer', 'text': x['a']},
        })

    doc = {'@context': 'https://schema.org', '@graph': graph}
    return json.dumps(doc, separators=(',', ':'), ensure_ascii=False)


if __name__ == '__main__':
    print('%-34s %8s %5s' % ('slug', 'bytes', 'nodes'))
    for slug in sorted(PAGES):
        html = build(slug)
        io.open(os.path.join(OUT, slug + '.json'), 'w', encoding='utf-8').write(html)
        n = html.count('"@type"')
        print('%-34s %8d %5d' % (slug, len(html), n))
