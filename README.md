# Trevor Ludwyck Photography

Photography site — two categories, Portraits and Moments. Built with
[Astro](https://astro.build).

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`        | Start local dev server at `localhost:4321`  |
| `npm run build`       | Build production site to `./dist/`          |
| `npm run preview`      | Preview the production build locally        |

## Project structure

- `src/pages/` — one folder per route. `/portfolio/` is the category-chooser landing page (two stacked covers: Portraits, Moments), linking into `/portfolio/portraits/` and `/portfolio/moments/`, the actual masonry galleries. Also `investment/`, `about/`, `contact/`.
- `src/components/` — `Nav`, `Footer`, `Gallery`, `CategoryCover` (the reusable Portraits/Moments cover block), `PricingCalculator` (the estimate tool on `/contact/`), `ResponsiveImage`, `PricingCard`
- `src/layouts/BaseLayout.astro` — shared `<head>`, SEO meta tags, nav + footer
- `src/data/gallery.js` — every image on the site as `{ src, alt }` objects. `seniors`/`couples` combine into `portraits` (shown on `/portfolio/portraits/`); `moments` is the events gallery; `portraitsCover`/`momentsCover` are the two cover-page hero images; `home` is the curated homepage set. Real photos live in `src/assets/images/...` and are imported directly (so Astro optimizes them at build time); `seniors` still uses placeholder URLs since there are no real senior portraits yet.
- `src/data/pricing.js` — the only place real dollar figures live. Both the Investment page's pricing cards and the Contact page's estimate calculator read from this one file, so a price change only has to happen here.
- `src/styles/global.css` — design tokens (colors, fonts, spacing) and base styles

## Before launch — things left as placeholders

1. **Real photos — mostly done.** Portraits, Moments, and the About photo
   now use real images from `src/assets/images/portraits/`,
   `src/assets/images/moments/`, and `src/assets/images/about/`. Astro
   optimizes/resizes them automatically at build time. **Senior portraits
   still use picsum.photos placeholders** (no real session photos yet) — to
   add them:
   - Drop files into `src/assets/images/seniors/` (create the folder)
   - In `gallery.js`, `import` each file and add it to the `seniors` array
     the same way `couples` is built, replacing the placeholder entries
   - `ResponsiveImage.astro` already handles both local imports and
     placeholder URLs, so no other changes are needed
   - To add more Portraits/Moments/About photos later, same pattern: drop
     the file in the matching `src/assets/images/...` folder, import it in
     `gallery.js`, add it to the relevant array

2. **Contact form endpoint.** The form in `src/pages/contact/index.astro`
   posts to a Formspree endpoint. Sign up free at
   [formspree.io](https://formspree.io), create a form, and replace
   `YOUR_FORM_ID` in that file's `FORMSPREE_ENDPOINT` constant with your
   real form ID.

3. **Production domain.** `astro.config.mjs` sets `site` to a placeholder
   domain (`trevorludwyckphotography.com`) used for canonical URLs, Open
   Graph tags, and the sitemap. Update it once a real domain is live.

4. **Deploying to Vercel.** This is a static Astro site — connect the repo
   in Vercel and it will detect the Astro framework preset automatically
   (build command `npm run build`, output directory `dist`). No Supabase
   or server-side setup is needed for anything currently on the site.
