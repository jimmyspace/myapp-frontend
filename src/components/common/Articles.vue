<template>
  <div class="articles">
  	<h2 class="title">{{title}}</h2>
    <ul class="articlesList">
      <li class="articlesListItem" v-for="(item,index) in articles" :key="index">
        <div class="itemTitle">{{item.title}}</div>
        <p class="itemContent">{{item.content}}</p>
        <div class="itemMeta">
          <span class="date">{{item.ctime}}</span>
          <span class="comments">2</span>
          <span class="favorite">{{item.favourite}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Articles',
  data (){
    return {
      title: '全部文章',
      pathname: ''
    }
  },
  computed: {
    articles (){
      return this.$store.state.articles.list
    }
  },
  watch: {
    //检测路由变化
    '$route': 'parseRouter'
  },
  methods: {
    //解析路由地址
    parseRouter (){
      let pathname = location.pathname
      console.log(pathname)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.articles{
	float: left;
  width: 42.5em;
  min-height: 70em;
  margin: 5.5em 0 0 12.5em;
  position: relative;
  overflow: hidden;
  background: #ccc;
  .title{
    padding-left: 2em;
    font-size: 20px;
    line-height: 3em;
    color: #777;
    background: #fff;
  }
}
</style>
