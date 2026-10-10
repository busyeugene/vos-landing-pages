# /free-tools card icons

23 white 256x256 SVGs, one per calculator card on the Webflow `/free-tools` page.

Source: `Lead magnets VOS/webflow-images/_icons/vos-*.svg` (48x48, `stroke="#0099e6"`,
7 of them also carrying an inner `fill="#0099e6"`).

Converted here by wrapping the inner markup in `<g transform="scale(5.333333)">`, setting the
viewBox to `0 0 256 256`, replacing every `#0099e6` with `#ffffff`, and raising stroke-width from
2.5 to 3.2 so the line weight reads like the icons8 solid glyphs on `/solutions` at 32px.

**Why white is mandatory.** The card tile is `walsh-icon-wrapper-circle gradient solid`, which the
live stylesheet renders as a solid `#0099e6` 56x56 rounded square, and `walsh-solid-icon` only sets
`height: 32px`. Nothing recolours the image, so an icon stroked in the brand blue would be
invisible on the tile. (`solutions-icons.json` describes this tile as purple and as recolouring a
white glyph; both are wrong, see `free-tools.json` > `iconTile.correction`.)

Asset ids in Webflow are recorded per card in `_webflow/free-tools.json`.
