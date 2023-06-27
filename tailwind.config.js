const withMT = require("@material-tailwind/react/utils/withMT");
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default withMT({
  mode: 'jit',
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        pink: colors.pink,
        primary: colors.blue,
        danger: colors.red,
        warning: colors.yellow,
      }
     
    },
  },
  plugins: [require("@tailwindcss/forms"),
  require("@vechaiui/core")({
    colors: ["pink", "warning"]
  }), require('flowbite/plugin')],
})

