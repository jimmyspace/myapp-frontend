import $http from '@/ajax'
let timerObj
const actions = {
  getArticles({ commit, state }) {
    $http.post('/api/articles', {
        nowPage: state.articles.nowPage + 1,
        limit: state.articles.pageSize,
        type: 0
      })
      .then(function(response) {
        if (response.code === 200) {
          commit('getArticles', {
            list: response.list,
            message: '获取成功',
            nowPage: response.nowPage
          })
        } else {
          commit('getArticles', {
            list: [],
            message: '获取失败',
            nowPage: state.articles.nowPage
          })
        }
      })
      .catch(function(error) {
        commit('getArticles', {
          list: [],
          message: '获取失败',
          nowPage: state.articles.nowPage
        })
      })
  },
  getCodeArticles({ commit, state }) {
    $http.post('/api/selectArticles', {
        nowPage: state.codeArticles.nowPage,
        limit: state.codeArticles.pageSize,
        type: 1
      })
      .then(function(response) {
        if (response.code === 200) {
          commit('getCodeArticles', {
            list: response.list,
            message: '获取成功',
            nowPage: response.nowPage
          })
        } else {
          commit('getCodeArticles', {
            list: [],
            message: '获取失败',
            nowPage: state.codeArticles.nowPage
          })
        }
      })
      .catch(function(error) {
        commit('getCodeArticles', {
          list: [],
          message: '获取失败',
          nowPage: state.codeArticles.nowPage
        })
      })
  },
  getMoodArticles({ commit, state }) {
    $http.post('/api/selectArticles', {
        nowPage: state.moodArticles.nowPage,
        limit: state.moodArticles.pageSize,
        type: 2
      })
      .then(function(response) {
        if (response.code === 200) {
          commit('getMoodArticles', {
            list: response.list,
            message: '获取成功',
            nowPage: response.nowPage
          })
        } else {
          commit('getMoodArticles', {
            list: [],
            message: '获取失败',
            nowPage: state.moodArticles.nowPage
          })
        }
      })
      .catch(function(error) {
        commit('getMoodArticles', {
          list: [],
          message: '获取失败',
          nowPage: state.moodArticles.nowPage
        })
      })
  },
  //alert 定时器
  timer({ dispatch, commit, state },payload){
    timerObj = setTimeout(function(){
      commit('timer', payload)
      if(state.jalert.time === 0){
        clearTimeout(timerObj)
      }else{
        dispatch('timer', payload)
      }
      
    },1000)
  }
}

export default actions
