<template>
  <div class="edit">
    <div class="title">
      <input type="text" maxlength="50" v-model="title" placeholder="文章标题">
    </div>
    <div class="content">
      <quill-editor v-model="content" :options="editorOption"></quill-editor>
    </div>
    <ul class="type">
      <li class="typeItem" :class="{'active':type===1}" @click="type=1">#code</li>
      <li class="typeItem" :class="{'active':type===2}" @click="type=2">#mood</li>
    </ul>
    <button type="button" class="submitBtn" @click="title&&content?publish():''" :class="[title&&content?'active':'']">发表文章</button>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'Edit',
  components: {
    quillEditor
  },
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link']
          ]
        },
        theme: 'snow',
        placeholder: '文章内容'
      }
    }
  },
  computed: {
    title: {
      get() {
        return this.$store.state.editModule.title
      },
      set(val) {
        this.$store.commit('editModule/changeTitle', {
          data: val
        })
      }
    },
    content: {
      get() {
        return this.$store.state.editModule.content
      },
      set(val) {
        this.$store.commit('editModule/changContent', {
          data: val
        })
      }
    },
    type: {
      get() {
        return this.$store.state.editModule.type
      },
      set(val) {
        this.$store.commit('editModule/changeType', {
          data: val
        })
      }
    }
  },
  methods:{
    publish(){
      this.$store.dispatch('editModule/publish')
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.edit {
  float: left;
  width: 42.5em;
  height: 45em;
  margin: 5.5em 0 0 12.5em;
  position: relative;
  background: rgba(250, 250, 250, .6);
  .title {
    height: 4em;
    input {
      display: inline-block;
      width: 100%;
      padding-left: 1em;
      height: 100%;
      font-size: 16px;
      border: none;
      outline: none;
    }
  }
  .type {
    width: 100%;
    margin-top: 0.5em;
    margin-left: 1em;
    overflow: hidden;
    .typeItem {
      float: left;
      margin-left: 1em;
      padding: 0.3em 0.8em;
      background: #eee;
      color: #999;
      font-weight: 600;
      cursor: pointer;
      opacity: 0.5;
      &:hover {
        opacity: 1;
        color: #666;
      }
      &.active {
        opacity: 1;
        color: #666;
      }
    }
  }
  .submitBtn {
    display: block;
    width: 15em;
    margin: 1em auto;
    height: 2.5em;
    text-align: center;
    border: none;
    outline: none;
    background-color: #eee;
    cursor: not-allowed;
    &.active {
      cursor: pointer;
      background: rgba(250, 250, 250, .8);
    }
  }
}

.ql-toolbar.ql-snow,
.ql-container.ql-snow {
  border: none;
}

.ql-container.ql-snow {
  height: 32em;
}

</style>
