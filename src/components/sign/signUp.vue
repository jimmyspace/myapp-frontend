<template>
  <div class="sign">
    <div class="signForm">
	    <h2 class="signTitle">注册</h2>
      <div class="signInput">
      	<input type="text" placeholder="请输入正确的邮箱地址" maxlength="20" autocomplete="off" v-model.tirm="email">
      </div>
      <div class="signInput">
      	<input type="password" placeholder="请输入6-12密码" maxlength="12" autocomplete="off" v-model.tirm="password">
      </div>
      <div class="signInput">
      	<input type="password" placeholder="请输入6位邮箱验证码" maxlength="6" autocomplete="off" v-model.tirm="code">
      	<div class="sendCode" :class="[email?'active':'']" 
        @click="email?sendCode():''">发送验证码</div>
      </div>
      <button type="button" class="submitBtn"
      @click="email&&password&&code?signUp():''"
      :class="[email&&password&&code?'active':'', loading?'loading':'']">确定</button>
    </div>
  </div>
</template>

<script>
import $http from '@/ajax'
export default {
  name: 'signUp',
  data (){
  	return {
      loading: false,
  	  showCode: false,
      email: '',
      password: '',
      code: ''
  	}
  },
  methods: {
  	sendCode() {
  	  let self = this
      
      $http.post('/api/sign/sendEmail', {
        email: self.email
      })
      .then(function(response) {
        if (response.code === 200) {
          
        } else {
          self.prompt('error', response.msg)
        }
      })
      .catch(function(error) {
        self.loading = false
        self.prompt('error', '通信错误稍后再试')
      })
  	},
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
    signUp(){
      let self = this
      if(this.loading){
        return false
      }
      this.loading = true

      $http.post('/api/sign/signUp', {
        email: self.email,
        password: self.password,
        code: self.code
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
.sign .signForm .signInput input{
  text-align: left;
  padding-left: 2em;
}
</style>
