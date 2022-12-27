<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card mb-2">
    <div class="card-body">
      <router-link
        :to="`/post/${post.id}`"
        v-bind:post="post"
        class="text-decoration-none text-secondary"
        >{{ post.body }}</router-link
      >
    </div>
    <div class="card-footer d-flex justify-content-between align-items-center">
      <span> <i class="bi bi-person"></i>{{ post.username }} </span>

      <span @click="storeLike" style="cursor: pointer">
        <i class="bi bi-heart">{{ getPostLikes(post.id) }}</i>
      </span>
      <router-link
        :to="`/post/${post.id}`"
        class="text-decoration-none text-dark"
      >
        <span> <i class="bi bi-chat"></i>{{ getPostComments(post.id) }}</span>
      </router-link>

      <span> <i class="bi bi-alarm"></i>{{ post.time }} </span>
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-unused-vars
import { useLikeStore } from "@/stores/useLikeStore";
import { useCommentStore } from "@/stores/useCommentStore";
import { uuid } from "vue-uuid";
// eslint-disable-next-line no-undef, no-unused-vars
const props = defineProps({
  post: {
    // eslint-disable-next-line no-undef
    type: Object,
    required: true,
  },
});
// eslint-disable-next-line no-undef, no-unused-vars
const { addLike, getPostLikes } = useLikeStore();
const { getPostComments } = useCommentStore();
const storeLike = () => {
  const like = {
    id: uuid.v4(),
    post_id: props.post.id,
  };
  // eslint-disable-next-line no-undef
  addLike(like);
};
</script>

<style></style>
