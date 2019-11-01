import { scaleFromSmToXxlBreakpoint } from "./utils"
import { breakpoints } from "./breakpoints"

export const theme = {
  font: {
    families: {
      body: "'Inria Sans', system-ui",
    },
    sizes: {
      md: scaleFromSmToXxlBreakpoint("14px", "20px"),
      lg: scaleFromSmToXxlBreakpoint("16px", "24px"),
      xl: scaleFromSmToXxlBreakpoint("20px", "28px"),
      xxl: scaleFromSmToXxlBreakpoint("24px", "32px"),
    },
  },
  colors: {
    primary: {
      main: "#0fcc83",
      dark: "#18865c",
    },
    grays: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  breakpoints,
  elements: {
    bottomNavigation: {
      height: "60px",
    },
  },
}

export type Theme = typeof theme
