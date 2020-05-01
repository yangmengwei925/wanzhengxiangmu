<template>
  <div>
    <button @click="goBack()">返回</button>
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      id: '详情页'
    }
  },
  methods:{
      goBack(){
        this.$router.push('/home');  //跳转
      }
  },
  mounted(){
    this.id = this.$route.params.id;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
