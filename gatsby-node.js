/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    reporter.info(node.frontmatter.path)
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
