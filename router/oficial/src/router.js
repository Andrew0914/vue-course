import VueRouter  from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import User from "./views/User";

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: User }
]


export const router = new VueRouter({
  routes
})