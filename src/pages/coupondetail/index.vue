<template>
<view class="page">
  <view class='voucher-header'>
    <view class='voucher-logos'>
      <img src='./../../../static/images/logos.jpg'/>
    </view>
    <view class='voucher-tetles'>
      <text>{{coupondetail.type}}</text>
    </view>
    <view class='voucher-money'>
      <text class='money-tetle'>{{coupondetail.face_value}}</text>
      <text>元代金券</text>
    </view>
    <view class='voucher-Btn' @click="fastuse">
      <text>立即使用</text>
    </view>
    <view class='voucher-times'>
      <text>有效期 : {{coupondetail.begin_date}}--{{coupondetail.end_date}}</text>
    </view>
    <view class='voucher-solids'></view>
    <view class='voucher-footer'>
      <view class='footer-tetles'>
        <text>使用说明 :</text>
      </view>
      <view class='footer-shows'>
        {{coupondetail.remark}}
      </view>
    </view>
</view>
</view>
</template>

<script>
import Common from "./../../utils/common.js";
export default {
  data() {
    return {
      coupondetail: ""
    };
  },
  methods: {
    fastuse:function(){
       wx.navigateTo({
        url: `/pages/use_coupon/main?code=${this.$mp.query.code}`
      });
    }
  },
  onShow() {
    var that = this;
    console.log(that.$mp.query.code);
    let code = that.$mp.query.code;
    //获取券的详情
    Common.coupondetail(code).then(res => {
      console.log(res);
      that.coupondetail = res.data.coupon;
      that.coupondetail.begin_date = res.data.coupon.begin_date
        .substr(0, 10)
        .replace(/-/g, ".");
        that.coupondetail.end_date = res.data.coupon.end_date
        .substr(0, 10)
        .replace(/-/g, ".");
    });
  }
};
</script>


<style lang="scss" scoped>
/* pages/coupon/coupon.wxss */
.page {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #5d96bb;
  .voucher-header {
    height: 96%;
    width: 96%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: #fff;
    border-radius: 20rpx;
    .voucher-logos {
      text-align: center;
      padding: 75rpx 0 100rpx 0;
      image {
        width: 100rpx;
        height: 110rpx;
      }
    }

    .voucher-tetles {
      font-size: 60rpx;
      font-family: "微软雅黑";
      /* font-weight: Bold; */
      text-align: center;
      margin-bottom: 25rpx;
    }

    .voucher-money {
      font-size: 30rpx;
      text-align: center;
      margin-bottom: 40rpx;
    }

    .money-tetle {
      font-family: "微软雅黑";
      font-size: 60rpx;
      font-weight: bold;
      padding-right: 5rpx;
    }

    .voucher-Btn {
      width: 540rpx;
      height: 95rpx;
      line-height: 95rpx;
      background: #5a93ba;
      border-radius: 50rpx;
      text-align: center;
      color: #fff;
      margin: 0 auto;
    }

    .voucher-times {
      font-size: 30rpx;
      text-align: center;
      margin-top: 35rpx;
    }

    .voucher-solids {
      width: 575rpx;
      margin-top: 40rpx;
      margin-left: 70rpx;
      border-bottom: dashed 1rpx;
    }

    .voucher-footer {
      width: 575rpx;
      margin-top: 40rpx;
      margin-left: 70rpx;
      font-size: 30rpx;
    }

    .footer-shows {
      margin-top: 25rpx;
      font-size: 28rpx;
    }
  }
}
</style>


