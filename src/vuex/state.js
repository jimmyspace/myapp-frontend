import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  loginState: false,
  loginName: 'Jimmy',
  newsList: [
  	{content: '中央军委首次举行开训动员大会', isnew: false, isMilitary: false},
  	{content: '中央军委首次举行开训动员大会', isnew: false, isMilitary: true},
  	{content: '中央军委首次举行开训动员大会', isnew: false, isMilitary: true},
  	{content: '中央军委首次举行开训动员大会', isnew: false, isMilitary: false},
  	{content: '中央军委首次举行开训动员大会', isnew: true, isMilitary: false},
  	{content: '中央军委首次举行开训动员大会', isnew: true, isMilitary: true},
  	{content: '中央军委首次举行开训动员大会', isnew: true, isMilitary: true},
  	{content: '中央军委首次举行开训动员大会', isnew: true, isMilitary: false},
  	{content: '中央军委首次举行开训动员大会', isnew: true, isMilitary: false}
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
