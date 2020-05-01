<template>
    <ul class="footer">
        <router-link tag="li" v-for="(item,i) in footerNav" :key="i" :to="item.path">
            <i :class="{'iconfont':true,[item.icon]:true}"></i>
            <span>{{item.title}}</span>
        </router-link>
    </ul>
</template>

<script>
import {routes} from '@/router'
export default {
    name:'foot',
    computed:{
        footerNav(){
            return routes.filter(item=>item.footerNav).map(item=>({
                path:item.path,
                ...item.meta
            }))
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    height: 45px;
    background: #f9f9f9;
    text-align: center;
    display: flex;
    li{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        i{
            font-size: 20px;
        }
        &.router-link-active{
            color: red;
        }
    }
}
</style>