import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/components/Home.vue'
import Find from '@/components/Find.vue'
import List from '@/components/List.vue'
import My from '@/components/My.vue'
Vue.use(VueRouter)

const routes = [
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
    path: '/List',
    name: 'list',
    component: List
  },
  {
    path: '/My',
    name: 'my',
    component: My
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
