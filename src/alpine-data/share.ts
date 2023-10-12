export default () => ({
  permalink: window.location.href,
  title: document.title,
  shareModal: false,
  get presetShareItems() {
    return [
      {
        id: "x",
        name: "X",
        icon: "i-simple-icons-x",
        type: "url",
        url: `//x.com/share?url=${this.permalink}&text=${this.title}`,
      },
      {
        id: "telegram",
        name: "Telegram",
        icon: "i-simple-icons-telegram",
        type: "url",
        url: `//telegram.me/share/url?url=${this.permalink}&text=${this.title}`,
      },
    ];
  },
  handleShare(item) {
    const width = 1000;
    const height = 500;
    const top = window.innerHeight / 2 - height / 2;
    const left = window.innerWidth / 2 - width / 2;
    const windowParams = `width=${width}, height= ${height}, top=${top}, left=${left}, status=no, scrollbars=no, resizable=no`;
    window.open(item.url, `分享：${this.title}`, windowParams);
  },
});
