<!--  -->
<template>
    <div>
       用户名:<input type="text" v-model="username"><br>
       密码：<input type='text' v-model="password"><br>
       <button @click="login">登录</button>
    </div>
</template>

<script>
//import request from '../util/request'
import {login} from '../api/index'

export default {
  data () {
    return {
        username:"",
        password:""
    };
  },
 methods: {
      login(){
        //接口登录
        if(this.username && this.password){
        //    request.post('/api/login',{username:this.username,password:this.password}).then((res) =>{
        //     //  console.log(res)
        //   //存到本地
        //  // console.log(res)
        //  if(res.data.code===1){
        //    alert("登录成功")
        //    localStorage.setItem('token',res.data.token)
        //    //跳页面
        //    this.$router.push('/List')
        //  }
        // })
        }
       login(this.username,this.password).then(res=>{
          if(res.data.code===1){
            alert("登录成功")
            localStorage.setItem("token",res.data.token)
            this.$router.push('/list')
          }
       })

      }
}
}
</script>
