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
    if (num < 1000) {
      return num.toString();
    } else if (num < 1000000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else if (num < 1000000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
  }
}

customElements.define("number-formatter", NumberFormatterElement);
