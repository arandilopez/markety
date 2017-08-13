<template lang="html">
  <div class="shopping-list">
    <v-card>
      <v-card-title primary-title>
        <div class="headline">Total: {{ total | currency }}</div>
      </v-card-title>
    </v-card>
    <item-list :items="items" @delete="deleteItem"></item-list>
    <v-btn fixed dark fab bottom right class="pink fab-button">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import currency from '@/mixins/currency'
import ItemList from './ShoppingList/ItemList'
export default {
  name: 'shopping-list',
  mixins: [currency],
  data () {
    return {
      items: []
    }
  },
  async created () {
    await this.loadShoppingCart()
  },
  computed: {
    total () {
      return this.items.reduce((carry, item) => { return carry + item.price }, 0)
    }
  },
  methods: {
    async loadShoppingCart () {
      this.items = await this.$db.shoppingCart.toArray()
    },

    async deleteItem (item, index) {
      await this.$db.shoppingCart.delete(item.id)
      this.items.splice(index, 1)
    }
  },
  components: {ItemList}
}
</script>

<style lang="scss" scoped>
.item-list {
  margin-bottom: 96px;
  margin-top: 4px;
}

.fab-button {
  margin-bottom: 48px;
}
</style>
