import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Sign from '@/components/Sign'
import Article from '@/components/common/Article'
import Articles from '@/components/common/Articles'
import Edit from '@/components/common/Edit'
import User from '@/components/common/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
          path: '',
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
      path: '/sign',
      name: 'Sign',
      component: Sign
    }
  ]
})
