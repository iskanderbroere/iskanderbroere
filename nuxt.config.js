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
      { "http-equiv": "x-ua-compatible", content: "ie=edge" },
      { name: "google", content: "nositelinkssearchbox" },
      {
        name: "google-site-verification",
        content: "rzvyF6AxI29JhBHq0l6dzvaH_s4-Qq9AaSILG2VFuAA"
      }
    ]
  },
  modules: ["@nuxtjs/pwa"],
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
  css: ["~/assets/main.css"]
}
