import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/public',
    name: 'public',
    component: () => import('../views/Public.vue')
  },
  {
    path: '/registry',
    name: 'registry',
    component: () => import('../views/Registry.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue')
  },
  {
    path:"/",
    redirect:"/list"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//路由守卫
router.beforeEach((to,from,next)=>{
  //登录 注册不需要token
  let writePath=['/login','/registry']
  if(writePath.includes(to.path)){
    next()
  }else{
      //获取token
      if( window.localStorage.getItem('token')){
       //如果取到了next() 
       next()
      }else{
        next("/login")
      }
  }

})

export default router
