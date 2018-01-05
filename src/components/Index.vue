<template>
  <div class="index">
    <jside></jside>
    <articles></articles>	
  </div>
</template>

<script>
import Jside from '@/components/common/Jside'
import Articles from '@/components/common/Articles'
export default {
  name: 'Index',
  components: {
    Jside,
    Articles
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index{
	position: relative;
	width: 75em;
	margin: 0 auto;
}
</style>
