<template lang="html">
<div class="about">
  <v-card class="mb-5 mt-2">
    <v-card-text>
      <h3>About Markety <small>v{{ version }}</small></h3>
      <p>
        Markety is a web application that aims to help saving some dollars when you go to the super market, tracking the cost of all the items you add to your cart and comparing the price of different products against the content to find the best to save money.
      </p>
      <!-- <p>
        Markety es una aplicación web que busca ayudar en ahorrar algunos dolares cuando vayas al super mercado, llevando un seguimiento del costo de todos los articulos que añadas a tu carrito y comparando el precio de diferentes productos contra el contenido para encontrar el mejor para ahorrar dinero.
      </p> -->
      <h4>License</h4>
      <p>Markety is licensed under Apache-2.0 License. Markety it's a free and open source software and you can contribute tu make it better.</p>
      <p>If you have a question or you want to contribute, visit the code repo at <a href="https://github.com/arandilopez/markety" target="_blank">Github</a>.</p>
      <p class="text-xs-center">
        <v-icon class="black--text">code</v-icon> with
        <v-icon class="pink--text">favorite</v-icon>
        by <a href="https://arandilopez.me" target="_blank">Arandi López</a>, {{year}}
      </p>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
const pck = require('../../package.json')
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    },

    version () {
      return pck.version
    }
  }
}
</script>

<style lang="scss">
</style>
