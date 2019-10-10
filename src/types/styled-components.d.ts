import {} from "styled-components/cssprop"
// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      body: string
    }
    colors: {
      primary: {
        main: string
        dark: string
      }
      grays: [string, string, string]
    }
    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl?: string
    }
  }
}
