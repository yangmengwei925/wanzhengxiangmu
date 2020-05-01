<template>
    <div>
        接口走丢了,{{time}}秒后跳回首页
    </div>
</template>

<script>
export default {
    data(){
        return {
            time:3,
            timer:null,
            datalist:[]
        }
    },
    created(){
        this.timer=setInterval(()=>{
            this.time--;
            if(this.time<=0){
                clearInterval(this.timer)
                this.$router.replace('/')
            }
        },1000)
    }
}
</script>