import { between } from "polished"
import { partialRight } from "ramda"
import { breakpoints } from "./breakpoints"

export const scaleBetweenSmAndXxl = partialRight(between, [
  breakpoints.sm,
  breakpoints.xxl,
])
