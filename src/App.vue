<template>
  <v-app light toolbar--fixed toolbar>
    <v-navigation-drawer temporary v-model="drawer">
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" value="true" :to="item.action">
          <v-list-tile-action>
            <v-icon light v-html="item.icon" class="grey--text text--darken-2"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar absolute class="teal lighten-3">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-slide-y-transition mode="out-in">
        <v-layout row>
          <v-flex xs12 sm12 md8 offset-md2>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-slide-y-transition>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { icon: 'shopping_cart', title: 'Mis Articulos', action: '/' },
        { icon: 'compare_arrows', title: 'Comparar', action: '#' },
        { icon: 'info', title: 'Acerca de Markety', action: '#' }
      ],
      title: 'Markety'
    }
  }
}
</script>

<style lang="stylus">
@import './stylus/main'
</style>
