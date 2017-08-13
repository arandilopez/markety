import Vue from 'vue'
import Router from 'vue-router'
import ShoppingList from '@/components/ShoppingList'
import About from '@/components/About'
import Comparator from '@/components/Comparator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingList',
      component: ShoppingList
    },
    {
      path: '/compare',
      name: 'Comparator',
      component: Comparator
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
