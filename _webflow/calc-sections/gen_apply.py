"""Turn a page spec into ready-to-send Webflow action batches, by locating each slot in a fresh copy
of the five template sections through the REFERENCE text it still carries.

Why text and not position: a freshly unlinked template holds the marginal cost copy verbatim, so every
slot is findable by its exact reference string, and a mismatch fails loudly instead of writing into
the wrong element. No element id is ever typed by hand.

    python -I gen_apply.py <slug> <tree-file> [out-dir]

<tree-file> is the raw result of ONE data_element_tool query_elements call whose queries are labelled
whatis, who, look, vos, next (children_depth -1 on each new section root), saved by the harness
(pad the call with a large extra query so it spills to a file) or written verbatim.

Writes to out-dir (default apply/<slug>/):
    el-<n>.json    data_element_tool actions (set_text, set_link), 12 per batch
    alt-<n>.json   data_element_settings_tool actions (one set_settings each, 9 operations max)
    map.json       slot -> element id, kind and expected value, for verify_apply.py
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
SECTIONS = ("whatis", "who", "look", "vos", "next")


def load_tree(path):
    raw = open(path, encoding="utf-8").read().strip()
    d = json.loads(raw)
    if isinstance(d, list):                       # [{type, text}] tool-result wrapper
        d = json.loads("".join(x.get("text", "") for x in d))
    out = {}
    for q in d["result"][0]["data"]:
        if q["label"] in SECTIONS:
            assert q["total_matches"] == 1, q["label"]
            out[q["label"]] = q["matches"][0]
    missing = [s for s in SECTIONS if s not in out]
    if missing:
        sys.exit("tree is missing sections: %s" % missing)
    return out


def walk(node, parent=None, acc=None):
    acc = [] if acc is None else acc
    acc.append((node, parent))
    for c in node.get("children") or []:
        walk(c, node, acc)
    return acc


def slots(spec):
    """(section, key, kind, value) for every writable slot. kind: text | alt | link."""
    w, h, l, v, n = (spec[s] for s in SECTIONS)
    out = []
    for s, sec in (("whatis", w), ("who", h), ("look", l), ("next", n)):
        for k in ("eyebrow", "h2", "intro"):
            out.append((s, k, "text", sec[k]))
    for i, c in enumerate(w["cards"]):
        out += [("whatis", "cards[%d].title" % i, "text", c["title"]), ("whatis", "cards[%d].body" % i, "text", c["body"]),
                ("whatis", "cards[%d].alt" % i, "alt", c["alt"])]
    for i, c in enumerate(h["chips"]):
        out += [("who", "chips[%d].label" % i, "text", c["label"]), ("who", "chips[%d].alt" % i, "alt", c["alt"])]
    for i, c in enumerate(l["steps"]):
        out += [("look", "steps[%d].title" % i, "text", c["title"]), ("look", "steps[%d].body" % i, "text", c["body"])]
    for k in ("badge", "h2", "row_badge", "h3", "body", "link_label"):
        out.append(("vos", k, "text", v[k]))
    for i, b in enumerate(v["bullets"]):
        out.append(("vos", "bullets[%d]" % i, "text", b))
    out.append(("vos", "img_alt", "alt", v["img_alt"]))
    for i, c in enumerate(n["cards"]):
        out += [("next", "cards[%d].title" % i, "text", c["title"]), ("next", "cards[%d].body" % i, "text", c["body"]),
                ("next", "cards[%d].link_label" % i, "text", c["link_label"]), ("next", "cards[%d].alt" % i, "alt", c["alt"]),
                ("next", "cards[%d].link" % i, "link", c["link_slug"])]
    return out


def locate(tree, ref_slots, ref_spec):
    """slot key -> (element id dict, kind, target-type note), found via the reference values."""
    found = {}
    for sec in SECTIONS:
        nodes = walk(tree[sec])
        for s, key, kind, ref_val in ref_slots:
            if s != sec:
                continue
            if kind == "text":
                hits = [(nd, par) for nd, par in nodes if nd.get("type") == "String" and nd.get("textContent") == ref_val]
                if len(hits) != 1:
                    sys.exit("slot %s.%s: %d matches for reference text %r" % (sec, key, len(hits), ref_val))
                nd, par = hits[0]
                target = par if par and par.get("type") == "Heading" else nd
                found[(sec, key)] = (target["id"], "heading" if target is par else "string")
            elif kind == "alt":
                hits = [nd for nd, _ in nodes if nd.get("type") == "Image" and (nd.get("settings") or {}).get("altText") == ref_val]
                if len(hits) != 1:
                    sys.exit("slot %s.%s: %d images with reference alt %r" % (sec, key, len(hits), ref_val))
                found[(sec, key)] = (hits[0]["id"], "image")
            elif kind == "link":
                i = int(key.split("[")[1].split("]")[0])
                label = ref_spec["next"]["cards"][i]["link_label"]
                hits = [nd for nd, _ in nodes if nd.get("type") == "Link"
                        and any(x.get("type") == "String" and x.get("textContent") == label for x, _ in walk(nd))]
                if len(hits) != 1:
                    sys.exit("slot %s.%s: %d links labelled %r" % (sec, key, len(hits), label))
                found[(sec, key)] = (hits[0]["id"], "link")
    return found


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    any_page = "--any-page" in sys.argv               # test runs against the draft page only
    args = [a for a in sys.argv[1:] if a != "--any-page"]
    slug, tree_path = args[0], args[1]
    out = args[2] if len(args) > 2 else os.path.join(HERE, "apply", slug)
    os.makedirs(out, exist_ok=True)
    pages = json.load(open(os.path.join(HERE, "pages.json"), encoding="utf-8"))
    ref = json.load(open(os.path.join(HERE, "specs", "marginal-cost-calculator.json"), encoding="utf-8"))
    spec = json.load(open(os.path.join(HERE, "specs", slug + ".json"), encoding="utf-8"))
    tree = load_tree(tree_path)
    page = tree["whatis"]["id"]["component"] if any_page else pages[slug]["pageId"]
    for sec in SECTIONS:                           # the tree must belong to this page
        assert tree[sec]["id"]["component"] == page, (sec, tree[sec]["id"]["component"], page)
    ref_slots = slots(ref)
    where = locate(tree, ref_slots, ref)
    want = {(s, k): (kind, val) for s, k, kind, val in slots(spec)}
    page_of = {r["slug"]: r["pageId"] for r in pages[slug]["related"]}

    el, alts, mp, changed = [], [], [], 0
    for (sec, key), (eid, how) in where.items():
        kind, val = want[(sec, key)]
        ref_val = next(v for s, k, kd, v in ref_slots if (s, k) == (sec, key))
        entry = {"slot": "%s.%s" % (sec, key), "kind": kind, "element": eid["element"], "how": how}
        if kind == "text":
            entry["expected"] = val
            if val != ref_val:
                el.append({"label": "%s.%s" % (sec, key), "set_text": {"id": eid, "text": val}})
                changed += 1
        elif kind == "alt":
            entry["expected"] = val
            if val != ref_val:
                alts.append({"label": "%s.%s" % (sec, key), "element_id": eid,
                             "settings": [{"key": "altText", "static_text": {"value": val}}]})
                changed += 1
        elif kind == "link":
            entry["expected"] = page_of[val]
            el.append({"label": "%s.%s" % (sec, key), "set_link": {"id": eid, "linkType": "page", "link": page_of[val]}})
            changed += 1
        mp.append(entry)
    for f in os.listdir(out):
        if f.startswith(("el-", "alt-")):
            os.remove(os.path.join(out, f))
    for i in range(0, len(el), 12):
        with open(os.path.join(out, "el-%d.json" % (i // 12)), "w", encoding="utf-8") as f:
            json.dump(el[i:i + 12], f, ensure_ascii=False)
    for i in range(0, len(alts), 9):
        with open(os.path.join(out, "alt-%d.json" % (i // 9)), "w", encoding="utf-8") as f:
            json.dump([{"label": "alts-%d" % (i // 9), "set_settings": {"operations": alts[i:i + 9]}}], f, ensure_ascii=False)
    roots = {sec: tree[sec]["id"]["element"] for sec in SECTIONS}
    with open(os.path.join(out, "map.json"), "w", encoding="utf-8") as f:
        json.dump({"slug": slug, "pageId": page, "roots": roots, "slots": mp}, f, indent=1, ensure_ascii=False)
    print("%s: %d slots located, %d writes (%d element actions in %d batches, %d alt ops) -> %s"
          % (slug, len(where), changed, len(el), (len(el) + 11) // 12, len(alts), out))


if __name__ == "__main__":
    main()
