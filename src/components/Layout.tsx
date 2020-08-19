import React, { ReactNode } from "react"
import { Container } from "./Container"
import { InternalLink, ExternalLink } from "./Link"
import { TopNavigationLinkContainer } from "./TopNavigationLinkContainer"
import { TopNavigation } from "./TopNavigation"

export type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
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
  )
}
