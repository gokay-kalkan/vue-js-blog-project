<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row my-2">
    <div class="col-md-12">
      <Post v-for="post in getPosts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from "@/stores/usePostStore";
// eslint-disable-next-line no-unused-vars
import Post from "@/components/Post.vue";

// eslint-disable-next-line no-unused-vars
const { getPosts } = usePostStore();
</script>

<style></style>
