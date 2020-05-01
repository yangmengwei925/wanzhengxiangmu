<!--  -->
<template>
    <div>
        <button @click="sendRequest">发送请求通过代理</button>
        <button @click="sendRequest1">发送请求到webpack自带的before</button>
        <!-- <div v-if="obj">{{res.msg}}</div> -->
    </div>
</template>

<script>
// import $request from '../untils/request.js'
import $request from '@/untils/request.js'
export default {
    name:"Show",
  data () {
    return {
        obj:null
    };
  },

//   components: {},

//   computed: {},

//   mounted: {},

   methods: {
         async sendRequest1(){
           let res= await $request.get('userList');
           this.obj=res
       },
       async sendRequest(){
           let res= await $request.get('/api/list');
           this.obj=res
       },
     
   }
}

</script>
<style  scoped>

</style>