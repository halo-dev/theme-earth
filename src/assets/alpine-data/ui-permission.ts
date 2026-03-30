import type { UserPermission } from "@halo-dev/api-client";

interface State {
  userPermission?: UserPermission;
  init: () => void;
  shouldDisplay?: boolean;
  fetchUserPermission: () => void;
}

export default (currentUser: string, permission: string): State => ({
  userPermission: undefined,

  init() {
    this.fetchUserPermission();
  },

  get shouldDisplay() {
    if (currentUser === "anonymousUser") {
      return false;
    }

    if (!this.userPermission) {
      return false;
    }

    if (this.userPermission.uiPermissions.includes(permission)) {
      return true;
    }

    return false;
  },

  async fetchUserPermission() {
    const response = await fetch(`/apis/api.console.halo.run/v1alpha1/users/-/permissions`);

    if (response.ok) {
      this.userPermission = await response.json();
    }
  },
});
