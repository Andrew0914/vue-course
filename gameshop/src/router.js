import VueRouter from "vue-router";
import Home from "./views/Home";
import Game from "./views/Game";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/game/:id", name:"game" , component: Game ,  props: true}
];

export const router = new VueRouter({
  mode: "history",
  routes
});
