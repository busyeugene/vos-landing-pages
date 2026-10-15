"""Heading outline + section text for every ranking URL (DataForSEO On-Page content_parsing/live).

    python -I pull_pages.py <data_dir>        # reads urls.tsv, writes pages.json (cached per URL)

Per URL it keeps: the ordered outline [level, heading, words, text excerpt], plus the h2/h3 lists
from instant_pages when content parsing comes back empty (JS-rendered or blocked pages).
"""
import concurrent.futures as cf, json, os, sys, time, urllib.error, urllib.request

sys.path.insert(0, r"E:\Claude projects\Audit\_scripts")
from dataforseo_serp import auth, balance  # noqa: E402

BASE = "https://api.dataforseo.com/v3"


def post(hdr, path, body):
    req = urllib.request.Request(BASE + path, data=json.dumps(body).encode(), method="POST",
                                 headers={"Authorization": hdr, "Content-Type": "application/json"})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=240) as r:
                return json.loads(r.read().decode())
        except (urllib.error.HTTPError, urllib.error.URLError):
            if attempt == 3:
                return {"tasks": [{"status_message": "http failure"}]}
            time.sleep(5 * (attempt + 1))


def text_of(block):
    parts = []
    for key in ("primary_content", "secondary_content"):
        for p in block.get(key) or []:
            if p.get("text"):
                parts.append(p["text"])
    return " ".join(parts)


def parse(hdr, url, js=False):
    body = {"url": url}
    if js:
        body["enable_javascript"] = True
    d = post(hdr, "/on_page/content_parsing/live", [body])
    t = d["tasks"][0]
    res = (t.get("result") or [None])[0] or {}
    item = (res.get("items") or [None])[0] or {}
    pc = item.get("page_content") or {}
    outline = []
    for sec in ("main_topic", "secondary_topic"):
        for b in pc.get(sec) or []:
            txt = text_of(b)
            outline.append([b.get("level"), (b.get("h_title") or "").strip(), len(txt.split()), txt[:400], sec])
    return {"status": t.get("status_message"), "js": js, "outline": outline,
            "words": sum(o[2] for o in outline)}


def htags(hdr, url):
    d = post(hdr, "/on_page/instant_pages", [{"url": url, "enable_javascript": True}])
    t = d["tasks"][0]
    try:
        return t["result"][0]["items"][0]["meta"].get("htags") or {}
    except (KeyError, IndexError, TypeError):
        return {}


def main():
    data = sys.argv[1]
    urls = [l.split("\t")[0] for l in open(os.path.join(data, "urls.tsv"), encoding="utf-8") if l.strip()]
    path = os.path.join(data, "pages.json")
    cache = json.load(open(path, encoding="utf-8")) if os.path.exists(path) else {}
    todo = [u for u in urls if u not in cache]
    hdr = auth()
    before = balance(hdr)

    def one(u):
        v = parse(hdr, u)
        if v["words"] < 150:                       # empty or blocked: try with JS, then htags
            v2 = parse(hdr, u, js=True)
            if v2["words"] > v["words"]:
                v = v2
        if v["words"] < 150:
            v["htags"] = htags(hdr, u)
        return u, v

    with cf.ThreadPoolExecutor(max_workers=8) as ex:
        for i, (u, v) in enumerate(ex.map(one, todo), 1):
            cache[u] = v
            if i % 20 == 0 or i == len(todo):
                with open(path, "w", encoding="utf-8") as f:
                    json.dump(cache, f, indent=1)
            print("%3d/%d %5d words %-4s %s" % (i, len(todo), v["words"], "js" if v["js"] else "", u[:90]))
    with open(path, "w", encoding="utf-8") as f:
        json.dump(cache, f, indent=1)
    print("balance $%s -> $%s" % (before, balance(hdr)))


if __name__ == "__main__":
    main()
