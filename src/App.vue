<template>
  <div id="app">
    <jheader></jheader>
    <router-view/>
    <jfooter></jfooter>
  </div>
</template>

<script>
import Jheader from '@/components/common/Jheader'
import Jfooter from '@/components/common/Jfooter'
export default {
  name: 'app',
  components: {
    Jheader,
    Jfooter
  }
}
</script>

<style lang="less">
@import "./assets/styles/reset.css";
.link{
  position: relative;
  margin: 0 auto;
  width: 500px;
  font-size: 0;
  background: #f5f5f5;
}
.link a{
  display: inline-block;
  width: 50%;
  text-align: center;
  font-size: 30px;
}
</style>
