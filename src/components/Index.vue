<template>
  <div class="index">
    <jside></jside>
    <jshare></jshare>
    <router-view/>	
  </div>
</template>

<script>
import Jside from '@/components/common/Jside'
import Jshare from '@/components/common/Jshare'
export default {
  name: 'Index',
  components: {
    Jside,
    Jshare
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  created(){
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
