// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'typeface-roboto'
import 'webpack-material-design-icons'
import Vue from 'vue'
import App from './App'
import router from './router'
import db from './datastore'
import Vuetify from 'vuetify'
const lodash = require('lodash')
window._ = window.lodash = lodash

Vue.prototype.$db = db
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
