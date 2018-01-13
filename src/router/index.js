import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Calendar from '@/components/common/Calendar'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
