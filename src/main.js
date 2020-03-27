import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.prototype.axios=axios
Vue.config.productionTip = false
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

import scroll from '@/components/scroll'
Vue.component('Scroller',scroll)
import loading from '@/components/loading'
Vue.component('loading',loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
