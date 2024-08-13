import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Scroll from '@/components/Scroll'

Vue.component('Scroll', Scroll)

Vue.config.productionTip = false
Vue.filter('actorsList', (actors) => {
  var actors = actors?.map(item => item.name).join(',')
  return actors
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
