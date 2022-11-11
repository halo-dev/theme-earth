export default () => ({
  displayName: undefined,
  avatar: "/themes/theme-earth/assets/images/default-avatar.svg",
  loading: false,
  handleFetchLoginedUser: async function () {
    this.loading = true;
    const user = await (await fetch("/apis/api.console.halo.run/v1alpha1/users/-")).json();
    if (user && user.spec) {
      this.displayName = user.spec.displayName;
      this.avatar = user.spec.avatar;
    }
    this.loading = false;
  },
  init() {
    this.handleFetchLoginedUser();
  },
});
