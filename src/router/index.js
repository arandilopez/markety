import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vuetify from 'vuetify'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
