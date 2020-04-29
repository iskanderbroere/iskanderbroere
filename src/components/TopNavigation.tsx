import React, { ReactNode } from "react"
import styles from "./TopNavigation.module.scss"

interface TopNavigationProps {
  children: ReactNode
}

export function TopNavigation({ children }: TopNavigationProps) {
  return <nav className={styles["top-navigation"]}>{children}</nav>
}
