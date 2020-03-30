import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { router } from "./router";
import gameStore from "./store"
import  Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store(gameStore)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
