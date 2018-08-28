export default {
  head: {
    htmlAttrs: {
      lang: "en",
      dir: "ltr"
    },
    title: "Iskander Broere - modern full-stack web applications",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        hid: "description",
        name: "description",
        content:
          "JS - HTML - CSS - GraphQL - Vue.js - React - Express - Bootstrap 4 - Webpack - Yarn - NPM - Netlify - PWAs - CI - Static Hosting - Decoupled Applications"
      }
    ]
  },
  modules: [
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-96952292-3"
      }
    ],
    "~/modules/headers",
    "@nuxtjs/pwa"
  ],
  sitemap: {
    hostname: "https://iskanderbroere.nl",
    generate: true
  },
  meta: {
    name: "Iskander Broere - modern full-stack web applications",
    description:
      "JS - HTML - CSS - GraphQL - Vue.js - React - Express - Bootstrap 4 - Webpack - Yarn - NPM - Netlify - PWAs - CI - Static Hosting - Decoupled Applications",
    lang: "en",
    mobileApp: false
  },
  manifest: {
    name: "Iskander Broere - modern full-stack web applications",
    short_name: "I. Broere",
    description:
      "JS - HTML - CSS - GraphQL - Vue.js - React - Express - Bootstrap 4 - Webpack - Yarn - NPM - Netlify - PWAs - CI - Static Hosting - Decoupled Applications",
    background_color: "#f9f9f9"
  },
  loading: { color: "#0fcc83" },
  css: ["~/assets/css/main.css"],
  render: {
    http2: { push: true },
    resourceHints: true,
    csp: true
  },
  generate: {
    fallback: true
  }
}
