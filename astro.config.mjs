import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'fr'],
    // redirectToDefaultLocale would emit a root redirect page with a 2s meta refresh,
    // shadowing src/pages/index.astro, which redirects instantly instead.
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
