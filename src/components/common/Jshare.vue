<template>
  <div class="jshare">
    <calendar></calendar>
    <talking></talking>  
  </div>
</template>

<script>
import Calendar from '@/components/common/Calendar'
import Talking from '@/components/common/Talking'
export default {
  name: 'Jshare',
  components: {
    Calendar,
    Talking
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jshare{
  position: absolute;
  width: 250px;
  top: 5.5em;
  right: 0;
  z-index: 99;
}
</style>
