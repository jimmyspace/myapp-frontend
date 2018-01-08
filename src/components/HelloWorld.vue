<template>
  <div class="hello">
    <div @click="changLoginMutation()">{{loginState?loginName:'未登录'}}</div>
    <div @click="sayDate()">say something</div>
    <div>最新的军事新闻</div>
    <ul>
      <li v-for="(item,index) in getNewMilitary" :style="item.isMilitary?'color:red':''" :key="index">{{item.content}}--阅读<span>{{item.read}}</span>次</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState([
        'loginState',
        'loginName'
      ]),
     ...mapGetters([
        'getNew',
        'getNewMilitary'
      ])
  },
  methods:{
    changLoginAction(){
      this.$store.dispatch('changeLogin')
    },
    changLoginMutation(){
      this.$store.commit('changeLogin')
    },
    sayBeaut(){
      this.$store.dispatch('sayBeaut').then(()=>{
        console.log("sb")
      })
    },
    sayDate(){
      this.$store.dispatch('sayDate')
    }
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
