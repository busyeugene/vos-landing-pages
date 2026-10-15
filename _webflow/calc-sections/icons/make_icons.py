"""Draw the extension icons for the calculator pages in the existing VOS brand style, and a contact
sheet that shows them beside the original 24.

Style (copied from Lead magnets VOS/webflow-images/_icons/vos-*.svg): 48x48 viewBox, fill none,
stroke #0099e6, stroke-width 2.5, round caps and joins; small solid dots use fill #0099e6, no stroke.

    python -I make_icons.py          -> new/*.svg + sheet.html (render sheet.html to check by eye)
"""
import glob, os

HERE = os.path.dirname(os.path.abspath(__file__))
OLD = os.path.join("E:" + os.sep, "Claude projects", "Lead magnets VOS", "webflow-images", "_icons")
HEAD = ('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" '
        'stroke="#0099e6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">')
DOT = '<circle cx="%s" cy="%s" r="%s" fill="#0099e6" stroke="none"/>'

ICONS = {
    # people and roles
    "person": '<circle cx="24" cy="16" r="7"/><path d="M10 41c0-8 6.3-13 14-13s14 5 14 13"/>',
    "team": ('<circle cx="18" cy="18" r="6"/><path d="M6 41c0-7 5.4-11.5 12-11.5S30 34 30 41"/>'
             '<circle cx="32" cy="14" r="5"/><path d="M33.5 24.5C39 25.5 42 29.5 42 35"/>'),
    "chat": ('<path d="M9 9h30a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H23l-9 8v-8H9a4 4 0 0 1-4-4V13a4 4 0 0 1 4-4Z"/>'
             + DOT % (16, 21, 2) + DOT % (24, 21, 2) + DOT % (32, 21, 2)),
    "headset": ('<path d="M10 29v-5a14 14 0 0 1 28 0v5"/><rect x="7" y="27" width="7" height="11" rx="2.5"/>'
                '<rect x="34" y="27" width="7" height="11" rx="2.5"/><path d="M37.5 38c0 3.5-3.5 5-8.5 5h-3"/>'),
    "store": ('<path d="M8 19 11 8h26l3 11"/>'
              '<path d="M8 19c0 3 2.4 5 5.3 5s5.4-2 5.4-5c0 3 2.4 5 5.3 5s5.3-2 5.3-5c0 3 2.5 5 5.4 5S40 22 40 19"/>'
              '<path d="M11 24v17h26V24"/><path d="M20 41v-9h8v9"/>'),
    "office": ('<rect x="11" y="7" width="26" height="35" rx="2"/><path d="M5 42h38"/>'
               '<path d="M17 14h4M27 14h4M17 21h4M27 21h4M17 28h4M27 28h4"/><path d="M21 42v-6h6v6"/>'),
    "phone": '<rect x="14" y="5" width="20" height="38" rx="4"/><path d="M21 37h6"/><path d="M20 10h8"/>',
    "pin": '<path d="M24 43S11 30.5 11 21a13 13 0 0 1 26 0c0 9.5-13 22-13 22Z"/><circle cx="24" cy="21" r="5"/>',
    # thinking and checking
    "clipboard": ('<rect x="10" y="9" width="28" height="33" rx="3"/><rect x="18" y="5" width="12" height="7" rx="2"/>'
                  '<path d="M17 22h14"/><path d="M17 29h14"/><path d="M17 36h9"/>'),
    "calculator": ('<rect x="11" y="5" width="26" height="38" rx="3"/><rect x="16" y="10" width="16" height="8" rx="1.5"/>'
                   + "".join(DOT % (x, y, 1.9) for y in (26, 32, 38) for x in (18, 24, 30))),
    "search": '<circle cx="21" cy="21" r="12"/><path d="m30 30 11 11"/>',
    "lightbulb": ('<path d="M19 34c0-4.5-7-7.5-7-16a12 12 0 0 1 24 0c0 8.5-7 11.5-7 16Z"/>'
                  '<path d="M19 39h10"/><path d="M21 43h6"/>'),
    "book": ('<path d="M24 13c-4.5-3-10.5-4-17-3v27c6.5-1 12.5 0 17 3 4.5-3 10.5-4 17-3V10c-6.5-1-12.5 0-17 3Z"/>'
             '<path d="M24 13v27"/>'),
    "alert": '<path d="M24 7 43 40H5Z"/><path d="M24 19v10"/>' + DOT % (24, 34.5, 2),
    "plus": '<circle cx="24" cy="24" r="17"/><path d="M24 16v16M16 24h16"/>',
    "minus": '<circle cx="24" cy="24" r="17"/><path d="M16 24h16"/>',
    "sliders": ('<path d="M8 14h7M22 14h18M8 24h17M32 24h8M8 34h4M19 34h21"/>'
                '<circle cx="18.5" cy="14" r="3.5"/><circle cx="28.5" cy="24" r="3.5"/><circle cx="15.5" cy="34" r="3.5"/>'),
    "arrow-right": '<path d="M8 24h30"/><path d="m28 14 10 10-10 10"/>',
}


def main():
    os.makedirs(os.path.join(HERE, "new"), exist_ok=True)
    for name, body in ICONS.items():
        with open(os.path.join(HERE, "new", "vos-%s.svg" % name), "w", encoding="utf-8", newline="\n") as f:
            f.write(HEAD + body + "</svg>")
    figs = []
    for path in sorted(glob.glob(os.path.join(OLD, "vos-*.svg"))):
        figs.append((os.path.basename(path)[4:-4], open(path, encoding="utf-8").read(), "old"))
    for name, body in ICONS.items():
        figs.append((name, HEAD + body + "</svg>", "new"))
    cells = "".join('<figure class="%s"><div class="bx">%s</div><figcaption>%s</figcaption></figure>' % (k, s, n)
                    for n, s, k in figs)
    html = ("<!DOCTYPE html><html><head><meta charset='UTF-8'><style>"
            "body{margin:0;background:#fff;font-family:Arial,sans-serif;width:1100px}"
            ".grid{display:grid;grid-template-columns:repeat(8,1fr);gap:6px;padding:14px}"
            "figure{margin:0;text-align:center;padding:10px 2px;border-radius:8px}"
            "figure.new{background:#eef7fd}.bx{height:56px;display:flex;align-items:center;justify-content:center}"
            ".bx svg{width:44px;height:44px}figcaption{font-size:11px;color:#475467;margin-top:6px}"
            ".alt{background:#f2f4f7}</style></head><body><div class='grid'>%s</div>"
            "<div class='grid alt'>%s</div></body></html>") % (cells, cells)
    with open(os.path.join(HERE, "sheet.html"), "w", encoding="utf-8") as f:
        f.write(html)
    print("%d new icons, sheet with %d" % (len(ICONS), len(figs)))


if __name__ == "__main__":
    main()
