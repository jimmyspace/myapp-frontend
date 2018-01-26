<template>
  <header class="header">
    <nav class="nav">
      <div class="title"><router-link to="/">JIMMYSPACE</router-link></div>
      <div class="userArea">
        <router-link to="/signin">Sign in</router-link>
        <span>or</span>
        <router-link to="/signup">Sign up</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5em;
  background: hsla(0,0%,100%,.6);
  z-index: 999;
  .nav{
    margin: 0 auto;
    width: 75em;
    height: 100%;
    .title{
      float: left;
      height: 100%;
      line-height: 3.6em;
      font-size: 20px;
      font-weight: 700;
      a{
        text-decoration: none;
        color: #666;
      }
    }
    .userArea{
      float: right;
      height: 100%;
      line-height: 4.5em;
      font-size: 16px;
      font-weight: 700;
      a{
        text-decoration: none;
        color: #666;
        &:hover{
          text-decoration: underline;
        }
      }
      span{
        text-decoration: none;
        color: #666;
      }
    }
  }
}
</style>
