import React, { ReactNode } from "react"
import clsx from "clsx"
import styles from "./ListItem.module.scss"

interface ListItemProps {
  children: ReactNode
  inline?: boolean
}

export function ListItem({ children, inline = false, ...rest }: ListItemProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <li className={clsx(inline && styles["list-item--inline"])} {...rest}>
      {children}
    </li>
  )
}
