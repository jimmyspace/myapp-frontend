<template>
  <div class="article">
    <h2 class="title">{{title}}</h2>
    <div class="content" v-html="content"></div>
    <div class="articleInfo">
      <span class="infoTip date">发表时间：{{data}}</span>
      <span class="infoTip comments">评论数：{{comments}}</span>
      <span class="infoTip favorite">点赞数：{{favorite}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Article',
  data() {
    return {

    }
  },
  computed: {
    title() {
      return this.$store.state.articleMoudle.title
    },
    content() {
      return this.$store.state.articleMoudle.content
    },
    data() {
      return this.$store.state.articleMoudle.data
    },
    comments() {
      return this.$store.state.articleMoudle.comments
    },
    favorite() {
      return this.$store.state.articleMoudle.favorite
    }
  },
  // beforeRouteEnter (to, from, next) {
  //  next(vm => vm.getArticlesDetails(to.params.id))
  // },
  methods: {
    getArticlesDetails(id) {
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
.article {
  float: left;
  width: 42.5em;
  min-height: 40em;
  margin: 5.5em 0 0 12.5em;
  position: relative;
  padding: 1em 2em 4em;
  background: rgba(250, 250, 250, .6);
  overflow: hidden;
  .title {
    text-align: center;
    margin: 1em 0 1.5em;
    font-weight: 700;
    font-size: 1.35em;
    color: #666;
  }
  .content {
    color: #999;
    line-height: 1.6;
  }
  .articleInfo {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4em;
    padding-left: 1em;
    border-top: .5em solid #eee;
    color: #999;
    span {
      line-height: 3.5em;
    }
  }
}

</style>
