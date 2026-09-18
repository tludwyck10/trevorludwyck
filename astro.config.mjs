// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update to the real production domain once one is chosen/registered.
  site: 'https://trevorludwyckphotography.com',

  integrations: [sitemap()],

  redirects: {
    '/seniors': '/work',
    '/couples': '/work',
  },
});