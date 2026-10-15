"""serp_full.json -> serp_readable.txt + urls.tsv (every organic top-10 URL, deduped).

    python -I read_serp.py <data_dir>
"""
import json, os, re, sys
from collections import Counter


def walk_aio(item):
    """AI Overview text, flattened to lines; sub-headings marked with ##."""
    out = []
    md = item.get("markdown")
    if md:
        return [l for l in md.splitlines() if l.strip()]
    for el in item.get("items") or []:
        if el.get("title"):
            out.append("## " + el["title"])
        if el.get("text"):
            out.append(el["text"])
        for sub in el.get("items") or []:
            if sub.get("title"):
                out.append("## " + sub["title"])
            if sub.get("text"):
                out.append(sub["text"])
    return out


def main():
    data = sys.argv[1]
    d = json.load(open(os.path.join(data, "serp_full.json"), encoding="utf-8"))
    order = [l.split("\t") for l in open(os.path.join(data, "keywords.tsv"), encoding="utf-8") if l.strip()]
    lines, urls, paa_all = [], {}, Counter()
    for slug, kw, *_ in order:
        r = d[kw]["result"]
        items = r.get("items") or []
        lines.append("=" * 100)
        lines.append("%s   (/%s)   features: %s" % (kw.upper(), slug, ", ".join(r.get("item_types") or [])))
        for it in items:
            t = it.get("type")
            if t == "organic":
                lines.append("  #%-2s %-28s %s" % (it.get("rank_group"), (it.get("domain") or "")[:28], (it.get("title") or "")[:90]))
                lines.append("      %s" % it.get("url"))
                desc = (it.get("description") or "").replace("\n", " ")
                if desc:
                    lines.append("      > %s" % desc[:220])
                urls.setdefault(it["url"], []).append("%s#%s" % (kw, it.get("rank_group")))
            elif t == "people_also_ask":
                for q in it.get("items") or []:
                    lines.append("  PAA: %s" % q.get("title"))
                    paa_all[q.get("title")] += 1
            elif t == "related_searches":
                lines.append("  RELATED: %s" % " | ".join(it.get("items") or []))
            elif t == "people_also_search":
                lines.append("  ALSO SEARCH: %s" % " | ".join(it.get("items") or []))
            elif t == "discussions_and_forums":
                for x in it.get("items") or []:
                    lines.append("  FORUM: %s %s" % (x.get("domain"), x.get("title")))
            elif t == "video":
                for x in it.get("items") or []:
                    lines.append("  VIDEO: %s" % x.get("title"))
        aio = next((i for i in items if i.get("type") == "ai_overview"), None)
        if aio:
            body = walk_aio(aio)
            heads = [l for l in body if l.startswith("#") or re.match(r"^\*\*[^*]{3,60}\*\*:?$", l.strip())]
            lines.append("  AIO sub-headings: %s" % " | ".join(h.strip("#* :") for h in heads[:25]))
            refs = aio.get("references") or []
            lines.append("  AIO cites: %s" % ", ".join(sorted({x.get("domain") or "" for x in refs})))
        lines.append("")
    with open(os.path.join(data, "serp_readable.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    with open(os.path.join(data, "urls.tsv"), "w", encoding="utf-8", newline="\n") as f:
        for u, where in urls.items():
            f.write("%s\t%s\n" % (u, "; ".join(where)))
    print("organic urls (unique): %d" % len(urls))


if __name__ == "__main__":
    main()
