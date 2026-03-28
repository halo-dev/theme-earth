import tocbot from "tocbot";

export function generateToc(contentId: string, tocSelector: string) {
  const content = document.getElementById(contentId);
  const titles = content?.querySelectorAll("h1, h2, h3, h4");
  if (!titles || titles.length === 0) {
    const tocContainer = document.querySelector(tocSelector);
    tocContainer?.remove();
    return;
  }
  tocbot.init({
    tocSelector: tocSelector,
    contentSelector: `#${contentId}`,
    headingSelector: "h1, h2, h3, h4",
    extraListClasses: "space-y-1 dark:border-slate-500",
    extraLinkClasses:
      "group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-gray-100 text-sm opacity-80 dark:hover:bg-slate-700 dark:text-slate-50",
    collapseDepth: 6,
    headingsOffset: 100,
    scrollSmooth: false,
    tocScrollOffset: 50,
  });
}
