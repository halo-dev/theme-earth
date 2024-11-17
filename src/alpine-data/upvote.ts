interface upvoteState {
  upvotedNames: string[];
  init(): void;
  upvoted(id: string): boolean;
  handleUpvote(name: string): void;
}

export default (key: string, group: string, plural: string): upvoteState => ({
  upvotedNames: [],
  init() {
    this.upvotedNames = JSON.parse(localStorage.getItem(`halo.upvoted.${key}.names`) || "[]");
  },
  upvoted(id: string) {
    return this.upvotedNames.includes(id);
  },
  async handleUpvote(name) {
    if (this.upvoted(name)) {
      return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "/apis/api.halo.run/v1alpha1/trackers/upvote");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      this.upvotedNames = [...this.upvotedNames, name];
      localStorage.setItem(`halo.upvoted.${key}.names`, JSON.stringify(this.upvotedNames));

      const upvoteNode = document.querySelector("[data-upvote-" + key + '-name="' + name + '"]');

      if (!upvoteNode) {
        return;
      }

      const upvoteCount = parseInt(upvoteNode.textContent || "0");
      upvoteNode.textContent = upvoteCount + 1 + "";
    };
    xhr.onerror = function () {
      alert(window.i18nResources["jsModule.upvote.networkError"]);
    };
    xhr.send(
      JSON.stringify({
        group: group,
        plural: plural,
        name: name,
      }),
    );
  },
});
