<template>
  <div class="jalert" v-show="jalert.time !== 0">
  	<div class="jalertBox">
  	  <span>{{jalert.info}}</span>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Jalert',
  data (){
  	return {
  	  jalert: {
  	  	type: 'success',
  	  	info: '发送成功',
  	  	time: 3
  	  }
  	}
  },
  methods: {
  	timer(){
  	  let self = this
  	  if(self.jalert.time !== 0){
  	  	self.jalert.time --
  	  	setTimeout(self.timer, 1000)
  	  }
  	}
  },
  mounted (){
  	//this.timer()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jalert{
	position: fixed;
	top: 0;
	left: 0;
	height: 0;
	width: 100%;
	text-align: center;
	z-index: 99999;
	.jalertBox{
	  position: relative; 
      top: 20em;
      margin: 0 auto;
      max-width: 10em;
      padding: 1em;
      background: #ccc;
	}
}
</style>
