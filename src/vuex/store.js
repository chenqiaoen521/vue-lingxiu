import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  showMenu: true
}
export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    },
    UPDATE_SHOWMENU(state,showMenu){
      state.showMenu = showMenu;
    }
  }
})
