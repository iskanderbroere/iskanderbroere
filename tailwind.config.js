const plugin = require("tailwindcss/plugin")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
    defaultLineHeights: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui"],
      },
      colors: {
        green: {
          50: "#F3FCF9",
          100: "#E7FAF3",
          200: "#C3F2E0",
          300: "#9FEBCD",
          400: "#57DBA8",
          500: "#0FCC83",
          600: "#0EB876",
          700: "#097A4F",
          800: "#075C3B",
          900: "#053D27",
        },
        gray: {
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
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "124rem",
      },
      padding: {
        DEFAULT: "1rem",
      },
    },
    boxShadow: (theme) => ({
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: `0 0 0 1.5px ${theme("colors.green.500")}, 0 0 0 3.5px ${theme(
        "colors.green.700"
      )}`,
      none: "none",
    }),
  },
  variants: {
    borderRadius: ["responsive", "hover", "focus"],
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const n = {
        "@supports (font-variation-settings: normal)": {
          ".font-sans": {
            "font-family": "'RecVar', system-ui",
          },
        },
      }
      const newUtilities = {
        ".hank-1000": {
          "font-variation-settings": "'wght' 1000, 'CASL' 1, 'MONO' 0",
          "font-feature-settings": "'dlig' on, 'ss04' off",
        },
        ".hank-300": {
          "font-variation-settings": "'wght' 300, 'CASL' 0, 'MONO' 0",
          "font-feature-settings": "'dlig' on, 'ss04' on, 'pnum' on, 'ss05' on",
        },
      }

      addUtilities(n)
      addUtilities(newUtilities, {
        variants: ["hover"],
      })
    }),
  ],
}
