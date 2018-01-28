<template>
  <div class="article">
    <h2 class="title">{{article.title}}</h2>
    <div class="content" v-html="article.content"></div>
  </div>
</template>

<script>
import $http from '@/ajax'
export default {
  name: 'Article',
  data () {
  	return {
  	  loading: false,
  	  article:{
  	  	title: '前端技术日异月新',
  	  	content: '大巴司机停下车后发现，这哪是什么“鬼影”，分明是一个人啊!因为当时是晚上九点多，而且这个人躺在超车道上，大巴车司机看到他的时候已经来不及刹车，最终男子被撞身亡。后来经过调查发现，其实这两宗报警都是同一件事，这名男子就是那台“幽灵车”的车主。更可怕的是，过了不到五分钟，一个大巴司机又打电话报警说高速公路上突现“鬼影”。车主开车开到一半自己滚到了高速路上。'
  	  }
  	}
  },
  // beforeRouteEnter (to, from, next) {
  //  next(vm => vm.getArticlesDetails(to.params.id))
  // },
  methods: {
  	getArticlesDetails(id){
  	  let self = this
  	  this.loading = true

  	  $http.post('/api//article', {
        id: id
      })
      .then(function(response) {
        if (response.code === 200) {
          self.article = response.data
        } else {
          self.article = {}
          self.$store.dispatch('timer')
        }
      })
      .catch(function(error) {
      	self.$store.dispatch('timer')
        self.article = {}
      })
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.article{
  float: left;
  width: 42.5em;
  min-height: 70em;
  margin: 5.5em 0 0 12.5em;
  position: relative;
  padding: 1em 2em;
  background: rgba(250,250,250,.6);
  overflow: hidden;
  .title{
	text-align: center;
    margin: 1em 0 1.5em;
    font-weight: 700;
    font-size: 1.35em;
    color: #666;
  }
  .content{
  	color: #999;
	line-height: 1.6;
  }
}
</style>
