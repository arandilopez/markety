import Vue from 'vue'
import Router from 'vue-router'
import ShoppingList from '@/components/ShoppingList'
import Vuetify from 'vuetify'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingList',
      component: ShoppingList
    }
  ]
})
