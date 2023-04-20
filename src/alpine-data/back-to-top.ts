export function backToTop() {
  scrollTo(0, 0);
}

const rootElement: Element = document.documentElement;
export function handleScroll(){
  const scrollTotal: number = rootElement.scrollHeight - rootElement.clientHeight;
  const goTopBtn: HTMLElement = document.getElementById('goTopBtn') as HTMLElement;
  if ((rootElement.scrollTop / scrollTotal) > 0.20) {
    goTopBtn.style.display = 'block';
  } else {
    goTopBtn.style.display = 'none';
  }
}
document.addEventListener("scroll", handleScroll);
  