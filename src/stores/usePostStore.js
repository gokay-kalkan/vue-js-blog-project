import { defineStore } from "pinia";

export const usePostStore = defineStore("posts", {
  state: () => {
    return {
      posts: JSON.parse(localStorage.getItem("posts")) || [],
    };
  },
  getters: {
    // eslint-disable-next-line no-unused-vars
    getPostDetail(state) {
      return (id) => state.posts.find((post) => post.id === id);
    },
    // eslint-disable-next-line no-unused-vars
    getPosts(state) {
      return state.posts;
    },
  },

  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addPost(post) {
      this.posts.push(post);
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
  },
});
