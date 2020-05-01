<template>
  <div class="about">
   <table border="1">
        <tr>
           <th>id</th>  
           <th>标题</th>  
           <th>类型</th>  
           <th>详情</th>  
           <th>添加时间</th>  
           <th>信息来源</th>  
           <th>操作</th>  
        </tr>
        <tr v-for="(v,k) in msg.list" :key="k">
            <td>{{v.id}}</td>
            <td>{{v.xinwen_name}}</td>
            <td>{{v.xinwen_type}}</td>
            <td>{{v.xinwen_text}}</td>
            <td>{{v.xinwen_date}}</td>
            <td>{{v.xinwen_yuan}}</td>
         <!--    <td>{{vo.weixin_name}}</td> -->
        </tr>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
        msg:[],
    };
  },

    mounted:function () {
                this.get();
            },

   methods:{
                get:function(){
                    //发送get请求
                  axios.get("http://lpk.haoyunyun.cn/xinwena").then(function(res){
 
                        this.msg=res.body;
 
                    },function(){
                        console.log('请求失败处理');
                    });
                }
            }
}

</script>
<style lang='scss' scoped>

</style>