import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import editModule from './edit/index'

Vue.use(Vuex)

const state = {
  loginState: false,
  loginName: 'Jimmyspace',
  articles: {
    list: [],
    message: '',
    nowPage: 1,
    pageSize: 10,
    all: false,
    loaded: false, //加载过
    loading: false //加载中
  },
  codeArticles: {
    list: [],
    message: '',
    nowPage: 1,
    pageSize: 10,
    all: false,
    loaded: false, //加载过
    loading: false //加载中
  },
  moodArticles: {
    list: [],
    message: '',
    nowPage: 1,
    pageSize: 10,
    all: false,
    loaded: false, //加载过
    loading: false //加载中
  },
  jalert: {
    type: 'success',
    info: '发送成功',
    time: 3,
    status: false
  }
}

export default new Vuex.Store({
  modules:{
    editModule:editModule
  },
  state,
  mutations,
  actions,
  getters
})
