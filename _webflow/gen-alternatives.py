# -*- coding: utf-8 -*-
"""Build /alternatives, the hub page for the 12 comparison pages.

WHY THIS EXISTS
Eugene, 2026-10-10: "I want to have a hub page, like we have for /solutions or /free-tools, with
all the cards for alternative pages". Webflow-only, no repo counterpart, exactly like those two.

The page was created with `create_page duplicateOf` the /solutions donor, so its card element
UUIDs are identical to the ones /free-tools already recorded (free-tools was duplicated from the
same donor). That is why this reads the element ids out of free-tools.json instead of discovering
them: same donor, same uuids, verified by probing before use.

The donor has 26 cards. We keep 12 and remove the other 14.

ICON DECISION
All 12 cards use the same icon, `vos-balance-scale.svg` (asset 6ac9dd518486af1b33e38258, already
uploaded for /free-tools, already white 256x256 so the untinted tile renders it correctly). This
is deliberate and is NOT the /solutions defect where 17 cards for 17 different features all showed
cutlery: here every card is the same KIND of thing, a head-to-head comparison, and the card is
identified by the competitor's name in its heading. A balance scale is the honest glyph for that.

Usage: python gen-alternatives.py header|cards|removes|all
"""
import io
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
FT = json.load(io.open(os.path.join(HERE, 'free-tools.json'), encoding='utf-8'))
PAGES = json.load(io.open(os.path.join(HERE, 'pages.json'), encoding='utf-8'))

PAGE_ID = '6aca44dad218825392222a7d'
ICON_ASSET = '6ac9dd518486af1b33e38258'          # vos-balance-scale.svg
BUTTON = 'See the comparison'

HEADER = {
    'h1': 'Compare VOS With The Tool You Are Weighing Up',
    'lead': ('Twelve head-to-head pages, one per product. Every competitor detail was read off '
             'their own site and dated on the page. Where VOS is the narrower tool, the page says '
             'so rather than hiding it.'),
    'h2': 'Pick the product you are comparing',
}

# slug -> (card title, one-line description carrying that page's own angle)
CARDS = [
    ('pepper-alternative', 'Pepper Alternative',
     'Their published rollout runs 35 to 90 days. Most distributors are live on VOS in 24 to 48 hours.'),
    ('choco-alternative', 'Choco Alternative',
     'Choco sells growth: a storefront, a CRM, bigger baskets. VOS sells one clean order and stops there.'),
    ('burnt-ai-alternative', 'Burnt AI Alternative',
     'Burnt puts agents across the back office. VOS covers the order, with your buyer signing it off.'),
    ('grubmarket-ai-alternative', 'GrubMarket AI Alternative',
     'Both products run on voice. The difference is whose hands the microphone is in.'),
    ('cut-dry-alternative', 'Cut+Dry Alternative',
     'On a three-sided network, somebody else is in the room when your customer orders. Here nobody is.'),
    ('bluecart-alternative', 'BlueCart Alternative',
     'A marketplace grades your prices against other vendors. Your own order guide does not.'),
    ('necs-entree-alternative', 'NECS Entree Alternative',
     'Keep the ERP that runs your company. Change only the way an order reaches it.'),
    ('pepperi-alternative', 'Pepperi Alternative',
     'Pepperi arms the visit: routes, shelf audits, van sales. VOS is for the reorder nobody attends.'),
    ('orderease-alternative', 'OrderEase Alternative',
     'They tidy up every order channel. VOS removes the channel that makes your desk the most work.'),
    ('wizcommerce-alternative', 'WizCommerce Alternative',
     'Their AI reads whatever arrived. In VOS there is nothing to read, because the buyer built the lines.'),
    ('rekki-alternative', 'REKKI Alternative',
     'They publish an accuracy rate. A rate exists because something is inferring what the order said.'),
    ('fresho-alternative', 'Fresho Alternative',
     'Fresho runs a whole fresh-food operation. VOS adds one step and leaves the rest of it alone.'),
]


def eid(e):
    return {'component': PAGE_ID, 'element': e}


def main():
    what = sys.argv[1] if len(sys.argv) > 1 else 'all'
    compare = PAGES['compare']
    ftc = FT['cards']
    if len(CARDS) > len(ftc):
        raise SystemExit('only %d donor card element groups recorded' % len(ftc))

    header, cards, removes = [], [], []

    header.append({'label': 'h1', 'set_text': {
        'id': eid(FT['header']['h1']['element']), 'text': HEADER['h1']}})
    header.append({'label': 'lead', 'set_text': {
        'id': eid(FT['header']['lead']['element']), 'text': HEADER['lead']}})
    header.append({'label': 'h2', 'set_text': {
        'id': eid(FT['header']['h2']['textElement']), 'text': HEADER['h2']}})

    for i, (slug, title, desc) in enumerate(CARDS):
        el = ftc[i]['elements']
        if slug not in compare:
            raise SystemExit('no page id for %r' % slug)
        cards.append({'label': 'c%d-link' % i, 'set_link': {
            'id': eid(el['link']), 'linkType': 'page', 'link': compare[slug]}})
        cards.append({'label': 'c%d-title' % i, 'set_text': {
            'id': eid(el['titleString']), 'text': title}})
        cards.append({'label': 'c%d-desc' % i, 'set_text': {
            'id': eid(el['descString']), 'text': desc}})
        cards.append({'label': 'c%d-btn' % i, 'set_text': {
            'id': eid(el['buttonString']), 'text': BUTTON}})
        # the action is `set_image_asset` and the key is `image_asset_id`, not `set_image`/`asset_id`
        cards.append({'label': 'c%d-img' % i, 'set_image_asset': {
            'id': eid(el['image']), 'image_asset_id': ICON_ASSET}})

    for j in range(len(CARDS), len(ftc)):
        removes.append({'label': 'rm-ft%d' % j, 'remove_element': {'id': eid(ftc[j]['elements']['link'])}})
    for k, rc in enumerate(FT.get('removedCards') or []):
        removes.append({'label': 'rm-extra%d' % k, 'remove_element': {'id': eid(rc['link'])}})

    out = {'header': header, 'cards': cards, 'removes': removes}
    if what == 'all':
        for k in ('header', 'cards', 'removes'):
            print('----- %s (%d) -----' % (k, len(out[k])))
            print(json.dumps(out[k], ensure_ascii=False))
            print()
    else:
        print(json.dumps(out[what], ensure_ascii=False))
    print('# page %s  header %d, card ops %d (%d cards x 5), removes %d'
          % (PAGE_ID, len(header), len(cards), len(CARDS), len(removes)), file=sys.stderr)


if __name__ == '__main__':
    main()
