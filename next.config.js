/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-member-access */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const withPreact = require("next-plugin-preact")

module.exports = withPreact(
  withBundleAnalyzer({
    experimental: {
      modern: true,
      polyfillsOptimization: true,
    },
  })
)
