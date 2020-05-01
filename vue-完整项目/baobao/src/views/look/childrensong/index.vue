<template>
    <div class="songs" ref="scrollpage">
        <my-Item 
        v-for="(item,i) in list" 
        :key="item.id" :i="i+1" 
        :name="item.name"
        :pic="item.pic"
        :playcnt="item.playcnt"
        :artist="item.artist"
        :downurl="item.downurl"
        flag=0></my-Item>
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
        return {
            list:[],
            pagesize:10
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            this.$http.getLookdata({
                type:"getvideos",pagesize:this.pagesize,collectid:29
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