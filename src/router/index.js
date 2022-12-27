import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import PostDetails from "../components/PostDetails.vue";
// eslint-disable-next-line no-unused-vars
import AddComment from "../components/AddComment.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/post/:id",
    name: "postDetails",
    component: PostDetails,
  },
  {
    path: "/AddComment",
    name: "addComment",
    component: AddComment,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
