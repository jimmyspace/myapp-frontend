<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
      <div class="link">
        <router-link to="/">Hellow</router-link>
        <router-link to="/List">List</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
header{
  background: #ccc;
}
.link{
  font-size: 30px;
}
span{
  color: red;
  font-size: 30px;
}
</style>
