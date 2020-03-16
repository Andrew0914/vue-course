import VueRouter from "vue-router";
import Home from "./views/Home";

const routes = [{ path: "/", name: "home", component: Home }];

export const router = new VueRouter({
  mode: "history",
  routes
});
