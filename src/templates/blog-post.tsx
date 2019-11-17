import React from "react"
import { graphql } from "gatsby"
import { BlogPostByPathQuery } from "../../generated/graphqlTypes"
import { MarkdownHtml } from "../components/MarkdownHtml"
import { css } from "styled-components"

interface TemplateProps {
  data: BlogPostByPathQuery
}
export default function BlogPostTemplate({
  data: { markdownRemark: post }, // this prop will be injected by the GraphQL query we'll write in a bit
}: TemplateProps) {
  if (!post) return null
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
      `}
    >
      {post.frontmatter?.title && <h1>{post.frontmatter.title}</h1>}
      {post.parent?.__typename === "File" && post.parent.modifiedTime && (
        <>
          {/* <span>last updated:</span> */}
          <span
            css={css`
              font-size: ${props => props.theme.font.sizes.sm};
              color: ${props => props.theme.colors.grays[500]};
              font-weight: ${props => props.theme.font.weights.bold};
            `}
          >
            {post.parent.modifiedTime}
          </span>
        </>
      )}
      {post.html && <MarkdownHtml html={post.html} />}
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "en-GB")
        path
        title
      }
      parent {
        ... on File {
          modifiedTime(formatString: "dddd, MMMM Do YYYY")
        }
      }
    }
  }
`
