import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import Default from "@/layouts/Default.vue";
import Home from "@/views/Home.vue";

export const loginIgnore = {
  names: ["404", "403", "Login"],
  paths: ["/auth/login"],
  includes(route: RouteLocationNormalized): boolean {
    return (
      this.names.includes(route.name as string) ||
      this.paths.includes(route.path)
    );
  },
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "",
    component: Default,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
