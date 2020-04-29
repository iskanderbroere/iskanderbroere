import React, { ReactNode } from "react"
import clsx from "clsx"
import styles from "./UnorderedList.module.scss"

interface UnorderedListProps {
  children: ReactNode
  unstyled?: boolean
}

export function UnorderedList({
  children,
  unstyled = true,
}: UnorderedListProps) {
  return (
    <ul
      className={clsx(
        styles["unordered-list"],
        unstyled && styles["unordered-list--unstyled"]
      )}
    >
      {children}
    </ul>
  )
}
