<template>
    <div class="index-main">
        <ul>
          <li v-for="(v,i) in items" :key="i">
            <router-link :to="'/detail/'+v.product_id">
              <img :src="v.product_img_url"/>
            </router-link>
            <label>
              <b>折扣价:{{v.product_uprice}}</b>
              <span>原价:{{v.product_price}}</span>
            </label>
          </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios' 

export default {
  data () {
    return {
      items:[]
    }
  },
  methods:{  //方法
    getLists(){
      axios.get('http://127.0.0.1:3333/home').then(res=>{   //res后端返回的数据
        console.log(res);
        this.items = res.data;
      }).catch(error=>{  //请求失败

      })
    }
  },
  mounted(){  //生命周期  钩子函数  挂载完成
     this.getLists();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
