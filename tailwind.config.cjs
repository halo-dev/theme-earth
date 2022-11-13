/** @type {import('tailwindcss').Config} */
const { Icons } = require("tailwindcss-plugin-icons");
module.exports = {
  content: ["./templates/**/*.html", "./src/main.ts"],
  darkMode: "class",
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
      },
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
    require("@tailwindcss/line-clamp"),
    Icons(() => ({
      gg: {
        includeAll: true,
      },
      tabler: {
        includeAll: true,
      },
      simpleIcons: {
        includeAll: true,
      },
      bx: {
        includeAll: true,
      },
    })),
  ],
};
