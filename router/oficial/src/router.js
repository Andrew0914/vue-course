import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import User from "./views/User";
import Mision from "./views/mision";
import Vision from "./views/vision";

const routes = [
  { path: "/", component: Home },
  {
    path: "/about",
    component: About,
    children: [
      { path: "mision", component: Mision },
      { path: "vision", component: Vision },
      { path: "", component: Mision },
    ]
  },
  { path: "/user/:id", component: User }
];

export const router = new VueRouter({
  routes
});
