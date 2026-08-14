import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // site fixo para o sitemap e URLs canônicas; o CI passa --site/--base
  // equivalentes via flags (base vem só do CI).
  site: 'https://kobarufiles.github.io',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'fr'],
    // redirectToDefaultLocale would emit a root redirect page with a 2s meta refresh,
    // shadowing src/pages/index.astro, which redirects instantly instead.
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
