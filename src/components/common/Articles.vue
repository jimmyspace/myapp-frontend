<template>
  <div class="articles">
  	<h2 class="title">{{title}}</h2>
    <ul class="articlesList">
      <li class="articlesListItem">
        <div class="itemTitle">第一篇文章标题</div>
        <p class="itemContent">文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
        <div class="itemMeta">
          <span class="date">2017-06-06</span>
          <span class="views">11</span>
          <span class="comments">2</span>
          <span class="favorite">5</span>
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
