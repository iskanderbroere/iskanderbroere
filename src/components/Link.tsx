/* eslint-disable react/no-multi-comp */
import React, { HTMLProps, PropsWithChildren } from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import clsx from "clsx"

interface GetLinkClassnamesArgs {
  important: boolean
  navLink: boolean
}

const getLinkClassnames = (
  { important, navLink }: GetLinkClassnamesArgs,
  className: string | undefined
) =>
  clsx(
    [
      "relative",
      "text-gray-900",
      "bg-transparent",
      "transition-all",
      "duration-200",
      "ease-in-out",
      "underline",
      "hover:text-green-500",
      "focus:outline-none",
      "focus:shadow-outline",
      "focus:rounded-sm",
      "focus:bg-gray-100",
    ],
    important && ["text-green-500 hover:text-green-700"],
    navLink && [
      "no-underline",
      "flex",
      "items-center",
      "font-bold",
      "text-lg",
      "sm:text-xl",
      "md:text-2xl",
      "lg:text-3xl",
    ],
    className
  )

interface LinkProps {
  important?: boolean
  navLink?: boolean
}

type ExternalLinkProps = PropsWithChildren<
  LinkProps & HTMLProps<HTMLAnchorElement>
>

export function ExternalLink({
  children,
  important = false,
  navLink = false,
  className,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      className={getLinkClassnames({ important, navLink }, className)}
      rel="noopener noreferrer"
      target="_blank"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </a>
  )
}

type InternalLinkProps = NextLinkProps &
  PropsWithChildren<LinkProps> &
  HTMLProps<HTMLAnchorElement>

export function InternalLink({
  children,
  href,
  important = false,
  navLink = false,
  className,
  ...rest
}: InternalLinkProps) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={getLinkClassnames({ important, navLink }, className)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </a>
    </NextLink>
  )
}
