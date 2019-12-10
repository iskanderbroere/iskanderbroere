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
    font-size: 1em;
  }
  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
  }

  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }

  code {
    font-size: 0.875em;
    color: #d63384;
    word-wrap: break-word;
  }

  a > code {
    color: inherit;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }

  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
  }

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
  a {
    ${sharedLinkStyles({ important: true })};
  }
`
