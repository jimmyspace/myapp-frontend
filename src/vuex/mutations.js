const mutations = {
  getArticles(state, payload) {
    payload.list.forEach(e => {
      state.articles.list.push(e)
    })
    state.articles.message = payload.message
    state.articles.nowPage = payload.nowPage
    if (payload.list.length < state.articles.pageSize) {
      state.articles.all = true
    }
  },
  getCodeArticles(state, payload) {
    payload.list.forEach(e => {
      state.codeArticles.list.push(e)
    })
    state.codeArticles.message = payload.message
    state.codeArticles.nowPage = payload.nowPage
    if (payload.list.length < state.codeArticles.pageSize) {
      state.codeArticles.all = true
    }
  },
  getMoodArticles(state, payload) {
    payload.list.forEach(e => {
      state.moodArticles.list.push(e)
    })
    state.moodArticles.message = payload.message
    state.moodArticles.nowPage = payload.nowPage
    if (payload.list.length < state.moodArticles.pageSize) {
      state.moodArticles.all = true
    }
  }
}

export default mutations
