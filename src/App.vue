<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-10 mx-auto">
        <Header></Header>
        <router-view></router-view>
      </div>
    </div>
  </div>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
  />
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import Header from "./components/Header.vue";
</script>

<style></style>
