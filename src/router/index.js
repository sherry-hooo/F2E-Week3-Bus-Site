import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Nearby from "../views/Nearby.vue";
import Navigation from "../views/Navigation.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nearby",
    name: "Nearby",
    props: true,
    component: Nearby,
  },
  {
    path: "/:mode/:city/:displayName",
    name: "Detail",
    props: true,
    beforeEnter: (to, from) => {
      console.log(to, from);
      if (from.name === "Nearby") {
        console.log(this.params.city);
        return true;
      }
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
  },
  {
    path: "/navigation",
    name: "Navigation",
    component: Navigation,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
