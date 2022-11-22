import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    isDarkMode: true
  },
  getters: {
  },
  mutations: {
    switchTheme(state){
      state.isDarkMode = !state.isDarkMode
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
