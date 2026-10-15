"""Write pages.json: the 23 calculator pages, their sources, and 3 related calculators each.

    python -I make_pages.py
"""
import json, os

HERE = os.path.dirname(os.path.abspath(__file__))
LM = os.path.join("E:" + os.sep, "Claude projects", "Lead magnets VOS")
REF = os.path.join(LM, ".claude", "skills", "vos-webflow-lead-magnet", "reference")

IDS = {
    "product-pricing-calculator": "6ac718c668be300e93fb7203",
    "product-markup-calculator": "6ac7866ff16ee3a82e89dd76",
    "material-markup-calculator": "6ac72b95bdfb92fbc692e782",
    "retail-margin-calculator": "6ac76528743f1f2a6f8ae6e6",
    "wholesale-markup-calculator": "6ac73521a469d3c306f7aa87",
    "food-markup-calculator": "6ac79be2180bc9b3c91fb79c",
    "wholesale-to-retail-markup-calculator": "6ac73522edd07accabdbe401",
    "price-change-calculator": "6ac735253fe7317c927e4447",
    "landed-cost-calculator": "6ac7652962cd713ecd056f43",
    "unit-price-calculator": "6ac72b948f277e012d8d7584",
    "purchase-price-variance-calculator": "6ac7866c27806c8148c2855e",
    "early-payment-discount-calculator": "6ac79be4b863c26cbc9698b6",
    "procurement-savings-calculator": "6ac78670c218082afa38ac6f",
    "marginal-cost-calculator": "6ac69810ef654fbdecf37f4b",
    "reorder-point-calculator": "6ac7652a2a715d3e702a0559",
    "safety-stock-calculator": "6ac735249b6f12d26ba60ce1",
    "par-level-calculator": "6ac79be1b863c26cbc96979a",
    "inventory-turnover-calculator": "6ac7252ae188e18d1d906bba",
    "inventory-carrying-cost-calculator": "6ac7866e071fb41c4807eab0",
    "warehouse-space-calculator": "6ac735232408756f9071e095",
    "warehouse-size-calculator": "6ac72b9663b2850d53a5f878",
    "delivery-cost-calculator": "6ac7652b0d7b366d7fd65177",
    "accounts-receivable-turnover-calculator": "6ac72b932e36cb4efe865399",
}
SPEC = {
    "product-pricing-calculator": "product-pricing", "product-markup-calculator": "product-markup",
    "material-markup-calculator": "material-markup", "retail-margin-calculator": "retail-margin",
    "wholesale-markup-calculator": "wholesale-markup", "food-markup-calculator": "food-markup",
    "wholesale-to-retail-markup-calculator": "wholesale-retail", "price-change-calculator": "price-change",
    "landed-cost-calculator": "landed-cost", "unit-price-calculator": "unit-price",
    "purchase-price-variance-calculator": "price-variance",
    "early-payment-discount-calculator": "early-payment-discount",
    "procurement-savings-calculator": "procurement-savings", "reorder-point-calculator": "reorder-point",
    "safety-stock-calculator": "safety-stock", "par-level-calculator": "par-level",
    "inventory-turnover-calculator": "inventory-turnover",
    "inventory-carrying-cost-calculator": "carrying-cost", "warehouse-space-calculator": "warehouse-space",
    "warehouse-size-calculator": "warehouse-size", "delivery-cost-calculator": "delivery-cost",
    "accounts-receivable-turnover-calculator": "ar-turnover",
}
# Fragments whose file name differs from the page slug (retargeted keywords).
FRAG = {
    "landed-cost-calculator": "price-comparison-calculator.html",
    "purchase-price-variance-calculator": "price-variance-calculator.html",
    "early-payment-discount-calculator": "purchase-price-calculator.html",
    "wholesale-to-retail-markup-calculator": "wholesale-retail-markup-calculator.html",
}
RELATED = {
    "product-pricing-calculator": ["product-markup-calculator", "price-change-calculator", "marginal-cost-calculator"],
    "product-markup-calculator": ["product-pricing-calculator", "retail-margin-calculator", "wholesale-markup-calculator"],
    "material-markup-calculator": ["landed-cost-calculator", "wholesale-markup-calculator", "product-markup-calculator"],
    "retail-margin-calculator": ["product-markup-calculator", "wholesale-to-retail-markup-calculator", "product-pricing-calculator"],
    "wholesale-markup-calculator": ["material-markup-calculator", "wholesale-to-retail-markup-calculator", "price-change-calculator"],
    "food-markup-calculator": ["material-markup-calculator", "unit-price-calculator", "product-pricing-calculator"],
    "wholesale-to-retail-markup-calculator": ["retail-margin-calculator", "wholesale-markup-calculator", "product-markup-calculator"],
    "price-change-calculator": ["product-pricing-calculator", "marginal-cost-calculator", "wholesale-markup-calculator"],
    "landed-cost-calculator": ["unit-price-calculator", "procurement-savings-calculator", "material-markup-calculator"],
    "unit-price-calculator": ["landed-cost-calculator", "food-markup-calculator", "purchase-price-variance-calculator"],
    "purchase-price-variance-calculator": ["procurement-savings-calculator", "landed-cost-calculator", "early-payment-discount-calculator"],
    "early-payment-discount-calculator": ["accounts-receivable-turnover-calculator", "purchase-price-variance-calculator", "procurement-savings-calculator"],
    "procurement-savings-calculator": ["purchase-price-variance-calculator", "landed-cost-calculator", "early-payment-discount-calculator"],
    "marginal-cost-calculator": ["product-pricing-calculator", "price-change-calculator", "delivery-cost-calculator"],
    "reorder-point-calculator": ["safety-stock-calculator", "par-level-calculator", "inventory-turnover-calculator"],
    "safety-stock-calculator": ["reorder-point-calculator", "inventory-carrying-cost-calculator", "par-level-calculator"],
    "par-level-calculator": ["reorder-point-calculator", "safety-stock-calculator", "inventory-carrying-cost-calculator"],
    "inventory-turnover-calculator": ["inventory-carrying-cost-calculator", "accounts-receivable-turnover-calculator", "reorder-point-calculator"],
    "inventory-carrying-cost-calculator": ["inventory-turnover-calculator", "safety-stock-calculator", "warehouse-space-calculator"],
    "warehouse-space-calculator": ["warehouse-size-calculator", "inventory-carrying-cost-calculator", "inventory-turnover-calculator"],
    "warehouse-size-calculator": ["warehouse-space-calculator", "inventory-turnover-calculator", "delivery-cost-calculator"],
    "delivery-cost-calculator": ["marginal-cost-calculator", "warehouse-size-calculator", "landed-cost-calculator"],
    "accounts-receivable-turnover-calculator": ["early-payment-discount-calculator", "inventory-turnover-calculator", "price-change-calculator"],
}


def main():
    pages, missing = {}, []
    for slug, pid in IDS.items():
        spec = (os.path.join(REF, "copy-spec-%s.md" % SPEC[slug]) if slug in SPEC
                else os.path.join(REF, "example-copy-spec-marginal-cost.md"))
        frag = os.path.join(LM, "webflow", FRAG.get(slug, slug + ".html"))
        for r in RELATED[slug]:
            assert r != slug and r in IDS, (slug, r)
        pages[slug] = {"pageId": pid, "copySpec": spec, "fragment": frag,
                       "related": [{"slug": r, "pageId": IDS[r]} for r in RELATED[slug]]}
        missing += [p for p in (spec, frag) if not os.path.exists(p)]
    with open(os.path.join(HERE, "pages.json"), "w", encoding="utf-8") as f:
        json.dump(pages, f, indent=1)
    print("%d pages, missing files: %s" % (len(pages), missing))


if __name__ == "__main__":
    main()
