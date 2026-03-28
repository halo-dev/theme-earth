import { ClickScrollPlugin, OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin } from "overlayscrollbars";

import "overlayscrollbars/overlayscrollbars.css";

OverlayScrollbars.plugin(ScrollbarsHidingPlugin);
OverlayScrollbars.plugin(SizeObserverPlugin);
OverlayScrollbars.plugin(ClickScrollPlugin);

document.addEventListener("DOMContentLoaded", () => {
  ["body"].forEach(createInstance);
});

function createInstance(selector: string) {
  const dom = document.querySelector(selector) as HTMLElement;
  if (dom) {
    const instance = OverlayScrollbars(dom, {
      scrollbars: {
        autoHide: "scroll",
        autoHideDelay: 600,
      },
    });
    instance.on("updated", () => {
      dom.classList.remove("hidden");
    });
  }
}
