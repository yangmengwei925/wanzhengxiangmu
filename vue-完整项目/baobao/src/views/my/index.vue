<template>
    <div class="my">
        <div class="main">
            <div class="tops">
                <p><span>我的下载</span><i class="iconfont icon-youjiantou"></i></p>
                <p><span>我的收藏</span><i class="iconfont icon-youjiantou"></i></p>
            </div>
            <div class="tops">
                <p><span>清除缓存</span></p>
                <p><span>关于我们</span></p>
            </div>
            <div class="bot">
                <p>退出应用</p>
            </div>
        </div>
        <my-foot></my-foot>
    </div>
</template>

<style lang="scss" scoped>
.my{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
        flex: 1;
        overflow: auto;
        background: #efeff4;
        .tops{
            height: 70px;
            margin-top: 30px;
            background: #fff;
            p{
                line-height: 35px;
                display: flex;
                span{
                    flex:9;
                    padding-left: 20px;
                }
                i{
                    flex:1;
                }
            }
        }
        .bot{
            height: 40px;
            background: #fff;
            margin-top: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                width: 90%;
                height: 80%;
                background: #ff0000;
                color: #fff;
                text-align: center;
                line-height: 30px;
                border-radius: 5px;
            }
        }
    }
}
</style>