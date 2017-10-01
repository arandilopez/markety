<template lang="html">
  <v-card class="mb-5 mt-1">
    <v-list three-line>
      <v-list-tile ripple v-for="(item, index) in items" v-bind:key="item.id" tag="li">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }} - {{ pricePerUnit(item) | currency }} / {{ unit }}</v-list-tile-title>
          <v-list-tile-sub-title>P: {{ item.price | currency }}</v-list-tile-sub-title>
          <v-list-tile-sub-title>QTY: {{ item.quantity | qty_unit(unit) }}</v-list-tile-sub-title>
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
import quantity from '@/mixins/quantity'
import currency from '@/mixins/currency'
export default {
  name: 'product-list',
  props: ['items', 'unit'],
  mixins: [currency, quantity],
  methods: {
    pricePerUnit (item) {
      return (item.price / item.quantity)
    },

    async deleteItem (item, index) {
      await this.$db.comparables.delete(item.id)
      this.$emit('deleted-product')
    }
  }
}
</script>

<style lang="scss">
.item-list {
  margin-bottom: 96px;
}
</style>
