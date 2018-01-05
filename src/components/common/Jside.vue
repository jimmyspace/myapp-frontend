<template>
  <div class="jside">
  	<ul class="sideNav">
		<li class="sideItem active">Home</li>
		<li class="sideItem">Mood</li>
		<li class="sideItem">Code</li>
		<li class="sideItem">Music</li>
		<li class="sideItem">about</li>
  	</ul>
  </div>
</template>

<script>

export default {
  name: 'Jside'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jside{
	position: fixed;
    display: inline-block;
    width: 11.5em;
    top: 5.5em;
    left: calc((100% - 75em) / 2);
    .sideNav{
    	.sideItem{
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
