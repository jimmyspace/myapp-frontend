const mutations = {
  changeLogin(state) {
    console.log("1秒后")
    state.loginState = !state.loginState
  }
}

export default mutations
