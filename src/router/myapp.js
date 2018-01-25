import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import signUp from '@/components/sign/signUp'
import signIn from '@/components/sign/signIn'
import forgetPassword from '@/components/sign/forgetPassword'
import Article from '@/components/common/Article'
import Articles from '@/components/common/Articles'
import Edit from '@/components/common/Edit'
import User from '@/components/common/User'

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
