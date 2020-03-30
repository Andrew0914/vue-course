import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import cinemaStore from './store'

Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store(cinemaStore)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
