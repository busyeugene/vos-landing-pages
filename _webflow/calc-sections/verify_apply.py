"""Check a page's five new sections, as STORED in Webflow, against the map gen_apply.py wrote.

    python -I verify_apply.py <slug> <tree-file> [map.json]

<tree-file>: a fresh query_elements result (labels whatis, who, look, vos, next, children_depth -1)
taken AFTER the writes. Compares every slot's text, alt and link target; reports root visibility.
Exit code 1 on any mismatch.
"""
import json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))   # python -I drops the script dir
from gen_apply import HERE, SECTIONS, load_tree, walk  # noqa: E402


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    slug, tree_path = sys.argv[1], sys.argv[2]
    mp_path = sys.argv[3] if len(sys.argv) > 3 else os.path.join(HERE, "apply", slug, "map.json")
    mp = json.load(open(mp_path, encoding="utf-8"))
    tree = load_tree(tree_path)
    for sec in SECTIONS:
        assert tree[sec]["id"]["element"] == mp["roots"][sec], ("root changed", sec)
    nodes = {}
    for sec in SECTIONS:
        for nd, _ in walk(tree[sec]):
            nodes[nd["id"]["element"]] = nd
    bad = 0
    for s in mp["slots"]:
        nd = nodes.get(s["element"])
        if nd is None:
            print("MISSING  %-28s %s" % (s["slot"], s["element"]))
            bad += 1
            continue
        if s["kind"] == "text":
            if s["how"] == "heading":
                got = "".join(c.get("textContent", "") for c in nd.get("children") or [] if c.get("type") == "String")
            else:
                got = nd.get("textContent")
        elif s["kind"] == "alt":
            got = (nd.get("settings") or {}).get("altText")
        else:
            got = ((nd.get("settings") or {}).get("link") or {}).get("pageId")
        if s.get("asset") and (nd.get("settings") or {}).get("assetId") != s["asset"]:
            print("ASSET    %-28s want %s got %s" % (s["slot"], s["asset"], (nd.get("settings") or {}).get("assetId")))
            bad += 1
        if got != s["expected"]:
            print("DIFF     %-28s\n   want %r\n   got  %r" % (s["slot"], s["expected"], got))
            bad += 1
    vis = {sec: (tree[sec].get("settings") or {}).get("visibility") for sec in SECTIONS}
    print("%s: %d slots checked, %d mismatches; root visibility %s" % (slug, len(mp["slots"]), bad, vis))
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
