import VueRouter from "vue-router";
import Home from "./views/Home";
import Game from "./views/Game";
import Car from "./views/Car";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/game/:id", name:"game" , component: Game ,  props: true},
    { path: "/car", name: "car", component: Car },
];

export const router = new VueRouter({
  mode: "history",
  routes
});
