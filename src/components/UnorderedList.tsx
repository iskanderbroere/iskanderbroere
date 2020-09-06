import React, { ReactNode } from "react"
import clsx from "clsx"

interface UnorderedListProps {
  children: ReactNode
}

export function UnorderedList({ children }: UnorderedListProps) {
  return <ul className={clsx(["pl-0", "m-0"])}>{children}</ul>
}
