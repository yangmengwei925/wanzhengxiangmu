<template>
    <div class="item">
        <div class="items" v-for="(item,i) in lists" :key="item.id">
            <div class="left">
                <p>{{i+1}}</p>
            </div>
            <div class="mid">
                <p>{{item.name}}</p>
                <p><span>{{item.artist}}</span><span>{{item.playcnt}}</span></p>
            </div>
            <div class="right">
                <i class="iconfont icon-youjiantou" @click="$router.push('/lyric')"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'SItem',
    props:['lists']
}
</script>

<style lang="scss">
    .item{
        width: 100%;
        height: 100%;
        .items{
            height: 70px;
            display: flex;
            .left{
                flex: 1;
                line-height: 70px;
                text-align: center;
            }
            .mid{
                flex:8;
                p{
                    line-height: 35px;
                }
            }
            .right{
                flex:1;
                line-height: 70px;
            }
        }
    }
</style>