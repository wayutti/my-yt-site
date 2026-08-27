import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://kogasaoshi.com', // ←ここをご自身の独自ドメイン（URL）に変更
  integrations: [mdx()]
});