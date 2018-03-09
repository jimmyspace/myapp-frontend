<template>
  <div class="talking">
    <div class="talkingTitle">talking</div>
    <div class="talkingContent">
      <ul class="contentList">
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
import { queue } from '@/assets/javascripts/dataStructure'
export default {
  name: 'Talking',
  data() {
    return {
      talkingList: [{
        user_name: '游客',
        created_time: '2018-03-03 12:54:00',
        content: '瞎BB几句'
      }, {
        user_name: '游客',
        created_time: '2018-03-03 12:54:00',
        content: '瞎BB几句'
      }]
    }
  },
  created() {
    this.talkingList.forEach(e => {
      queue.enqueue(e)
    })
    console.log(queue.items)
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
