<template lang="html">
  <v-card class="item-list mt-1">
    <v-list two-line>
      <v-list-tile avatar ripple v-for="(item, index) in items" v-bind:key="item.id" tag="li">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.price | currency }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon ripple @click="deleteItem(item, index)">
            <v-icon class="red--text text--lighten-1">close</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import currency from '@/mixins/currency'
export default {
  name: 'item-list',
  props: ['items'],
  mixins: [currency],
  methods: {
    async deleteItem (item, index) {
      await this.$db.shoppingCart.delete(item.id)
      this.$emit('deleted-item')
    }
  }
}
</script>

<style lang="scss">
.item-list {
  margin-bottom: 96px;
}
</style>
