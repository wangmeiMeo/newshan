<template>
  <div class="container">
      <!-- 条形码 -->
      <view class="barcode">
        <view class="barnum"><text>*</text>^_^付款时，请向收银员出示此条形码^_^</view>
        <canvas width="300" height="200" canvas-id="barcode"></canvas>
         <view class="barnum"><text>{{code}}</text></view>
      </view>
  </div>
</template>


<script>
import wxbarcode from "./../../utils/index.js";
import Common from "./../../utils/common.js";
export default {
  data() {
    return {
      memberId: "",
      jifen: "",
      code: ""
    };
  },
  onShow() {
    var that = this;
    console.log(that.$mp.query.code);
    this.code = that.$mp.query.code;
    var code = that.$mp.query.code;
    wxbarcode.barcode("barcode", code, 600, 170);
  }
};
</script>


<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eeeeee;
  .barcode {
    background: #fff;
    height: 295rpx;
    padding-bottom: 40rpx;
    .barnum {
      width: 100%;
      height: 80rpx;
      line-height: 80rpx;
      font-size: 23rpx;
      color: #999;
      text-align: center;
      text {
        font-style: normal;
        color: #666;
        letter-spacing: 4px;
        font-size: 28rpx;
      }
    }
    canvas {
      margin: 0 auto;
      width: 600rpx;
      height: 170rpx;
    }
  }
}
</style>


