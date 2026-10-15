"""Upload the extension icons to the Webflow asset library.

    python -I upload_icons.py actions          -> prints the create_asset actions (MD5 per file)
    python -I upload_icons.py post <saved.txt> -> POSTs each file to S3 from a saved data_assets_tool
                                                  result, checks the CDN copy by length + MD5, and
                                                  writes assets.json {icon name: asset id}

Send the printed actions in ONE data_assets_tool call with an extra list_assets {limit: 100} action
appended, so the result spills to a file (the presigned details are too long to retype).
"""
import hashlib, io, json, os, sys, time, urllib.error, urllib.request, uuid

HERE = os.path.dirname(os.path.abspath(__file__))
NEW = os.path.join(HERE, "new")
SITE = "69bc131a5fdaa09a10456d46"
sys.path.insert(0, r"E:\Claude projects\Lead magnets VOS\webflow-images\_kit")
import upload_assets as ua  # noqa: E402  field names and order, proven on 92 uploads


def files():
    return sorted(f for f in os.listdir(NEW) if f.endswith(".svg"))


def actions():
    out = []
    for f in files():
        md5 = hashlib.md5(open(os.path.join(NEW, f), "rb").read()).hexdigest()
        out.append({"label": f, "create_asset": {"site_id": SITE, "file_name": f, "file_hash": md5}})
    print(json.dumps(out))


def post_one(path, details, url):
    blob = open(path, "rb").read()
    boundary = "----wf" + uuid.uuid4().hex
    body = io.BytesIO()
    for k in ua.ORDER:
        if k in details:
            body.write(("--%s\r\nContent-Disposition: form-data; name=\"%s\"\r\n\r\n%s\r\n"
                        % (boundary, ua.FIELD[k], details[k])).encode())
    body.write(("--%s\r\nContent-Disposition: form-data; name=\"file\"; filename=\"%s\"\r\n"
                "Content-Type: image/svg+xml\r\n\r\n" % (boundary, os.path.basename(path))).encode())
    body.write(blob + b"\r\n")
    body.write(("--%s--\r\n" % boundary).encode())
    req = urllib.request.Request(url, data=body.getvalue(), method="POST",
                                 headers={"Content-Type": "multipart/form-data; boundary=" + boundary})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            return r.status, blob
    except urllib.error.HTTPError as e:
        return "HTTP %s %s" % (e.code, e.read()[:200]), blob


def post(saved):
    raw = open(saved, encoding="utf-8").read()
    try:
        blocks = json.loads(raw)
        recs = [json.loads(b["text"]) for b in blocks if isinstance(b, dict) and "text" in b]
    except Exception:
        recs = []
    if not recs:                                   # plain-text spill: one JSON object per action
        dec, i, recs = json.JSONDecoder(), 0, []
        while i < len(raw):
            j = raw.find("{", i)
            if j < 0:
                break
            obj, i = dec.raw_decode(raw, j)
            recs.append(obj)
    ledger, bad = {}, 0
    for rec in recs:
        if rec.get("action") != "create_asset":
            continue
        name, r = rec["label"], rec["result"]
        path = os.path.join(NEW, name)
        url = r.get("uploadUrl") or ua.URL
        status, blob = post_one(path, r["uploadDetails"], url)
        ok = False
        if status in (200, 201, 204):
            for _ in range(5):
                try:
                    with urllib.request.urlopen(r["hostedUrl"], timeout=60) as h:
                        got = h.read()
                    ok = len(got) == len(blob) and hashlib.md5(got).hexdigest() == hashlib.md5(blob).hexdigest()
                    break
                except Exception:
                    time.sleep(3)
        bad += not ok
        ledger[name[4:-4]] = {"id": r["id"], "file": name, "hostedUrl": r["hostedUrl"], "s3": status, "cdn_ok": ok}
        print("%-22s %s s3=%s cdn=%s" % (name, r["id"], status, "OK" if ok else "MISMATCH"))
    with open(os.path.join(HERE, "assets.json"), "w", encoding="utf-8") as f:
        json.dump(ledger, f, indent=1)
    print("%d uploaded, %d problems" % (len(ledger), bad))
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    if sys.argv[1:2] == ["actions"]:
        actions()
    elif sys.argv[1:2] == ["post"]:
        post(sys.argv[2])
    else:
        sys.exit(__doc__)
