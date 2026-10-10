# -*- coding: utf-8 -*-
"""Check that every comparison-table cell's STYLE matches what the cell HOLDS.

Why this exists: on 2026-10-09 the port verified 1004/1004 strings and reported clean,
while 89 cells rendered broken. The text was correct; the element around it was still
the donor's 24px icon box, so the text wrapped one word per line and spilled into the
row below. A string-level diff cannot see that. This can.

A cell child is one of two kinds:
  icon  -> HtmlEmbed holding an <svg>, styled map.icons.icon_style
  text  -> HtmlEmbed holding a text div, or a Block > String, styled map.icons.text_style
Converting between the kinds means changing the content AND the style.

Usage: python cellcheck.py <tree-dir> [slug ...]
  <tree-dir> holds get_all_elements captures (the persisted tool-result files).
  Exit code 1 if any cell is misstyled.
"""
import json, io, os, sys, glob

HERE = os.path.dirname(os.path.abspath(__file__))
MAP = json.load(io.open(os.path.join(HERE, "map.json"), encoding="utf-8"))
PAGES = json.load(io.open(os.path.join(HERE, "pages.json"), encoding="utf-8"))["pages"]
ICON = MAP["icons"]["icon_style"]
TEXT = MAP["icons"]["text_style"]


def load_tree(path):
    """Accept either the raw result JSON or the {type,text} block wrapper."""
    raw = io.open(path, encoding="utf-8", errors="replace").read().strip()
    try:
        b = json.loads(raw)
    except ValueError:
        return None
    if isinstance(b, list) and b and isinstance(b[0], dict) and "text" in b[0]:
        c = [x["text"] for x in b if '"get_all_elements"' in x.get("text", "")]
        if not c:
            return None
        b = json.loads(c[0])
    if not isinstance(b, dict) or "result" not in b:
        return None
    return b["result"][0]["data"]


def find(tree, eid):
    got = []

    def walk(n):
        if n["id"]["element"] == eid:
            got.append(n)
            return True
        for c in n.get("children") or []:
            if walk(c):
                return True
        return False

    walk(tree)
    return got[0] if got else None


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    tdir = sys.argv[1]
    only = set(sys.argv[2:])

    # Oldest first, so the newest capture of each page wins. Without this the check
    # silently grades a stale capture and reports defects that were already fixed,
    # or worse, misses live ones.
    trees, stamp = {}, {}
    files = [f for f in glob.glob(os.path.join(tdir, "*")) if os.path.isfile(f)]
    for f in sorted(files, key=os.path.getmtime):
        t = load_tree(f)
        if t:
            trees[t["id"]["component"]] = t
            stamp[t["id"]["component"]] = os.path.getmtime(f)

    bad, checked, seen, ages = [], 0, 0, []
    for slug, pid in PAGES.items():
        if only and slug not in only:
            continue
        tree = trees.get(pid)
        if not tree:
            print("%-34s no capture found, skipped" % slug)
            continue
        seen += 1
        ages.append((slug, stamp.get(pid, 0)))
        ops = json.load(io.open(os.path.join(HERE, "ops", slug + ".json"), encoding="utf-8"))
        code = {e: c for e, c in ops["embed"]}
        for r in range(1, 10):
            for c in range(1, 4):
                cid = MAP["comparison"]["cell_children"].get("%d,%d" % (r, c))
                if not cid:
                    continue
                node = find(tree, cid)
                if not node:
                    continue
                checked += 1
                # A Block cell is the donor's own text cell and is styled correctly.
                if node.get("type") != "HtmlEmbed":
                    continue
                holds_text = "uui-text-size" in code.get(cid, "")
                want = TEXT if holds_text else ICON
                have = (node.get("styleNames") or [None])[0]
                if have != want:
                    bad.append((slug, r, c, have, want))

    import datetime
    print("pages %d | cells checked %d | misstyled %d" % (seen, checked, len(bad)))
    if ages:
        newest = max(a for _, a in ages)
        stale = [(s_, a) for s_, a in ages if newest - a > 600]
        print("captures read: %s" % datetime.datetime.fromtimestamp(newest).strftime("%Y-%m-%d %H:%M"))
        if stale:
            print("WARNING: %d capture(s) are more than 10 minutes older than the newest."
                  % len(stale))
            print("         Re-read those pages before trusting this result:")
            for s_, a in stale:
                print("           %-34s %s" % (s_, datetime.datetime.fromtimestamp(a).strftime("%Y-%m-%d %H:%M")))
    for slug, r, c, have, want in bad:
        print("  %-34s row %d col %d  is %-26s should be %s" % (slug, r, c, have, want))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
