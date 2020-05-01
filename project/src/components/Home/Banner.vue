<template>
    <div class="banner">
        <img v-for="(v,i) in imgArray" :key="i" :src="v" v-show="n==i"/>
        <div class="banner-circle">
            <ul>
                <li v-for="(v,i) in imgArray" :key="i"  :class="i==n ?'selected':''"></li>  
            </ul> 
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      n:0,
      timer:null,
      imgArray:[require("@/assets/img/1.jpg"),
                require("@/assets/img/2.jpg"),
                require("@/assets/img/3.jpg"),
                require("@/assets/img/4.jpg"),
                require("@/assets/img/5.jpg")]
    }
  },
  methods:{  //方法
    //定时器
    play(){   //play:function(){}
      this.timer = setInterval(this.autoPlay,2000)
    },
    autoPlay(){
      this.n++;
      if(this.n == this.imgArray.length){
        this.n = 0;
      }
    }
  },
  mounted(){  //生命周期  钩子函数  挂载完成
      this.play();
  },
  destroyed(){ //生命周期  钩子函数 销毁
      clearInterval(this.timer);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
