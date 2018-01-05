<template>
  <header class="header">
    <nav class="nav">
      <div class="title"><router-link to="/">左边网站左边title</router-link></div>
      <div class="userArea"><router-link to="/user">用户中心</router-link></div>
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
  z-index: 99;
  .nav{
    margin: 0 auto;
    width: 75em;
    height: 100%;
    .title{
      float: left;
      height: 100%;
      line-height: 4.5em
    }
    .userArea{
      float: right;
      height: 100%;
      line-height: 4.5em;
    }
  }
}
</style>
