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
    extraListClasses: "space-y-1",
    extraLinkClasses: 'group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-gray-100 text-sm opacity-80',
    activeLinkClass: "is-active-link bg-gray-100",
    collapseDepth: 6,
    headingsOffset: 100,
    scrollSmooth: true,
    scrollSmoothOffset: -100,
  });
}
