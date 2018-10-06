export default {
  head: {
    htmlAttrs: {
      lang: "en",
      dir: "ltr"
    },
    titleTemplate: titleChunk =>
      // If undefined or blank then we don't need the hyphen
      titleChunk ? `${titleChunk} | Iskander Broere` : "Iskander Broere",
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
          "I write modern front-end web applications @ Frontmen, am eager to learn, always seeking to improve, perfectionistic yet practical"
      }
    ],
    link: [{ rel: "stylesheet", href: "https://use.typekit.net/wke4nyp.css" }]
  },
  modules: [
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-96952292-3"
      }
    ],
    "@nuxtjs/pwa"
  ],
  sitemap: {
    hostname: "https://iskanderbroere.nl",
    generate: true
  },
  meta: {
    name: "Iskander Broere - modern full-stack web applications",
    description:
      "I write modern front-end web applications @ Frontmen, am eager to learn, always seeking to improve, perfectionistic yet practical",
    lang: "en",
    mobileApp: false
  },
  manifest: {
    name: "Iskander Broere - modern full-stack web applications",
    short_name: "I. Broere",
    description:
      "I write modern front-end web applications @ Frontmen, am eager to learn, always seeking to improve, perfectionistic yet practical",
    background_color: "#f9f9f9",
    theme_color: "#f9f9f9"
  },
  // loading: { color: 'var(--bright-green)' },
  loading: false,
  css: ["~/assets/css/main.css"],
  render: {
    http2: { push: true },
    resourceHints: true
  },
  generate: {
    fallback: true
  }
}
