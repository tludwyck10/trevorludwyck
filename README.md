# Trevor Ludwyck Photography

Photography site — three categories: Portraits, Moments, and Outdoors.
Built with [Astro](https://astro.build).

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`        | Start local dev server at `localhost:4321`  |
| `npm run build`       | Build production site to `./dist/`          |
| `npm run preview`      | Preview the production build locally        |

## Project structure

- `src/pages/` — one folder per route. `/portfolio/` is the category-chooser landing page (stacked covers: Portraits, Moments, Outdoors), linking into `/portfolio/portraits/`, `/portfolio/moments/`, and `/portfolio/outdoors/`, the actual masonry galleries. Also `about/`, `contact/`. `_investment/` (underscore prefix) is paused/excluded from the build — see below.
- `src/components/` — `Nav`, `Footer`, `Gallery`, `CategoryCover` (the reusable Portraits/Moments cover block), `PricingCalculator` (the estimate tool on `/contact/`), `ResponsiveImage`, `PricingCard`
- `src/layouts/BaseLayout.astro` — shared `<head>`, SEO meta tags, nav + footer
- `src/data/gallery.js` — every image on the site as `{ src, alt }` objects. `seniors`/`couples` combine into `portraits` (shown on `/portfolio/portraits/`); `moments` is the events gallery; `portraitsCover`/`momentsCover` are the two cover-page hero images; `home` is the curated homepage set. Real photos live in `src/assets/images/...` and are imported directly (so Astro optimizes them at build time); `seniors` still uses placeholder URLs since there are no real senior portraits yet.
- `src/data/pricing.js` — the only place real dollar figures live. Both the Investment page's pricing cards and the Contact page's estimate calculator read from this one file, so a price change only has to happen here.
- `src/styles/global.css` — design tokens (colors, fonts, spacing) and base styles

## Status

- **Live** at [www.trevorludwyck.com](https://www.trevorludwyck.com),
  deployed on Vercel, auto-deploying from this repo's `main` branch.
- **Contact form is wired up** — posts to a real Formspree endpoint.
- **Real photos** are in for Portraits, Moments, and the About page —
  imported from `src/assets/images/...` and optimized by Astro at build
  time. **Senior portraits still use placeholder images** (no real
  session photos yet):
  - Drop files into `src/assets/images/seniors/` (create the folder)
  - In `gallery.js`, `import` each file and add it to the `seniors` array
    the same way `couples` is built
  - `ResponsiveImage.astro` already handles both local imports and
    placeholder URLs, so no other changes are needed
  - Same pattern for adding more Portraits/Moments/About photos later
- **Investment (pricing) page is paused**, not deleted — see
  `CLAUDE.md`/`AGENTS.md` for how to restore it.

See `CLAUDE.md` (symlinked to `AGENTS.md`) for the full architecture
guide, design conventions, and known quirks.
