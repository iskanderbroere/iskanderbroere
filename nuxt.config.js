export default {
  head: {
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr'
    },
    title: 'Iskander Broere - modern full-stack web applications',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'I write modern front-end web applications @ Frontmen, am eager to learn, always seeking to improve, perfectionistic yet practical'
      }
    ],
    link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/wke4nyp.css' }]
  },
  modules: [
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-96952292-3'
      }
    ],
    '@nuxtjs/pwa'
  ],
  sitemap: {
    hostname: 'https://iskanderbroere.nl',
    generate: true
  },
  meta: {
    name: 'Iskander Broere - modern full-stack web applications',
    description:
      'I write modern front-end web applications @ Frontmen, am eager to learn, always seeking to improve, perfectionistic yet practical',
    lang: 'en',
    mobileApp: false
  },
  manifest: {
    name: 'Iskander Broere - modern full-stack web applications',
    short_name: 'I. Broere',
    description:
      'I write modern front-end web applications @ Frontmen, am eager to learn, always seeking to improve, perfectionistic yet practical',
    background_color: '#f9f9f9'
  },
  loading: { color: '#0fcc83' },
  css: ['~/assets/css/bootstrap-reboot.css'],
  render: {
    http2: { push: true },
    resourceHints: true,
    csp:
      process.env.NODE_ENV === 'production'
        ? {
            hashAlgorithm: 'sha256',
            allowedSources: 'https://www.google-analytics.com/analytics.js'
          }
        : false
  },
  generate: {
    fallback: true
  }
}
