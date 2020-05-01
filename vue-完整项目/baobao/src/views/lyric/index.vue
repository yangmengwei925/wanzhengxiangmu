<template>
    <div class="con-p" ref="conp">
        <audio id="main-audio" controls="controls" v-timeupdate="curtime">
            <source src="http://cdnbbbd.shoujiduoduo.com/bb/audio/a48/141/3577141.aac">
        </audio>
        <div class="song_content" ref="songContent">
            <ul>
                <li v-for="(val,i) in songTextList" :key="i" @click="songTextLi(val.times)" :class="{
                    active:curindex === i
                }" :ref="'lis'+i">{{val.text}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            curtime:0,
            curindex:-1,
            songTextList:[]
        }
    },
    created() {
        this.$http.getSongText().then(res=>{
            this.songTextList = this.formatSongText(res.data)
        })
    },
    watch:{
        curtime(val){
            this.songTextList.forEach((item,key)=>{
                if(item.times <= val && this.songTextList[key+1].times > val){
                    this.curindex = key;
                }
            })
        },
        curindex(val){
            //当前选中歌词距顶部距离
            // this.$refs['songContent'].scrollTop=100
            const curSongTextOffsetTop = this.$refs['lis'+val][0].offsetTop;
            //可视区高度
            const songContentHeight = this.$refs['songContent'].offsetHeight;
            this.$refs['songContent'].scrollTop = parseInt(curSongTextOffsetTop - songContentHeight / 2);
            // console.log(this.$refs['songContent'].scrollTop,'1111111111111',curSongTextOffsetTop)
        }
    },
    methods: {
        formatSongText(text){
            //<数字,数字>
            text = text.replace(/\<\d+\,\-?\d+\>/g,'');
            const time = /\[(\d{2}:\d{2}\.\d{2})\]([^\[]+)/g;
            const res = [];
            text.replace(time,($1,$2,$3)=>{
                let [f,m] = $2.split(':');
                res.push({
                    times:parseInt(parseInt(f)*60*1000 + parseFloat(m)*1000),
                    text:$3
                })
            });
            res.push({
                times:Infinity,
                text:''
            })
            // console.log(res)
            return res;
        },
        songTextLi(times){
            this.curtime = times;
            console.log(this.curtime,'12')
        }
    },
    mounted() {
    },
}
</script>

<style lang="scss" scoped>
.con-p{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    audio{
        display:inline-block;
        width: 100%;
    }
}
.song_content{
    overflow: auto;
    flex:1;
}
.song_content ul{
    padding-top:20px;
}
.song_content li{
    padding: 10px;
    text-align: center;
}
.active{
    color:red;
}
</style>