<template lang="html">
  <v-dialog v-model="dialog" persistent>
    <v-btn fixed dark fab bottom right class="pink mb-5" slot="activator">
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">New Item</span>
      </v-card-title>
      <v-card-text>
        <v-text-field label="Name" v-model="item.name" required maxlength="50"></v-text-field>
        <v-text-field type="number" label="Quantity" v-model="item.quantity" :suffix="unit" required></v-text-field>
        <v-text-field type="number" label="Price" v-model="item.price" prefix="$" required></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
        <v-btn class="blue--text darken-1" flat @click.native="saveItem">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'add-product-dialog',
  props: ['unit'],
  data () {
    return {
      dialog: false,
      item: {
        name: '',
        price: '',
        quantity: 0
      }
    }
  },
  methods: {
    async saveItem () {
      if (this.itemIsValid()) {
        let item = _.clone(this.item)
        await this.$db.comparables.add(item)
        this.$emit('saved-product')
        this.dialog = false
        this.clearItem()
      }
    },

    itemIsValid () {
      return !_.isEmpty(this.item.name) &&
        (!_.isEmpty(this.item.price) && this.item.price > 0) &&
        (!_.isEmpty(this.item.quantity) && this.item.quantity > 0)
    },

    clearItem () {
      this.item = {name: '', price: 0, quantity: 0}
    }
  }
}
</script>

<style lang="scss">
</style>
