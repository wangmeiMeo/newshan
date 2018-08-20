<template>
    <div class="card">
         <img :src="card" alt="" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            card: "./../../static/images/card.jpg",
        }
    }
}
</script>
<style lang="scss" scoped>
.card {
    img {
        width: 674rpx;
        height: 306rpx;
        display: block;
        margin: 33rpx auto 0;
    }
}
</style>


