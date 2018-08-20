<template>
  <div class="container">
      <view class='banner'>
        <img class='bannerimg' src='http://f.cdn.cloudolphin.com/membercard1.jpg'/>
        <view class='portrait_head'>
          <open-data class="portrait" type="userAvatarUrl"></open-data>
        </view>
        <text class='memberid'>会员卡号:{{memberId}}</text>
        <text class='memberid memberid1'>会员积分:{{jifen}}</text>
      </view>
      
      <!-- 条形码 -->
      <view class="barcode">
        <view class="barnum"><text>*</text>付款时，请向收银员出示此条形码</view>
        <canvas width="300" height="200" canvas-id="barcode"></canvas>
      </view>
      
      <!-- 列表  -->
      <view class='list'>
        <view class='record' @click="gotomycoupon">
          <img class='img' src='./../../../static/images/record.gif' >
          <text>我的卡券</text>
          <img class='jt' src='./../../../static/images/jt.png' >
        </view>
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
      jifen: ""
    };
  },
  methods: {
    gotomycoupon: function() {
      wx.navigateTo({
        url: "/pages/member_center/member_coupon/member_coupon"
      });
    }
  },
  onShow() {
    var that = this;
    wx.getStorage({
      key: "memberId",
      success: function(res) {
        that.memberId = res.data;
        wxbarcode.barcode("barcode", res.data, 600, 170);
        //券积分查询
        Common.balance(res.data).then(res => {
          console.log(res);
          that.jifen = res.data.balance;
        });
      }
    });
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
    padding-bottom: 34rpx;
    .barnum {
      width: 100%;
      height: 80rpx;
      line-height: 80rpx;
      font-size: 23rpx;
      color: #999;
      text-align: center;
      text {
        font-style: normal;
        color: red;
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
.banner {
  position: relative;
  width: 100%;
  height: 293rpx;
  margin: 0 auto;
  padding-top: 100rpx;
  background: #fff;
  z-index: 0;
  .bannerimg {
    position: absolute;
    width: 87%;
    height: 358rpx;
    top: 30rpx;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -10000;
  }

  .memberid {
    display: block;
    text-indent: 6em;
    color: #fff;
    font-size: 32rpx;
    margin-top: 20rpx;
  }
  .memberid1 {
    margin-top: 5rpx;
  }

  .portrait_head {
    display: block;
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }

  .portrait {
    display: block;
    width: 100rpx;
    height: 100rpx;
  }
}
.list {
  width: 100%;
  margin: 9rpx auto 0;
  view {
    position: relative;
    background: #fff;
    margin-bottom: 1px;
    padding: 20rpx 5%;
    .img {
      width: 30rpx;
      height: 30rpx;
      vertical-align: middle;
      margin-right: 10rpx;
    }
    text {
      color: #747373;
      font-size: 26rpx;
      line-height: 26rpx;
    }
    .jt {
      position: absolute;
      width: 28rpx;
      height: 25rpx;
      top: 0;
      bottom: 0;
      right: 30rpx;
      margin: auto;
    }
  }
}
</style>


