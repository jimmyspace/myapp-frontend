//发表文章相关数据
import $http from '@/ajax'
const editModule = {
  namespaced: true,
  state: {
    title: '',
    type: 1,
    content: '',
    publishing: false
  },
  mutations: {
    changeTitle(state, payload) {
      state.title = payload.data
    },
    changContent(state, payload) {
      state.content = payload.data
    },
    changeType(state, payload) {
      state.type = payload.data
    },
    changePublishing(state, payload) {
      state.publishing = payload.data
    }
  },
  actions: {
    publish({ commit, state }) {
      if (state.publishing) {
        return false
      }
      commit('changePublishing', {
        data: true
      })
      $http.post('/api/edit', {
          title: state.title,
          content: state.content,
          type: state.type
        })
        .then(function(response) {
          commit('changePublishing', {
            data: false
          })
          if (code === 200) {
          	//清空数据
            commit('changeTitle', {
              data: ''
            })
            commit('changContent', {
              data: ''
            })
            commit('changeType', {
              data: 1
            })
          }
          console.log(response)
        })
        .catch(function(error) {
          commit('changePublishing', {
            data: false
          })
          console.log(error)
        })
    }
  }
}
export default editModule
