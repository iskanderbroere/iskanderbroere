import React, { ReactNode } from "react"
import clsx from "clsx"

interface TopNavigationLinkContainerProps {
  children: ReactNode
}

export function TopNavigationLinkContainer({
  children,
}: TopNavigationLinkContainerProps) {
  return <div className={clsx(["flex space-x-3 md:space-x-4"])}>{children}</div>
}
