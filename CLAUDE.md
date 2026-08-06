# VoiceOrder Solutions — pSEO Landing Pages

## What this project is
Programmatic SEO feature landing pages for **VoiceOrder Solutions** (voiceordersolutions.com) — voice + web-based order entry software for restaurants placing supply orders with food distributors.

## Deployment
- **GitHub:** `github.com/busyeugene/vos-landing-pages` (remote `origin`)
- **Vercel:** project `vos-landing-pages` → live at `https://vos-landing-pages.vercel.app`
- **Deploy branch:** `master`. Every push to `master` auto-redeploys via Vercel's Git integration.
- New pages: add the HTML file, add a rewrite entry in `vercel.json`, add a card to `index.html` (pillar page), add the URL to `sitemap.xml`, then commit + push to `master`.
- `sitemap.xml` and `robots.txt` sit at the repo root and are served as-is.
- `.vercel/` is gitignored (holds the local project link).
- Canonicals point at `https://vos-landing-pages.vercel.app`. If these pages ever move onto `voiceordersolutions.com`, every canonical, `og:url`, and `sitemap.xml` entry has to be updated.

## Pages built

| File | Primary keyword | URL | Cluster |
|---|---|---|---|
| `index.html` | (pillar / hub page) | `/` | — |
| `vos-order-entry-landing.html` | order entry software | `/order-entry-software` | Ordering |
| `vos-order-taking-landing.html` | order taking software | `/order-taking-software` | Ordering |
| `vos-order-fulfillment-landing.html` | order fulfillment software | `/order-fulfillment-software` | Ordering |
| `vos-order-tracking-landing.html` | order tracking software | `/order-tracking-software` | Ordering |
| `vos-inventory-tracking-landing.html` | inventory tracking software | `/inventory-tracking-software` | Inventory |
| `vos-inventory-planning-landing.html` | inventory planning software | `/inventory-planning-software` | Inventory |
| `vos-inventory-visibility-landing.html` | inventory visibility software | `/inventory-visibility-software` | Inventory |
| `vos-inventory-control-landing.html` | inventory control software | `/inventory-control-software` | Inventory |
| `vos-restaurant-stock-management-landing.html` | restaurant stock management software | `/restaurant-stock-management-software` | Inventory (hub) |
| `vos-catalog-management-landing.html` | catalog management software | `/catalog-management-software` | Ops |
| `vos-restaurant-purchasing-landing.html` | restaurant purchasing software | `/restaurant-purchasing-software` | Ops (hub) |
| `vos-restaurant-checklist-landing.html` | restaurant checklist software | `/restaurant-checklist-software` | Ops |

> Pillar page (`index.html`) groups cards by cluster and links to every feature page. Add a card to it whenever a new page ships.

### Cluster separation contract
Five inventory pages and four order pages compete for overlapping intent. Each page answers exactly one question and must not drift into a neighbour's:

| Page | Its one question |
|---|---|
| inventory tracking | "What do I have right now?" |
| inventory planning | "How much should I order for next week?" |
| inventory visibility | "Can my other location and my chef see it too?" |
| inventory control | "Why is my food cost up and where is the waste?" |
| restaurant stock management | catch-all hub for the inventory cluster |
| order entry | "How do I place the order?" (buyer) |
| order taking | "How do I receive orders?" (seller) |
| order fulfillment | "How do I get it picked and out the door?" (seller) |
| order tracking | "It's placed, where is it?" (both sides) |

### Off-fit keyword rule (3 tiers)
Some target keywords belong to a different buyer than VOS serves (ecommerce, warehouse, retail, manufacturing, ERP). Sort every secondary keyword into:
- **Tier A, on fit** — heading + body, full product claim.
- **Tier B, adjacent** — one heading or sentence that reframes the term into what VOS actually does.
- **Tier C, wrong industry** — exactly one disambiguating FAQ: answer the query honestly and say what VOS is not. Ranks for the term, sets correct expectation, makes zero false claims. Never write a Tier C term up as a real capability.

