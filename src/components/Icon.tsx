import React from "react"
import { CSSProp } from "styled-components"

export const Icon: React.FC<{
  viewBox?: string
  accessibilityName: string
  css?: CSSProp
  className?: string
}> = ({ children, viewBox = "0 0 24 24", accessibilityName, className }) => (
  <svg
    aria-labelledby={accessibilityName}
    className={className}
    role="img"
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id={accessibilityName}>{accessibilityName}</title>
    {children}
  </svg>
)
