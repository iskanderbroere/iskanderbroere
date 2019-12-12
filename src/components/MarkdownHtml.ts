import styled from "styled-components"
import { sharedLinkStyles } from "./Link"
interface MarkdownHtmlProps {
  html: string
}
export const MarkdownHtml = styled.div.attrs<MarkdownHtmlProps>(({ html }) => ({
  dangerouslySetInnerHTML: {
    __html: html,
  },
}))<MarkdownHtmlProps>`
  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  }
  .gatsby-highlight pre[class*="language-"] {
    padding: ${props =>
      `${props.theme.spacing[12]} ${props.theme.spacing[16]}`};
  }

  .gatsby-highlight {
    margin: ${props => props.theme.spacing[16]} 0px;
  }

  .language-text,
  .gatsby-highlight {
    border-radius: 4px;
  }

  p {
    hyphens: auto;
  }
  ul {
    list-style-type: none;
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
  small {
    line-height: 0;
  }
  a {
    ${sharedLinkStyles({ important: true })};
  }
`
