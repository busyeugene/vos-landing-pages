"""Count how many ranking PAGES carry each section theme in an H2/H3, by page type.

    python -I themes.py <data_dir>    -> themes_report.txt (+ examples per theme)

A page counts once per theme however many headings match. Headings that are just a product name
(listicle entries) mostly match nothing, which is the intent: we want the framework sections.
"""
import json, os, re, sys
from collections import defaultdict

THEMES = [
    ("definition",      r"^(what (is|are)|what's)\b|\bdefinition\b|\bexplained\b|^understanding\b|\bmeaning\b"),
    ("benefits",        r"\bbenefit|\badvantage|why (use|you need|do i need|businesses need|your .* needs)|why .* matters|\bvalue of\b"),
    ("features_to_look_for", r"(features|what) to look for|must[- ]have|essential features|key features|core features|key capabilities|features to consider"),
    ("how_to_choose",   r"how to (choose|pick|select|find|evaluate)|choosing|selecting|select the right|buyer'?s guide|considerations|things to consider|\bfactors\b|questions to ask|right for (you|your)|which .* (is right|should you|best for)"),
    ("pricing",         r"\bpric|\bcost\b|\bcosts\b|\bplans?\b|free vs|how much|\bbudget"),
    ("how_it_works",    r"how (it|does .*|.* software|.* system|.* works?) works?|^how .* works|\bstep \d|\bsteps\b|\bprocess\b"),
    ("implementation",  r"implement|onboard|getting started|get started|set ?up|go[- ]live|migrat|training|\bsupport\b|rollout|roll out"),
    ("who_for_use_cases", r"who (is it|it'?s|needs|should|uses|benefits)|\bfor (small|mid|enterprise|growing)|industr|use cases?|\broles?\b|built for|\bteams\b|by business"),
    ("integrations",    r"integrat|connects? (to|with)|works with|\bapi\b|\berp\b|ecosystem"),
    ("results_proof",   r"case stud|results|customer (stories|results|success)|success stor|testimonial|reviews|customers (say|love|swear)|trusted by|hear from"),
    ("comparison",      r"\bvs\.?\b|versus|compare|comparison|alternative|difference|not a\b|instead of"),
    ("types",           r"types of|kinds of|\btypes\b"),
    ("challenges",      r"challenge|problem|pain|mistake|pitfall|hidden cost|why .* fail|risks? of|signs (you|your)"),
    ("kpis_roi",        r"\bkpis?\b|metric|\bmeasur|\broi\b|return on"),
    ("trends_ai",       r"\btrends?\b|future|\bai\b|artificial intelligence|machine learning|agentic"),
    ("tips_best_practices", r"\btips\b|best practices|strateg|how to (improve|reduce|automate|manage|track|get|create|set)"),
    ("templates_tools", r"template|checklist|calculator|download|free tool|spreadsheet|excel"),
    ("security",        r"secur|complian|privacy|data protection"),
    ("mobile",          r"\bmobile\b|\bapp\b|on the go|anywhere"),
    ("see_it_in_action", r"in action|\bdemo\b|watch|tour|inside look|\bvideo\b|see how"),
    ("resources",       r"^resources|related (posts|resources|articles|content)|from (our|the) blog|further reading|learn more|insights|featured .* content"),
    ("faq",             r"\bfaqs?\b|frequently asked|common questions"),
]
COMPILED = [(n, re.compile(p, re.I)) for n, p in THEMES]


def main():
    data = sys.argv[1]
    pages = json.load(open(os.path.join(data, "pages.json"), encoding="utf-8"))
    types = {}
    for l in open(os.path.join(data, "page_types.tsv"), encoding="utf-8"):
        t, u, title, kws = l.rstrip("\n").split("\t")
        types[u] = (t, title, kws)
    hits = defaultdict(lambda: defaultdict(set))
    examples = defaultdict(list)
    counted = defaultdict(int)
    for u, p in pages.items():
        if u not in types:
            continue
        t = types[u][0]
        if t == "forum":
            continue
        heads = [(lvl, h) for lvl, h, *_ in (p.get("outline") or []) if h and (lvl or 9) <= 3]
        for k in ("h2", "h3"):
            heads += [(2, h) for h in (p.get("htags") or {}).get(k) or []]
        if not heads:
            continue
        counted[t] += 1
        for lvl, h in heads:
            for n, rx in COMPILED:
                if rx.search(h):
                    if u not in hits[n][t]:
                        examples[n].append("%-9s %s  [%s]" % (t, h[:90], types[u][2].split(" #")[0]))
                    hits[n][t].add(u)
    order = ["vendor", "listicle", "guide", "directory"]
    out = ["Pages with at least one H2/H3 per theme (forums excluded). Parsed pages: " +
           ", ".join("%s %d" % (t, counted[t]) for t in order), ""]
    out.append("%-22s %6s %8s %6s %9s %6s" % ("theme", *order, "ALL"))
    rows = []
    for n, _ in THEMES:
        c = [len(hits[n][t]) for t in order]
        rows.append((sum(c), n, c))
    for tot, n, c in sorted(rows, reverse=True):
        out.append("%-22s %6d %8d %6d %9d %6d" % (n, *c, tot))
    out.append("")
    for tot, n, c in sorted(rows, reverse=True):
        out.append("=== %s (%d pages) ===" % (n, tot))
        out += ["   " + e for e in examples[n][:40]]
        out.append("")
    with open(os.path.join(data, "themes_report.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(out))
    print("\n".join(out[:len(THEMES) + 4]))


if __name__ == "__main__":
    main()
