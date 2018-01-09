<template>
  <div class="index">
    <jside></jside>
    <router-view/>	
  </div>
</template>

<script>
import Jside from '@/components/common/Jside'
export default {
  name: 'Index',
  components: {
    Jside
  },
  mounted(){
    this.$store.dispatch('getArticles')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index{
	position: relative;
	width: 75em;
  min-height: 16em;
	margin: 0 auto;
  overflow: hidden;
}
</style>
