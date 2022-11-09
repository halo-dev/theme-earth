import "./styles/tailwind.css";
import "./styles/main.css";
import "@purge-icons/generated";
import Alpine from "alpinejs";
import * as tocbot from "tocbot";

window.Alpine = Alpine;

Alpine.start();

const onScroll = () => {
  const headerMenu = document.getElementById("header-menu");
  if (window.scrollY > 0) {
    headerMenu?.classList.add("menu-sticky");
  } else {
    headerMenu?.classList.remove("menu-sticky");
  }
};

window.addEventListener("scroll", onScroll);

export function generateToc() {
  tocbot.init({
    tocSelector: ".toc",
    contentSelector: "#content",
    headingSelector: "h1, h2, h3, h4",
    extraListClasses: "space-y-1 dark:border-slate-500",
    extraLinkClasses:
      "group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-gray-100 text-sm opacity-80 dark:hover:bg-slate-700 dark:text-slate-50",
    activeLinkClass: "is-active-link bg-gray-100 dark:bg-slate-600",
    collapseDepth: 6,
    headingsOffset: 100,
    scrollSmooth: true,
    scrollSmoothOffset: -100,
  });
}

// 此主题的搜索依赖 https://github.com/halo-sigs/plugin-search-widget 插件，在 Halo 支持主题依赖插件之前，使用 alert 以提示使用者。
export function openSearch() {
  if (!window.SearchWidget) {
    alert("未安装或启用搜索插件，无法使用搜索功能。https://github.com/halo-sigs/plugin-search-widget");
  }
  window.SearchWidget.open();
}
