<template lang="html">
  <div class="shopping-list">
    <v-card>
      <v-card-title primary-title>
        <div class="headline">Total: {{ total | currency }}</div>
      </v-card-title>
    </v-card>
    <v-list two-line>
      <v-list-tile avatar ripple v-for="(item, index) in items" v-bind:key="item.title">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.price | currency }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon class="red--text text--lighten-1">close</v-icon>
        </v-list-tile-action>
        <!-- <v-divider v-if="index + 1 < items.length"></v-divider> -->
      </v-list-tile>
    </v-list>
    <div class="float-button">
      <v-fab-transition>
        <v-btn class="pink" dark absolute bottom right fab>
          <v-icon>add</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
  </div>
</template>

<script>
import ShoppingItem from './ShoppingList/ShoppingItem'
import currency from '@/mixins/currency'
export default {
  name: 'shopping-list',
  mixins: [currency],
  data () {
    return {
      items: [
        {name: 'Papas', price: 24},
        {name: 'Lechuga', price: 12},
        {name: 'tomates', price: 10}
      ]
    }
  },
  computed: {
    total () {
      return this.items.reduce((carry, item) => { return carry + item.price }, 0)
    }
  },
  components: {ShoppingItem}
}
</script>

<style lang="scss" scoped>
div.float-button {
  position: fixed;
  bottom: 120px;
  right: 16px;
}
</style>
