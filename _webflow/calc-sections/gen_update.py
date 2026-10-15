"""Bring a page's five new sections up to date with its revised spec and icon assignment.

    python -I gen_update.py <slug>      (or: all)

Uses apply/<slug>/map.json (slot -> element id, verified live) as the source of what is on the page
now. Emits only the writes that differ:
    set_text          for changed text slots
    set_image_asset   for every icon slot whose assigned icon differs from the template's
    altText           rebuilt as "<icon label>, for <topic>", topic kept from the spec alt
Writes apply/<slug>/upd-el-*.json, upd-alt-*.json and map-v2.json (map.json with the new expected
values and the expected asset id per icon slot), then also writes the new alts back into the spec so
the spec stays the source of truth.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
LABEL = {
    "balance-scale": "Balance scale", "buffer": "Stock level gauge", "calendar": "Calendar", "case": "Case box",
    "cash": "Cash bills", "chart-up": "Rising chart", "clock": "Clock face", "compare-bars": "Side by side bars",
    "dollar": "Dollar sign", "floorplan": "Floor plan grid", "invoice": "Invoice sheet", "order-guide": "Bulleted list",
    "percent": "Percent sign", "price-tag": "Price tag", "racking": "Warehouse racking", "shrink": "Shrinking box",
    "stack": "Stacked cases", "target": "Target", "trend-down": "Downward trend line", "trend-up": "Rising line",
    "truck": "Delivery truck", "turnover": "Cycling arrows", "verified": "Check mark", "warehouse": "Warehouse",
    "person": "Person", "team": "Two people", "chat": "Speech bubble", "headset": "Headset", "store": "Storefront",
    "office": "Office building", "phone": "Mobile phone", "pin": "Map pin", "clipboard": "Clipboard",
    "calculator": "Calculator", "search": "Magnifying glass", "lightbulb": "Light bulb", "book": "Open book",
    "alert": "Warning sign", "plus": "Plus sign", "minus": "Minus sign", "sliders": "Slider controls",
    "arrow-right": "Right arrow",
}
# Icon slots in the template, in order, and the template icon each one carries now.
TEMPLATE = {"whatis": ["floorplan", "stack", "case"],
            "who": ["dollar", "balance-scale", "chart-up", "truck", "cash", "turnover", "price-tag", "trend-down", "compare-bars"],
            "next": ["percent", "trend-up", "verified"]}
LISTKEY = {"whatis": "cards", "who": "chips", "next": "cards"}


def get(spec, slot):
    x = spec
    for part in re.findall(r"[a-z0-9_]+|\[\d+\]", slot):
        x = x[int(part[1:-1])] if part.startswith("[") else x[part]
    return x


def one(slug):
    d = os.path.join(HERE, "apply", slug)
    mp = json.load(open(os.path.join(d, "map.json"), encoding="utf-8"))
    spec_path = os.path.join(HERE, "specs", slug + ".json")
    spec = json.load(open(spec_path, encoding="utf-8"))
    cat = json.load(open(os.path.join(HERE, "icons", "catalog.json"), encoding="utf-8"))
    assign = json.load(open(os.path.join(HERE, "icons", "assign", slug + ".json"), encoding="utf-8"))
    page = mp["pageId"]
    el, alts = [], []
    # new alts into the spec first
    for sec, key in LISTKEY.items():
        for i, item in enumerate(spec[sec][key]):
            topic = item["alt"].split(", for ", 1)[1] if ", for " in item["alt"] else item["alt"]
            item["alt"] = "%s, for %s" % (LABEL[assign[sec][i]], topic)
    for s in mp["slots"]:
        eid = {"component": page, "element": s["element"]}
        if s["kind"] == "link":
            continue
        want = get(spec, s["slot"]) if s["kind"] in ("text", "alt") else None
        if s["kind"] == "text" and want != s["expected"]:
            el.append({"label": s["slot"], "set_text": {"id": eid, "text": want}})
            s["expected"] = want
        elif s["kind"] == "alt":
            m = re.match(r"(whatis|who|next)\.(cards|chips)\[(\d+)\]\.alt$", s["slot"])
            if m:
                sec, i = m.group(1), int(m.group(3))
                icon = assign[sec][i]
                s["asset"] = cat[icon]["id"]
                if icon != TEMPLATE[sec][i]:
                    el.append({"label": s["slot"] + ".image", "set_image_asset": {"id": eid, "image_asset_id": cat[icon]["id"]}})
            if want != s["expected"]:
                alts.append({"label": s["slot"], "element_id": eid,
                             "settings": [{"key": "altText", "static_text": {"value": want}}]})
                s["expected"] = want
    for f in os.listdir(d):
        if f.startswith(("upd-el-", "upd-alt-")):
            os.remove(os.path.join(d, f))
    for i in range(0, len(el), 12):
        json.dump(el[i:i + 12], open(os.path.join(d, "upd-el-%d.json" % (i // 12)), "w", encoding="utf-8"), ensure_ascii=False)
    for i in range(0, len(alts), 9):
        json.dump([{"label": "alts-%d" % (i // 9), "set_settings": {"operations": alts[i:i + 9]}}],
                  open(os.path.join(d, "upd-alt-%d.json" % (i // 9)), "w", encoding="utf-8"), ensure_ascii=False)
    json.dump(mp, open(os.path.join(d, "map-v2.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    with open(spec_path, "w", encoding="utf-8") as f:
        json.dump(spec, f, indent=1, ensure_ascii=False)
    print("%-42s %2d text/image actions in %d batches, %2d alt ops" % (slug, len(el), (len(el) + 11) // 12, len(alts)))


def main():
    pages = json.load(open(os.path.join(HERE, "pages.json"), encoding="utf-8"))
    for slug in (pages if sys.argv[1:] == ["all"] else sys.argv[1:]):
        one(slug)


if __name__ == "__main__":
    main()
