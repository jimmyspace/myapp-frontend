import $http from '@/ajax'
const actions = {
  getArticles({ commit,state }) {
    $http.post('/api/articles', {
        nowPage: 1,
        limit: 10
      })
      .then(function(response) {
        if (response.code === 200) {
          commit('getArticles',{
            list: response.list,
            message: '获取成功',
            nowPage: response.nowPage
          })
        } else {
          commit('getArticles',{
            list: [],
            message: '获取失败',
            nowPage: false
          })
        }
      })
      .catch(function(error) {
        commit('getArticles',{
          list: [],
          message: '获取失败',
          nowPage: false
        })
      })
  }
}

export default actions
