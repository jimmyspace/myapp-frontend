const mutations = {
  getArticles(state, payload) {
    payload.list.forEach(e => {
      state.articles.list.push(e)
    })
    state.articles.message = payload.message
    state.articles.nowPage = payload.nowPage ? payload.nowPage : state.articles.nowPage
  }
}

export default mutations
