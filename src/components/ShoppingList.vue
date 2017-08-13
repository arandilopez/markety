<template lang="html">
  <div class="shopping-list">
    <v-card class="mt-2">
      <v-card-title primary-title>
        <div class="headline">Total: {{ total | currency }}</div>
      </v-card-title>
    </v-card>
    <item-list :items="items" @deleted-item="loadShoppingCart"></item-list>
    <add-item-dialog @saved-item="loadShoppingCart"></add-item-dialog>
  </div>
</template>

<script>
import currency from '@/mixins/currency'
import ItemList from './ShoppingList/ItemList'
import AddItemDialog from './ShoppingList/AddItemDialog'
export default {
  name: 'shopping-list',
  mixins: [currency],
  data () {
    return {
      items: [],
      dialog: false
    }
  },
  async created () {
    await this.loadShoppingCart()
  },
  computed: {
    total () {
      return this.items.reduce((carry, item) => { return carry + parseFloat(item.price) }, 0)
    }
  },
  methods: {
    async loadShoppingCart () {
      this.items = await this.$db.shoppingCart.toArray()
    }
  },
  components: {ItemList, AddItemDialog}
}
</script>

<style lang="scss" scoped>
</style>
