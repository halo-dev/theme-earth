import "./styles/tailwind.css";
import "./styles/main.scss";
import Alpine from "alpinejs";

import colorSchemeSwitcher from "./alpine-data/color-scheme-switcher";
import dropdown from "./alpine-data/dropdown";
import share from "./alpine-data/share";
import uiPermission from "./alpine-data/ui-permission";
import upvote from "./alpine-data/upvote";
import "./components/number-formatter";

window.Alpine = Alpine;

Alpine.data("dropdown", dropdown);
Alpine.data("colorSchemeSwitcher", colorSchemeSwitcher);
Alpine.data("upvote", upvote);
Alpine.data("share", share);
Alpine.data("uiPermission", uiPermission);

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

document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopButton = document.getElementById("btn-scroll-to-top");

  if (!scrollToTopButton) {
    return;
  }

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", _handleScroll);

  function _handleScroll() {
    if (!scrollToTopButton) {
      return;
    }

    const isDown = window.scrollY > 300;

    if (isDown) {
      scrollToTopButton.style.opacity = "1";
    } else {
      scrollToTopButton.style.opacity = "0";
    }
  }
});
