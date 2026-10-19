"""Compare embed code read back from Webflow with the local source files, exactly.

Usage:  python -I verify_code.py <saved tool-result file> <source.html> [<source.html> ...]

The MCP returns a get_settings read-back inline when it is small, and only saves it to a file
when the whole result is large. So a read-back is padded (the same get_settings repeated, or a
full tree read in the same call) until it spills to a file, and this script reads that file.
That is the only way to compare 10-30 KB of stored code against the source byte for byte
instead of by eye.

Every stored "code" value in the file is matched against every source given. Exit 0 only if each
source matches at least one stored value exactly.
"""
import json, sys


def codes(path):
    raw = json.load(open(path, encoding='utf8'))
    text = ''.join(x.get('text', '') for x in raw) if isinstance(raw, list) else json.dumps(raw)
    dec, i, found = json.JSONDecoder(), 0, []
    while True:
        j = text.find('{', i)
        if j < 0:
            return found
        try:
            obj, end = dec.raw_decode(text, j)
        except ValueError:
            i = j + 1
            continue
        stack = [obj]
        while stack:
            o = stack.pop()
            if isinstance(o, dict):
                if o.get('key') == 'code' and isinstance(o.get('value'), str):
                    found.append(o['value'])
                stack.extend(o.values())
            elif isinstance(o, list):
                stack.extend(o)
        i = end


def main():
    stored = codes(sys.argv[1])
    ok = True
    for src in sys.argv[2:]:
        want = open(src, encoding='utf8').read()
        hit = [s for s in stored if s == want]
        if hit:
            print(f'MATCH  {src}  ({len(want)} chars, {len(hit)} stored copies)')
            continue
        ok = False
        best = max(stored, key=lambda s: len(s), default='')
        k = next((n for n, (a, b) in enumerate(zip(best, want)) if a != b), min(len(best), len(want)))
        print(f'DIFFER {src}: want {len(want)} chars, longest stored {len(best)}, first difference at {k}')
        print('   want  :', repr(want[max(0, k - 40):k + 40]))
        print('   stored:', repr(best[max(0, k - 40):k + 40]))
    print(f'{len(stored)} stored code values found')
    sys.exit(0 if ok else 1)


main()
