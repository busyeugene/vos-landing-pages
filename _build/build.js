/* VOS pSEO page assembler.
 * Emits plain, standalone HTML into the repo (no build step needed at deploy time).
 * Usage: node build.js [slug ...]   (no args = build all pages in pages/)
 */
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.resolve(__dirname, '..');
const ORIGIN = 'https://vos-landing-pages.vercel.app';
const HERE = __dirname;
const registry = require('./registry.js');
const bySlug = Object.fromEntries(registry.map(p => [p.slug, p]));

const read = f => fs.readFileSync(path.join(HERE, f), 'utf8').replace(/\r\n/g, '\n').trim();

const EXTRA_CSS = `
    /* ── Related Pages Strip ──────────────────────────────────── */
    .related-strip { background: var(--color-light-bg); border-top: 1px solid #e4e7ed; padding: 72px 24px; }
    .related-head  { text-align: center; max-width: 620px; margin: 0 auto 44px; }
    .related-grid  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; max-width: var(--max-width); margin: 0 auto; }
    .related-card  {
      display: flex; flex-direction: column; background: #fff;
      border: 1px solid #e4e7ed; border-radius: 12px; padding: 26px;
      text-decoration: none; color: inherit;
      transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
    }
    .related-card:hover { box-shadow: 0 12px 32px rgba(45,27,110,0.10); transform: translateY(-3px); border-color: #d6dbe6; }
    .related-card-kw {
      align-self: flex-start; font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--color-primary); background: #ede9fe;
      padding: 5px 10px; border-radius: 6px; margin-bottom: 16px;
    }
    .related-card h3 { font-size: 19px; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 8px; }
    .related-card p  { font-size: 14.5px; color: var(--color-text-muted); margin-bottom: 18px; flex-grow: 1; line-height: 1.55; }
    .related-card-link { font-size: 14px; font-weight: 600; color: var(--color-accent); }
    @media (max-width: 900px) { .related-grid { grid-template-columns: 1fr; } }
`;

const css = read('_css.html').replace(/\n\s*<\/style>$/, `\n${EXTRA_CSS}\n  </style>`);
const PARTIALS = {
  '<!--@NAVBAR-->': read('_navbar.html'),
  '<!--@LOGOBAR-->': read('_logobar.html'),
  '<!--@INTEGRATIONS-->': read('_integrations.html'),
  '<!--@SCRIPT-->': read('_script.html'),
};

/* ── helpers ────────────────────────────────────────────────── */
const decode = s => s
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

const textOf = html => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const attr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function faqJsonLd(body) {
  const qs = [...body.matchAll(/<button class="faq-question"[^>]*>([\s\S]*?)<span class="faq-icon">/g)].map(m => textOf(m[1]));
  const as = [...body.matchAll(/<div class="faq-answer"[^>]*>([\s\S]*?)<\/div>/g)].map(m => textOf(m[1]));
  if (!qs.length || qs.length !== as.length) {
    throw new Error(`FAQ parse mismatch: ${qs.length} questions vs ${as.length} answers`);
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qs.map((q, i) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: as[i] },
    })),
  };
}

function breadcrumbJsonLd(page) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'VoiceOrder Solutions Features', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: page.card, item: `${ORIGIN}/${page.slug}` },
    ],
  };
}

function softwareJsonLd(page, desc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VoiceOrder Solutions',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android, Web',
    description: desc,
    url: `${ORIGIN}/${page.slug}`,
    publisher: { '@type': 'Organization', name: 'VoiceOrder Solutions', url: 'https://www.voiceordersolutions.com/' },
  };
}

function relatedStrip(page) {
  const cards = page.related.map(slug => {
    const r = bySlug[slug];
    if (!r) throw new Error(`Unknown related slug "${slug}" on ${page.slug}`);
    return `      <a class="related-card" href="/${r.slug}">
        <span class="related-card-kw">${r.label}</span>
        <h3>${r.card}</h3>
        <p>${r.blurb}</p>
        <span class="related-card-link">Read more →</span>
      </a>`;
  }).join('\n\n');

  return `<!-- ============================================================
     RELATED PAGES
     ============================================================ -->
<section class="related-strip" aria-label="Related pages">
  <div class="related-head">
    <span class="eyebrow">Keep Exploring</span>
    <h2 style="font-size:clamp(24px,3.2vw,32px);">${page.relatedHeading || 'Related VoiceOrder Solutions features'}</h2>
  </div>
  <div class="related-grid">

${cards}

  </div>
  <p class="text-center text-muted" style="margin-top:36px;font-size:14px;">
    <a href="/" style="color:var(--color-accent);font-weight:600;text-decoration:none;">See all VoiceOrder Solutions feature pages →</a>
  </p>
</section>`;
}

function buildHead(page, jsonld) {
  const t = attr(page.title), d = attr(page.description), url = `${ORIGIN}/${page.slug}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t}</title>
  <meta name="description" content="${d}" />
  <link rel="canonical" href="${url}" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="VoiceOrder Solutions" />
  <meta property="og:title" content="${t}" />
  <meta property="og:description" content="${d}" />
  <meta property="og:url" content="${url}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${t}" />
  <meta name="twitter:description" content="${d}" />

${css}

${jsonld.map(o => `  <script type="application/ld+json">\n${JSON.stringify(o, null, 2).split('\n').map(l => '  ' + l).join('\n')}\n  </script>`).join('\n')}
</head>`;
}

/* ── build ──────────────────────────────────────────────────── */
const targets = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(path.join(HERE, 'pages')).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, ''));

let built = 0;
for (const slug of targets) {
  const mod = require(`./pages/${slug}.js`);
  const reg = bySlug[slug];
  if (!reg) throw new Error(`"${slug}" is not in registry.js`);
  const page = { ...reg, ...mod };

  let body = page.body.replace(/\r\n/g, '\n').trim();
  body = body.replace('<!--@RELATED-->', relatedStrip(page));
  for (const [marker, html] of Object.entries(PARTIALS)) {
    if (body.includes(marker)) body = body.split(marker).join(html);
  }
  const leftover = body.match(/<!--@[A-Z]+-->/);
  if (leftover) throw new Error(`${slug}: unreplaced marker ${leftover[0]}`);

  const jsonld = [faqJsonLd(body), breadcrumbJsonLd(page), softwareJsonLd(page, page.description)];
  const html = `${buildHead(page, jsonld)}\n<body>\n\n\n${body}\n\n\n</body>\n</html>\n`;

  fs.writeFileSync(path.join(OUT_DIR, page.file), html, 'utf8');
  console.log(`✓ ${page.file}  (${html.split('\n').length} lines, ${jsonld[0].mainEntity.length} FAQs)`);
  built++;
}
console.log(`\nBuilt ${built} page(s).`);
