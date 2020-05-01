<template>
  <div class="nav-bottom">
    <router-link v-for="(list,i) in lists" :key="i" :to="list.url">
      <i class="iconfont" :class="list.icon"></i>
      <label>{{list.title}}</label>
    </router-link >
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // lists:[
      //   {title:'首页',url:'/home',icon:'iconiconfontzhizuobiaozhun023101'},
      //   {title:'发现',url:'/find',icon:'iconfaxian1'},
      //   {title:'订单',url:'/order',icon:'icondingdan'},
      //   {title:'我的',url:'/mine',icon:'iconwo1'}
      // ]
    }
  },
  props:['lists']   //父到子传参
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  color:red;
}
</style>
