<!--  -->
<template>
    <div>
列表
    </div>
</template>

<script>
//import request from '../util/request'
import $api from '../api/index'
export default {
  //生命周期
  created(){
      request.get('/api/blog').then(res=>{
        console.log(res)
      })
      $api.getList().then(res=>{
        console.log(res)
      })
  },
  // data () {
  //   return {

  //   };
  // },

//   components: {},

//   computed: {},

//   mounted: {},

//   methods: {}
}

</script>
<style scoped>

</style>