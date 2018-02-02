<template>
  <div class="notFound">
    <div class="title">
      <img src="../assets/images/404.jpg" alt="">
      <!-- 似乎来到了未知的星球！<router-link to="/">返回地球</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.notFound{
  position: relative;
  width: 75em;
  min-height: 16em;
  margin: 4.5em auto 0;
  overflow: hidden;
  .title{
    position: relative;
    padding-top: 5em;
    text-align: center;
    line-height: 3em;
    font-size: 18px;
    img{
      opacity: 0.2
    }
  }
}
</style>
