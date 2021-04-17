import React, { ReactNode } from "react"
import clsx from "clsx"

interface TopNavigationProps {
  children: ReactNode
}

export function TopNavigation({ children }: TopNavigationProps) {
  return <nav className={clsx(["my-4", "w-full"])}>{children}</nav>
}
