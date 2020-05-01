<template>
    <div class="items">
        <div class="left">
            <img :src="$attrs.pic" alt="" @click="$router.push({name:'list',params:{downurl:$attrs.downurl}})">
            <i class="iconfont icon-zanting"></i>
        </div>
        <div class="mid">
            <p>{{$attrs.i}}.{{$attrs.name}}</p>
            <p><span>{{$attrs.artist}}</span>  <span>播放：{{$attrs.playcnt}}</span></p>
        </div>
        <div class="right">
            <i :class="['iconfont',$attrs.flag==0?'icon-xiazai':'icon-youjiantou']"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:'Item'
}
</script>

<style lang="scss" scoped>
.left{
    position: relative;
    .icon-zanting{
        position: absolute;
        left:40%;
        font-size: 20px;
        font-weight: bold;
        color: #ff0000;
    }
}
.right{
    text-align: center;
}
.icon-xiazai{
    color: #00ba9b;
}
</style>