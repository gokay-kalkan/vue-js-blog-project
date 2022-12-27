<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card mt-2">
    <div class="card-body">
      <form>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            v-model="data.post.username"
            class="form-control"
            id="username"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">Post</label>
          <textarea
            v-model="data.post.body"
            row="3"
            cols="50"
            class="form-control"
            id="body"
          ></textarea>
        </div>

        <button
          @click.prevent="storePost"
          :disabled="!data.post.username || !data.post.body"
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { usePostStore } from "@/stores/usePostStore";
import { uuid } from "vue-uuid";
import moment from "moment";
// eslint-disable-next-line no-unused-vars

const { addPost } = usePostStore();
const data = reactive({
  post: {
    username: "",
    body: "",
  },
});

const storePost = () => {
  const post = data.post;
  post.id = uuid.v4();
  post.time = moment().format("MMMM Do YYYY, h:mm:ss a");

  addPost(post);

  data.post = {
    username: "",
    body: "",
  };
};
</script>

<style></style>
