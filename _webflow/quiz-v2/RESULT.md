# V2 quizzes on the 23 calculator pages (2026-10-19)

All 23 `/free-tools/<slug>` pages now carry their V2 quiz instead of the old calculator.
**Saved in Webflow; goes live with the next site publish** (Eugene publishes; we never do).

## What each page has now (Body, after the hero)
| # | element | state |
|---|---|---|
| 1 | CSS embed (hero image rules, unchanged) | visible |
| 2 | old calculator embed (`calcEmbed` in plan.json) | **hidden**, kept as rollback |
| 3 | `VOS Quiz CSS` component instance (`64c7cf9f-28da-42b7-abf3-dbf0b9aacd39`) | visible |
| 4 | embed A = `parts/<page>.a.html` (calculator CSS + all markup), class `uui-padding-vertical-xhuge 7` | visible |
| 5 | embed B = `parts/<page>.b.html` (calculator script, HubSpot loader, spec) | visible |
| 6 | `VOS Quiz Engine` component instance (`d06c143a-0dda-e39b-1b58-d616d0217578`) | visible |

Plus: hero "Use the Calculator" and the 4 feature-row buttons now jump to `#vos-q-<quiz>`
(they pointed at the old calculator's anchor, which now sits inside the hidden calculator copy),
and 12 "recalculates as you type" bullets were rewritten (plan.json `copyFix`).

## Verification
- `split.py`: 23/23 split with nothing lost; every part under 45,000 chars (Webflow embed ~50,000).
- `smoke-split.log`: the lead magnets project's own `smoke_quiz.js` passed on all 23 split test
  pages (`test4/`), 20-41 checks each, 0 failures.
- Every stored embed and both components compared **byte for byte** with `verify_code.py`
  on a read-back padded until it spilled to a file (`staged.jsonl` holds each spill path).
- `final-check.json`: a separate read-only pass over all 23: element order and visibility,
  hero link + label, row link, copy fix. 23/23, 0 problems.

## Same day, later
- **Gate heading** "Where should we send it?" -> "Want to see your results?" (Eugene: nothing is
  sent to anyone). Changed at the source, `Lead magnets VOS/scripts/build_v2.js`, rebuilt, re-split
  (only embed A changed, one line per page), re-pushed embed A on all 23, every page MATCH
  (`requeued.jsonl`). The Vercel preview `site-v2/` was rebuilt locally but NOT redeployed.
- **Hero first button.** In the shared `landing-hero` component (62 instances) it was a
  hard-coded "Book a demo" -> Contact; the instance props `Text 3` and `Link` were wired to
  nothing, which is why "Use the Calculator" never showed. Now: new boolean prop
  `Show Button 1` (`281326b9-a7c6-2670-d83e-3052bafca464`, default off) drives the wrapper's
  visibility, and the button's label and link are bound to `Text 3` / `Link`. It is ON on all 62:
  calculators show "Use the Calculator" -> quiz; the 26 /solutions pages show "Book a Free Demo"
  (21) or "Get Set Up With VOS" (5 operator pages); the 12 /alternatives show "Book a Free Demo";
  the draft "Landing Template" (`6a622ea22b8b7e9538a8ac08`) shows "Book A Demo". All link to
  Contact Us except the calculators. A NEW landing page copied from the template inherits ON.

## Not done / open
- **The VOS line in 10 quizzes' result boxes overclaims** ("keeps inventory updating in real time
  ... flags low stock", "confirms every order before it ships", "keeps ... pack counts current",
  "a change reaches every order the moment you make it"), and landed cost says "dearest".
  Pre-existing: the old live calculators say the same. Fix in the lead magnets project
  (calculator CTA source), regenerate, re-run `split.py`, re-push embed A/B.
- Quiz answers still do not reach the HubSpot contact (no hidden fields on the form); phone
  field defaults to Bulgaria. Client-side form settings.
- ~~Old calculator embeds are hidden, not deleted.~~ Deleted on all 23, 2026-10-19, at Eugene's
  request (`deleted.jsonl`), after checking each was hidden and the quiz was in place.

## To update a quiz later
Rebuild in the lead magnets project, `python -I split.py`, then re-write embed A/B (ids in
`staged.jsonl`) and verify with `verify_code.py`. If `shared/quiz-css.html` or `shared/engine.html`
changed, update the component definition once instead (scope_component_id = component id): every
page follows. See `RUNBOOK.md` for call shapes.
