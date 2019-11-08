import React, { ReactNode, FC } from "react"
import { ThemeProvider, css } from "styled-components"
import { Helmet } from "react-helmet"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import { Container } from "../components/Container"
import { Link, ExternalLink } from "../components/Link"
import { GlobalStyles } from "../styles/globalStyles"
import { TopNavigationLinkContainer } from "../components/TopNavigationLinkContainer"
import { TopNavigation } from "../components/TopNavigation"
import { BottomNavigation } from "../components/BottomNavigation"
import { theme } from "../styles/theme"

export type LayoutProps = {
  children: ReactNode
  path: string
  location: string
}

export const Layout: FC<LayoutProps> = ({ children, path, location }) => (
  <ThemeProvider theme={theme}>
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
          content="I write modern web applications @ Frontmen, am eager to learn, always seeking to improve, perfectionistic yet practical"
          name="description"
        />
      </Helmet>
      <GlobalStyles />
      <Container>
        <TopNavigation>
          <Link navLink to="/">
            Iskander Broere
          </Link>
          <TopNavigationLinkContainer>
            <Link navLink to="/projects">
              Projects
            </Link>
            <ExternalLink href="https://github.com/iskanderbroere/" navLink>
              GitHub
            </ExternalLink>
          </TopNavigationLinkContainer>
        </TopNavigation>
        <div
          css={css`
            /* offset for bottom navigation */
            @media (max-width: ${props => props.theme.breakpoints.md}) {
              padding-bottom: ${props =>
                  props.theme.elements.bottomNavigation.height} + 12px;
            }
          `}
        >
          <TransitionProvider
            enter={{
              opacity: 0,
              // perspective and translateZ to fix blurry text bug in Chrome
              transform: "scale(0.98) translateZ(0) perspective(1px)",
              config: {
                duration: 350,
              },
            }}
            leave={{
              opacity: 0,
              transform: "scale(0.98) translateZ(0) perspective(1px)",
              config: {
                duration: 350,
              },
            }}
            location={location}
            mode="successive"
            usual={{
              opacity: 1,
              transform: "scale(1) translateZ(0) perspective(1px)",
            }}
          >
            <TransitionViews>{children}</TransitionViews>
          </TransitionProvider>
        </div>
        <BottomNavigation>
          <nav>
            <ExternalLink href="https://github.com/iskanderbroere/" navLink>
              GitHub
            </ExternalLink>
            <Link navLink to="/">
              Home
            </Link>
            <Link navLink to="/projects">
              Projects
            </Link>
          </nav>
        </BottomNavigation>
      </Container>
    </>
  </ThemeProvider>
)

export default Layout
