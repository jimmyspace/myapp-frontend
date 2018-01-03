const mutations = {
  changeLogin(state) {
    console.log("1秒后")
    state.loginState = !state.loginState
  },
  readNew(state, payload){
  	console.log('1秒后')
  	state.newsList.forEach(function(item){
	  if(item.id === payload.id){
		item.read += 1
	  }	
  	})
  }
}

export default mutations
