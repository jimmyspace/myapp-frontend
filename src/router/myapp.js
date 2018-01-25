import Vue from 'vue'
import Router from 'vue-router'
const Index = () =>
  import ('@/components/Index')
const Music = () =>
  import ('@/components/Music')
const Games = () =>
  import ('@/components/Games')
const signUp = () =>
  import ('@/components/sign/signUp')
const signIn = () =>
  import ('@/components/sign/signIn')
const forgetPassword = () =>
  import ('@/components/sign/forgetPassword')
const Article = () =>
  import ('@/components/common/Article')
const Articles = () =>
  import ('@/components/common/Articles')
const Edit = () =>
  import ('@/components/common/Edit')
const User = () =>
  import ('@/components/common/User')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Index,
      children: [{
          path: '/',
          component: Articles
        },
        {
          path: '/code',
          component: Articles
        },
        {
          path: '/mood',
          component: Articles
        },
        {
          path: '/article/:id',
          component: Article
        },
        {
          path: '/edit',
          component: Edit
        },
        {
          path: '/user/:id',
          component: User
        },
      ]
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/signup',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/signin',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/forgetpassword',
      name: 'forgetPassword',
      component: forgetPassword
    }
  ]
})
