<template>
  <div class="articles">
  	<h2 class="title">{{title}}</h2>
    <transition name="slide-fade" mode="out-in">
      <ul class="articlesList" v-if="pathname==='/'">
        <li class="articlesListItem" v-for="(item,index) in articles" :key="index">
          <router-link :to="'/article/'+item.id">
            <div class="itemTitle">{{item.title}}</div>
            <p class="itemContent">{{item.content}}</p>
            <div class="itemMeta">
              <span class="date">{{item.ctime | formatDate}}</span>
              <span class="comments">2</span>
              <span class="favorite">{{item.favourite}}</span>
            </div>
          </router-link>
        </li>
        <button type="button" class="loadMore" v-if="articles.length>0&&!all">{{loading?"加载中":"发现更多"}}</button>
      </ul>
      <ul class="articlesList" v-if="pathname==='/code'">
        <li class="articlesListItem" v-for="(item,index) in codeArticles" :key="index">
          <router-link :to="'/article/'+item.id">
            <div class="itemTitle">{{item.title}}</div>
            <p class="itemContent">{{item.content}}</p>
            <div class="itemMeta">
              <span class="date">{{item.ctime | formatDate}}</span>
              <span class="comments">2</span>
              <span class="favorite">{{item.favourite}}</span>
            </div>
          </router-link>
        </li>
        <button type="button" class="loadMore" v-if="codeArticles.length>0&&!codeAll">{{codeLoading?"加载中":"发现更多"}}</button>
      </ul>
      <ul class="articlesList" v-if="pathname==='/mood'">
        <li class="articlesListItem" v-for="(item,index) in moodArticles" :key="index">
          <router-link :to="'/article/'+item.id">
            <div class="itemTitle">{{item.title}}</div>
            <p class="itemContent">{{item.content}}</p>
            <div class="itemMeta">
              <span class="date">{{item.ctime | formatDate}}</span>
              <span class="comments">2</span>
              <span class="favorite">{{item.favourite}}</span>
            </div>
          </router-link>
        </li>
        <button type="button" class="loadMore" v-if="moodArticles.length>0&&!moodAll">{{loading?"加载中":"发现更多"}}</button>
      </ul>
    </transition>
  </div>
</template>

<script>
import {
  formatDate
} from '@/assets/javascripts/formatDate.js'
export default {
  name: 'Articles',
  data (){
    return {
      title: '全部文章',
      pathname: '/'
    }
  },
  computed: {
    articles (){
      return this.$store.state.articles.list
    },
    loaded (){
      return this.$store.state.articles.loaded
    },
    loading (){
      return this.$store.state.articles.loading
    },
    all (){
      return this.$store.state.articles.all
    },
    codeArticles (){
      return this.$store.state.codeArticles.list
    },
    codeLoaded (){
      return this.$store.state.codeArticles.loaded
    },
    codeLoading (){
      return this.$store.state.codeArticles.loading
    },
    codeAll (){
      return this.$store.state.moodArticles.all
    },
    moodArticles (){
      return this.$store.state.moodArticles.list
    },
    moodLoaded (){
      return this.$store.state.moodArticles.loaded
    },
    moodLoading (){
      return this.$store.state.moodArticles.loading
    },
    moodAll (){
      return this.$store.state.moodArticles.all
    },
  },
  watch: {
    //检测路由变化
    '$route': 'parseRouter'
  },
  created(){
    this.parseRouter()
  },
  methods: {
    //解析路由地址
    parseRouter (){
      let pathname = location.pathname
      this.pathname = pathname
      if(pathname === '/'){
        this.title = '春风十里'
        this.$store.dispatch('getArticles')
      }else if(pathname === '/code'){
        this.title = '站在巨人的肩上'
        this.$store.dispatch('getCodeArticles')
      }else if(pathname === '/mood'){
        this.title = '他还是个孩子'
        this.$store.dispatch('getMoodArticles')
      }
    }
  },
  filters: {
    /**
     *
     * @param time 后台返回时间字符串
     * @returns {*} 返回固定时间格式
     */
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
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
  // background: #ccc;
  .title{
    padding-left: 2em;
    font-size: 20px;
    margin-bottom: 1em;
    line-height: 3em;
    color: #777;
    background: #fff;
  }
  .articlesList{
    position: relative;
    width: 100%;
    overflow: hidden;
    .articlesListItem{
      display: block;
      height: 9.5em;
      width: 100%;
      margin-bottom: 1em;
      padding: .5em;
      background-color: hsla(0,0%,100%,.4);
      overflow: hidden;
      &:hover{
        background-color: hsla(0,0%,100%,.8);
      }
      .itemTitle{
        margin: 1.2em 0 4px;
        font-size: 1em;
        font-weight: 700;
        color: #333;
        margin-top: .2em;
        margin-bottom: .5em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .itemContent{
        font-size: .9em;
        margin: 0;
        margin-bottom: .3em;
        height: 5em;
        color: #555;
        line-height: 1.8em;
        text-overflow: ellipsis;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .itemMeta{
        font-size: .9em;
        height: 2em;
        line-height: 2em;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: normal;
        span{
          margin-right: 1em;
        }
      }
    }
    .loadMore{
      display: block;
      width: 100%;
      height: 3em;
      line-height: 3em;
      background-color: hsla(0,0%,100%,.6);
    }
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
