import React, { ReactNode, FC } from "react"
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from "styled-components"
import { Helmet } from "react-helmet"
import { fontFace } from "polished"
import { Container } from "../components/Container"
import { Link, ExternalLink } from "../components/Link"
import { Icon } from "../components/Icon"

// #region global styles
const GlobalStyle = createGlobalStyle`
${fontFace({
  fontFamily: "Inria Sans",
  fontWeight: "700",
  fontStyle: "normal",
  fontFilePath: "/assets/fonts/InriaSans-Bold",
  fontDisplay: "optional",
})}
${fontFace({
  fontFamily: "Inria Sans",
  fontWeight: "700",
  fontStyle: "italic",
  fontFilePath: "/assets/fonts/InriaSans-BoldItalic",
  fontDisplay: "optional",
})}
${fontFace({
  fontFamily: "Inria Sans",
  fontWeight: "300",
  fontStyle: "normal",
  fontFilePath: "/assets/fonts/InriaSans-Light",
  fontDisplay: "optional",
})}
${fontFace({
  fontFamily: "Inria Sans",
  fontWeight: "300",
  fontStyle: "italic",
  fontFilePath: "/assets/fonts/InriaSans-LightItalic",
  fontDisplay: "optional",
})}
${fontFace({
  fontFamily: "Inria Sans",
  fontWeight: "400",
  fontStyle: "normal",
  fontFilePath: "/assets/fonts/InriaSans-Regular",
  fontDisplay: "optional",
})}
${fontFace({
  fontFamily: "Inria Sans",
  fontWeight: "400",
  fontStyle: "italic",
  fontFilePath: "/assets/fonts/InriaSans-Italic",
  fontDisplay: "optional",
})}
html {
  font-size: 16px;
  /* bootstrap resets */
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent;
  /* bootstrap resets end */
  @media (min-width:  ${props => props.theme.breakpoints.lg}) {
    font-size: 20px;
  }
}
body {
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.grays[2]};
  font-weight: 400;
  text-rendering: optimizeLegibility;
  background-color: ${props => props.theme.colors.grays[0]};
  /* bootstrap resets */
  margin: 0;
  font-size: 1rem;
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
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1rem;
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
// #endregion

const BottomNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.grays[0]};
  border-top: 2px dotted ${props => props.theme.colors.grays[1]};
  display: flex;
  align-items: center;
  height: 60px;

  a:not(:last-child) {
    margin-right: 10px;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`

const TopNavigation = styled.nav`
  width: 100%;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
  margin-bottom: 10px;
  border-bottom: 2px dotted ${props => props.theme.colors.grays[1]};
`

const TopNavigationLinkContainer = styled.div`
  display: none;

  a:not(:last-child) {
    margin-right: 18px;
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    > a {
      display: flex;
    }
  }
`

export type LayoutProps = { children: ReactNode; path: string }

export const Layout: FC<LayoutProps> = ({ children, path }) => (
  <ThemeProvider
    theme={{
      fonts: {
        body: "'Inria Sans', system-ui",
      },
      colors: {
        primary: {
          main: "#0fcc83",
          dark: "#18865c",
        },
        grays: ["#f9f9f9", "#6b6f6d", "#212529"],
      },
      breakpoints: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1440px",
      },
    }}
  >
    <>
      <Helmet
        defaultTitle="Iskander Broere"
        titleTemplate="Iskander Broere - %s"
      >
        <link href={`https://iskanderbroere.nl${path}`} rel="canonical" />
        <html dir="ltr" lang="en" />
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
        <meta
          content="I write modern front-end web applications @ Frontmen, am eager to learn, always seeking to improve, perfectionistic yet practical"
          name="description"
        />
      </Helmet>
      <GlobalStyle />
      <Container>
        <TopNavigation>
          <h1>iskanderbroere</h1>
          <TopNavigationLinkContainer>
            <Link navLink to="/">
              Home
            </Link>
            <Link navLink to="/projects">
              Projects
            </Link>
            <ExternalLink href="https://github.com/iskanderbroere/" iconLink>
              <Icon
                accessibilityName="github-icon"
                css={`
                  height: 60px;
                `}
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </Icon>
            </ExternalLink>
          </TopNavigationLinkContainer>
        </TopNavigation>
        <div
          css={css`
            /* offset for bottom navigation */
            @media (max-width: ${props => props.theme.breakpoints.md}) {
              padding-bottom: 72px;
            }
          `}
        >
          {children}
        </div>
        <footer>
          <BottomNavigation>
            <ExternalLink href="https://github.com/iskanderbroere/" iconLink>
              <Icon accessibilityName="github-footer-icon">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </Icon>
            </ExternalLink>
            <Link navLink to="/">
              Home
            </Link>
            <Link navLink to="/projects">
              Projects
            </Link>
          </BottomNavigation>
        </footer>
      </Container>
    </>
  </ThemeProvider>
)

export default Layout
