import pupa from "pupa";

export default (shareIds: { id: string }[]) => ({
  permalink: window.location.href,
  title: document.title,
  shareModal: false,
  copied: false,
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
    {
      id: "wechat",
      name: "微信",
      icon: "i-simple-icons-wechat",
      type: "url",
      url: `/themes/theme-earth/assets/qrcode-share.html?url={url}`,
    },
    {
      id: "native",
      name: "系统分享",
      icon: "i-tabler-device-desktop",
      type: "native",
    },
  ],
  get activeShareItems() {
    return shareIds
      .map((id) => this.presetShareItems.find((item) => item.id === id.id))
      .filter(Boolean)
      .filter((item) => item?.type !== "native" || navigator.canShare?.({ title: this.title, url: this.permalink }));
  },
  handleShare(id: string) {
    const item = this.activeShareItems.find((item) => item?.id === id);

    if (!item) {
      return;
    }

    if (item.type === "native") {
      if (navigator.share) {
        navigator.share({
          title: this.title,
          url: this.permalink,
        });
        return;
      }
      alert("您的浏览器不支持系统分享");
      return;
    }

    const width = 1000;
    const height = 500;
    const top = window.innerHeight / 2 - height / 2;
    const left = window.innerWidth / 2 - width / 2;
    const windowParams = `width=${width}, height= ${height}, top=${top}, left=${left}, status=no, scrollbars=no, resizable=no`;
    window.open(pupa(item.url || "", { url: this.permalink, title: this.title }), `分享：${this.title}`, windowParams);
  },
  handleCopy() {
    navigator.clipboard.writeText(this.permalink);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  },
});
