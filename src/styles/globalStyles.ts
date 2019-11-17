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
  font-weight: ${props => props.theme.font.weights.regular};
  line-height: 1.75;
  text-align: left;
  /* bootstrap resets end */
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
