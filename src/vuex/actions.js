const actions = {
  changeLogin({ commit }) {
    console.log("1秒前")
    setTimeout(() => {
      commit('changeLogin')
    }, 1000)
  },
  readNew({commit},payload){
  	console.log('1秒前')
  	setTimeout(()=>{
  	  commit(payload)
  	},1000)
  }
}

export default actions