<template>
  <div class="sign">
    <div class="signForm">
	    <h2 class="signTitle">Welcome Jimmyspace</h2>
      <div class="signInput">
      	<input type="text" v-model.tirm="email" placeholder="请输入正确的邮箱地址" maxlength="20" autocomplete="off">
      </div>
      <div class="signInput">
      	<input type="password" v-model.tirm="password" placeholder="请输入6-12密码" maxlength="12" autocomplete="off">
      </div>
      <button type="button" class="submitBtn" 
      @click="email&&password?signIn():''"
      :class="[email&&password?'active':'', loading?'loading':'']">登录</button>
    </div>
  </div>
</template>

<script>
import $http from '@/ajax'
export default {
  name: 'signIn',
  data(){
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    prompt(type, info){
      //需要重置倒计时
      this.$store.commit('timerStart',{
        time: 3
      })
      this.$store.dispatch('timer',{
        type: type,
        info: info
      })
    },
    signIn(){
      let self = this
      if(this.loading){
        return false
      }
      this.loading = true

      $http.post('/api/sign/signIn', {
        email: self.email,
        password: self.password
      })
      .then(function(response) {
        self.loading = false
        if (response.code === 200) {
          self.$router.replace('/')
        } else {
          self.prompt('error', response.msg)
        }
      })
      .catch(function(error) {
        self.loading = false
        self.prompt('error', '通信错误稍后再试')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../assets/less/commonSign";
</style>
