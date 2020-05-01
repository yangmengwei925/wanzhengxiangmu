<template>
  <div>
    <ul>
      <li v-for="(list,index) in lists" :key="index">
        <img :src="list.product_img_url" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      title:'图片',
      lists:[]

    }
  },
  methods:{
    getData(){
      axios.get('http://127.0.0.1:3333/home').then(res=>{
        console.log(res)
        this.lists = res.data;
      },error=>{
        console.log(error)
      })
    }
  },
  mounted(){
    this.getData()
  }
}
</script>

<style>

</style>
