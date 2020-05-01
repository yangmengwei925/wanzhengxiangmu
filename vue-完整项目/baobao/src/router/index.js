import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/look'
  },
  {
    path:'/look',
    name:'look',
    footerNav:true,
    meta:{
      title:'宝宝看',
      icon:'icon-tv'
    },
    component:()=>import('@/views/look'),
    children:[
      {
        path:'/look',
        redirect:'/look/childrensong'
      },
      {
        path:'/look/childrensong',
        name:'childrensong',
        meta:{
          title:'儿歌'
        },
        component:()=>import('@/views/look/childrensong')
      },
      {
        path:'/look/story',
        name:'story',
        meta:{
          title:'故事'
        },
        component:()=>import('@/views/look/story')
      },
      {
        path:'/look/cartoon',
        name:'cartoon',
        meta:{
          title:'动画片'
        },
        component:()=>import('@/views/look/cartoon')
      }
    ]
  },
  {
    path:'/listen',
    name:'listen',
    footerNav:true,
    meta:{
        title:'宝宝听',
        icon:'icon-yinle'
    },
    component:()=>import('@/views/listen'),
    children:[
      {
        path:'/listen',
        redirect:'/listen/small'
      },
      {
        path:'/listen/small',
        name:'small',
        meta:{
          title:'儿歌'
        },
        component:()=>import('@/views/listen/small')
      },
      {
        path:'/listen/things',
        name:'things',
        meta:{
          title:'故事'
        },
        component:()=>import('@/views/listen/things')
      }
    ]
  },
  {
    path:'/my',
    name:'my',
    footerNav:true,
    meta:{
      title:'我的',
      icon:'icon-xiazai4'
    },
    component:()=>import('@/views/my')
  },
  {
    path:'/list',
    name:'list',
    meta:{
      title:'列表页'
    },
    component:()=>import('@/views/list')
  },
  {
    path:'/404',
    name:'404',
    meta:{
      title:'404'
    },
    component:()=>import('@/views/404')
  },
  {
    path:'/lyric',
    name:'lyric',
    meta:{
      title:'歌词'
    },
    component:()=>import('@/views/lyric')
  },
  {
    path:'/looklist',
    name:'looklist',
    meta:{
      title:'动画列表'
    },
    component:()=>import('@/views/looklist')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

//全局守卫
router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title || '宝宝说';
  next()
})

export { routes }

export default router;
