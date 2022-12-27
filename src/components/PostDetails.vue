<template>
  <div>
    <div class="card mb-2">
      <div class="card-body">
        {{ getPostDetail(params.id).body }} {{ getPostDetail(params.id).id }}
      </div>
      <div
        class="card-footer d-flex justify-content-between align-items-center"
      >
        <span>
          <i class="bi bi-person"></i>{{ getPostDetail(params.id).username }}
        </span>

        <span @click="storeLike" style="cursor: pointer">
          <i class="bi bi-heart">{{
            getPostLikes(getPostDetail(params.id).id)
          }}</i>
        </span>
        <router-link
          :to="`/post/${getPostDetail(params.id).id}`"
          class="text-decoration-none text-dark"
        >
          <span>
            <i class="bi bi-chat"></i
            >{{ getPostComments(getPostDetail(params.id).id).length }}
          </span>
        </router-link>

        <span>
          <i class="bi bi-alarm"></i>{{ getPostDetail(params.id).time }}
        </span>
      </div>
    </div>
    <AddComment @commentAdded="commentAdd" />

    <Comments
      v-for="comment in getPostComment(params.id)"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import AddComment from "../components/AddComment.vue";
import Comments from "../components/Comments.vue";
import { useRoute } from "vue-router";
import { useLikeStore } from "@/stores/useLikeStore";
import { usePostStore } from "@/stores/usePostStore";
import { useCommentStore } from "@/stores/useCommentStore";
import { uuid } from "vue-uuid";

// eslint-disable-next-line no-unused-vars
const { params } = useRoute();
// eslint-disable-next-line no-undef

const { addLike, getPostLikes } = useLikeStore();
// eslint-disable-next-line no-undef
const { getPostDetail } = usePostStore();

const { addComment, getPostComments, getPostComment } = useCommentStore();
const storeLike = () => {
  const like = {
    id: uuid.v4(),
    // eslint-disable-next-line no-undef
    post_id: getPostDetail(params.id).id,
  };
  // eslint-disable-next-line no-undef
  addLike(like);
};

// eslint-disable-next-line no-undef
const commentAdd = (comment) => {
  (comment.post_id = getPostDetail(params.id).id), addComment(comment);
};
</script>

<style></style>
