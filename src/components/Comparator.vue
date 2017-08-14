<template lang="html">
  <div class="comparator">
    <v-card class="mt-2">
      <v-card-title>
        <span class="headline">Configuration</span>
      </v-card-title>
      <v-card-actions>
        <v-btn flat>
          Add new item
        </v-btn>
        <v-menu offset-y>
          <v-btn flat slot="activator">Select unit: {{ unit }}</v-btn>
          <v-list>
            <v-list-tile v-for="u in units" :key="u" tag="li" @click.native="unit = u">
              <v-list-tile-title>{{ u }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      unit: '',
      units: ['Kg', 'gr', 'Lt', 'ml', 'Mtr', 'cm']
    }
  }
}
</script>

<style lang="scss">
</style>
