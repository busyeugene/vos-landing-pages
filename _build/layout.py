"""Layout check: render every built VOS page in headless Chrome at desktop (1440px) and mobile (390px) width and
report problems that copy length can cause in the fixed template: horizontal page scroll, elements overflowing
their box, stat numbers or buttons wrapping, H1 taller than 4 lines on desktop, hero trust line wrapping.
Works on probe copies in _build/.layout/; the root HTML files are not touched.

Usage (from _build):  python layout.py            all pages
                      python layout.py <slug> ...  some pages
Known and accepted: the "Book a Demo" button inside the comparison table wraps on mobile (template column width).
"""
import html, json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
OUT = os.path.join(HERE, ".layout")
CHROME = next((p for p in (r"C:\Program Files\Google\Chrome\Application\chrome.exe",
                           r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe") if os.path.exists(p)), None)

PROBE = r"""
<script>
window.addEventListener('load', () => {
  const r = { pageOverflow: document.documentElement.scrollWidth - window.innerWidth, issues: [] };
  const lh = el => parseFloat(getComputedStyle(el).lineHeight) || parseFloat(getComputedStyle(el).fontSize) * 1.2;
  const txt = el => el.textContent.replace(/\s+/g, ' ').trim().slice(0, 70);
  document.querySelectorAll('h1,h2,h3,h4,p,li,td,th,span,a,div.stat-number,div.stat-label,button').forEach(el => {
    if (el.closest('nav,footer,.related-strip,.logo-bar') || el.offsetParent === null) return;
    if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0 && !el.closest('[style*="overflow-x:auto"]'))
      r.issues.push({ kind: 'overflow', text: txt(el) });
  });
  document.querySelectorAll('div.stat-number').forEach(el => {
    if (el.getBoundingClientRect().height > lh(el) * 1.6) r.issues.push({ kind: 'stat number wraps', text: txt(el) });
  });
  document.querySelectorAll('a.btn').forEach(el => {
    if (el.closest('nav') || el.closest('table')) return;
    if (el.getBoundingClientRect().height > lh(el) * 2.2 + 30) r.issues.push({ kind: 'button wraps', text: txt(el) });
  });
  const trust = document.querySelector('.hero-trust'), h1 = document.querySelector('h1');
  r.trustHeight = trust ? Math.round(trust.getBoundingClientRect().height) : 0;
  r.h1Lines = h1 ? Math.round(h1.getBoundingClientRect().height / lh(h1)) : 0;
  const pre = document.createElement('pre'); pre.id = '__layout'; pre.textContent = JSON.stringify(r);
  document.body.appendChild(pre);
});
</script>
"""


def main():
    if not CHROME:
        sys.exit("Chrome or Edge not found")
    os.makedirs(OUT, exist_ok=True)
    reg = json.loads(subprocess.check_output(["node", "-e", "console.log(JSON.stringify(require('./registry.js').map(p=>[p.slug,p.file])))"], cwd=HERE))
    only = set(sys.argv[1:])
    flagged = 0
    for slug, file in reg:
        if only and slug not in only:
            continue
        probe = os.path.join(OUT, slug + ".html")
        src = open(os.path.join(REPO, file), encoding="utf-8").read()
        open(probe, "w", encoding="utf-8").write(src.replace("</body>", PROBE + "</body>"))
        notes = []
        for label, w, h in (("desktop", 1440, 1000), ("mobile", 390, 844)):
            dom = subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", f"--window-size={w},{h}",
                                  "--virtual-time-budget=4000", "--dump-dom", "file:///" + probe.replace("\\", "/")],
                                 capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=90).stdout
            m = re.search(r'<pre id="__layout">(.*?)</pre>', dom, re.S)
            if not m:
                notes.append(label + ": no probe output"); continue
            r = json.loads(html.unescape(m.group(1)))
            if r["pageOverflow"] > 0: notes.append(f"{label}: page scrolls sideways by {r['pageOverflow']}px")
            notes += [f"{label}: {i['kind']}: {i['text']}" for i in r["issues"]]
            if label == "desktop" and r["h1Lines"] > 4: notes.append(f"desktop: H1 is {r['h1Lines']} lines")
            if label == "desktop" and r["trustHeight"] > 30: notes.append("desktop: hero trust line wraps")
        flagged += bool(notes)
        sys.stdout.buffer.write((f"{slug:42} " + ("OK" if not notes else " | ".join(notes)) + "\n").encode("utf-8"))
    print(f"\n{flagged} page(s) with layout flags.")


if __name__ == "__main__":
    main()
