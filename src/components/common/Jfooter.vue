<template>
  <footer class="footer">
    <div class="footerContent">
      The daily life of a single dog
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Jfooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  // margin-top: 1em;
  padding: 1.2em 0;
  background: #fff;
  .footerContent{
    margin: 0 auto;
    width: 75em;
    padding: 1em;
    font-size: .9em;
    text-align: center;
    text-transform: uppercase;
    color: #666;
  }
}
</style>
