"""pages.json + serp_full.json -> page_types.tsv and outlines_<type>.txt for reading by hand.

    python -I outlines.py <data_dir>

Page type, by title/URL (checked by eye afterwards, see the report):
    forum      reddit, quora, youtube
    directory  capterra, g2, getapp, sourceforge, trustradius, gartner, f6s, softwareadvice
    listicle   "best", "top N", "N best", "vs", "alternatives" in the title
    guide      "what is", "guide", "how to", blog/resources/articles paths
    vendor     everything else: a product or solution page
"""
import json, os, re, sys
from urllib.parse import urlparse

FORUM = re.compile(r"reddit\.com|quora\.com|youtube\.com")
DIRECTORY = re.compile(r"capterra|g2\.com|getapp|sourceforge|trustradius|gartner|f6s\.com|softwareadvice|"
                       r"marketplace\.microsoft|vendorpick|ieeexplore")
LISTICLE = re.compile(r"\b(best|top)\b|\b\d+\s+(best|top)\b|\bvs\.?\b|alternatives|ranked|i found", re.I)
GUIDE = re.compile(r"what is|what are|guide|how to|explained|definition|benefits|everything you need|\?|"
                   r"complete|ultimate|all you need", re.I)
GUIDE_PATH = re.compile(r"/(blog|resources?|articles?|insights?|learn|glossary|library|academy|knowledge|"
                        r"guides?|news|post)s?/", re.I)


def ptype(url, title):
    if FORUM.search(url):
        return "forum"
    if DIRECTORY.search(url):
        return "directory"
    if LISTICLE.search(title or ""):
        return "listicle"
    if GUIDE.search(title or "") or GUIDE_PATH.search(url):
        return "guide"
    return "vendor"


def main():
    data = sys.argv[1]
    serp = json.load(open(os.path.join(data, "serp_full.json"), encoding="utf-8"))
    pages = json.load(open(os.path.join(data, "pages.json"), encoding="utf-8"))
    meta = {}
    for kw, v in serp.items():
        for it in v["result"].get("items") or []:
            if it.get("type") == "organic":
                m = meta.setdefault(it["url"], {"title": it.get("title"), "kws": []})
                m["kws"].append("%s #%s" % (kw, it.get("rank_group")))
    by = {}
    rows = []
    for u, m in meta.items():
        t = ptype(u, m["title"])
        rows.append((t, u, m["title"], "; ".join(m["kws"])))
        by.setdefault(t, []).append(u)
    with open(os.path.join(data, "page_types.tsv"), "w", encoding="utf-8", newline="\n") as f:
        for r in sorted(rows):
            f.write("\t".join(r) + "\n")
    for t, us in by.items():
        out = []
        for u in us:
            p = pages.get(u) or {}
            out.append("#" * 90)
            out.append("[%s] %s" % (t, meta[u]["title"]))
            out.append("%s   | ranks: %s | %s words" % (u, "; ".join(meta[u]["kws"]), p.get("words")))
            for lvl, h, w, txt, sec in p.get("outline") or []:
                if not h or (lvl or 9) > 3:
                    continue
                out.append("%s%s  (%dw)" % ("    " * ((lvl or 1) - 1), h[:110], w))
            if p.get("htags"):
                for k in ("h1", "h2", "h3"):
                    for h in p["htags"].get(k) or []:
                        out.append("  %s %s" % (k, h[:110]))
        with open(os.path.join(data, "outlines_%s.txt" % t), "w", encoding="utf-8") as f:
            f.write("\n".join(out))
    for t, us in sorted(by.items()):
        print("%-10s %3d" % (t, len(us)))


if __name__ == "__main__":
    main()
