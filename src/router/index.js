import Vue from 'vue'
import Router from 'vue-router'
import ShoppingList from '@/components/ShoppingList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingList',
      component: ShoppingList
    }
  ]
})
