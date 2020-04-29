import React, { ReactNode } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import { Container } from "./Container"
import { InternalLink, ExternalLink } from "./Link"
import { TopNavigationLinkContainer } from "./TopNavigationLinkContainer"
import { TopNavigation } from "./TopNavigation"

export type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <link
          href={`https://iskanderbroere.nl${router.pathname}`}
          rel="canonical"
        />
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
      </Head>
      <Container>
        <TopNavigation>
          <InternalLink href="/" navLink>
            Iskander Broere
          </InternalLink>
          <TopNavigationLinkContainer>
            <InternalLink href="/projects" navLink>
              Projects
            </InternalLink>
            <ExternalLink href="https://github.com/iskanderbroere/" navLink>
              GitHub
            </ExternalLink>
          </TopNavigationLinkContainer>
        </TopNavigation>
        {children}
      </Container>
    </>
  )
}
