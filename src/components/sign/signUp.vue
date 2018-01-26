<template>
  <div class="sign">
    <div class="signForm">
	    <h2 class="signTitle">Welcome Jimmyspace</h2>
      <div class="signInput">
      	<input type="text" placeholder="请输入正确的邮箱地址" maxlength="20">
      </div>
      <div class="signInput">
      	<input type="password" placeholder="请输入6-12密码" maxlength="12">
      </div>
      <div class="signInput">
      	<input type="password" placeholder="请输入6位邮箱验证码" maxlength="6">
      	<div class="sendCode">发送验证码</div>
      </div>
      <button type="button" class="submitBtn">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data (){
  	return {
  	  showCode: false
  	}
  },
  methods: {
  	sendCode() {
  	  
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
