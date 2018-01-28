<template>
  <div id="app">
    <jheader></jheader>
    <router-view/>
    <jfooter></jfooter>
    <jbackground></jbackground>
    <jalert></jalert>  
  </div>
</template>

<script>
import Jheader from '@/components/common/Jheader'
import Jfooter from '@/components/common/Jfooter'
import Jbackground from '@/components/common/Jbackground'
import Jalert from '@/components/common/Jalert'
export default {
  name: 'app',
  components: {
    Jheader,
    Jfooter,
    Jbackground,
    Jalert
  }
}
</script>

<style lang="less">
@import "./assets/styles/reset.css";
@import "./assets/fonts/iconfont.css";

</style>
