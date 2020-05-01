<template>
    <ul>
        <li class="p_item" v-for="(item,index) in items" :key="index">
            <router-link :to="item.url" class="p_title"> 
                <i class="iconfont" :class="item.icon"></i>{{item.name}}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
  data(){
    return {
      items:[
        {name:'图表展示',url:'/chart',icon:'icon-licai'},
        {name:'表格',url:'/table',icon:'icon-jiazheng'},
        {name:'图片',url:'/imglist',icon:'icon-licai'},
      ]
    }
  }
}
</script>

<style scoped>
.active {
  color:#f60;
  background:#fff;
}
</style>
