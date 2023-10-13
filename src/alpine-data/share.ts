import pupa from "pupa";

export default () => ({
  permalink: window.location.href,
  title: document.title,
  shareModal: false,
  presetShareItems: [
    {
      id: "x",
      name: "X",
      icon: "i-simple-icons-x",
      type: "url",
      url: `http://x.com/share?url={url}&text={title}`,
    },
    {
      id: "telegram",
      name: "Telegram",
      icon: "i-simple-icons-telegram",
      type: "url",
      url: `https://telegram.me/share/url?url={url}&text={title}`,
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: "i-simple-icons-facebook",
      type: "url",
      url: `https://facebook.com/sharer/sharer.php?u={url}`,
    },
    {
      id: "qq",
      name: "QQ",
      icon: "i-simple-icons-tencentqq",
      type: "url",
      url: `https://connect.qq.com/widget/shareqq/iframe_index.html?url={url}&title={title}`,
    },
    {
      id: "qzone",
      name: "QQ空间",
      icon: "i-simple-icons-qzone",
      type: "url",
      url: `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}`,
    },
    {
      id: "weibo",
      name: "微博",
      icon: "i-simple-icons-sinaweibo",
      type: "url",
      url: `http://service.weibo.com/share/share.php?url={url}&title={title}`,
    },
    {
      id: "douban",
      name: "豆瓣",
      icon: "i-simple-icons-douban",
      type: "url",
      url: `https://www.douban.com/share/service?href={url}&name={title}`,
    },
  ],
  handleShare(id: string) {
    const item = this.presetShareItems.find((item) => item.id === id);

    if (!item) {
      return;
    }

    const width = 1000;
    const height = 500;
    const top = window.innerHeight / 2 - height / 2;
    const left = window.innerWidth / 2 - width / 2;
    const windowParams = `width=${width}, height= ${height}, top=${top}, left=${left}, status=no, scrollbars=no, resizable=no`;
    window.open(pupa(item.url, { url: this.permalink, title: this.title }), `分享：${this.title}`, windowParams);
  },
});
