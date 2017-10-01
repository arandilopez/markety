import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createPersistedState({key: 'markety-app'})],
  state: {
    unit: 'KG'
  },
  mutations,
  actions
})

export default store
