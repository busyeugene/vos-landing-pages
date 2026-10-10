/* Share of voice on a compare page: is the page promoting VOS, or the competitor?
 *
 * WHY THIS EXISTS
 * Eugene, 2026-10-10: "I want to be 10000% sure that with these pages we're promoting VOS, not
 * competitors." The existing tools answer neighbouring questions and none answers this one:
 * `balance.js` counts who takes each comparison row, `vosfacts.js` counts which verified facts
 * appear ANYWHERE (and over-reports, because a fact buried in bullet 5 of 5 scores the same as
 * one in the H1), and `grid.js` shows sameness across pages rather than tilt within a page.
 *
 * THE RULE THIS MEASURES
 * A fact is only promoted if it sits where a buyer reads it. So this scores the HIGH-ATTENTION
 * slots only (H1, the hero lead's first sentence, the hero trust line, the stats strip, the
 * comparison lead, the problem cards, the table, both CTAs) and asks of each: does it advance
 * VOS, or the competitor?
 *
 * It prints, it never fails: like grid.js the judgement stays human. A high score is not
 * automatically wrong, since conceding real wins is house policy. It is wrong when the
 * competitor holds the slots that sell.
 *
 * Usage: node promote.js
 */
const fs = require('fs');
const path = require('path');
const registry = require('./registry.js');
const { namesWord } = require('./names.js');

const txt = s => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const sect = (h, re) => { const m = h.match(re); return m ? m[0] : ''; };
const SEC = {
  hero: /<section class="hero"[\s\S]*?<\/section>/i,
  stats: /<section class="stats-strip"[\s\S]*?<\/section>/i,
  cmp: /<section[^>]*id="comparison"[\s\S]*?\n<\/section>/i,
  prob: /<section[^>]*id="problem"[\s\S]*?\n<\/section>/i,
  mid: /<section aria-label="Mid-page call to action"[\s\S]*?<\/section>/i,
  final: /<section class="final-cta"[\s\S]*?<\/section>/i,
};

// Absence framing: the slot sells by what is NOT there rather than by what the buyer gets.
const ABSENCE = /\b(no|not|nothing|never|neither|none|without|only|narrow|narrower|stops at|leaves|cannot|untouched|nobody)\b/i;

// A competitor-complimentary move inside VOS's own "why teams look elsewhere" section.
const PRAISE = /\b(genuinely|clever|good result|right buy|serious piece|sensible|more than most|worth paying|fair number|and it should|earning their money|impressive)\b/i;

// Mid-CTA closing on a promise of limitations (the pass-6 defect, fixed on the final CTA only).
const MIDLIMIT = /(what VOS (leaves|does not|will never)|where VOS ends|about the limits|which parts stay yours|does not touch|does not cover|leaves alone)/i;

const firstSentence = s => (s.split(/(?<=[.!?])\s+/)[0] || '').trim();

