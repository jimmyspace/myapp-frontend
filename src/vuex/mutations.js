const mutations = {
  changeLogin(state) {
    console.log("1秒后")
    state.loginState = !state.loginState
  },
  readNew(state, payload) {
    console.log('1秒后')
    for (let i = 0; i < state.newsList.length; i++) {
      if (state.newsList[i].id === payload.id) {
        state.newsList[i].read += 1
        break
      }
    }
  },
  sayBeaut(){
    console.log("你好美")
  },
  sayDate(){
    console.log("阿发达明天上映了")
  }
}

export default mutations
