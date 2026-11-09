# Prep the "Competitors Batch 2" sheet for import_plan.py.
# Keeps the 30 "Batch 2 pick = Yes" rows, rewrites the " | " secondary list as commas
# (the base and import_plan.merge_kw split on commas), and builds a Brief column for
# Short outline, because the sheet has no outline column of its own.
import csv, io, sys

src, out = sys.argv[1], sys.argv[2]
rows = list(csv.DictReader(io.open(src, encoding='utf-8')))
keep = [r for r in rows if r['Batch 2 pick'].strip().lower() == 'yes']
assert len(keep) == 30, len(keep)

def brief(r):
    parts = [
        'Compare page (%s audience), %s.' % (
            'distributor' if r['Segment'] == 'Distributors' else 'operator', r['Tier']),
        'Competitor: %s (%s). Fit for VOS: %s.' % (r['Competitor'], r['What they sell'], r['Fit for VOS']),
        'Sheet angle (research note, not page copy): %s' % r['Why VOS sits beside it'],
        'URL: %s' % r['Proposed URL'],
        'Results page (8 Nov, US): %s' % r['Results page (8 Nov, US)'],
        'Plural volume: %s. Google Ads volume: %s. VOS pages already naming this rival: %s.' % (
            r["Plural 'alternatives' volume (Ahrefs US)"],
            r['Google Ads volume (singular and plural share one figure)'],
            r['VOS pages already naming this rival']),
    ]
    if r['Note'].strip():
        parts.append('Note: %s' % r['Note'].strip())
    return '\n'.join(parts)

# Example (URL) holds the competitor's homepage on every earlier compare row; the sheet
# has no such column, so root domains are added here (re-checked during page research).
HOME = {
    'NetSuite': 'https://www.netsuite.com/', 'Odoo': 'https://www.odoo.com/',
    'Brightpearl': 'https://www.brightpearl.com/', 'Cin7': 'https://www.cin7.com/',
    'Acumatica': 'https://www.acumatica.com/', 'Zoho Inventory': 'https://www.zoho.com/inventory/',
    'inFlow': 'https://www.inflowinventory.com/', 'OroCommerce': 'https://oroinc.com/',
    'Shopify B2B': 'https://www.shopify.com/plus/solutions/b2b-ecommerce',
    'Fishbowl': 'https://www.fishbowlinventory.com/', 'Sana Commerce': 'https://www.sana-commerce.com/',
    'QuickBooks Commerce': 'https://quickbooks.intuit.com/', 'B2B Wave': 'https://www.b2bwave.com/',
    'Toast': 'https://pos.toasttab.com/', 'Lightspeed Restaurant': 'https://www.lightspeedhq.com/pos/restaurant/',
    'SPS Commerce': 'https://www.spscommerce.com/', 'Conexiom': 'https://conexiom.com/',
    'TrueCommerce': 'https://www.truecommerce.com/', 'Unleashed': 'https://www.unleashedsoftware.com/',
    'RepZio': 'https://www.repzio.com/', 'Syspro': 'https://www.syspro.com/',
    'Esker': 'https://www.esker.com/', 'Prophet 21': 'https://www.epicor.com/en-us/erp/epicor-prophet-21/',
    'Sage X3': 'https://www.sage.com/en-us/products/sage-x3/', 'Aptean': 'https://www.aptean.com/',
    'Business Central': 'https://www.microsoft.com/en-us/dynamics-365/products/business-central',
    'TouchBistro': 'https://www.touchbistro.com/', 'Altametrics': 'https://altametrics.com/',
    'Lavu': 'https://lavu.com/', 'Crunchtime': 'https://www.crunchtime.com/',
}
missing = [r['Competitor'] for r in keep if r['Competitor'] not in HOME]
assert not missing, missing

hdr = list(rows[0].keys()) + ['Brief', 'Secondaries (comma)', 'Homepage', 'Title (draft)']
with io.open(out, 'w', encoding='utf-8', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=hdr)
    w.writeheader()
    for r in keep:
        r = dict(r)
        r['Brief'] = brief(r)
        r['Secondaries (comma)'] = ', '.join(
            s.strip() for s in r['Secondary keywords (not volume-checked)'].split('|') if s.strip())
        r['Homepage'] = HOME[r['Competitor']]
        # TradeGecko is discontinued, so "Keep QuickBooks Commerce" cannot be the title
        # (Eugene, 2026-11-09: an honest replacement page, gently). Left blank to set at build.
        if r['Competitor'] == 'QuickBooks Commerce':
            r['Title (draft)'] = ''
            r['Brief'] += ('\nFrame (Eugene, 2026-11-09): honest replacement page, written gently; '
                           'the product was discontinued in 2021, so not "keep X". Title set at build.')
        else:
            r['Title (draft)'] = r['Suggested H1 (house style)']
        w.writerow(r)
print('wrote %d rows to %s' % (len(keep), out))
