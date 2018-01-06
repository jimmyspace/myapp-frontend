<template>
  <div class="jside">
  	<ul class="sideNav">
		<li class="sideItem"><router-link to="/">Home</router-link></li>
		<li class="sideItem"><router-link to="/code">Code</router-link></li>
		<li class="sideItem"><router-link to="/mood">Mood</router-link></li>
		<li class="sideItem"><router-link to="/mood">Music</router-link></li>
		<li class="sideItem"><router-link to="/mood">Mood</router-link></li>
  	</ul>
  </div>
</template>

<script>

export default {
  name: 'Jside',
  methods: {
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
