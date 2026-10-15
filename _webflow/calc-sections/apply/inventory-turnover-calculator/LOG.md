# inventory-turnover-calculator (page 6ac7252ae188e18d1d906bba), 2026-10-15

Step 1 order (original): stats, pain, setup, features, chips, tools, table, testimonial (hidden), faq. OK.

Instance ids (step 2):
- whatis 533f1ece-74bc-c64a-a497-5a3e4136e00a
- who    34400c8c-98b7-2900-76af-ac2ac4d01b12
- look   ed1a9756-2fe1-7731-7c7d-8c23bb8e6974
- vos    8d8cd081-2d59-68e3-d040-d1d2c856492f
- next   45189025-f6ff-1e05-ca58-b3188e542d8f

Steps 3-4: unlinked (roots became Blocks, ids kept), hidden.
Step 6: gen_apply: 71 slots located, 63 writes (48 element actions in 4 batches, 15 alt ops).
Step 7: el-0..el-3 and alt-0..alt-1 sent, all success.
Step 8 verify_apply: `inventory-turnover-calculator: 71 slots checked, 0 mismatches; root visibility {'whatis': False, 'who': False, 'look': False, 'vos': False, 'next': False}`
Step 9: five roots shown.
Step 10 final order (get_all_elements depth 1): navbar, landing-hero, HtmlEmbed, HtmlEmbed, stats, whatis, who (#who-its-for),
setup (#how-it-works), features (#features), look (#what-to-look-for), pain, table, tools, vos (#where-vos-fits),
chips (#integrations), next, testimonial (visibility false), faq (#faq), Main CTA, Final Footer. Each DOM id once.
Note (not touched, outside scope): the pre-existing Main CTA Text 1 says "sends every order in digitized and confirmed".

2026-10-15 update (upd-el/upd-alt, agent opus-5|claude-code|k7m2q9): all calls succeeded. verify_apply vs map-v2: `inventory-turnover-calculator: 71 slots checked, 0 mismatches; root visibility {'whatis': True, 'who': True, 'look': True, 'vos': True, 'next': True}`
