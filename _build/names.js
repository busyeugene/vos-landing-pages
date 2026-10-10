/* Does `text` contain `name` as a whole word?
 *
 * Exists because a competitor name can contain regex metacharacters. "Cut+Dry" built into a
 * regex makes the `+` mean "one or more t", so `new RegExp(...)` silently matched "Cuttttdry"
 * and failed on the real name. Rather than escape (and get the escaping wrong in a shell
 * heredoc, which is how this was first broken), this does the boundary test directly with no
 * regex and no backslashes.
 *
 * A boundary is anything that is not a letter, so "BlueCart." and "on Cut+Dry today" both match
 * while "Pepperi" does not match "Pepper".
 */
const isLetter = c => {
  const x = c.toLowerCase();
  return x >= 'a' && x <= 'z';
};

function namesWord(text, name) {
  if (!text || !name) return false;
  const t = String(text).toLowerCase();
  const n = String(name).toLowerCase();
  let i = t.indexOf(n);
  while (i >= 0) {
    const before = i === 0 ? ' ' : t[i - 1];
    const after = i + n.length >= t.length ? ' ' : t[i + n.length];
    if (!isLetter(before) && !isLetter(after)) return true;
    i = t.indexOf(n, i + 1);
  }
  return false;
}

/* Replace every whole-word occurrence of `name` with `token`. Used to mask a page's own
 * competitor before the named-integrations ban runs over it. */
function maskWord(text, name, token) {
  if (!text || !name) return text;
  let out = String(text);
  const n = String(name).toLowerCase();
  let from = 0;
  for (;;) {
    const i = out.toLowerCase().indexOf(n, from);
    if (i < 0) return out;
    const before = i === 0 ? ' ' : out[i - 1];
    const after = i + n.length >= out.length ? ' ' : out[i + n.length];
    if (!isLetter(before) && !isLetter(after)) {
      out = out.slice(0, i) + token + out.slice(i + n.length);
      from = i + token.length;
    } else {
      from = i + 1;
    }
  }
}

/* "switches from <name>" and friends, without a regex. */
function claimsSwitchFrom(text, name) {
  if (!text || !name) return false;
  const t = String(text).toLowerCase();
  const n = String(name).toLowerCase();
  for (const verb of ['switch', 'switches', 'switched', 'switching']) {
    for (const prep of ['from', 'off']) {
      if (t.includes(verb + ' ' + prep + ' ' + n)) return true;
    }
  }
  return false;
}

module.exports = { namesWord, maskWord, claimsSwitchFrom };
