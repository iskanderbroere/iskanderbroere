import { breakpoints } from "./breakpoints"

const spacing = {
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  24: "24px",
  32: "32px",
  48: "48px",
  64: "64px",
}

export const theme = {
  font: {
    families: {
      body: "'Inria Sans', system-ui",
    },
    sizes: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "36px",
      xxl: "48px",
      xxxl: "60px",
    },
    weights: {
      light: "300",
      regular: "400",
      bold: "700",
    },
  },
  spacing,
  colors: {
    primary: {
      main: "hsl(157, 86%, 43%)",
      dark: "hsl(157, 70%, 31%)",
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
