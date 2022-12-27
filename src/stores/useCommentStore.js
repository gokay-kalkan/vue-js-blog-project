import { defineStore } from "pinia";

export const useCommentStore = defineStore("comments", {
  state: () => {
    return {
      comments: JSON.parse(localStorage.getItem("comments")) || [],
    };
  },
  getters: {
    // eslint-disable-next-line no-unused-vars
    getPostComments(state) {
      return (postId) =>
        state.comments.filter((comment) => comment.post_id === postId).length;
    },

    getPostComment(state) {
      return (postId) =>
        state.comments.filter((comment) => comment.post_id === postId);
    },
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addComment(comment) {
      this.comments.push(comment);
      localStorage.setItem("comments", JSON.stringify(this.comments));
    },
  },
});
