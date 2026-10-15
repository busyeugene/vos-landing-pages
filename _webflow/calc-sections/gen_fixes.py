"""Build the live-fix batches for the existing sections of the 23 calculator pages.

    python -I gen_fixes.py

Reads scratch/live-data.json (collected from the live pages), fixes.json and pages.json. Refuses any
text, alt or prop fix whose 'before' does not equal the collected live value. Writes, per page,
fixes-apply/<slug>.json:
    el     data_element_tool actions: set_text for copy fixes, set_link pointing the 4 feature-row
           buttons at the page's own calculator anchor
    alt    data_element_settings_tool actions (set_settings)
    props  data_component_props_tool actions (set_component_instance_prop_values)
    schema the corrected JSON-LD: page URLs under /free-tools/, FAQ entries matching the accordion
    expect what the read-back must show
"""
import copy, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
HERO = "989faf8b-cac3-f127-6306-f797ae33f470"
CTA = "f9bd322f-b390-c3a2-de4c-530ccaac0ed2"
BASE = "https://www.voiceordersolutions.com/"


def resolve(page, path):
    """'tools_cards[1].body' -> (text, uuid)."""
    m = re.match(r"(\w+)(?:\[(\d+)\])?\.(\w+)$", path)
    sec, idx, field = m.group(1), m.group(2), m.group(3)
    node = page[sec][int(idx)] if idx is not None else page[sec]
    return node[field], node[field + "_uuid"]


def main():
    live = json.load(open(os.path.join(HERE, "scratch", "live-data.json"), encoding="utf-8"))
    fixes = json.load(open(os.path.join(HERE, "fixes.json"), encoding="utf-8"))
    pages = json.load(open(os.path.join(HERE, "pages.json"), encoding="utf-8"))
    out = {slug: {"el": [], "alt": [], "props": [], "expect": {"text": {}, "alt": {}, "links": {}, "props": {}}}
           for slug in pages}
    faq = {slug: [dict(f) for f in live[slug]["faq"]] for slug in pages}
    bad = 0
    for f in fixes["text"]:
        page, pid = live[f["slug"]], pages[f["slug"]]["pageId"]
        text, uuid = resolve(page, f["path"])
        if f["before"] is not None and text != f["before"]:
            print("BEFORE MISMATCH %s %s\n  live: %r" % (f["slug"], f["path"], text)); bad += 1; continue
        out[f["slug"]]["el"].append({"label": f["path"], "set_text": {"id": {"component": pid, "element": uuid}, "text": f["after"]}})
        out[f["slug"]]["expect"]["text"][uuid] = f["after"]
        m = re.match(r"faq\[(\d+)\]\.(q|a)$", f["path"])
        if m:
            faq[f["slug"]][int(m.group(1))][m.group(2)] = f["after"]
    for f in fixes["alt"]:
        page, pid = live[f["slug"]], pages[f["slug"]]["pageId"]
        m = re.match(r"icons\.(\w+)\[(\d+)\]$", f["path"])
        icon = page["icons"][m.group(1)][int(m.group(2))]
        if icon["altText"] != f["before"]:
            print("ALT MISMATCH %s %s" % (f["slug"], f["path"])); bad += 1; continue
        out[f["slug"]]["alt"].append({"label": f["path"], "element_id": {"component": pid, "element": icon["uuid"]},
                                      "settings": [{"key": "altText", "static_text": {"value": f["after"]}}]})
        out[f["slug"]]["expect"]["alt"][icon["uuid"]] = f["after"]
    for f in fixes["props"]:
        page = live[f["slug"]]
        prop = next(p for p in page["props"][f["which"]] if p["name"] == f["name"])
        if prop["value"] != f["before"]:
            print("PROP MISMATCH %s %s %s\n  live: %r" % (f["slug"], f["which"], f["name"], prop["value"])); bad += 1; continue
        el = HERO if f["which"] == "hero" else CTA
        acts = out[f["slug"]]["props"]
        act = next((a for a in acts if a["set_component_instance_prop_values"]["element_id"]["element"] == el), None)
        if act is None:
            act = {"label": f["which"], "set_component_instance_prop_values": {
                "element_id": {"component": pages[f["slug"]]["pageId"], "element": el}, "values": []}}
            acts.append(act)
        act["set_component_instance_prop_values"]["values"].append(
            {"prop_id": prop["propId"], "type": "string", "string_value": f["after"]})
        out[f["slug"]]["expect"]["props"]["%s/%s" % (f["which"], prop["propId"])] = f["after"]
    for slug, meta in pages.items():
        frag = open(meta["fragment"], encoding="utf-8").read()
        anchor = re.search(r'id="(vos-[a-z0-9-]+)"', frag).group(1)
        for i, rl in enumerate(live[slug]["rowlinks"]):
            out[slug]["el"].append({"label": "rowlink%d" % (i + 1), "set_link": {
                "id": {"component": meta["pageId"], "element": rl["uuid"]}, "linkType": "url", "link": "#" + anchor}})
            out[slug]["expect"]["links"][rl["uuid"]] = "#" + anchor
        # schema: fix page URLs, mirror the (possibly edited) accordion
        sch = copy.deepcopy(live[slug]["schema"])
        path = live[slug]["schema_meta"]["publishedPath"].lstrip("/")
        short = path.split("/")[-1]
        sch = json.loads(json.dumps(sch).replace(BASE + short + "#", BASE + path + "#")
                         .replace('"' + BASE + short + '"', '"' + BASE + path + '"'))
        faqnode = next(n for n in sch["@graph"] if n["@type"] == "FAQPage")
        assert len(faqnode["mainEntity"]) == len(faq[slug]) == 7, slug
        for q, f in zip(faqnode["mainEntity"], faq[slug]):
            q["name"], q["acceptedAnswer"]["text"] = f["q"], f["a"]
        assert BASE + short + "#" not in json.dumps(sch) and '"' + BASE + short + '"' not in json.dumps(sch), slug
        out[slug]["schema"] = sch
    os.makedirs(os.path.join(HERE, "fixes-apply"), exist_ok=True)
    for slug, o in out.items():
        with open(os.path.join(HERE, "fixes-apply", slug + ".json"), "w", encoding="utf-8") as fh:
            json.dump(o, fh, indent=1, ensure_ascii=False)
    n = sum(len(o["el"]) for o in out.values())
    print("%d pages, %d element actions, %d alt ops, %d prop groups, %d mismatches"
          % (len(out), n, sum(len(o["alt"]) for o in out.values()), sum(len(o["props"]) for o in out.values()), bad))
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