const rows = [];
for (const p of registry.filter(x => x.kind === 'compare')) {
  const h = fs.readFileSync(path.join(__dirname, '..', p.file), 'utf8');
  const C = p.competitor;
  const hero = sect(h, SEC.hero);
  const cmp = sect(h, SEC.cmp);
  const prob = sect(h, SEC.prob);

  const h1 = txt((h.match(/<h1>([\s\S]*?)<\/h1>/i) || [])[1] || '');
  const heroLead = txt((hero.match(/<p class="lead mt-16">([\s\S]*?)<\/p>/i) || [])[1] || '');
  const trust = [...hero.matchAll(/<span>([^<]+)<\/span>/gi)].map(m => txt(m[1]));
  const statLabels = [...sect(h, SEC.stats).matchAll(/<div class="stat-label">([\s\S]*?)<\/div>/gi)].map(m => txt(m[1]));
  const cmpLead = txt((cmp.match(/<p class="lead mt-16">([\s\S]*?)<\/p>/i) || [])[1] || '');
  const probLead = txt((prob.match(/<p class="lead mt-16">([\s\S]*?)<\/p>/i) || [])[1] || '');
  const probCards = [...prob.matchAll(/<div class="problem-card">([\s\S]*?)<\/div>/gi)].map(m => txt(m[1]));
  const midBody = txt((sect(h, SEC.mid).match(/<p[^>]*>([\s\S]*?)<\/p>/i) || [])[1] || '');
  const finalBody = txt((sect(h, SEC.final).match(/<p[^>]*>([\s\S]*?)<\/p>/i) || [])[1] || '');

  const trs = [...cmp.matchAll(/<tr>([\s\S]*?)<\/tr>/gi)].map(r => {
    const c = [...r[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)];
    if (!c.length) return null;
    const mark = x => (/\bcheck-yes\b/.test(x) ? 'Y' : 'T');
    return {
      label: txt(c[0][1]),
      vos: mark(c[1] ? c[1][1] : ''), comp: mark(c[2] ? c[2][1] : ''),
      vosTxt: txt(c[1] ? c[1][1] : ''), compTxt: txt(c[2] ? c[2][1] : ''),
    };
  }).filter(Boolean).filter(r => r.label);

  const vosWin = trs.filter(r => r.vos === 'Y' && r.comp !== 'Y').length;
  const compWin = trs.filter(r => r.comp === 'Y' && r.vos !== 'Y').length;
  const vosBlank = trs.filter(r => /^(not offered|not what it does|none|never|no\b)/i.test(r.vosTxt)).length;
  /* The final row only counts against VOS when its VOS cell reads as a deficit: either framed as
   * an absence, or so much shorter than the competitor's that the row scans as a shortfall. A
   * neutral "where it fits" fork states a scope choice and is not a loss, so it does not count.
   * Without this the metric pushed copy toward padding the VOS cell, which is gaming, not fixing. */
  const last = trs[trs.length - 1] || {};
  const lastVosWords = String(last.vosTxt || '').split(/[ ,]+/).filter(Boolean).length;
  const lastCompWords = String(last.compTxt || '').split(/[ ,]+/).filter(Boolean).length;
  const lastLoss = last.vos !== 'Y' &&
    (ABSENCE.test(last.vosTxt || '') || lastCompWords > lastVosWords * 2.5);

  rows.push({
    slug: p.slug.replace('-alternative', ''),
    h1Comp: namesWord(h1, C),
    h1Absence: ABSENCE.test(h1),
    heroCompFirst: namesWord(firstSentence(heroLead), C) && !/^VOS\b/i.test(firstSentence(heroLead)),
    trustAbsence: trust.filter(t => ABSENCE.test(t)).length,
    trustN: trust.length,
    statsSetupDup: statLabels.filter(l => /24.?48|same day|go.?live|setup|first order/i.test(l)).length,
    cmpLeadCompFirst: namesWord(firstSentence(cmpLead), C) && !/^VOS\b/i.test(firstSentence(cmpLead)),
    cmpLeadCounts: /\b(first|top)\b[^.]{0,40}\b(two|three|four|five|six)\b|\b(two|three|four|five|six)\b[^.]{0,25}rows/i.test(cmpLead),
    praise: probCards.concat([probLead]).filter(c => PRAISE.test(c)).length,
    vosWin, compWin, vosBlank, lastLoss,
    midLimit: MIDLIMIT.test(midBody),
    finalAbsence: ABSENCE.test(finalBody),
  });
}

const flag = v => (v ? 'X' : '.');
console.log('');
console.log('HIGH-ATTENTION SLOTS: who does each one advance?');
console.log('X = the slot advances the competitor, or sells VOS by what is absent.');
console.log('');
console.log('page          H1nam H1abs heroCOMP trust stats cmpCOMP cmpCNT prais tbl V/C/blank lastLoss midLIM finAbs  SCORE');
let tot = 0;
for (const r of rows) {
  const score =
    [r.h1Absence, r.heroCompFirst, r.cmpLeadCompFirst, r.cmpLeadCounts, r.lastLoss, r.midLimit, r.finalAbsence].filter(Boolean).length +
    (r.trustAbsence === r.trustN ? 1 : 0) +
    (r.statsSetupDup >= 2 ? 1 : 0) +
    (r.praise >= 2 ? 1 : 0) +
    (r.vosWin < r.compWin ? 1 : 0);
  tot += score;
  console.log(
    r.slug.padEnd(13) +
    flag(r.h1Comp).padEnd(6) + flag(r.h1Absence).padEnd(6) + flag(r.heroCompFirst).padEnd(9) +
    (r.trustAbsence + '/' + r.trustN).padEnd(6) + String(r.statsSetupDup).padEnd(6) +
    flag(r.cmpLeadCompFirst).padEnd(8) + flag(r.cmpLeadCounts).padEnd(7) + String(r.praise).padEnd(6) +
    (r.vosWin + '/' + r.compWin + '/' + r.vosBlank).padEnd(14) +
    flag(r.lastLoss).padEnd(9) + flag(r.midLimit).padEnd(7) + flag(r.finalAbsence).padEnd(8) +
    score + '/11'
  );
}
console.log('');
console.log('mean tilt ' + (tot / rows.length).toFixed(1) + '/11    0 = the page sells VOS throughout.  11 = every selling slot is spent on the competitor or on an absence.');
console.log('');
console.log('H1nam   H1 names the competitor          H1abs    H1 sells by absence');
console.log('heroCOMP hero lead opens on the competitor   trust   hero trust bullets framed as absences');
console.log('stats   stat slots spent on setup speed   cmpCOMP  comparison lead opens on the competitor');
console.log('cmpCNT  comparison lead counts rows (the claim interleave.js invalidated)');
console.log('prais   complimentary moves in "why teams look elsewhere"');
console.log('tbl     VOS-only ticks / competitor-only ticks / VOS blank cells');
console.log('lastLoss final table row is a VOS loss   midLIM  mid-CTA closes on a limitation');
