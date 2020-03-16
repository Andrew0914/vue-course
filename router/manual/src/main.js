import Vue from 'vue'
import { routes } from "./router";
import NotFound from "./views/404";

Vue.config.productionTip = false

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
