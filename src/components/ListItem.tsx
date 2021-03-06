import React, { ReactNode, HTMLProps } from "react"
import clsx from "clsx"

interface ListItemProps {
  children: ReactNode
  inline?: boolean
}

export function ListItem({
  children,
  inline = false,
  ...rest
}: ListItemProps & HTMLProps<HTMLLIElement>) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <li className={clsx(inline && ["inline", "dash-separator"])} {...rest}>
      {children}
    </li>
  )
}
