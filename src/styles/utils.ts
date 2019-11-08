import { between } from "polished"
import { partialRight } from "ramda"
import { breakpoints } from "./breakpoints"

export const scaleFromSmToXxlBreakpoint = partialRight(between, [
  breakpoints.sm,
  breakpoints.xxl,
])
