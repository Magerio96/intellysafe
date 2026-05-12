import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en'],
  defaultLocale: 'it',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/sistema': { it: '/sistema', en: '/system' },
    '/funzionalita': { it: '/funzionalita', en: '/features' },
    '/applicazioni': { it: '/applicazioni', en: '/applications' },
    '/contatti': { it: '/contatti', en: '/contacts' },
  },
});
