import $http from '@/ajax'
const articleMoudle = {
  namespaced: true,
  state: {
    title: '',
    content: '',
    data: '',
    comments: '',
    favorite: ''
  },
  mutations: {
    changeArticle(state, payload) {
      state.title = payload.title
      state.content = payload.content
      state.data = payload.data
      state.comments = payload.comments
      state.favorite = payload.favorite
    }
  },
  actions: {
    getArticleDetails({ commit, state }, payload) {
      $http.post('/api/article', {
          id: payload.id
        })
        .then(function(response) {
          if (code === 200) {
            
          }
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}

export default articleMoudle
