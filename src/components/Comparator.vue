<template lang="html">
  <div class="comparator">
    <v-card class="mt-2">
      <v-card-title>
        <span class="headline">Best item is: {{betterItem.name}}</span>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat>
          Add new item
        </v-btn>
        <v-btn flat>
          Delete all
        </v-btn>
        <v-menu offset-y>
          <v-btn flat slot="activator">Select unit: {{ unit }}</v-btn>
          <v-list>
            <v-list-tile v-for="u in units" :key="u" tag="li" @click.native="setUnit(u)">
              <v-list-tile-title>{{ u }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-card class="mb-5 mt-1">
      <v-list three-line>
        <v-list-tile ripple v-for="(item, index) in items" v-bind:key="item.id" tag="li">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }} - {{pricePerUnit(item) | currency}} {{unit}}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.price | currency }}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ item.units | qty_unit(unit) }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon ripple @click="deleteItem(item, index)">
              <v-icon class="red--text text--lighten-1">close</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import currency from '@/mixins/currency'
import quantity from '@/mixins/quantity'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'comparator',
  mixins: [currency, quantity],
  data () {
    return {
      units: ['KG', 'GR', 'LT', 'ML', 'MTR', 'CM', 'PZ'],
      products: [
        {name: 'Suavitel', price: 38, units: 1000},
        {name: 'Ensueño', price: 39, units: 850},
        {name: 'Downy', price: 100, units: 3000},
        {name: 'El de aurrera', price: 180, units: 5000},
        {name: 'Great Value', price: 120, units: 3000}
      ]
    }
  },
  computed: {
    ...mapState(['unit']),
    items () {
      return this.products.sort((a, b) => {
        return this.pricePerUnit(a) - this.pricePerUnit(b)
      })
    },
    betterItem () {
      return this.items[0]
    }
  },
  methods: {
    ...mapActions(['setUnit']),

    deleteItem (item, index) {
      console.log(item)
    },

    pricePerUnit (item) {
      return (item.price / item.units)
    }
  }
}
</script>

<style lang="scss">
</style>
