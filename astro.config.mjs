import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shivamashtikar.com',
  base: '/',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  compressHTML: true,
  build: {
    format: 'directory',
  },
  vite: {
    css: {
      postcss: './postcss.config.js',
    },
  },
});
