<template>
  <v-app light>
    <v-toolbar fixed class="teal white--text">
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
      <v-bottom-nav fixed value="true" class="teal">
        <v-btn flat dark v-for="(item, i) in items" :key="i" :to="item.action">
          <span>{{ item.title }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-bottom-nav>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { icon: 'shopping_cart', title: 'My cart', action: '/' },
        { icon: 'compare_arrows', title: 'Compare', action: '/compare' },
        { icon: 'info', title: 'About', action: '/about' }
      ],
      title: 'Markety'
    }
  }
}
</script>

<style lang="stylus">
@import './stylus/main'
</style>
