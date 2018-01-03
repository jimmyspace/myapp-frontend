<template>
  <div class="hello">
    <div @click="changLoginAction()">{{loginState?loginName:'未登录'}}</div>
    <div>全部新闻</div>
    <ul>
      <li v-for="(item,index) in newsList" :key="index">{{item.content}}</li>
    </ul>
    <div>最新的新闻</div>
    <ul>
      <li v-for="(item,index) in getNew" :key="index">{{item.content}}</li>
    </ul>
    <div>最新的军事新闻</div>
    <ul>
      <li v-for="(item,index) in getNewMilitary" :key="index">{{item.content}}</li>
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
    }
  },
  methods:{
    changLoginAction(){
      this.$store.dispatch('changeLogin')
    },
    changLoginMutation(){
      this.$store.commit('changeLogin')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
