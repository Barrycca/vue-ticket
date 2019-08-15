import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/host',
    },
    {
      path: '/host',
      name: 'host',
      meta: {
        index: 1
      },
      component: () => import('@/views/host/host'),
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        index: 2
      },
      component: () => import('@/views/search/search'),
    },
    {
      path: '/showDetail',
      name: 'showDetail',
      meta: {
        index: 2
      },
      component: () => import('@/views/showDetail/showDetail'),
    },
    {
      path: '/selectTicket',
      name: 'selectTicket',
      meta: {
        index: 3
      },
      component: () => import('@/views/selectTicket/selectTicket'),
    }
  ]
})

