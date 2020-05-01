<template>
  <div id="app">
     <!-- 路由动态展示 -->
    <router-view/>
    <!-- 底部导航 -->
      <div class="nav-bottom">
         <router-link to="/home">
               <label>首页</label>
          </router-link>
            <router-link to="/find">
              <label>发现</label>
            </router-link>
              <router-link to="/list">
                  <label>订单</label>
              </router-link>
              <router-link to="my">
                <label>我的</label>
              </router-link>
            
      </div>
  </div>
</template>
<script>
    export default{
      name:"App"
    }
</script>
<style>
@import './assets/index.css'

</style>
