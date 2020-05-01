import Vue from 'vue'
import Router from 'vue-router'
import Chart from '@/components/Chart'
import Table from '@/components/Table'
import Imglist from '@/components/Imglist'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect: '/chart'
    },
    {
      path: '/chart',
      component: Chart
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/imglist',
      component: Imglist
    }
  ]
})
