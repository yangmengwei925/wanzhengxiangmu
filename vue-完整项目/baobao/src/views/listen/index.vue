<template>
    <div class="listen">
        <div class="header">
            <p><router-link to="/listen/small">儿歌</router-link><router-link to="/listen/things">故事</router-link></p>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <my-foot></my-foot>
    </div>
</template>

<style lang="scss" scoped>
.listen{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        display: flex;
        justify-content: center;
        height: 30px;
        text-align: center;
        p{
            width: 100px;
            height: 30px;
            border:1px solid #ff0000;
            border-radius: 5px;
            line-height: 30px;
            text-align: center;
            a{
                display: inline-block;
                width: 50%;
                height: 30px;
                color: #ff0000;
                &.router-link-active{
                    background: #ff0000;
                    color: #fff;
                }
            }
        }
    }
    .main{
        flex:1;
        overflow: auto;
    }
}
</style>