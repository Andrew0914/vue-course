import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter("toFuture", function(name){
  return `${name} to the future `
})

new Vue({
  render: h => h(App),
}).$mount('#app')
