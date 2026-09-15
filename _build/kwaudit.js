/* Keyword placement audit (stricter than qa.js). Usage: node kwaudit.js [--detail] [slug...]
 * Counts keywords ONLY in page content: nav, logo bar, integrations partial, related strip and
 * footer are removed first, so a keyword cannot pass because a sibling link or footer label names it.
 * Locations: meta title, meta description, H1, H2/H3 (incl. H4 card titles reported separately),
 * body (p, li, td, card text), FAQ question, FAQ answer.
 * Rules (Eugene): primary x6 = >=2 headings, >=2 body, in >=1 FAQ question AND in a DIFFERENT FAQ answer;
 * primary in H1 and meta title; each secondary >=1 in content; >=1 secondary in an H2/H3.
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const registry = require('./registry.js');
const KW = require('./keywords.js');

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/[\s-]+/g, '[\\s-]+');
const rx = p => new RegExp('\\b' + esc(p) + '\\b', 'gi');
const count = (t, p) => (t.match(rx(p)) || []).length;
const txt = h => h.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'").replace(/\s+/g, ' ').trim();

const args = process.argv.slice(2);
const detail = args.includes('--detail');
const only = args.filter(a => !a.startsWith('--'));
let problems = 0;

for (const p of registry) {
  if (only.length && !only.includes(p.slug)) continue;
  const kw = KW[p.slug];
  const html = fs.readFileSync(path.join(REPO, p.file), 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  let body = html.replace(/<head>[\s\S]*?<\/head>/i, '')
    .replace(/<(style|script)[\s\S]*?<\/(style|script)>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<nav[\s\S]*?<\/nav>/i, '')
    .replace(/<section class="logo-bar"[\s\S]*?<\/section>/i, '')
    .replace(/<section class="section-pad" id="integrations"[\s\S]*?<\/section>/i, '')
    .replace(/<section class="related-strip"[\s\S]*?<\/section>/i, '')
    .replace(/<footer[\s\S]*?<\/footer>/i, '');

  // Split FAQ out
  const faqItems = [...body.matchAll(/<div class="faq-item">\s*<button class="faq-question"[^>]*>([\s\S]*?)<span class="faq-icon">[\s\S]*?<\/button>\s*<div class="faq-answer"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g)]
    .map(m => ({ q: txt(m[1]), a: txt(m[2]) }));
  const noFaq = body.replace(/<section class="section-pad" id="faq"[\s\S]*?<\/section>/i, '');
  const h1 = (noFaq.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || []).map(txt);
  const h23 = (noFaq.match(/<h[23][^>]*>[\s\S]*?<\/h[23]>/gi) || []).map(txt);
  const faqH2 = (body.match(/<section class="section-pad" id="faq"[\s\S]*?<\/section>/i) || [''])[0].match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
  h23.push(...faqH2.map(txt));
  const h4 = (noFaq.match(/<h4[^>]*>[\s\S]*?<\/h4>/gi) || []).map(txt);
  const bodyText = txt(noFaq.replace(/<h[1-4][^>]*>[\s\S]*?<\/h[1-4]>/gi, ' ').replace(/<span class="eyebrow"[^>]*>[\s\S]*?<\/span>/gi, ' ').replace(/<a [^>]*class="btn[^"]*"[^>]*>[\s\S]*?<\/a>/gi, ' '));

  // Mask secondaries (longest first) when counting the primary.
  const secs = [...kw.secondary].sort((a, b) => b.length - a.length);
  const mask = t => secs.reduce((acc, s) => acc.replace(rx(s), ' @SEC@ '), t);
  const P = kw.primary;
  const loc = {
    title: count(mask(title), P), desc: count(mask(desc), P),
    h1: h1.reduce((n, t) => n + count(mask(t), P), 0),
    h23: h23.reduce((n, t) => n + count(mask(t), P), 0),
    h4: h4.reduce((n, t) => n + count(mask(t), P), 0),
    body: count(mask(bodyText), P),
    faqQ: faqItems.map(f => count(mask(f.q), P)),
    faqA: faqItems.map(f => count(mask(f.a), P)),
  };
  const faqQTotal = loc.faqQ.reduce((a, b) => a + b, 0), faqATotal = loc.faqA.reduce((a, b) => a + b, 0);
  const total = loc.h1 + loc.h23 + loc.h4 + loc.body + faqQTotal + faqATotal;
  const headings = loc.h1 + loc.h23 + loc.h4;
  // FAQ split: some question i has it AND some answer j != i has it
  const qi = loc.faqQ.map((c, i) => c ? i : -1).filter(i => i >= 0);
  const aj = loc.faqA.map((c, i) => c ? i : -1).filter(i => i >= 0);
  const split = qi.some(i => aj.some(j => j !== i));

  const issues = [];
  if (!loc.h1) issues.push('primary not in H1');
  if (!loc.title) issues.push('primary not in meta title');
  if (!loc.desc) issues.push('primary not in meta description');
  if (headings < 2) issues.push(`primary in ${headings} heading(s), want 2`);
  if (loc.body < 2) issues.push(`primary in body ${loc.body}x, want 2`);
  if (!split) issues.push(`FAQ split missing (Q idx ${JSON.stringify(qi)}, A idx ${JSON.stringify(aj)})`);
  if (total < 6) issues.push(`primary total ${total} in content, want 6`);

  const secRows = [];
  let secInH23 = 0;
  for (const s of kw.secondary) {
    const h = h1.concat(h23).reduce((n, t) => n + count(t, s), 0);
    const h4c = h4.reduce((n, t) => n + count(t, s), 0);
    const b = count(bodyText, s);
    const fq = faqItems.reduce((n, f) => n + count(f.q, s), 0);
    const fa = faqItems.reduce((n, f) => n + count(f.a, s), 0);
    const all = h + h4c + b + fq + fa;
    if (h) secInH23++;
    if (!all) issues.push(`secondary MISSING from content: "${s}"`);
    secRows.push(`    ${String(all).padStart(2)}x  H1-3:${h} H4:${h4c} body:${b} faqQ:${fq} faqA:${fa}  "${s}"`);
  }
  if (!secInH23) issues.push('no secondary in an H1/H2/H3');

  problems += issues.length;
  console.log(`\n${p.slug}  ${issues.length ? '✗ ' + issues.length + ' issue(s)' : '✓'}`);
  console.log(`  primary "${P}": content ${total} | title ${loc.title} desc ${loc.desc} | H1 ${loc.h1} H2/3 ${loc.h23} H4 ${loc.h4} | body ${loc.body} | FAQ Q ${faqQTotal} (idx ${qi}) A ${faqATotal} (idx ${aj})`);
  if (detail || issues.length) secRows.forEach(r => console.log(r));
  issues.forEach(i => console.log('  ✗ ' + i));
  if (detail) {
    // print each sentence containing a keyword, for the naturalness read
    const all = [title, desc, ...h1, ...h23, ...h4, ...faqItems.flatMap(f => [f.q, f.a]), ...bodyText.split(/(?<=[.!?])\s+/)];
    for (const k of [P, ...kw.secondary]) {
      for (const s of new Set(all.flatMap(t => t.split(/(?<=[.!?])\s+/)).filter(t => count(t, k)))) console.log(`      [${k}] ${s}`);
    }
  }
}
console.log(`\n${problems} keyword placement issue(s).`);
process.exit(problems ? 1 : 0);
