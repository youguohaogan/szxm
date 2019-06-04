import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routers'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(axios)
new Vue({
  App,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
