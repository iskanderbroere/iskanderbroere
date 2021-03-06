import clsx from "clsx"
import React, { ReactNode } from "react"
import { InternalLink, ExternalLink } from "./Link"
import { TopNavigation } from "./TopNavigation"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"

const mainContentId = "main-content"

export type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="container mx-auto">
      <TopNavigation>
        <SkipNavLink contentId={mainContentId} />
        <InternalLink
          className={clsx([
            "px-3",
            "lg:px-5",
            "leading-none",
            "py-2",
            "col-span-2",
            "row-span-2",
            "border-gray-700",
            "border-2",
            "border-dotted",
            "rounded",
            "md:rounded-md",
            "text-3xl",
            "sm:text-4xl",
            "md:text-5xl",
            "lg:text-5xl",
            "xl:text-6xl",
          ])}
          href="/"
          navLink
        >
          Iskander Broere
        </InternalLink>
        <InternalLink
          className="px-3 py-2 border-gray-700 border-2 border-dotted rounded md:rounded-md box-content"
          href="/projects"
          navLink
        >
          Projects
        </InternalLink>
        <ExternalLink
          className="px-3 py-2 border-gray-700 border-2 border-dotted rounded md:rounded-md box-content"
          href="https://github.com/iskanderbroere/"
          navLink
        >
          GitHub
        </ExternalLink>
      </TopNavigation>
      <SkipNavContent id={mainContentId} />
      <main>{children}</main>
    </div>
  )
}
