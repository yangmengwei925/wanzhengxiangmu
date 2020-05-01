<template>
    <div class="alert_container" v-if="open">
        <div>
            {{tip}}
        </div>
    </div>
</template>

<script>

export default {
    name:'message',
    props:{
        tip:{
            type:String,
            defalut:'弹窗提示消息'
        },
        time:{ //m
            type:Number,
            defalut:3
        }
    },
    data(){
        return {
            timer:null,
            open:true
        }
    },
    mounted(){
        this.timer = setTimeout(()=>{
            this.open = false;
        },this.time*1000);
    },
    beforeDestroy(){
        clearTimeout(this.timer);
    }
}
</script>
<style lang="scss" scoped>
.alert_container{
    position: fixed;
    z-index: 999;
    background: transparent;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    div{
        background: rgba(0,0,0,.6);
        color:#fff;
        display: inline-block;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        padding: 5px;
    }
}
</style>