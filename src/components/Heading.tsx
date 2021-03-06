import clsx from "clsx"
import React, { ElementType, forwardRef } from "react"
import { Box, PolymorphicComponentProps } from "react-polymorphic-box"

// Component-specific props should be specified separately
export interface HeadingOwnProps {
  level?: 1 | 2 | 3
}

// Merge own props with others inherited from the underlying element type
export type HeadingProps<E extends ElementType> = PolymorphicComponentProps<
  E,
  HeadingOwnProps
>

// An HTML tag or a different React component can be rendered by default
const defaultElement = "h1"

// https://github.com/kripod/react-polymorphic-box
export const Heading = forwardRef(
  <E extends ElementType = typeof defaultElement>(
    { level = 1, className, ...props }: HeadingProps<E>,
    innerRef: typeof props.ref
  ) => {
    return (
      <Box
        className={clsx(
          ["font-light tracking-tight leading-none"],
          level === 1 && ["text-3xl", "lg:text-4xl", "mb-4"],
          level === 2 && ["text-2xl", "lg:text-3xl", "mb-2"],
          className
        )}
        as={defaultElement}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        ref={innerRef}
      />
    )
  }
) as <E extends ElementType = typeof defaultElement>(
  props: HeadingProps<E>
) => JSX.Element
