import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  //../    ./ @/
import Home from '@/components/Home/Home'   //首页
import Find from '@/components/Find'    //发现
import Order from '@/components/Order'    //订单
import Mine from '@/components/Mine'    //我的
import Detail from '@/components/detail'    //详情

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path:'/detail/:id',
      component: Detail
    }
  ]
})
