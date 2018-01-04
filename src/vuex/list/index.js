const listModule = {
  namespaced: true,
  state: {
    sortFlag: true,
    list: [
      { id: 1, content: '今冬范围最大、强度最强的降雪来了111', isnew: false, isMilitary: false, read: 0 },
      { id: 2, content: '今冬范围最大、强度最强的降雪来了222', isnew: false, isMilitary: true, read: 0 },
      { id: 3, content: '今冬范围最大、强度最强的降雪来了333', isnew: true, isMilitary: false, read: 0 },
      { id: 4, content: '今冬范围最大、强度最强的降雪来了444', isnew: true, isMilitary: false, read: 0 }
    ]
  },
  mutations: {
    sortList(state, payload) {
      console.log('1秒后')
      state.sortFlag = payload.sortFlag
      state.list.sort(compare('id'))

      function compare(property) {
        return function(a, b) {
          let value1 = a[property]
          let value2 = b[property]
          if (state.sortFlag) {
            return value1 - value2
          } else {
            return value2 - value1
          }
        }
      }
    }
  },
  actions: {
    sortList({ commit }, payload) {
      console.log('1秒前')
      console.log(payload)
      setTimeout(() => {
        commit('sortList', { sortFlag: payload.sortFlag })
      }, 1000)
    },
    //访问全局
    actionSomething({ dispatch, commit, rootState}) {
      console.log(rootState.listModule)
      dispatch({
        type: 'sortList',
        sortFlag: true
      })
      commit('changeLogin', null, { root: true })
    }
  }
}

export default listModule
