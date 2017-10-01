<template lang="html">
  <div class="comparator">
    <v-card class="mt-2">
      <v-card-title>
        <span class="headline">Best item is: {{betterItem.name}}</span>
      </v-card-title>
      <v-card-actions>
        <v-btn flat class="pink--text" @click="clearProducts()">clear product list</v-btn>
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
    <product-list :items="products" :unit="unit" @deleted-product="loadProducts"></product-list>
    <add-product-dialog @saved-product="loadProducts" :unit="unit"></add-product-dialog>
  </div>
</template>

<script>
import currency from '@/mixins/currency'
import quantity from '@/mixins/quantity'
import { mapState, mapActions } from 'vuex'
import ProductList from './Comparator/ProductList'
import AddProductDialog from './Comparator/AddProductDialog'

export default {
  name: 'comparator',
  mixins: [currency, quantity],
  data () {
    return {
      units: ['KG', 'GR', 'LT', 'ML', 'MTR', 'CM', 'PZ'],
      products: []
    }
  },
  async created () {
    await this.loadProducts()
  },
  computed: {
    ...mapState(['unit']),
    items () {
      return this.products.sort((a, b) => {
        return this.pricePerUnit(a) - this.pricePerUnit(b)
      })
    },
    betterItem () {
      return this.items[0] || {name: ''}
    }
  },
  methods: {
    ...mapActions(['setUnit']),

    deleteItem (item, index) {
      console.log(item)
    },

    pricePerUnit (item) {
      return (item.price / item.quantity)
    },

    async loadProducts () {
      this.products = await this.$db.comparables.toArray()
    },

    async clearProducts () {
      await this.$db.comparables.clear()
      this.products = []
    }
  },
  components: { ProductList, AddProductDialog }
}
</script>

<style lang="scss">
</style>
