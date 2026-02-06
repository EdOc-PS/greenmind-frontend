import Auth from "@/views/auth/Auth.vue";
import Home from "@/views/home/Home.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
