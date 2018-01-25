import $http from '@/ajax'
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
          nowPage: fstate.articles.nowPage
        })
      })
  },
  getCodeArticles({ commit, state }) {
    $http.post('/api/articles', {
        nowPage: state.codeArticles.nowPage + 1,
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
    $http.post('/api/articles', {
        nowPage: state.moodArticles.nowPage + 1,
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
  }
}

export default actions
