<template>
  <header class="header">
    <nav class="nav"></nav>
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
}
</style>
