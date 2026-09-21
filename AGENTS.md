# Trevor Ludwyck Photography — CLAUDE.md

Editorial portrait/event photography site for Trevor Ludwyck, based in
Celina, TX (serving Dallas–Fort Worth). Three service categories:
**Portraits** (senior, couples, engagement, professional), **Moments**
(events — weddings, rehearsal dinners, receptions), and **Outdoors**
(outdoor lifestyle photography). Brand is deliberately minimal:
near-monochrome palette, restrained typography, no JS framework.

## Tech stack

- **Astro 7**, static output (`output: 'static'`, the default) — no
  server/SSR anywhere on this site.
- **No UI framework.** All interactivity (mobile nav toggle, pricing
  calculator, contact form conditional fields, "My Three Pillars"
  disclosure) is vanilla TypeScript in small per-component `<script>`
  tags. Keep it that way — don't reach for React/Vue/etc.
- **Fonts:** `@fontsource/inter` + `@fontsource/space-grotesk`,
  self-hosted (imported in `src/styles/global.css`). No Google Fonts CDN
  request at runtime.
- **`@astrojs/sitemap`** integration — sitemap is auto-generated at build.
- **Images:** Astro's built-in `astro:assets` image service (Sharp) for
  real local photos. See [Images](#images) below.
- **Form backend:** Formspree (`https://formspree.io/f/xppwwvgj`) — no
  server code, the `<form>` just POSTs there directly.
- **Hosting:** Vercel, auto-deploys on push to `main` on GitHub
  (`tludwyck10/trevorludwyck`). Domain `www.trevorludwyck.com` was
  purchased through Vercel, so DNS is auto-managed — nothing to configure
  if it's ever disconnected/reconnected.

### Commands

```bash
npm install       # install deps
npm run dev        # localhost:4321
npm run build       # outputs to ./dist/
npm run preview      # serve the production build locally
```

Node `>=22.12.0` required (see `engines` in `package.json`).

Astro's dev server runs as a background daemon. If it reports "already
running" on a stale port/pid, run `npx astro dev stop` before starting a
new one (`astro dev status` / `astro dev logs` also available).

## Folder structure

```
src/
  pages/            one folder per route (file-based routing)
    index.astro           homepage — masonry of curated real photos, no hero
    portfolio/
      index.astro          category chooser: stacked "cover" blocks
                            (Portraits / Moments / Outdoors), click-through
                            to galleries
      portraits/index.astro  Portraits masonry gallery
      moments/index.astro    Moments masonry gallery
      outdoors/index.astro   Outdoors masonry gallery
    about/index.astro     bio + "My Three Pillars" click-to-expand section
    contact/index.astro   inquiry form, fields change based on session type
    _investment/index.astro  PAUSED — see "Known quirks" below
  components/
    Nav.astro, Footer.astro      site chrome; nav link list lives in Nav.astro
    Gallery.astro                masonry grid (CSS columns), used by both
                                  Portfolio gallery pages and the homepage
    CategoryCover.astro          the big single-photo cover block on /portfolio/
    ResponsiveImage.astro        the ONE component every <img> on the site
                                  renders through — see Images section
    PricingCard.astro, PricingCalculator.astro   used by the paused
                                  Investment page + its calculator
  data/
    gallery.js       every image + alt text on the site, organized by section
    pricing.js       the only place real dollar figures live
  layouts/
    BaseLayout.astro  <head>, SEO meta tags, wraps Nav + <slot /> + Footer
  styles/
    global.css        design tokens (CSS custom properties) + base styles
  assets/images/      real photo source files (see Images section)
public/                served as-is, unprocessed: favicon.svg, favicon.ico, robots.txt
```

## Design decisions & style conventions

- **Palette:** near-monochrome + one accent, all defined as CSS custom
  properties in `global.css` — `--color-black` (#14120f), `--color-white`,
  `--color-cream` (#f4f0e9), `--color-warm-grey` (#7a746a), `--color-gold`
  (#c9a15c, the *only* accent color, used sparingly: CTAs, active nav
  state, dividers). Don't add other colors.
- **Two typefaces only:**
  - `--font-display`: Space Grotesk — headings (h1–h3 default to weight
    500), big display moments (e.g. the "PORTFOLIO"-style cover titles at
    weight 700).
  - `--font-sans`: Inter — body copy, nav, UI, form fields, **and the
    wordmark**. (Space Grotesk was tried for the wordmark first but its
    letterforms — particularly the flared "D" — looked off at that use;
    Inter extrabold was swapped in instead. Keep the wordmark in Inter.)
- **Wordmark pattern:** `TREVOR LUDWYCK | PHOTOGRAPHY` — extrabold name +
  a thin gold vertical rule + a lighter, letter-spaced "Photography".
  Reused in miniature as the favicon (black square, white "T | L", gold
  rule between them).
- **Spacing scale:** `--space-xs` through `--space-xl` (0.5rem → 7rem) in
  `global.css`. Use these tokens, don't hardcode arbitrary spacing.
- **Sharp corners everywhere.** No `border-radius` anywhere on the site —
  buttons, pricing cards, image frames, form fields are all zero-radius.
  1px borders in `--color-border` (#e4ded2) for dividers/frames.
- **Galleries are CSS-columns masonry**, not CSS grid (`column-count: 3`
  desktop / `2` tablet / `1` mobile in `Gallery.astro`) — lets images keep
  their natural aspect ratio so the page reads like an editorial mosaic
  rather than a uniform grid of identical crops.
- **Nav has two variants** (`Nav.astro` `variant` prop): `'overlay'`
  (transparent bar, white text — for a full-bleed dark hero; currently
  unused since the homepage lost its hero) and `'solid'` (sticky white
  bar, dark text — the default everywhere now). An overlay nav switches to
  the solid look once scrolled 40px (`.is-scrolled`).
- **Voice:** direct, short sentences, no exclamation points, no
  photography-marketing clichés ("capturing your special moments"), no
  superlatives ("best in DFW"). "Less is more" is literally the About
  page headline — the brand's restraint is a stated value, not just an
  aesthetic default. When in doubt, cut, don't add.

## Images

Every image on the site renders through **`ResponsiveImage.astro`**,
which branches on the `src` prop type:

1. **Real local photos** — imported as ES modules from
   `src/assets/images/**` in `gallery.js`, passed as an `ImageMetadata`
   object. Rendered via Astro's `<Image>` (`astro:assets`): auto-resized,
   converted to WebP, quality 82, at build time. Requested responsive
   widths are **clamped to the source's actual pixel width** so nothing
   ever gets upscaled (a real bug was found and fixed here — upscaling
   past source resolution visibly blurs the image on large/HiDPI
   screens).
2. **Remote placeholder URLs** (picsum.photos or Unsplash) — rendered as
   a plain `<img>` with a manually-built `srcset`. Currently only used
   for `seniors` (empty — no real senior photos yet) and the three "My
   Three Pillars" stock photos on the About page.

**To add a real photo:**
1. Drop the file in `src/assets/images/<section>/` (create the folder if
   it's a new section, e.g. `seniors/`).
2. Name it lowercase-kebab-case, descriptive + numbered (e.g.
   `couple-04.jpg`, not the camera's original filename).
3. `import` it at the top of `src/data/gallery.js`.
4. Add it to the relevant exported array/object with real, descriptive
   alt text (not "Placeholder — ...").

Nothing else needs to change — `ResponsiveImage` and every page that
consumes `gallery.js` picks it up automatically.

**Color treatment:** real photos are shot black-and-white already. If a
placeholder/stock photo is in color, desaturate it with CSS
(`filter: grayscale(1)`, see the `grayscale` flag pattern in
`gallery.js`'s `pillars` object) rather than leaving it in color — the
palette needs to stay near-monochrome even with mismatched source
material.

**Cover images** (the big single-photo blocks on `/portfolio/`) currently
just reuse the strongest photo already in that category's own gallery
array — there's no separate cover-only image file.

## Adding/updating content

- **New senior portraits:** import + add to the `seniors` array in
  `gallery.js` (currently empty). The `portraits` export interleaves
  `seniors` + `couples` automatically via the `interleave()` helper — no
  template changes needed once `seniors` has entries.
- **New page:** create `src/pages/<route>/index.astro`, import
  `BaseLayout`, wrap content in it. Add a nav link to both `Nav.astro`'s
  `links` array and `Footer.astro` if it should appear in site nav.
- **Pricing changes:** edit only `src/data/pricing.js`. Both the (paused)
  Investment page and `PricingCalculator.astro` read from it — never
  hardcode a dollar figure elsewhere.
- **Copy changes:** content lives directly in each page's `.astro` file
  as markup — there's no CMS or markdown layer. Just edit the text in
  place.
- **Restoring the Investment page:** rename `src/pages/_investment` →
  `src/pages/investment`, remove the `'/investment': '/contact'` redirect
  in `astro.config.mjs`, and add the nav link back to `Nav.astro` +
  `Footer.astro`.

## Always / never

- **Always get explicit confirmation before `git push`.** Standard
  workflow throughout this project: commit locally after each change,
  wait for the user to say "push" / "push live" before publishing.
  Verify a deploy after pushing (GitHub commit status API + a live-site
  spot check), don't just assume success.
- **Never invent visual-identity specifics** (fonts, hex values, imagery,
  copy direction) without asking first — this was an explicit standing
  instruction from the original brief and holds for any new visual
  decision.
- **Never imply the business does anything outside Portraits + Moments +
  Outdoors** (e.g. don't invent a "family photography" or "product
  photography" offering) — the three-category scope is deliberate, not
  incomplete.
- **Default to less, not more.** Several rounds of this project's history
  were "actually, simplify this" (homepage went hero+intro+grid → just a
  masonry grid; Portfolio covers went title+copy+CTA → just "View the
  Gallery"). If unsure whether a section needs more content, it probably
  doesn't.
- **Don't add a UI framework, a CSS framework, or new npm dependencies**
  without a clear reason — the codebase's simplicity is intentional and
  matches the brand's own stated values.

## Known quirks / unfinished

- **Investment page is intentionally paused**, not deleted — see
  "Restoring the Investment page" above. `/investment` currently
  redirects to `/contact`.
- **Senior portraits gallery is empty** (`seniors = []` in `gallery.js`)
  — the Portraits gallery currently only shows the 3 real couples photos
  until real senior session photos are added.
- **Outdoors gallery has only 1 photo so far** (`outdoors` in
  `gallery.js`) — same single image is reused as both the gallery entry
  and the category cover on `/portfolio/`. Add more the same way as any
  other section once more session photos are ready.
- **"My Three Pillars"** (About page) uses 3 free-license Unsplash stock
  photos as placeholders — meant to be swapped for Trevor's own photos
  eventually, same process as any other image swap.
- **Old routes redirect:** `/work`, `/seniors`, `/couples`,
  `/portfolio/gallery` all → `/portfolio/portraits` (config in
  `astro.config.mjs`) — kept in case anything indexed/bookmarked the old
  URLs from earlier in the project.
- **Vercel had a platform-wide incident** ("Elevated Errors Triggering
  Deployments") during this project's build that caused several
  deployments to jam or get stuck "Initializing" — unrelated to this
  codebase. If a deploy ever seems stuck again, check
  <https://www.vercel-status.com/> before assuming it's a code problem.
- Git commits are authored as `Trevor Ludwyck <trevorludwyck@gmail.com>`
  (global git config was broken — falling back to a machine-local email —
  until this was fixed partway through the project).
