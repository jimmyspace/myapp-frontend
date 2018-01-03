<template>
  <div class="hello">
    <div @click="changLoginAction()">{{loginState?loginName:'未登录'}}</div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState([
        'loginState',
        'loginName'
      ])
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
