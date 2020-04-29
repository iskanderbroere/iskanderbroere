/* eslint-disable react/no-multi-comp */
import React, { ReactNode, AnchorHTMLAttributes } from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import clsx from "clsx"
import styles from "./Link.module.scss"

interface LinkOwnProps {
  children: ReactNode
  important?: boolean
  navLink?: boolean
}

type ExternalLinkProps = LinkOwnProps & AnchorHTMLAttributes<HTMLAnchorElement>

export function ExternalLink({
  children,
  important = false,
  navLink = false,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      className={clsx(
        styles["link"],
        important && styles["link--important"],
        navLink && styles["link--nav-link"]
      )}
      rel="noopener noreferrer"
      target="_blank"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </a>
  )
}

type InternalLinkProps = NextLinkProps & LinkOwnProps

export function InternalLink({
  children,
  href,
  important = false,
  navLink = false,
  ...rest
}: InternalLinkProps) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={clsx(
          styles["link"],
          important && styles["link--important"],
          navLink && styles["link--nav-link"]
        )}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </a>
    </NextLink>
  )
}
