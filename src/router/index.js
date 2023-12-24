import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";
import Gaceta from "../views/Gaceta.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    {
        path: "/gaceta",
        name: "gaceta",
        component: Gaceta,
      },
    {
      path: "/:notFound(.*)",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;

