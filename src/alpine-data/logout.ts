export default () => ({
  async handleLogout() {
    if (confirm("确定要退出登录吗？")) {
      await fetch(`/logout`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "X-Xsrf-Token":
            document.cookie
              .split("; ")
              .find((row) => row.startsWith("XSRF-TOKEN"))
              ?.split("=")[1] || "",
        },
      });
      window.location.reload();
    }
  },
});
