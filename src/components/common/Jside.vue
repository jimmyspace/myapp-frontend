<template>
  <div class="jside">
  	<ul class="sideNav">
		<li class="sideItem"><router-link :class="{'active':active==='/'}" to="/">Home</router-link></li>
		<li class="sideItem"><router-link :class="{'active':active==='/code'}" to="/code">Code</router-link></li>
		<li class="sideItem"><router-link :class="{'active':active==='/mood'}" to="/mood">Mood</router-link></li>
		<li class="sideItem"><router-link :class="{'active':active==='/music'}" to="/music">Music</router-link></li>
		<li class="sideItem"><router-link :class="{'active':active==='/games'}" to="/games">GAMES</router-link></li>
  	</ul>
  </div>
</template>

<script>

export default {
  name: 'Jside',
  data (){
  	return {
  	  active: '/'
  	}
  },
  watch: {
    //检测路由变化
    '$route': 'changeActive'
  },
  created (){
  	this.changeActive()
  },
  methods: {
  	changeActive(){
  	  let pathname = location.pathname
  	  this.active = pathname
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jside{
	position: fixed;
    display: inline-block;
    width: 11.5em;
    top: 5.5em;
    left: calc(~"50% - 37.5em");
    .sideNav{
    	.sideItem a{
    		border: none;
		    display: block;
		    width: 100%;
		    height: 3em;
		    line-height: 3em;
		    padding: 0 1em;
		    text-decoration: none;
		    text-transform: uppercase;
		    font-weight: 700;
		    border-radius: 1px;
		    color: #777;
		    font-family: DINRegular,CenturyGothic;
		    margin-bottom: .5em;
		    &.active, &:hover{
		    	font-weight: 700;
			    color: #0088f5;
			    background-color: hsla(0,0%,100%,.6); 
		    }

    	}
    }
}
</style>
