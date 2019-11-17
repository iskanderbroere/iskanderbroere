import styled from "styled-components"
interface MarkdownHtmlProps {
  html: string
}
export const MarkdownHtml = styled.div.attrs<MarkdownHtmlProps>(({ html }) => ({
  dangerouslySetInnerHTML: {
    __html: html,
  },
}))<MarkdownHtmlProps>`
  p {
    hyphens: auto;
  }
  ul {
    list-style-type: armenian;
    list-style-position: inside;
    padding: 0;
    margin-top: 0;
  }
  p,
  ul,
  ol,
  hr {
    margin: 0 0 ${props => props.theme.spacing[16]};
  }
  /** alignment resets */
  hr {
    border: 1px solid;
  }
  a,
  b,
  i,
  strong,
  em,
  small,
  code {
    line-height: 0;
  }
`
