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
        <SkipNavLink
          contentId={mainContentId}
          className={clsx([
            "text-gray-900",
            "font-bold",
            // "text-lg",
            "leading-none",
            "focus:outline-none",
            "focus:shadow-outline",
            "focus:border-gray-700",
            "focus:border-2",
            "focus:bg-gray-50",
            // "sm:text-xl",
            // "md:text-2xl",
            // "lg:text-3xl",
          ])}
        />
        <h1
          className={clsx([
            "leading-normal",
            "col-span-2",
            "row-span-2",
            // "text-3xl",
            // "sm:text-4xl",
            // "md:text-5xl",
            // "lg:text-5xl",
            // "xl:text-6xl",
            "font-black",
          ])}
        >
          Iskander Broere
        </h1>
        <InternalLink className="box-content" href="/projects" navLink>
          Projects
        </InternalLink>
        <ExternalLink
          className="box-content"
          href="https://github.com/iskanderbroere/"
          navLink
        >
          GitHub
        </ExternalLink>
      </TopNavigation>
      <SkipNavContent id={mainContentId} as="main">
        {children}
      </SkipNavContent>
    </div>
  )
}
