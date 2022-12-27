<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="card bg-dark text-white my-2">
    <div class="card-body d-flex flex-column p-2">
      <span> <i class="bi bi-person"></i>{{ comment.username }} </span>

      <span> <i class="bi bi-alarm"></i>{{ comment.time }} </span>

      <p class="lead">
        {{ comment.body }}
      </p>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars, no-undef
const props = defineProps({
  comment: {
    // eslint-disable-next-line no-undef
    type: Object,
    required: true,
  },
});
</script>

<style></style>
