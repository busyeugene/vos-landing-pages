"""Lint a calculator-sections spec against BRIEF.md.

    python -I lint.py specs/<slug>.json [more.json ...]     # or: python -I lint.py all

Prints ERROR lines (must fix) and WARN lines (read and judge). Exit code 1 on any error.
"""
import glob, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
PAGES = json.load(open(os.path.join(HERE, "pages.json"), encoding="utf-8"))
ICONS = {
    "whatis": ["Floor plan grid", "Stacked cases", "Case box"],
    "who": ["Dollar sign", "Balance scale", "Rising chart", "Delivery truck", "Cash bills",
            "Cycling arrows", "Price tag", "Downward trend line", "Side by side bars"],
    "next": ["Percent sign", "Rising line", "Check mark"],
}
SLOP = ("delve crucial pivotal foster showcase underscore landscape tapestry seamless robust powerful "
        "game-changing skyrocket supercharge streamline leverage utilize enhance").split()
BANNED = ["hands-free", "nothing to mishear", "fewer stockouts", "about 20", "roughly 20"]
STARTERS = ("Additionally", "Furthermore", "Moreover", "However")
IMG_ALT = "Order review screen in the VOS app, listing each item and quantity before the order is placed"
VOS = re.compile(r"\bVOS\b|VoiceOrder")


def texts(spec):
    """(path, text, is_alt) for every visible string and alt."""
    out = []
    def walk(x, p):
        if isinstance(x, dict):
            for k, v in x.items():
                if k in ("figures", "status", "slug", "link_slug"):
                    continue
                walk(v, p + "." + k)
        elif isinstance(x, list):
            for i, v in enumerate(x):
                walk(v, "%s[%d]" % (p, i))
        elif isinstance(x, str):
            out.append((p, x, p.endswith("alt")))
    walk(spec, "")
    return out


def lint(path):
    errs, warns = [], []
    spec = json.load(open(path, encoding="utf-8"))
    slug = spec.get("slug") or os.path.basename(path)[:-5]
    if slug not in PAGES:
        return ["unknown slug %s" % slug], []
    # shape
    shape = {("whatis", "cards"): 3, ("who", "chips"): 9, ("look", "steps"): 3, ("vos", "bullets"): 4,
             ("next", "cards"): 3}
    for (sec, key), n in shape.items():
        got = len((spec.get(sec) or {}).get(key) or [])
        if got != n:
            errs.append("%s.%s has %d items, want %d" % (sec, key, got, n))
    for sec in ("whatis", "who", "look", "next"):
        for k in ("eyebrow", "h2", "intro"):
            if not (spec.get(sec) or {}).get(k):
                errs.append("missing %s.%s" % (sec, k))
    for k in ("badge", "h2", "row_badge", "h3", "body", "link_label", "img_alt"):
        if not (spec.get("vos") or {}).get(k):
            errs.append("missing vos.%s" % k)
    if not spec.get("figures"):
        warns.append("no figures list")
    # icons: the page's own assignment when there is one, else the template's fixed icons
    assign_path = os.path.join(HERE, "icons", "assign", slug + ".json")
    labels = None
    if os.path.exists(assign_path):
        sys.path.insert(0, HERE)
        from gen_update import LABEL
        assign = json.load(open(assign_path, encoding="utf-8"))
        labels = {sec: [LABEL[n] for n in assign[sec]] for sec in ("whatis", "who", "next")}
    for sec, key in (("whatis", "cards"), ("who", "chips"), ("next", "cards")):
        for i, item in enumerate((spec.get(sec) or {}).get(key) or []):
            src = labels[sec] if labels else ICONS[sec]
            want = src[i] if i < len(src) else "?"
            if not str(item.get("alt", "")).startswith(want + ","):
                errs.append("%s.%s[%d].alt must start with '%s,'" % (sec, key, i, want))
    if (spec.get("vos") or {}).get("img_alt") != IMG_ALT:
        errs.append("vos.img_alt must be the reference text")
    if (spec.get("vos") or {}).get("link_label") != "Book A Demo":
        errs.append("vos.link_label must be 'Book A Demo'")
    # related
    want_rel = [r["slug"] for r in PAGES[slug]["related"]]
    got_rel = [c.get("link_slug") for c in (spec.get("next") or {}).get("cards") or []]
    if got_rel != want_rel:
        errs.append("next.cards link_slug %s, want %s" % (got_rel, want_rel))
    # text rules
    vos_in, vos_out = 0, 0
    for p, t, is_alt in texts(spec):
        if "—" in t or "–" in t:
            errs.append("dash in %s: %s" % (p, t))
        if any(c in t for c in "‘’“”"):
            errs.append("curly quote in %s" % p)
        for w in SLOP:
            if re.search(r"\b" + re.escape(w), t, re.I):
                errs.append("banned word '%s' in %s" % (w, p))
        for b in BANNED:
            if b in t.lower():
                errs.append("banned phrase '%s' in %s" % (b, p))
        for s in re.split(r"(?<=[.?!])\s+", t):
            if s.startswith(STARTERS):
                errs.append("banned starter in %s: %s" % (p, s[:40]))
            if len(s.split()) > 24:
                errs.append("sentence over 24 words in %s (%d)" % (p, len(s.split())))
        if not is_alt:
            n = len(VOS.findall(t))
            if p.startswith(".vos"):
                vos_in += n
            else:
                vos_out += n
        if "chips" in p and p.endswith("label") and len(t.split()) > 5:
            errs.append("chip over 5 words: %s" % t)
        if p.endswith(".h2") and len(t.split()) > 9:
            warns.append("long h2 (%d words): %s" % (len(t.split()), t))
        if p.endswith("intro") and len(t.split()) > 55:
            warns.append("long intro (%d words) in %s" % (len(t.split()), p))
        if re.search(r"\b\d", t) and not p.endswith("alt"):
            pass
    if vos_in != 3:
        errs.append("VOS/VoiceOrder appears %d times in the vos section, want 3" % vos_in)
    if vos_out:
        errs.append("VOS/VoiceOrder appears %d times outside the vos section, want 0" % vos_out)
    if "most" not in json.dumps(spec.get("vos", {})).lower() and "24 to 48" in json.dumps(spec.get("vos", {})):
        errs.append("setup claim without 'most'")
    return errs, warns


def main():
    args = sys.argv[1:]
    files = sorted(glob.glob(os.path.join(HERE, "specs", "*.json"))) if args == ["all"] else args
    bad = 0
    for f in files:
        errs, warns = lint(f)
        name = os.path.basename(f)
        print("%-45s %s" % (name, "OK" if not errs else "%d error(s)" % len(errs)))
        for e in errs:
            print("   ERROR " + e)
        for w in warns:
            print("   WARN  " + w)
        bad += bool(errs)
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
