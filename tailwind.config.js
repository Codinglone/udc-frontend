// const withMT = require("@material-tailwind/react/utils/withMT");
// /** @type {import('tailwindcss').Config} */
// export default withMT({
//   mode: "jit",
//   purge: [
//     // ...
//     "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}", // path to vechaiui
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('flowbite/plugin'),require("@tailwindcss/forms"),
//     require("@vechaiui/core")],
// })


/** @type {import('tailwindcss').Config} */
export default {
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
      borderColor: {
        inherit: "inherit",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"),
  require("@vechaiui/core"), require('flowbite/plugin')],
}


