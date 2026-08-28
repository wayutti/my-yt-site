import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  site: 'https://kogasaoshi.com',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
});