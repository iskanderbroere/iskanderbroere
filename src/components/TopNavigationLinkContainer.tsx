import React, { ReactNode } from "react"
import styles from "./TopNavigationLinkContainer.module.scss"

interface TopNavigationLinkContainerProps {
  children: ReactNode
}

export function TopNavigationLinkContainer({
  children,
}: TopNavigationLinkContainerProps) {
  return (
    <div className={styles["top-navigation-link-container"]}>{children}</div>
  )
}
