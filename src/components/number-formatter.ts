export default class NumberFormatterElement extends HTMLElement {
  static get observedAttributes() {
    return ["value"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const value = this.getAttribute("value");
    if (value === null) {
      this.textContent = "0";
      return;
    }

    const num = parseInt(value, 10);
    if (isNaN(num)) {
      this.textContent = value;
      return;
    }

    this.textContent = this.formatNumber(num);
  }

  formatNumber(num: number): string {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 1,
    });
    return formatter.format(num);
  }
}

customElements.define("number-formatter", NumberFormatterElement);
