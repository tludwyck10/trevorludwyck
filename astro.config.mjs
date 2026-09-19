// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.trevorludwyck.com',

  integrations: [sitemap()],

  redirects: {
    '/seniors': '/portfolio/portraits',
    '/couples': '/portfolio/portraits',
    '/work': '/portfolio/portraits',
    '/portfolio/gallery': '/portfolio/portraits',
    // Investment page paused for now — send visitors straight to Contact
    // instead. Un-hide by renaming src/pages/_investment back to
    // src/pages/investment and removing this redirect + the nav/footer
    // links in Nav.astro and Footer.astro.
    '/investment': '/contact',
  },
});