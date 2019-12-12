import { createGlobalStyle, css } from "styled-components"
import { fontFace } from "polished"

const bootstrapResets = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  [tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 0.875em;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  select {
    word-wrap: normal;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button:not(:disabled),
  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled) {
    cursor: pointer;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: textfield;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-datetime-edit {
    overflow: visible;
    line-height: 0;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  template {
    display: none;
  }

  main {
    display: block;
  }

  [hidden] {
    display: none !important;
  }
`

interface GetInriaFontFamilyParams {
  fontWeight: string
  fontStyle: string
  fontFileName: string
}

const getInriaFontFamily = ({
  fontWeight,
  fontStyle,
  fontFileName,
}: GetInriaFontFamilyParams) =>
  fontFace({
    fontFamily: "Inria Sans",
    fontWeight,
    fontStyle,
    fontFilePath: `/assets/fonts/InriaSans-${fontFileName}`,
    fontDisplay: "optional",
  })

export const GlobalStyles = createGlobalStyle`
${bootstrapResets};
${getInriaFontFamily({
  fontWeight: "300",
  fontStyle: "normal",
  fontFileName: "Light",
})}
${getInriaFontFamily({
  fontWeight: "300",
  fontStyle: "italic",
  fontFileName: "LightItalic",
})}
${getInriaFontFamily({
  fontWeight: "400",
  fontStyle: "normal",
  fontFileName: "Regular",
})}
${getInriaFontFamily({
  fontWeight: "400",
  fontStyle: "italic",
  fontFileName: "Italic",
})}
${getInriaFontFamily({
  fontWeight: "700",
  fontStyle: "normal",
  fontFileName: "Bold",
})}
${getInriaFontFamily({
  fontWeight: "700",
  fontStyle: "italic",
  fontFileName: "BoldItalic",
})}
html {
  font-size: ${props => props.theme.font.sizes.md};
}
body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: ${props => props.theme.font.families.body};
  color: ${props => props.theme.colors.grays[900]};
  text-rendering: optimizeLegibility;
  background-color: ${props => props.theme.colors.grays[100]};
  font-weight: ${props => props.theme.font.weights.regular};
}
h1,
h2,
h3,
h4 {
  font-weight: ${props => props.theme.font.weights.bold};
  margin-bottom: ${props => props.theme.spacing[8]};
  margin-top: 0;
}
h1 {
  font-size: ${props => props.theme.font.sizes.xxxl};
  margin-bottom: ${props => props.theme.spacing[32]};
  line-height: 1.25;
}
h2 {
  font-size: ${props => props.theme.font.sizes.xxl};
  margin-bottom: ${props => props.theme.spacing[24]};
  line-height: 1.35;
}
h3 {
  font-size: ${props => props.theme.font.sizes.xl};
  margin-bottom: ${props => props.theme.spacing[16]};
  line-height: 1.5;
}
h4 {
  font-size: ${props => props.theme.font.sizes.lg};
  margin-bottom: ${props => props.theme.spacing[12]};
}
p {
  margin: 0;
}
address {
  margin-bottom: 0;
}
`
