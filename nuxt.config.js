module.exports = {
  htmlAttrs: {
    lang: "en"
  },
  mode: "universal",
  head: {
    htmlAttrs: {
      dir: "ltr"
    },
    title: "Iskander Broere - modern full-stack web applications",
    meta: [
      { name: "google", content: "nositelinkssearchbox" },
      {
        name: "google-site-verification",
        content: "rzvyF6AxI29JhBHq0l6dzvaH_s4-Qq9AaSILG2VFuAA"
      }
    ]
  },
  modules: [
    "@nuxtjs/pwa",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-96952292-3"
      }
    ],
    "./push.js"
  ],
  meta: {
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    name: "Iskander Broere - modern full-stack web applications",
    description:
      "JS - HTML - CSS - GraphQL - Vue - React - Express - Bootstrap - Webpack - Yarn - NPM - Netlify - PWAs - CI - Static Hosting - Decoupled Applications",
    lang: "en",
    mobileApp: false
  },
  manifest: {
    name: "Iskander Broere - modern full-stack web applications",
    short_name: "Iskander Broere",
    description:
      "JS - HTML - CSS - GraphQL - Vue - React - Express - Bootstrap - Webpack - Yarn - NPM - Netlify - PWAs - CI - Static Hosting - Decoupled Applications",
    background_color: "#f9f9f9"
  },
  loading: { color: "#ced4da" },
  css: ["~/assets/main.css"],
  render: {
    http2: { push: true },
    gzip: { threshold: 1 }
  },
  generate: {
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: false,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: false,
      trimCustomFragments: true,
      useShortDoctype: true
    }
  }
}
