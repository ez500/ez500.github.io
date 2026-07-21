// @ts-check
import { defineConfig } from 'astro/config';

// Root user site (ez500.github.io) — served from domain root, so only `site`
// is set and no `base` path is needed.
export default defineConfig({
  site: 'https://ez500.github.io',
});