## Page structure (VOS template — apply to every new VOS page)
1. Navbar — white sticky bar, purple logo, nav links, CTA button
2. Hero — 2-col grid (text left, image right), gradient bg `#4A1FA8 → #1354CC`. H1 max 6–8 words, primary keyword in H1. Trust bullets below CTAs are OK on VOS.
3. Logo bar — customer logos placeholder row
4. Stats strip — cyan bg (`--color-accent`), 3 quantified outcomes. No label or h2 above the grid on VOS.
5. Problem section — eyebrow label + h2, then 3 pain-point cards (`.problem-card`)
6. Feature deep-dive — alternating `.feature-row` / `.feature-row.reverse` with image + bullet list. Each row can have a `.feature-link` inline link.
7. Supporting features — 3-col card grid (`.cards-grid` + `.feature-card`) with icon + h3 + description
8. Mid-page CTA — light bg strip, h2 + description + CTA button. Links to `voiceordersolutions.com/contact-us`.
9. How It Works — 3-step `.steps-grid` with cyan circle numbers
10. Testimonials — 2-col grid; one featured card (dark purple bg)
11. Integrations — badges listing compatible distributor/POS systems
12. Comparison table — `.comparison-table`, 3 columns (Feature / VoiceOrder / Competitors)
13. FAQ — accordion, 7+ questions. Primary keyword in at least one question naturally. Tier C disambiguation FAQs live here.
14. Related pages — `.related-strip`, 3 cluster-sibling cards + a link back to `/`
15. Final CTA — gradient bg, h2 + email form + trust line. Links to `voiceordersolutions.com/contact-us`.
16. Footer — 4-col grid: brand, Features, More From VOS (cross-cluster links), Company. `#1a0f47` bg

### Required in `<head>` on every page
- Self-referencing `<link rel="canonical">`
- Open Graph (`og:title`, `og:description`, `og:url`, `og:site_name`, `og:type`) + `twitter:card`
- JSON-LD: `FAQPage` (must match the accordion exactly), `BreadcrumbList`, `SoftwareApplication`
- Meta title ≤ 62 chars, meta description 120–160 chars

### Internal linking
Each page links out to 3 cluster siblings via the Related strip, 4–5 more via the footer's "More From VOS" column, and 2–4 inline via `.feature-link` in the feature rows. At most one `.feature-link` per page points at `contact-us`; the rest point at sibling pages.

## Copy rules
- 8th-grade reading level: short sentences, no jargon, no fluff
- No em-dashes (—) anywhere in visible copy. Use: comma, colon, period, or brackets
- En-dashes (–) are acceptable in code comments only
- After every new page build, output the meta title and meta description for client review

## Brand tokens

- `--color-primary: #2D1B6E` (deep purple)
- `--color-accent: #0BB5E0` (bright cyan-blue)
- `--color-accent-hover: #0998C0`
- `--color-light-bg: #f5f7fa`
- `--color-mid-bg: #eef0f4`
- `--color-dark-bg: #2D1B6E`
- Hero gradient: `linear-gradient(135deg, #4A1FA8 0%, #1354CC 100%)`
- Footer bg: `#1a0f47`
- CTA link: https://www.voiceordersolutions.com/contact-us

## VOS design system (own CSS class names — different from MAAT)

| Block | CSS class(es) | Notes |
|---|---|---|
| Navbar | `.navbar`, `.navbar-inner`, `.navbar-logo`, `.navbar-links`, `.navbar-cta` | White bg, sticky |
| Hero | `.hero`, `.hero-grid`, `.hero-ctas`, `.hero-trust` | 2-col grid, gradient bg |
| Logo bar | `.logo-bar`, `.logo-bar-inner`, `.logo-slot` | Placeholder slots |
| Stats strip | `.stats-strip`, `.stats-grid`, `.stat-number`, `.stat-label` | Cyan bg, no header above grid |
| Problem | `.problem-grid`, `.problem-card`, `.problem-icon` | Light bg section |
| Feature row | `.feature-row`, `.feature-row.reverse`, `.feature-bullets`, `.bullet-check`, `.feature-link` | Alternating layout |
| Feature cards | `.cards-grid`, `.feature-card`, `.feature-card-icon` | 3-col supporting features |
| Steps | `.steps-grid`, `.step-card`, `.step-number` | Numbered cyan circles |
| Testimonials | `.testimonials-grid`, `.testimonial-card`, `.testimonial-card.featured` | 2-col, one featured |
| Integrations | `.integrations-logos`, `.integration-badge`, `.integration-logo-placeholder` | Badge row |
| Comparison | `.comparison-table`, `.check-yes`, `.check-no` | Full-width table |
| FAQ | `.faq-list`, `.faq-item`, `.faq-question`, `.faq-answer`, `.faq-icon` | Accordion |
| Final CTA | `.final-cta`, `.final-cta-form`, `.final-cta-trust` | Gradient bg, email form |
| Footer | `.footer`, `.footer-grid`, `.footer-brand-name`, `.footer-col` | 4-col, dark bg |

## Product knowledge base
Verified product facts live in `knowledge-base/vos-product-facts.md`. Always check it before writing copy.

## Workflow
1. Eugene produces content brief or keyword targets
2. Claude builds the full HTML page using the VOS 15-section template
3. Push to GitHub → Vercel auto-deploys
4. After every new page build, output the meta title and meta description for client review