<template>
    <div class="play">
        <video autoplay>
            <source :src="downurl"/>
        </video>
    </div>
</template>

<script>
export default {
    computed: {
        downurl(){
            return this.$route.params.downurl
        }
    },
}
</script>

<style lang="scss" scoped>
.play{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    video{
        width: 100%;
        height: 200px;
    }
}
</style>
