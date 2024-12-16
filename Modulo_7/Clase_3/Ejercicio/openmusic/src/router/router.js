import { createRouter, createWebHistory } from "vue-router";
import categoria from "./components/CategoriaVinilos.vue";

const routes = [
  { path: "/categoria", CompositionEvent: categoria, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
