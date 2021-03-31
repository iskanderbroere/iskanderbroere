import clsx from "clsx"
import React, { ElementRef, ElementType, ForwardedRef, forwardRef } from "react"
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from "react-polymorphic-types"

// Component-specific props should be specified separately
export interface HeadingOwnProps {
  level?: 1 | 2 | 3
}

// Extend own props with others inherited from the underlying element type
// Own props take precedence over the inherited ones
export type HeadingProps<
  T extends ElementType = typeof HeadingDefaultElement
> = PolymorphicPropsWithoutRef<HeadingOwnProps, T>

// A HTML tag or a different React component can be rendered by default
const HeadingDefaultElement = "h1"

// https://github.com/kripod/react-polymorphic-types
export const Heading: PolymorphicForwardRefExoticComponent<
  HeadingOwnProps,
  typeof HeadingDefaultElement
> = forwardRef(function Heading<
  T extends ElementType = typeof HeadingDefaultElement
>(
  {
    as,
    level = 1,
    className,
    ...props
  }: PolymorphicPropsWithoutRef<HeadingOwnProps, T>,
  ref: ForwardedRef<ElementRef<T>>
) {
  const Element: ElementType = as || HeadingDefaultElement
  return (
    <Element
      className={clsx(
        [
          // "font-light",
          "tracking-tight",
          "leading-none",
        ],
        level === 1 && ["text-3xl", "lg:text-4xl", "mb-4"],
        level === 2 && ["text-2xl", "lg:text-3xl", "mb-2"],
        className
      )}
      as={HeadingDefaultElement}
      {...props}
      ref={ref}
    />
  )
})
