const getters = {
  //获取最新的新闻
  getNew: state => {
    return state.newsList.filter(item => item.isnew)
  },
  //获取最新的军事新闻
  getNewMilitary: (state, getters) => {
  	return getters.getNew.filter(item => item.isMilitary)
  }
}

export default getters
