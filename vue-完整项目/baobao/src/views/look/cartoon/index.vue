<template>
    <div class="carton" ref="scrollpage">
        <div class="items" v-for="(item,i) in list" :key="item.id">
            <div class="top">
                <img :src="item.pic" alt="" @click="$router.push('/looklist')">
            </div>
            <div class="bot">
                <p>{{i+1}}.{{item.name}}</p>
                <p>共{{item.method}}集</p>
            </div>
        </div>
        <p :style="{width:'100%',textAlign:'center'}">
            上拉加载更多
        </p>
    </div>
</template>

<script>
import myMixin from '@/mixins/scrollupdate'
export default {
    mixins:[myMixin],
    data(){
        return{
            list:[],
            pagesize:10
        }
    },
    created(){
        this.getList()
    },
    methods: {
        getList(){
            this.$http.getLookdata({
                type:"getlistv2",act:"home",pagesize:this.pagesize,pid:26
            }).then(res=>{
                this.list=res.data.list.slice(1)
            })
        }
    },
    mounted(){
        this.scrollLoad(this.$refs.scrollpage.parentNode,(e)=>{
            this.pagesize+=10;
            this.getList()
        })
    }
}
</script>

<style lang="scss" scoped>
.carton{
    width: 100%;
    // height: 100%;
    display: flex;
    flex-wrap: wrap;
    .items{
        width: 145px;
        height: 140px;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        .top{
            height: 100px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        .bot{
            height: 40px;
            line-height: 20px;
        }
    }
}
</style>