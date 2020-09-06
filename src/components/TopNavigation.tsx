import React, { ReactNode } from "react"
import clsx from "clsx"

interface TopNavigationProps {
  children: ReactNode
}

export function TopNavigation({ children }: TopNavigationProps) {
  return (
    <nav
      className={clsx([
        // "flex",
        // "items-center",
        // "justify-between",
        "grid",
        "grid-cols-3",
        "grid-rows-2",
        "gap-2",
        // "py-4",
        // "px-0",
        // "border-t-2",
        // "border-l-2",
        // "border-gray-700",
        // "border-dotted",
        "my-4",
        // "border-b-2",
        // "border-dotted",
        // "border-gray-700",
        "w-full",
        "leading-none",
      ])}
    >
      {children}
    </nav>
  )
}
