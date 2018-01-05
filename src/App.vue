<template>
  <div id="app">
    <jheader></jheader>
    <!-- <div class="link">
      <router-link to="/">Hellow</router-link>
      <router-link to="/List">List</router-link>
    </div> -->
    <div class="link">
      <router-link to="/">index</router-link>
      <router-link to="/article">article</router-link>
      <router-link to="/sign">sign</router-link>
      <router-link to="/edit">edit</router-link>
      <router-link to="/user">user</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Jheader from '@/components/common/Jheader'
export default {
  name: 'app',
  components: {
    Jheader
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
