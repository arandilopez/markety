<template>
  <v-app light>
    <v-navigation-drawer
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          value="true"
          :to="item.action"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon" class="grey--text text--darken-2"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="teal lighten-3">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <router-view></router-view>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
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
