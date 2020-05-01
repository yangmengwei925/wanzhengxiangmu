<template>
    <div class="songs">
        <!-- <my-Item 
        v-for="(item,i) in list" 
        :key="item.id" :i="i+1" 
        :name="item.name"
        :pic="item.pic"
        :playcnt="item.playcnt"
        :artist="item.artist"
        :downurl="item.downurl"
        flag=true></my-Item> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.$http.getLookdata({
            type:"getvideos",pagesize:30
        }).then(res=>{
            this.list=res.data.list.slice(1)
        })
    }
}
</script>