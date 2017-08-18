import Vue from 'vue'
import { mount } from 'avoriaz'
import ShoppingList from '@/components/ShoppingList'
import db from '@/db'
Vue.prototype.$db = db

describe('ShoppingList.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(ShoppingList)
    Vue.nextTick(() => {
      expect(vm.find('div.headline').text())
        .to.equal('Total: $0.00')
    })
  })
})
