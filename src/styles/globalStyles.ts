import { createGlobalStyle } from "styled-components"
import { fontFace } from "polished"

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
  /* bootstrap resets */
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent;
  /* bootstrap resets end */
  font-size: ${props => props.theme.font.sizes.md};
}
body {
  font-family: ${props => props.theme.font.families.body};
  color: ${props => props.theme.colors.grays[900]};
  text-rendering: optimizeLegibility;
  background-color: ${props => props.theme.colors.grays[100]};
  /* bootstrap resets */
  margin: 0;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  /* bootstrap resets end */
}
li,
p {
  line-height: 1.8;
}
h1,
h2,
h3,
h4 {
  font-weight: 700;
  /* bootstrap resets */
  margin-top: 0;
  margin-bottom: 0;
}
h1 {
  font-size: ${props => props.theme.font.sizes.xxxl};
}
h2 {
  font-size: ${props => props.theme.font.sizes.xxl};
}
h3 {
  font-size: ${props => props.theme.font.sizes.xl};
}
h4 {
  font-size: ${props => props.theme.font.sizes.lg};
}
p {
  margin: 0;
}
address {
  margin-bottom: 0;
  /* bootstrap resets */
  font-style: normal;
  line-height: inherit;
}
/* bootstrap resets */
*,
*::before,
*::after {
  box-sizing: border-box;
}
article,
aside,
dialog,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
[tabindex='-1']:focus {
  outline: 0 !important;
}
small {
  font-size: 80%;
}
/* bootstrap resets end */
`
