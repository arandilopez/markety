<template lang="html">
  <div class="shopping-list">
    <v-card>
      <v-card-title primary-title>
        <div class="headline">Total: {{ total | currency }}</div>
      </v-card-title>
    </v-card>
    <v-card class="item-list">
      <v-list two-line>
        <v-list-tile avatar ripple v-for="(item, index) in items" v-bind:key="item.id" tag="li">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.price | currency }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action @click="deleteItem(item, index)">
            <v-icon class="red--text text--lighten-1">close</v-icon>
          </v-list-tile-action>
          <v-divider v-if="index + 1 < items.length"></v-divider>
        </v-list-tile>
      </v-list>
    </v-card>
    <v-btn fixed dark fab bottom right class="pink fab-button">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import currency from '@/mixins/currency'
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
  }
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
