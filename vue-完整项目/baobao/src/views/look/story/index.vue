<template>
    <div class="story" ref="scrollpage">
        <my-Item 
        v-for="(item,i) in listo" 
        :key="item.id" :i="i+1" 
        :name="item.name"
        :pic="item.pic"
        :playcnt="item.playcnt"
        :artist="item.artist"
        :downurl="item.downurl"
        flag=1></my-Item>
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
            listo:[],
            pagesize:10
        }
    },
    created(){
        this.getList()
    },
    methods: {
        getList(){
            this.$http.getLookdata({
                type:"getvideos",pagesize:this.pagesize,collectid:27
            }).then(res=>{
                this.listo=res.data.list.slice(1)
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