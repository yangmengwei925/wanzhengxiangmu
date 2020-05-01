<!--  -->
<template>
    <div>
        用户名:<input type="text" v-model="username"><br>
       密码：<input type='text' v-model="password"><br>
       <button @click="registry">注册</button>
    </div>
</template>

<script>
import request from '../util/request'
export default {
  data () {
    return {
        username:"",
        password:""
    };
  },

//   components: {},

//   computed: {},

//   mounted: {},

  methods: {
    registry(){
       if(this.username && this.password){
           request.post('/api/registry',{username:this.username,password:this.password}).then({
             //console.log(res)
        })
        }
    }
  }
}

</script>
<style lang='scss' scoped>

</style>