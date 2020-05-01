<template>
  <div id="app">
    <!-- 路由动态展示 -->
    <router-view/>
    <!-- 底部导航 导入组件-->
    <NavBottom  :lists="lists"/>
  </div>
</template>

<script>
import NavBottom from './components/NavBottom'   //导入

export default {
  name: 'App',
  data () {
    return {
      lists:[
        {title:'首页',url:'/home',icon:'iconiconfontzhizuobiaozhun023101'},
        {title:'发现',url:'/find',icon:'iconfaxian1'},
        {title:'订单',url:'/order',icon:'icondingdan'},
        {title:'我的',url:'/mine',icon:'iconwo1'}
      ]
    }
  },
  components:{
    NavBottom
  }
}
</script>

<style>
@import './assets/index.css'
</style>
