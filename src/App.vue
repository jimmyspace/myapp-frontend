<template>
  <div id="app">
    <jheader></jheader>
    <router-view/>
    <jfooter></jfooter>
    <jbackground></jbackground>
  </div>
</template>

<script>
import Jheader from '@/components/common/Jheader'
import Jfooter from '@/components/common/Jfooter'
import Jbackground from '@/components/common/Jbackground'
export default {
  name: 'app',
  components: {
    Jheader,
    Jfooter,
    Jbackground
  }
}
</script>

<style lang="less">
@import "./assets/styles/reset.css";

</style>
