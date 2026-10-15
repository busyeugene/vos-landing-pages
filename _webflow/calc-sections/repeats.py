"""Cross-page repetition in the five new sections, across all specs.

    python -I repeats.py            # report
    python -I repeats.py --strict   # exit 1 if any check fails

Checks:
  1. any 5-word run on 4+ pages (outside eyebrows, alts and the allowed VOS fact phrases)
  2. card titles, step titles, h2s and intros that are word-for-word identical on 2+ pages
"""
import glob, json, os, re, sys
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
# Verified VOS facts may repeat: they are the same product described on every page.
ALLOW = ["by voice in the vos app", "most distributors are live in 24 to 48 hours",
         "in 24 to 48 hours", "are live in 24 to 48", "distributors are live in 24",
         "order history per account in one admin platform", "per account in one admin platform",
         "history per account in one admin", "order history per account in", "account in one admin platform",
         "with nothing to rip out", "erp, with nothing to rip", "your erp, with nothing to",
         "alongside your erp, with nothing", "works alongside your erp, with", "24 7, after hours included",
         "customers order by voice in", "order by voice in the", "voice in the vos app",
         "where vos fits in your", "where vos fits next to", "tied to your own skus"]
SKIP = ("figures", "status", "slug", "link_slug", "img_alt", "eyebrow", "link_label", "badge", "row_badge")
UNIQUE_SLOTS = re.compile(r"\.(h2|intro|h3|title)$")


def strings(spec):
    out = []
    def walk(x, p):
        if isinstance(x, dict):
            for k, v in x.items():
                if k in SKIP or k.endswith("alt"):
                    continue
                walk(v, p + "." + k)
        elif isinstance(x, list):
            for v in x:
                walk(v, p)
        elif isinstance(x, str):
            out.append((p, x))
    walk(spec, "")
    return out


def main():
    grams, exact = defaultdict(set), defaultdict(set)
    for f in sorted(glob.glob(os.path.join(HERE, "specs", "*.json"))):
        slug = os.path.basename(f)[:-5]
        for p, t in strings(json.load(open(f, encoding="utf-8"))):
            w = re.findall(r"[a-z0-9$%'.,-]+", t.lower())
            for i in range(len(w) - 4):
                grams[" ".join(w[i:i + 5])].add(slug)
            if UNIQUE_SLOTS.search(p):
                exact[t].add((slug, p))
    bad = 0
    print("5-word runs on 4+ pages (not allow-listed):")
    for g, pages in sorted(grams.items(), key=lambda x: -len(x[1])):
        if len(pages) >= 4 and not any(a in g or g in a for a in ALLOW):
            print("  %2d  %s" % (len(pages), g))
            bad += 1
    print("Identical headings, titles or intros on 2+ pages:")
    for t, where in sorted(exact.items(), key=lambda x: -len(x[1])):
        pages = {s for s, _ in where}
        if len(pages) >= 2:
            print("  %2d  %-50s %s" % (len(pages), t[:50], sorted({p for _, p in where})))
            bad += 1
    print("%d issues" % bad)
    if "--strict" in sys.argv:
        sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
