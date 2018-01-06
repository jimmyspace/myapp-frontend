<template>
  <div id="app">
    <jheader></jheader>
    <!-- <div class="link">
      <router-link to="/">Hellow</router-link>
      <router-link to="/List">List</router-link>
    </div> -->
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

<style>
#app{
  padding-top: 4.5em;
}
.link{
  font-size: 30px;
}
span{
  color: red;
  font-size: 30px;
}
</style>
