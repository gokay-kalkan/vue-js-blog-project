import { defineStore } from "pinia";

export const useLikeStore = defineStore("likes", {
  state: () => {
    return {
      likes: JSON.parse(localStorage.getItem("likes")) || [],
    };
  },
  getters: {
    // eslint-disable-next-line no-unused-vars
    getPostLikes(state) {
      return (postId) =>
        state.likes.filter((like) => like.post_id === postId).length;
    },
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addLike(like) {
      this.likes.push(like);
      localStorage.setItem("likes", JSON.stringify(this.likes));
    },
  },
});
