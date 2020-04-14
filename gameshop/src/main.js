import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { router } from "./router";
import gameStore from "./store"
import  Vuex from "vuex";
import VueI18n from 'vue-i18n'
import  messages from "./locales";

Vue.use(VueI18n)
Vue.use(VueRouter);
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store(gameStore)
const i18n = new VueI18n({locale: localStorage.getItem("gameshop_locale") || "en", messages})

new Vue({
  i18n,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
