<template>
  <div class="jalert">
  	<div class="jalertBox" :class="[status?'show':'', typeClass]">
  	  <span>{{jalert.info}}</span>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Jalert',
  computed: {
    jalert(){
      return this.$store.state.jalert
    },
    status(){
      return this.$store.state.jalert.status
    },
    typeClass(){
      return this.$store.state.jalert.type
    }
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
    top: 19em;
    margin: 0 auto;
    max-width: 20em;
    padding: 1em;
    opacity: 0;
    background: #ddd;
    transition: all 1s;
    &.success{
      color: #0088f5;
    }
    &.error{
      color: red;
    }
    &.show{
      top: 20em;
      opacity: .8;
    }
	}
}
</style>
