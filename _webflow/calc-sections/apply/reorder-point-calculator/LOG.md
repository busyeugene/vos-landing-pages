# reorder-point-calculator (page 6ac7652a2a715d3e702a0559), 2026-10-15

Step 1 order (original): stats, pain, setup, features, chips, tools, table, testimonial (hidden), faq. OK.

Instance ids (step 2):
- whatis 7537a1c2-1d6b-8c74-ce28-2719aa44fc0b
- who    9560bf44-3de2-fc26-f082-ad18ed4aefeb
- look   817317d6-c823-7de9-7532-fa09d011b946
- vos    c0c08585-0b5c-9bb0-5d0e-b7f30b07baaf
- next   08a22dea-6343-a3de-86f1-b75d30800b5d

Steps 3-4: unlinked (roots became Blocks, ids kept), hidden.
Step 6: gen_apply: 71 slots located, 63 writes (48 element actions in 4 batches, 15 alt ops).
Step 7: el-0..el-3 and alt-0..alt-1 sent, all success.
Step 8 verify_apply: `reorder-point-calculator: 71 slots checked, 0 mismatches; root visibility {'whatis': False, 'who': False, 'look': False, 'vos': False, 'next': False}`
Step 9: five roots shown.
Step 10 final order (get_all_elements depth 1): navbar, landing-hero, HtmlEmbed, HtmlEmbed, stats, whatis, who (#who-its-for),
setup (#how-it-works), features (#features), look (#what-to-look-for), pain, table, tools, vos (#where-vos-fits),
chips (#integrations), next, testimonial (visibility false), faq (#faq), Main CTA, Final Footer. Each DOM id once.

2026-10-15 update (upd-el/upd-alt, agent opus-5|claude-code|k7m2q9): all calls succeeded. verify_apply vs map-v2: `reorder-point-calculator: 71 slots checked, 0 mismatches; root visibility {'whatis': True, 'who': True, 'look': True, 'vos': True, 'next': True}`
