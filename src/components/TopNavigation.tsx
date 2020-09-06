import React, { ReactNode } from "react"
import clsx from "clsx"

interface TopNavigationProps {
  children: ReactNode
}

export function TopNavigation({ children }: TopNavigationProps) {
  return (
    <nav
      className={clsx([
        "grid",
        "grid-cols-3",
        "grid-rows-2",
        "gap-2",
        "my-4",
        "w-full",
        "leading-none",
      ])}
    >
      {children}
    </nav>
  )
}
