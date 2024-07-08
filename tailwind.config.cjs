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
  safelist: [
    "i-gg-sun",
    "i-gg-moon",
    "i-gg-dark-mode",
    "i-tabler-mail",
    "i-simple-icons-wechat",
    "i-simple-icons-tencentqq",
    "i-simple-icons-sinaweibo",
    "i-simple-icons-zhihu",
    "i-simple-icons-douban",
    "i-simple-icons-bilibili",
    "i-simple-icons-tiktok",
    "i-simple-icons-telegram",
    "i-simple-icons-facebook",
    "i-simple-icons-instagram",
    "i-simple-icons-linkedin",
    "i-simple-icons-twitter",
    "i-simple-icons-slack",
    "i-simple-icons-discord",
    "i-simple-icons-youtube",
    "i-simple-icons-steam",
    "i-simple-icons-github",
    "i-simple-icons-gitlab",
    "i-simple-icons-rss",
    "i-simple-icons-x",
    "i-simple-icons-qzone",
    "i-tabler-device-desktop"
  ],
};
