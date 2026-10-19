"""Split each V2 quiz fragment into Webflow embeds, and build local test pages.

Why: a generated quiz (lead magnets project, lead-magnets-v2/_generated/<quiz>-quiz.html) is
68-80 KB, and a Webflow HtmlEmbed holds about 50,000 characters. Every <style> and <script> sits
INSIDE the .vos-quiz div, so the split moves them out without changing anything else.

The quiz CSS (first <style>) and the quiz engine (last <script>) are byte-identical on all 23,
so each lives ONCE in Webflow as a shared component. Page order, top to bottom:

  shared/quiz-css.html          component "VOS Quiz CSS"     the quiz <style>
  parts/<page>.a.html           page embed A                 calculator <style> + all markup
  parts/<page>.b.html           page embed B                 calculator <script>, HubSpot loader, spec
  shared/engine.html            component "VOS Quiz Engine"  the engine <script>

Safe because nothing depends on position: the CSS is class-scoped (.vos-quiz, .vos-calc), every
script finds its elements by id, and the original script order (calculator, HubSpot, spec,
engine) is kept. The engine reads window.__VOS_QUIZ_SPEC__, so it must stay LAST.

Also writes map.json (page -> pageId, quiz slug, quiz root id, old calc anchor id) and
test/<quiz>.html: the site-v2 preview page with its fragment replaced by the four embeds, each
wrapped the way Webflow wraps an embed, for scripts/smoke_quiz.js <quiz> <file url>.

Source of truth stays the lead magnets project. Re-run this after any rebuild there; if a shared
file changes, the shared component in Webflow has to be updated too.
"""
import json, os, re, sys

LM = r'E:/Claude projects/Lead magnets VOS'
GEN = os.path.join(LM, 'lead-magnets-v2', '_generated')
SPECS = os.path.join(LM, 'lead-magnets-v2', 'specs')
SITE = os.path.join(LM, 'site-v2')
HERE = os.path.dirname(os.path.abspath(__file__))
PAGES = json.load(open(os.path.join(HERE, '..', 'calc-sections', 'pages.json'), encoding='utf8'))
TEST = 'test4'
LIMIT = 45000  # stay well under Webflow's ~50,000 character embed limit

# calculator file name -> Webflow page slug, where they differ
RENAME = {
    'price-comparison-calculator': 'landed-cost-calculator',
    'price-variance-calculator': 'purchase-price-variance-calculator',
    'purchase-price-calculator': 'early-payment-discount-calculator',
    'wholesale-retail-markup-calculator': 'wholesale-to-retail-markup-calculator',
}

BLOCK = re.compile(r'<(style|script)\b[^>]*>.*?</\1\s*>', re.S | re.I)


def split(frag):
    """-> (shared quiz css, page embed A, page embed B, shared engine), in page order."""
    styles = [m.group(0) for m in BLOCK.finditer(frag) if m.group(1).lower() == 'style']
    scripts = [m.group(0) for m in BLOCK.finditer(frag) if m.group(1).lower() == 'script']
    assert len(styles) == 2 and len(scripts) == 4 and 'quiz engine' in scripts[3][:300]
    markup = BLOCK.sub('', frag)
    markup = re.sub(r'\n[ \t]*\n(?:[ \t]*\n)+', '\n\n', markup)
    a = styles[1] + '\n' + markup.strip() + '\n'
    b = '\n'.join(scripts[:3]) + '\n'
    return styles[0] + '\n', a, b, scripts[3] + '\n'


def main():
    os.makedirs(os.path.join(HERE, 'parts'), exist_ok=True)
    os.makedirs(os.path.join(HERE, TEST), exist_ok=True)
    out, bad, shared = {}, 0, {}
    os.makedirs(os.path.join(HERE, 'shared'), exist_ok=True)
    for spec in sorted(f for f in os.listdir(SPECS) if f.endswith('.js') and not f.endswith('.fixtures.js')):
        quiz = spec[:-3]
        src = open(os.path.join(SPECS, spec), encoding='utf8').read()
        calc = re.search(r"calcFile:\s*'([^']+)\.html'", src).group(1)
        page = RENAME.get(calc, calc)
        if page not in PAGES:
            print('NO PAGE for', quiz, calc); bad += 1; continue
        frag = open(os.path.join(GEN, f'{quiz}-quiz.html'), encoding='utf8').read()
        root = re.search(r'<div class="vos-quiz" id="([^"]+)"', frag).group(1)
        anchor = re.search(r'<div class="vos-calc" id="([^"]+)"', frag).group(1)
        parts = split(frag)
        for name, body in (('quiz-css', parts[0]), ('engine', parts[3])):
            sp = os.path.join(HERE, 'shared', name + '.html')
            if name in shared and shared[name] != body:
                print('SHARED PART DIFFERS', name, page); bad += 1
            shared[name] = body
            with open(sp, 'w', encoding='utf8', newline='\n') as fh:
                fh.write(body)
        # the split must lose nothing: every character of the original is in exactly one part
        joined = ''.join(parts)
        if sorted(re.sub(r'\s', '', joined)) != sorted(re.sub(r'\s', '', frag)):
            print('LOSSY SPLIT', page); bad += 1
        for n, p in (('a', parts[1]), ('b', parts[2])):
            if len(p) > LIMIT:
                print(f'TOO BIG {page} {n} {len(p)}'); bad += 1
            with open(os.path.join(HERE, 'parts', f'{page}.{n}.html'), 'w', encoding='utf8', newline='\n') as fh:
                fh.write(p)
        sitepage = open(os.path.join(SITE, f'{quiz}.html'), encoding='utf8').read()
        if frag.strip() not in sitepage:
            print('FRAGMENT NOT FOUND IN site-v2 page', quiz); bad += 1
        wrapped = ''.join(f'<div class="w-embed w-script">{p}</div>\n' for p in parts)
        with open(os.path.join(HERE, TEST, f'{quiz}.html'), 'w', encoding='utf8', newline='\n') as fh:
            fh.write(sitepage.replace(frag.strip(), wrapped))
        pid = PAGES[page]['pageId'] if isinstance(PAGES[page], dict) else PAGES[page]
        out[page] = {'pageId': pid, 'quiz': quiz, 'root': root, 'oldAnchor': anchor,
                     'sizes': [len(parts[1]), len(parts[2])]}
        print(f'{page:42} {quiz:20} #{root:28} old #{anchor:14} {[len(parts[1]), len(parts[2])]}')
    json.dump(out, open(os.path.join(HERE, 'map.json'), 'w', encoding='utf8'), indent=1)
    print(len(out), 'pages,', bad, 'problems')
    sys.exit(1 if bad or len(out) != 23 else 0)


main()
