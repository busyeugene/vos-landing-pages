/* Readable outline of a built page for reviewers: visible copy only, tagged by element, sections
 * marked, author comments / CSS / JSON-LD dropped. Usage: node outline.js <slug> [outDir]
 * Without outDir prints to stdout; with outDir writes <outDir>/<slug>.txt (use "all" as slug for every page).
 */
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..');
const registry = require('./registry.js');

const clean = s => s.replace(/<br\s*\/?>/gi, ' / ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

function outline(p) {
  const html = fs.readFileSync(path.join(REPO, p.file), 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  let b = html.replace(/<head>[\s\S]*?<\/head>/i, '')
    .replace(/<(style|script)[\s\S]*?<\/(style|script)>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ');
  const out = [`PAGE: /${p.slug}`, `META TITLE: ${title}`, `META DESCRIPTION: ${desc}`, ''];
  // Tokenise into the elements we care about, in document order.
  const re = /<(section|footer|nav)\b([^>]*)>|<(h[1-6])[^>]*>([\s\S]*?)<\/\3>|<span class="eyebrow"[^>]*>([\s\S]*?)<\/span>|<li[^>]*>([\s\S]*?)<\/li>|<p\b([^>]*)>([\s\S]*?)<\/p>|<a ([^>]*)>([\s\S]*?)<\/a>|<div class="(img-placeholder[^"]*|stat-number|stat-label|faq-answer|author-name|author-role|footer-brand-name|step-number)"[^>]*>([\s\S]*?)<\/div>|<button class="faq-question"[^>]*>([\s\S]*?)<span|<tr>([\s\S]*?)<\/tr>|<span>([^<]{3,})<\/span>/gi;
  let m, inList = false;
  const seenLi = new Set();
  while ((m = re.exec(b))) {
    if (m[1]) {
      const attrs = m[2];
      const label = (attrs.match(/aria-label="([^"]*)"/) || [])[1] || (attrs.match(/class="([^"]*)"/) || [])[1] || m[1];
      const id = (attrs.match(/id="([^"]*)"/) || [])[1];
      out.push('', `==== ${m[1].toUpperCase()}: ${label}${id ? ' #' + id : ''} ====`);
    } else if (m[3]) out.push(`[${m[3].toUpperCase()}] ${clean(m[4])}`);
    else if (m[5] !== undefined) out.push(`[eyebrow] ${clean(m[5])}`);
    else if (m[6] !== undefined) {
      const t = clean(m[6]).replace(/^✓\s*/, '');
      out.push(`  - ${t}`);
      // skip the anchors nested inside this li (footer links)
      const href = (m[6].match(/href="([^"]*)"/) || [])[1];
      if (href) out[out.length - 1] += `  (-> ${href})`;
    }
    else if (m[8] !== undefined) out.push(`[p${/testimonial-quote/.test(m[7]) ? ' quote' : ''}] ${clean(m[8])}`);
    else if (m[9]) {
      const href = (m[9].match(/href="([^"]*)"/) || [])[1];
      const cls = (m[9].match(/class="([^"]*)"/) || [])[1] || '';
      out.push(`[link${cls ? ' .' + cls.split(' ')[0] : ''}] ${clean(m[10])} (-> ${href})`);
    }
    else if (m[11]) out.push(`[${m[11].split(' ')[0]}] ${clean(m[12])}`);
    else if (m[13] !== undefined) out.push(`[FAQ Q] ${clean(m[13])}`);
    else if (m[14] !== undefined) {
      const cells = [...m[14].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(c => clean(c[1]) || '(blank)');
      out.push(`  | ${cells.join(' | ')}`);
    }
    else if (m[15] !== undefined) out.push(`[span] ${clean(m[15])}`);
  }
  return out.join('\n');
}

const [slug, dir] = process.argv.slice(2);
const pages = slug === 'all' ? registry : registry.filter(p => p.slug === slug);
if (!pages.length) { console.error('unknown slug'); process.exit(1); }
for (const p of pages) {
  const text = outline(p);
  if (dir) { fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(path.join(dir, p.slug + '.txt'), text); }
  else console.log(text);
}
