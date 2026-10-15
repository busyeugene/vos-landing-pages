"""Live Google SERPs (DataForSEO) for the 26 feature-page primaries, FULL payload kept.

Unlike Audit/_scripts/dataforseo_serp.py this keeps every item: organic snippets, People Also Ask
(with expanded answers), the AI Overview text and its references, related searches, forums.
Those are what the section research reads.

    python -I pull_serp.py <data_dir>            # reads <data_dir>/keywords.tsv, writes serp_full.json
"""
import concurrent.futures as cf, json, os, sys, time, urllib.error, urllib.request

sys.path.insert(0, r"E:\Claude projects\Audit\_scripts")
from dataforseo_serp import auth, balance  # noqa: E402

BASE = "https://api.dataforseo.com/v3"


def post(path, hdr, body):
    req = urllib.request.Request(BASE + path, data=json.dumps(body).encode(), method="POST",
                                 headers={"Authorization": hdr, "Content-Type": "application/json"})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=240) as r:
                return json.loads(r.read().decode())
        except (urllib.error.HTTPError, urllib.error.URLError) as e:
            if attempt == 3:
                raise
            time.sleep(5 * (attempt + 1))


def main():
    data = sys.argv[1]
    kws = [l.split("\t")[1] for l in open(os.path.join(data, "keywords.tsv"), encoding="utf-8") if l.strip()]
    path = os.path.join(data, "serp_full.json")
    cache = json.load(open(path, encoding="utf-8")) if os.path.exists(path) else {}
    todo = [k for k in kws if k not in cache]
    hdr = auth()
    before = balance(hdr)

    def one(kw):
        body = [{"keyword": kw, "location_code": 2840, "language_code": "en", "device": "desktop",
                 "depth": 10, "load_async_ai_overview": True, "people_also_ask_click_depth": 1}]
        d = post("/serp/google/organic/live/advanced", hdr, body)
        t = d["tasks"][0]
        return kw, {"cost": t.get("cost"), "status": t.get("status_message"),
                    "result": (t.get("result") or [None])[0]}

    with cf.ThreadPoolExecutor(max_workers=6) as ex:
        for i, (kw, v) in enumerate(ex.map(one, todo), 1):
            cache[kw] = v
            print("%3d/%d %-45s %s" % (i, len(todo), kw, v["status"]))
    with open(path, "w", encoding="utf-8") as f:
        json.dump(cache, f, indent=1)
    print("balance $%s -> $%s" % (before, balance(hdr)))


if __name__ == "__main__":
    main()
