/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  plugins: [
    "gatsby-plugin-preact",
    "gatsby-plugin-typescript",
    // needs to be after typescript
    "gatsby-plugin-styled-components",
    "gatsby-plugin-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Iskander Broere",
        short_name: "I. Broere",
        start_url: "/",
        background_color: "#f9f9f9",
        theme_color: "#f9f9f9",
        display: "minimal-ui"
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
          'Content-Security-Policy': "default-src 'none'; object-src 'none'; img-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self'; font-src 'self'; manifest-src 'self';"
        }
      }
    }
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyzer",
    //   options: {
    //     production: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
}
