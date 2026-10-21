# Whitespace-tolerant exact replace for page sources (used for every copy edit on 2026-10-21).
#   python subst.py pages/<slug>.js pairs.json      pairs.json = [["old text", "new text"], ...]
# Page sources wrap mid-sentence, so each old string matches across any run of whitespace. Every
# pair must match EXACTLY once, or nothing is written and the offenders are printed.
import io, json, re, sys
p, pairs = sys.argv[1], json.load(io.open(sys.argv[2], encoding='utf8'))
s = io.open(p, encoding='utf8').read()
bad = 0
for old, new in pairs:
    pat = r'\s+'.join(re.escape(w) for w in old.split())
    n = len(re.findall(pat, s))
    if n != 1:
        print('MATCH x%d: %s' % (n, old[:70])); bad += 1; continue
    s = re.sub(pat, lambda m: new, s)
if not bad:
    with io.open(p, 'w', encoding='utf8') as f: f.write(s)
print('applied' if not bad else 'NOT WRITTEN')
