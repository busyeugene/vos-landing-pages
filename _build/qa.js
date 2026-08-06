/* QA gate for built VOS pages. Usage: node qa.js [file ...] (default: all registry files) */
const fs = require('fs');
const path = require('path');
const OUT = path.resolve(__dirname, '..');
const registry = require('./registry.js');
const slugs = new Set(registry.map(p => p.slug));

const KEYWORDS = require('./keywords.js'); // { slug: { primary, secondary: [] } }

let failures = 0, warnings = 0;
const fail = (f, m) => { console.log(`  ✗ FAIL  ${m}`); failures++; };
const warn = (f, m) => { console.log(`  ! WARN  ${m}`); warnings++; };
const ok = m => console.log(`  ✓ ${m}`);

// count case-insensitive occurrences of phrase in text
const count = (text, phrase) => {
  const re = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'), 'gi');
  return (text.match(re) || []).length;
};

const files = process.argv.slice(2).length ? process.argv.slice(2) : registry.map(p => p.file);

for (const file of files) {
  const reg = registry.find(p => p.file === file);
  const full = path.join(OUT, file);
  if (!fs.existsSync(full)) { console.log(`\n${file}\n  ✗ FAIL  file not found`); failures++; continue; }
  const html = fs.readFileSync(full, 'utf8');
  console.log(`\n${file}`);

  // --- strip <head>, CSS, JS, JSON-LD and comments to get visible on-page copy only
  const visible = html
    .replace(/<head>[\s\S]*?<\/head>/i, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  const textOnly = visible.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

  // 1. em-dash ban (visible copy only)
  const em = (textOnly.match(/—/g) || []).length;
  em ? fail(file, `${em} em-dash(es) in visible copy`) : ok('no em-dashes in visible copy');

  // 2. unreplaced build markers
  const marker = html.match(/<!--@[A-Z]+-->/);
  marker ? fail(file, `unreplaced marker ${marker[0]}`) : ok('no unreplaced markers');

  // 3. head essentials
  for (const [label, re] of [
    ['canonical', /<link rel="canonical" href="https:\/\/[^"]+"/],
    ['og:title', /<meta property="og:title"/],
    ['og:url', /<meta property="og:url"/],
    ['twitter:card', /<meta name="twitter:card"/],
    ['meta description', /<meta name="description" content="[^"]{50,}"/],
  ]) re.test(html) ? ok(label) : fail(file, `missing ${label}`);

  // 4. JSON-LD blocks parse + FAQ count matches DOM
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  let types = [];
  for (const b of blocks) {
    try { types.push(JSON.parse(b[1])['@type']); }
    catch (e) { fail(file, `invalid JSON-LD: ${e.message}`); }
  }
  const domFaqs = (html.match(/class="faq-item"/g) || []).length;
  const faqBlock = blocks.map(b => { try { return JSON.parse(b[1]); } catch { return null; } })
    .find(o => o && o['@type'] === 'FAQPage');
  if (!faqBlock) fail(file, 'no FAQPage JSON-LD');
  else if (faqBlock.mainEntity.length !== domFaqs) fail(file, `FAQ schema ${faqBlock.mainEntity.length} vs DOM ${domFaqs}`);
  else ok(`JSON-LD ok [${types.join(', ')}], ${domFaqs} FAQs match DOM`);
  if (domFaqs < 7) warn(file, `only ${domFaqs} FAQ items (template wants 7+)`);

  // 5. meta title / description length
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (title.length > 62) warn(file, `title ${title.length} chars (may truncate): ${title}`);
  else ok(`title ${title.length} chars`);
  if (desc.length < 120 || desc.length > 160) warn(file, `description ${desc.length} chars (want 120-160)`);
  else ok(`description ${desc.length} chars`);

  // 6. internal links resolve
  const hrefs = [...html.matchAll(/href="\/([a-z0-9-]+)"/g)].map(m => m[1]);
  const bad = [...new Set(hrefs)].filter(h => !slugs.has(h));
  bad.length ? fail(file, `dead internal link(s): ${bad.join(', ')}`) : ok(`${new Set(hrefs).size} internal link target(s) resolve`);
  if (!/href="\/"/.test(html)) warn(file, 'no link back to pillar page');

  // 7. keyword density
  const kw = KEYWORDS[reg.slug];
  if (kw) {
    const headings = (visible.match(/<h[1-3][^>]*>[\s\S]*?<\/h[1-3]>/gi) || []).join(' ').replace(/<[^>]+>/g, ' ');
    // Several secondaries contain the primary verbatim ("warehouse order fulfillment software").
    // Mask them (longest first) so the primary count reflects standalone uses only.
    const mask = t => [...kw.secondary].sort((a, b) => b.length - a.length).reduce(
      (acc, s) => acc.replace(new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'), 'gi'), ' @SEC@ '),
      t);
    const pc = count(mask(textOnly), kw.primary), ph = count(mask(headings), kw.primary);
    if (pc === 6) ok(`primary "${kw.primary}" x${pc} (${ph} in headings)`);
    else warn(file, `primary "${kw.primary}" x${pc}, want 6 (${ph} in headings)`);
    if (ph < 2) warn(file, `primary in only ${ph} heading(s), want 2`);

    let secInHeading = 0;
    for (const s of kw.secondary) {
      const c = count(textOnly, s);
      const h = count(headings, s);
      if (h > 0) secInHeading++;
      if (c === 0) fail(file, `secondary missing: "${s}"`);
      else if (c > 2) warn(file, `secondary "${s}" x${c} (want 1)`);
    }
    secInHeading > 0
      ? ok(`${kw.secondary.length} secondaries present, ${secInHeading} in a heading`)
      : warn(file, 'no secondary keyword appears in an H2/H3');
  }
}

console.log(`\n${'='.repeat(60)}\n${failures} failure(s), ${warnings} warning(s) across ${files.length} file(s).`);
process.exit(failures ? 1 : 0);
