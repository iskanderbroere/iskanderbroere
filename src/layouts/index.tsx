import React, { ReactNode, FC } from "react"
import { ThemeProvider, css } from "styled-components"
import { Helmet } from "react-helmet"
import { Container } from "../components/Container"
import { Link, ExternalLink } from "../components/Link"
import { GlobalStyles } from "../styles/globalStyles"
import { TopNavigationLinkContainer } from "../components/TopNavigationLinkContainer"
import { TopNavigation } from "../components/TopNavigation"
import { BottomNavigation } from "../components/BottomNavigation"
import { theme } from "../styles/theme"

export type LayoutProps = { children: ReactNode; path: string }

export const Layout: FC<LayoutProps> = ({ children, path }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet
        defaultTitle="Iskander Broere"
        titleTemplate="Iskander Broerek - %s"
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
          {children}
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
