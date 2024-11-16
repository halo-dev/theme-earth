/** @type {import('tailwindcss').Config} */
const { Icons } = require("tailwindcss-plugin-icons");
module.exports = {
  content: ["./templates/**/*.html", "./src/**/*.ts", "./settings.yaml"],
  darkMode: "class",
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
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
