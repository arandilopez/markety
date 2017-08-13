<template lang="html">
  <div>
    <v-list-tile-content>
      <v-list-tile-title>{{ item.name }}</v-list-tile-title>
      <v-list-tile-sub-title>{{ item.price | currency }}</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-icon class="red--text text--lighten-1">close</v-icon>
    </v-list-tile-action>
  </div>
</template>

<script>
import currency from '@/mixins/currency'
export default {
  name: 'shopping-item',
  props: ['item'],
  mixins: [currency],
  data () {
    return {}
  }
}
</script>

<style lang="scss">
</style>
