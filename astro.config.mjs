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
  },
});