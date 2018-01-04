<template>
  <div class="hello">
    <div @click="changLoginAction()">{{loginState?loginName:'未登录'}}</div>
    <div>全部新闻</div>
    <ul>
      <li v-for="(item,index) in newsList" :key="index" @click="readNewMutation(item.id)">{{item.content}}--阅读<span>{{item.read}}</span>次</li>
    </ul>
    <div>最新的新闻</div>
    <ul>
      <li v-for="(item,index) in getNew" :key="index" @click="readNewMutation(item.id)">{{item.content}}--阅读<span>{{item.read}}</span>次</li>
    </ul>
    <div>最新的军事新闻</div>
    <ul>
      <li v-for="(item,index) in getNewMilitary" :key="index" @click="readNewAction(item.id)">{{item.content}}--阅读<span>{{item.read}}</span>次</li>
    </ul>
    <div @click="sortList()">一般的新闻</div>
    <ul>
      <li v-for="(item,index) in normalNews" :key="index" @click="actionSomething()">{{item.content}}--阅读<span>{{item.read}}</span>次</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      msg: '数字列表'
    }
  },
  computed: {
    loginState(){
      return this.$store.state.loginState
    },
    loginName(){
      return this.$store.state.loginName
    },
    newsList(){
      return this.$store.state.newsList
    },
    getNew(){
      return this.$store.getters.getNew
    },
    getNewMilitary(){
      return this.$store.getters.getNewMilitary
    },
    normalNews(){
      return this.$store.state.listModule.list
    },
    sortFlag(){
      return this.$store.state.listModule.sortFlag
    }
  },
  methods:{
    changLoginAction(){
      this.$store.dispatch('changeLogin')
    },
    changLoginMutation(){
      this.$store.commit('changeLogin')
    },
    readNewMutation(id){
      this.$store.commit({
        type: 'readNew',
        id: id
      })
    },
    readNewAction(id){
      this.$store.dispatch({
        type: 'readNew',
        id: id
      })
    },
    sortList(){
      // this.$store.commit({
      //   type: 'listModule/sortList',
      //   sortFlag: !this.sortFlag
      // })
      this.$store.dispatch({
        type: 'listModule/sortList',
        sortFlag: !this.sortFlag
      })
    },
    actionSomething(){
      this.$store.dispatch('listModule/actionSomething')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  display: block;
  ul{
    display: block;
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
