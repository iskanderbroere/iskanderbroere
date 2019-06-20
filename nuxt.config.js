export default {
  head: {
    htmlAttrs: {
      lang: "en",
      dir: "ltr"
    },
    title: "Iskander Broere",
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
    ]
  },
  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/pwa",
    "nuxt-webfontloader",
    "nuxt-compress"
  ],
  webfontloader: {
    classes: false,
    events: false,
    typekit: {
      id: "wke4nyp"
    }
  },
  sitemap: {
    hostname: "https://iskanderbroere.nl",
    generate: true,
    gzip: true
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
  generate: {
    fallback: "404.html"
  },
  loading: { color: "var(--bright-green)", height: "1px" },
  css: ["~/assets/css/main.css"],
  render: {
    http2: { push: true },
    resourceHints: true
  }
}
