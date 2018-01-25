<template>
  <div id="app">
    <jheader></jheader>
    <!-- <div class="link">
      <router-link to="/">Hellow</router-link>
      <router-link to="/List">List</router-link>
    </div> -->
    <router-view/>
    <!-- <jfooter></jfooter>  -->
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

<style>
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
