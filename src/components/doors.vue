<template>
  <div class="doors">
    <img class="doorlogo" :src="doorlogo" alt=""><span v-if="flag==1">{{storename1}}</span><span v-else>{{storeName}}</span>
    <div class="search"  @click="gotoSearch"><img :src="doorurl" alt="">搜索门店</div>
  </div>
</template>

<script>
export default {
  props: ["storeName", "code", "storename1", "flag"],
  data() {
    return {
      doorlogo: "./../../static/images/doorlogo.png",
      doorurl: "./../../static/images/search.png"
    };
  },
  methods: {
    gotoSearch: function() {
      wx.navigateTo({
        url: `../searchdoor/main?code=${this.code}`
      });
    }
  }
};
</script>

<style lang="scss">
.doors {
  display: flex;
  top: 20rpx;
  height: 66rpx;
  line-height: 66rpx;
  padding: 0 34rpx;
  margin-bottom: 30rpx;
  margin-top: 15rpx;
  .doorlogo {
    width: 40rpx;
    height: 40rpx;
    margin-top: 10rpx;
    margin-right: 15rpx;
  }
  span {
    display: inline-block;
    flex: 2;
    font-size: 21rpx;
    color: #666;
    overflow: hidden;
  }
  .search {
    flex: 6;
    text-align: center;
    font-size: 26rpx;
    color: #999;
    background: #f4f1ee;
    border-radius: 10rpx;

    img {
      width: 40rpx;
      height: 40rpx;
      vertical-align: middle;
      margin-right: 25rpx;
    }
  }
}
</style>
