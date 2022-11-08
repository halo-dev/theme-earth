/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html","./src/main.ts"],
  theme: {
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
      }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require('@tailwindcss/line-clamp'),
  ],
}
