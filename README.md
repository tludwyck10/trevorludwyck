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
- `src/components/` — `Nav`, `Footer`, `Gallery`, `CategoryCover` (the reusable Portraits/Moments cover block), `ResponsiveImage`, `PricingCard`
- `src/layouts/BaseLayout.astro` — shared `<head>`, SEO meta tags, nav + footer
- `src/data/gallery.js` — every image on the site as `{ src, alt }` objects. `seniors`/`couples` combine into `portraits` (shown on `/portfolio/portraits/`); `moments` is the events gallery; `portraitsCover`/`momentsCover` are the two cover-page hero images; `home` is the curated homepage set
- `src/styles/global.css` — design tokens (colors, fonts, spacing) and base styles

## Before launch — things left as placeholders

1. **Real photos.** All images are placeholders from picsum.photos, wired
   through `src/data/gallery.js`. To swap in real photography:
   - Drop files into `public/images/...`
   - Change each entry's `src` in `gallery.js` to the local path (e.g.
     `/images/portraits/01.jpg`)
   - Once real local images are in use, switch `ResponsiveImage.astro` to
     Astro's built-in `<Image>` (`astro:assets`) for real image
     optimization/resizing — the picsum srcset logic in that component is
     only there to keep placeholder pages honestly responsive.

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
