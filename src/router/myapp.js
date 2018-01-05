import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Article from '@/components/Article'
import Sign from '@/components/Sign'
import Edit from '@/components/Edit'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
  ]
})