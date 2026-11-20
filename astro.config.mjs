// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dreammaibeauty-web-health-site.vercel.app',
  integrations: [sitemap()],
});
