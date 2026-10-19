# FAQ accordion fix + header swap (2026-10-19)

## Why the FAQs never closed
The FAQ open/close is a Webflow IX2 interaction (`a-278` OPEN / `a-283` CLOSE). In the published
site script every one of its events is bound to ONE page, `6a622ea22b8b7e9538a8ac08`
(`"6a622ea22b8b7e9538a8ac08|cb55ed2c-...cf95e"`). Pages duplicated from that page keep the same
element ids but get no events, so on them the answers render open and a click does nothing.
Confirmed on the live `/order-entry-software` and `/free-tools/reorder-point-calculator`.
This affects every landing page built from that template, including the 26 feature pages
(not fixed here; not asked for).

## Fix
`faq-accordion-embed.html`: one HtmlEmbed appended as the last child of the FAQ section
(`cb55ed2c-634b-b694-87d5-a43e7e3cf94e`). It scopes itself to its own section via
`document.currentScript.closest('section')`, adds `.faq-js` (so with JS off every answer stays
visible), opens item 1, collapses the rest, toggles on click/Enter/Space, and turns the plus into
a minus by rotating the vertical line 90deg, the same as the IX2 animation. Tested in headless Chrome
against the live calculator markup and stylesheet before rollout. Scripts don't run in the Designer,
so the canvas still shows every answer open; check it in preview or on the published page.

Applied to:
- 12 compare pages (drafts), code read back identical to the file.
- 23 calculator pages under /free-tools (live; saved, ships with the next site publish).
  The /free-tools hub has no FAQ.

## Header
All 12 compare pages: `Landing Navbar` removed, the homepage `Navbar` component
(`d1d68e62-9100-5fcc-c190-da89dbbb0f8e`) prepended to Body. Inserting "before" a component instance
is rejected by the API; prepend into Body (`6a622ea22b8b7e9538a8ac0e`) works. Verified one Navbar,
no Landing Navbar, on every page. The calculators already had it (2026-10-15).

Nothing published.
