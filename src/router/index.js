import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cinema from "@/views/Cinema.vue";
import movie from "@/views/Movie.vue";
import movieing from "@/views/Movieing.vue";
import coming from "@/views/ComingSoon.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "movie",
    children: [
      {
        path: "/movie",
        component: movie,
        redirect: "movieing",
        children: [
          {
            path: "/movieing",
            component: movieing
          },
          {
            path: "/coming",
            component: coming
          }
        ]
      },
      {
        path: "/cinema",
        name: "cinema",
        component: Cinema
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
