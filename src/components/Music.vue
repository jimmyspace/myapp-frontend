<template>
  <div class="music">
    <div class="text">
      <img src="../assets/images/waiting.jpg" alt="">
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Music',
  created(){
    //this.$store.dispatch('getArticles')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.music{
  position: relative;
  width: 75em;
  min-height: 16em;
  margin: 4.5em auto 0;
  overflow: hidden;
  .text{
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
