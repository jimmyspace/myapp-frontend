import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import listModule from './list/index'

Vue.use(Vuex)

const state = {
  loginState: false,
  loginName: 'Jimmyspace',
  articles: {
    list:[],
    message: '',
    nowPage: 1,
    pageSize: 10
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
