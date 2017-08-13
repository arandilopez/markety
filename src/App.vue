<template>
  <v-app light>
    <v-toolbar absolute class="teal white--text">
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
    <v-bottom-nav absolute value="true" class="transparent">
      <v-btn flat light class="grey--text text-darken-2" v-for="(item, i) in items" :key="i" :to="item.action">
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { icon: 'shopping_cart', title: 'My list', action: '/' },
        { icon: 'compare_arrows', title: 'Compare', action: '#' },
        { icon: 'info', title: 'About', action: '#' }
      ],
      title: 'Markety'
    }
  }
}
</script>

<style lang="stylus">
@import './stylus/main'
</style>
