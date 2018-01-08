import $http from '@/ajax'

const actions = {
  changeLogin({ commit }) {
    console.log("1秒前")
    setTimeout(() => {
      commit('changeLogin')
    }, 1000)
  },
  readNew({ commit }, payload) {
    console.log('1秒前')
    setTimeout(() => {
      commit(payload)
    }, 1000)
  },
  sayBeaut({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('sayBeaut')
        resolve()
      }, 1000)
    })
  },
  sayDate({ dispatch, commit }) {
    return dispatch('sayBeaut').then(() => {
      setTimeout(() => {
        commit('sayDate')
      }, 1000)
    })
  }
}

export default actions
