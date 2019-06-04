import Vue from 'vue'
import router from 'vue-router'
import sortChild from '../components/sortChild'
Vue.use(router)

export default new router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
            
            {
              path:'/sortChild',
              component:sortChild
            }
  ]
})
