import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import listModule from './list/index'

Vue.use(Vuex)

const state = {
  loginState: false,
  loginName: 'Jimmy',
  newsList: [
    { id: 1, content: '习近平的这15段话值得细细研读', isnew: false, isMilitary: false, read: 0 },
    { id: 2, content: '中央军委首次举行开训动员大会', isnew: false, isMilitary: true, read: 0 },
    { id: 3, content: '中央军委首次举行开训动员大会', isnew: false, isMilitary: true, read: 0 },
    { id: 4, content: '习近平的这15段话值得细细研读', isnew: false, isMilitary: false, read: 0 },
    { id: 5, content: '习近平的这15段话值得细细研读', isnew: true, isMilitary: false, read: 0 },
    { id: 6, content: '中央军委首次举行开训动员大会', isnew: true, isMilitary: true, read: 0 },
    { id: 7, content: '中央军委首次举行开训动员大会', isnew: true, isMilitary: true, read: 0 },
    { id: 8, content: '习近平的这15段话值得细细研读', isnew: true, isMilitary: false, read: 0 },
    { id: 9, content: '习近平的这15段话值得细细研读', isnew: true, isMilitary: false, read: 0 }
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    listModule: listModule
  }
})
