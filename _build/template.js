/* Template conformance check for the 16-section VOS page structure (CLAUDE.md "Page structure").
 * Usage: node template.js [slug...]   Exit 1 on any FAIL. WARN = worth a look, not blocking.
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const registry = require('./registry.js');
const OPERATOR = new Set(['order-entry-software', 'restaurant-purchasing-software', 'restaurant-checklist-software', 'restaurant-stock-management-software']);
const CONTACT = 'https://www.voiceordersolutions.com/contact-us';
const txt = h => h.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const words = s => s.split(/\s+/).filter(Boolean).length;

const only = process.argv.slice(2);
let F = 0, W = 0;
for (const p of registry) {
  if (only.length && !only.includes(p.slug)) continue;
  const op = OPERATOR.has(p.slug);
  const html = fs.readFileSync(path.join(REPO, p.file), 'utf8');
  const body = html.replace(/<head>[\s\S]*?<\/head>/i, '').replace(/<(style|script)[\s\S]*?<\/(style|script)>/gi, '').replace(/<!--[\s\S]*?-->/g, '');
  const out = [];
  const fail = m => { out.push('  ✗ FAIL ' + m); F++; };
  const warn = m => { out.push('  ! WARN ' + m); W++; };

  // Blocks in order
  const blocks = [];
  for (const m of body.matchAll(/<(nav|section|footer)\b([^>]*)>/g)) {
    const a = m[2];
    const cls = (a.match(/class="([^"]*)"/) || [])[1] || '';
    const id = (a.match(/id="([^"]*)"/) || [])[1] || '';
    const label = (a.match(/aria-label="([^"]*)"/) || [])[1] || '';
    let k = m[1] === 'nav' ? 'navbar' : m[1] === 'footer' ? 'footer'
      : cls.includes('hero') ? 'hero' : cls.includes('logo-bar') ? 'logos' : cls.includes('stats-strip') ? 'stats'
      : id === 'problem' ? 'problem' : id === 'features' ? 'features' : /Additional features/i.test(label) ? 'cards'
      : /Mid-page/i.test(label) ? 'midcta' : id === 'how-it-works' ? 'steps' : id === 'testimonials' ? 'testimonials'
      : id === 'integrations' ? 'integrations' : id === 'comparison' ? 'comparison' : id === 'faq' ? 'faq'
      : cls.includes('related-strip') ? 'related' : cls.includes('final-cta') ? 'finalcta' : '?' + (label || cls || id);
    blocks.push({ k, start: m.index });
  }
  const want = ['navbar', 'hero', 'logos', 'stats', 'problem', 'features', 'cards', 'midcta', 'steps', 'testimonials', 'integrations', 'comparison', 'faq', 'related', 'finalcta', 'footer'];
  const got = blocks.map(b => b.k);
  if (got.join() !== want.join()) fail('section order: ' + got.join(' > '));
  const sec = k => { const i = blocks.findIndex(b => b.k === k); if (i < 0) return ''; return body.slice(blocks[i].start, i + 1 < blocks.length ? blocks[i + 1].start : undefined); };

  // Hero
  const hero = sec('hero');
  const h1s = body.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  if (h1s.length !== 1) fail(`${h1s.length} h1`);
  const h1 = txt(h1s[0] || '');
  if (words(h1) > 8) warn(`H1 ${words(h1)} words (template 6-8): ${h1}`);
  const lead = txt((hero.match(/<p class="lead[^"]*"[^>]*>([\s\S]*?)<\/p>/) || [])[1] || '');
  if (words(lead) > 58) warn(`hero lead ${words(lead)} words (about 50 max)`);
  if (!op && !(/\b(voice|speak|say|talk)/i.test(lead) && /\bapp\b/i.test(lead))) fail('distributor hero lead must say customers order by voice in the app: ' + lead);
  if (op && !/distributor/i.test(lead)) warn('operator hero lead does not mention the distributor');
  const trust = (hero.match(/<div class="hero-trust">([\s\S]*?)<\/div>/) || [])[1] || '';
  const tItems = [...trust.matchAll(/<span>([^<]*)<\/span>/g)].map(m => m[1]);
  if (tItems.length !== 3) fail(`hero trust items ${tItems.length}`);
  const heroBtn = txt((hero.match(/<a [^>]*btn-primary[^>]*>([\s\S]*?)<\/a>/) || [])[1] || '');
  const wantHero = op ? 'Get Set Up With VOS →' : 'Book a Free Demo →';
  if (heroBtn !== wantHero) fail(`hero CTA "${heroBtn}", want "${wantHero}"`);

  // Stats
  const nums = [...sec('stats').matchAll(/<div class="stat-number">([^<]*)<\/div>/g)].map(m => m[1]);
  if (nums.length !== 3) fail(`stats ${nums.length}`);
  for (const n of nums) if (!['20-30 Min', '24/7', '24-48 Hrs', 'Same Day'].includes(n)) warn(`stat number "${n}" not in verified set`);
  if (/<h2/.test(sec('stats'))) fail('heading above stats grid');

  // Problem
  const prob = sec('problem');
  const pc = (prob.match(/class="problem-card"/g) || []).length;
  if (pc !== 3) fail(`problem cards ${pc}`);
  if (!/class="eyebrow"/.test(prob) || !/<h2/.test(prob)) fail('problem section needs eyebrow + h2');

  // Features
  const feat = sec('features');
  const rows = [...feat.matchAll(/class="feature-row( reverse)?"/g)].map(m => !!m[1]);
  if (rows.length < 3) fail(`feature rows ${rows.length}`);
  rows.forEach((r, i) => { if (r !== (i % 2 === 1)) fail(`feature row ${i + 1} alternation broken`); });
  const bulletsPerRow = feat.split(/class="feature-row/).slice(1).map(s => (s.match(/class="bullet-check"/g) || []).length);
  if (bulletsPerRow.some(n => n < 3)) warn('feature row with <3 bullets: ' + bulletsPerRow.join(','));
  const flinks = [...body.matchAll(/<a href="([^"]*)" class="feature-link"/g)].map(m => m[1]);
  const fContact = flinks.filter(h => h.includes('contact-us')).length;
  const fSib = flinks.filter(h => h.startsWith('/')).length;
  if (fSib < 2 || fSib > 4) warn(`${fSib} sibling feature-links (want 2-4)`);
  if (fContact > 1) fail(`${fContact} feature-links to contact-us (max 1)`);
  if (flinks.includes('/' + p.slug)) fail('feature-link to itself');

  // Cards
  const cards = sec('cards');
  const cc = (cards.match(/class="feature-card"/g) || []).length;
  if (cc % 3 !== 0 || cc < 3) fail(`feature cards ${cc} (want multiple of 3)`);
  const cEye = txt((cards.match(/<span class="eyebrow"[^>]*>([\s\S]*?)<\/span>/) || [])[1] || '');
  if (cEye !== 'Also Built In') fail(`cards eyebrow "${cEye}"`);

  // Mid CTA
  const mid = sec('midcta');
  const midBtn = mid.match(/<a href="([^"]*)" class="btn[^"]*"[^>]*>([\s\S]*?)<\/a>/);
  if (!midBtn || midBtn[1] !== CONTACT) fail('mid CTA link');
  else if (txt(midBtn[2]) !== 'Book a Free Demo →') fail(`mid CTA "${txt(midBtn[2])}"`);
  if (/watch your/i.test(txt(mid))) fail('mid CTA says "watch your"');

  // Steps
  const sc = (sec('steps').match(/class="step-card"/g) || []).length;
  if (sc !== 3) fail(`steps ${sc}`);

  // Testimonials
  const tst = sec('testimonials');
  const tf = (tst.match(/class="testimonial-card featured"/g) || []).length;
  const tt = (tst.match(/class="testimonial-card( featured)?"/g) || []).length;
  if (tf !== 1 || tt < 2) fail(`testimonials ${tt} (featured ${tf})`);
  if (!/Tony Luna/.test(tst)) warn('featured testimonial is not Tony Luna');

  // Integrations
  const integ = txt(sec('integrations'));
  if (/Web Browser/.test(integ)) fail('integrations says Web Browser');

  // Comparison
  const cmp = sec('comparison');
  const th = (cmp.match(/<thead>[\s\S]*?<\/thead>/) || [''])[0];
  const thCells = [...th.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map(m => txt(m[1]));
  const trs = [...((cmp.match(/<tbody>([\s\S]*?)<\/tbody>/) || [])[1] || '').matchAll(/<tr>([\s\S]*?)<\/tr>/g)];
  for (const tr of trs) {
    const n = (tr[1].match(/<td/g) || []).length;
    if (n !== thCells.length) fail(`comparison row has ${n} cells vs ${thCells.length} headers: ${txt(tr[1]).slice(0, 60)}`);
    const cells = [...tr[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(m => m[1]);
    if (cells[1] && /check-no/.test(cells[1])) out.push('  · note: honest ✗ in VOS column: ' + txt(cells[0]));
  }
  const vsLabel = (body.match(/<a href="#comparison">([^<]*)<\/a>/) || [])[1] || '';
  const others = thCells.slice(2).join(' | ');
  if (vsLabel) {
    const vsWords = vsLabel.replace(/^VOS vs\.?\s*/i, '').toLowerCase().split(/\s+/).map(w => w.replace(/s$/, '')).filter(w => w.length > 2);
    if (!vsWords.some(w => others.toLowerCase().includes(w))) warn(`footer "${vsLabel}" vs comparison columns "${others}"`);
  }

  // FAQ
  const faq = sec('faq');
  const fq = (faq.match(/class="faq-item"/g) || []).length;
  if (fq < 7) fail(`FAQ ${fq}`);
  const qs = [...faq.matchAll(/<button class="faq-question"[^>]*>([\s\S]*?)<span/g)].map(m => txt(m[1]));
  const dupQ = qs.filter((q, i) => qs.indexOf(q) !== i);
  if (dupQ.length) fail('duplicate FAQ questions');

  // Related
  const rel = sec('related');
  const rl = [...rel.matchAll(/<a class="related-card" href="\/([a-z0-9-]+)"/g)].map(m => m[1]);
  if (rl.length !== 3) fail(`related cards ${rl.length}`);
  for (const s of rl) if (OPERATOR.has(s) !== op) fail(`related card /${s} is cross-audience`);
  if (rl.includes(p.slug)) fail('related links to itself');
  if (!/href="\/"/.test(rel)) fail('related strip missing link to /');

  // Final CTA
  const fin = sec('finalcta');
  const finBtn = txt((fin.match(/<a [^>]*class="btn[^"]*"[^>]*>([\s\S]*?)<\/a>/) || [])[1] || '');
  const wantFin = op ? 'Ask About Getting Started →' : 'Book a Free Demo →';
  if (finBtn !== wantFin) fail(`final CTA "${finBtn}", want "${wantFin}"`);
  if (!/<input type="email"/.test(fin)) fail('final CTA missing email form');
  if (/Join distributors/i.test(txt(fin))) fail('"Join distributors" line');

  // Footer
  const foot = sec('footer');
  const cols = (foot.match(/class="footer-col"/g) || []).length;
  if (cols !== 3 || !/footer-brand-name/.test(foot)) fail(`footer cols ${cols}+brand`);
  const more = (foot.match(/<h5>More From VOS<\/h5>([\s\S]*?)<\/ul>/) || [])[1] || '';
  const ml = [...more.matchAll(/href="\/([a-z0-9-]*)"/g)].map(m => m[1]).filter(Boolean);
  if (ml.length < 4 || ml.length > 5) warn(`More From VOS has ${ml.length} page links (want 4-5)`);
  if (ml.includes(p.slug)) fail('footer links to itself');
  if (!ml.some(s => OPERATOR.has(s) !== op)) fail('footer has no cross-audience link');
  const overlap = ml.filter(s => rl.includes(s));
  if (overlap.length) warn('footer repeats related-strip links: ' + overlap.join(', '));

  // Heading sanity: an h2 per content section
  for (const k of ['problem', 'features', 'cards', 'steps', 'testimonials', 'comparison', 'faq', 'related', 'finalcta'])
    if (!/<h2/.test(sec(k))) fail(`section ${k} has no h2`);

  console.log(`${out.some(l => l.includes('FAIL')) ? '✗' : out.length ? '!' : '✓'} ${p.slug}  [${op ? 'operator' : 'distributor'}] rows ${rows.length}, cards ${cc}, FAQ ${fq}, compare ${thCells.length} cols x ${trs.length} rows, links: feature ${fSib}+${fContact}c, footer ${ml.length}`);
  out.forEach(l => console.log(l));
}
console.log(`\n${F} fail(s), ${W} warning(s).`);
process.exit(F ? 1 : 0);
