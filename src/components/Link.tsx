/* eslint-disable react/no-multi-comp */
import React, { HTMLProps, PropsWithChildren } from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import clsx from "clsx"
import { useRouter } from "next/router"

interface GetLinkClassnamesArgs {
  navLink: boolean
  active?: boolean
}

const getLinkClassnames = (
  { navLink, active = false }: GetLinkClassnamesArgs,
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
      "focus:bg-gray-50",
    ],
    navLink && [
      "no-underline",
      "flex",
      "items-center",
      "font-bold",
      "leading-none",
      "text-lg",
      "sm:text-xl",
      "md:text-2xl",
      "lg:text-3xl",
    ],
    active && ["text-green-500"],
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
  navLink = false,
  className,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      className={getLinkClassnames({ navLink }, className)}
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
  navLink = false,
  className,
  ...rest
}: InternalLinkProps) {
  const router = useRouter()
  const linkIsActive = router.pathname == href

  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={getLinkClassnames(
          { navLink, active: linkIsActive },
          className
        )}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </a>
    </NextLink>
  )
}
