import Vue from 'vue'
import Vuex from 'vuex'
import City from './City'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        title: state.title
      }
    }
  })],
  state: {
    title: true
  },
  getters: {
  },
  mutations: {
    hide(state) {
      state.title = false
    },
    show(state) {
      state.title = true
    }
  },
  actions: {
  },
  modules: {
    City,
  }
})
