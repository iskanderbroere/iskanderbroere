import clsx from "clsx"
import React, { ReactNode } from "react"
import { InternalLink, ExternalLink } from "./Link"
import { TopNavigation } from "./TopNavigation"

export type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="px-4">
      <TopNavigation>
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
            "text-4xl",
            "md:text-5xl",
            "lg:text-6xl",
          ])}
          href="/"
          navLink
        >
          Iskander Broere
        </InternalLink>
        <InternalLink
          className="px-3 py-2 border-gray-700 border-2 border-dotted box-content"
          href="/projects"
          navLink
        >
          Projects
        </InternalLink>
        <ExternalLink
          className="px-3 py-2 border-gray-700 border-2 border-dotted box-content"
          href="https://github.com/iskanderbroere/"
          navLink
        >
          GitHub
        </ExternalLink>
      </TopNavigation>
      <main>{children}</main>
    </div>
  )
}
