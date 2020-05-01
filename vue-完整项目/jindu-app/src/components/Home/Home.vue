<template>
  <div>
    <!-- 导航 -->
    <Category />
    <!-- 轮播图 -->
    <Banner />
    <!-- 列表展示 -->
    <Lists />
  </div>
</template>

<script>
import Category from './Category'   //导入导航
import Banner from './Banner'   //导入轮播
import Lists from './Lists'   //导入列表展示

export default {
  name: 'home',
  data () {
    return {
      msg: '首页'
    }
  },
  components:{
    Category,
    Banner,
    Lists
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
