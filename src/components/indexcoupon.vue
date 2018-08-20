<template>
  <!-- 优惠券 -->
  <div class="coupon">
    <img class="couponimg" @click="gotoCoupon" :src="couponimg" alt="">
    <ul class="coupons">
      <li class="clearfix" v-for="(item,index) in activities" :key="index">
        <img class="imgle fl" :src="url" alt="">
        <p class="letitle"><img src="../../static/images/letitle.png" />
          <span>{{item.coupon_name}}</span>
        </p>
        <div class="content fl">
          <p class="title">{{item.coupon_type}}</p>
          <p class="money" :style="{ color: ricolor }">
            <span>¥</span>
            <span>{{item.face_value}}</span>
          </p>
          <p class="rule">{{item.use_rule}}</p>
          <p class="rule rule1">有效期:{{item.begin_date}}--{{item.end_date}}</p>
        </div>
        <div class="fr ribg" :style="{background: ricolor}">
          <div class="sj" :style="{
                          'background-image':'linear-gradient(-45deg,'+ricolor+' 25%,transparent 25%, transparent),'+
                          'linear-gradient(-135deg,'+ ricolor+' 25%, transparent 25%, transparent)'
                          }"></div>
          <view class='progress_box' @click="receiveCoupon" :data-activityId="item.activity_id">
            <view class="progress_text" >
              <text>立即</text>
              <text>领取</text>
            </view>
          </view>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Common from "./../utils/common.js";
export default {
  props: ["activities"],
  data() {
    return {
      // 自定义canvas缩放比例
      widths: "",
      heights: "",
      width: 87,
      height: 101,
      r: 43.5, //水平位置
      r2: 33, //垂直位置
      r1: 24, //半径,
      ricolor: "#9bafe7",
      couponimg: "./../../static/images/conpon.jpg",
      url: "./../../static/images/coulogo_01.jpg"
    };
  },
  methods: {
    receiveCoupon: function(e) {
      console.log(e.mp.currentTarget.dataset.activityid);
      let activityid = e.mp.currentTarget.dataset.activityid;
      Common.couponAcquire(activityid).then(res => {
        console.log(res);
        if (res.data.success == true) {
          wx.showToast({
            title: "领取成功",
            icon: "success",
            duration: 1300
          });
        }
      });
    },
    gotoCoupon: function() {
      wx.switchTab({
        url: "./../coupon/main"
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.coupon {
  margin-top: 20rpx;
  .couponimg {
    width: 100%;
    height: 167rpx;
  }
  .coupons {
    padding: 0 50rpx;
    li {
      position: relative;
      border: 1px solid #ebebeb;
      height: 178rpx;
      border-radius: 10rpx;
      margin-bottom: 30rpx;
      .imgle {
        position: absolute;
        left: 16rpx;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 146rpx;
        height: 146rpx;
        border-radius: 16rpx;
        overflow: hidden;
      }
      .letitle {
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        width: 154rpx;
        height: 40rpx;
        overflow: hidden;
        span {
          display: block;
          width: 100%;
          color: #fff;
          font-size: 22rpx;
          text-align: left;
          text-indent: 0.4em;
          line-height: 40rpx;
        }
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
          left: 0;
          top: 0;
        }
      }
      .content {
        padding-left: 178rpx;
        .title {
          font-size: 26rpx;
          color: #666;
          margin-top: 20rpx;
        }
        .money {
          font-size: 26rpx;
          line-height: 26rpx;
          span:nth-of-type(2) {
            font-family: "Times New Roman", Times, serif;
            font-size: 30rpx;
            line-height: 30rpx;
            font-weight: bold;
            display: inline-block;
            margin-left: 4rpx;
          }
        }
        .rule {
          width: 290rpx;
          height: 30rpx;
          overflow: hidden;
          color: #a3a3a3;
          font-size: 22rpx;
        }
        .rule1 {
          font-size: 20rpx;
        }
      }
      .ribg {
        position: relative;
        width: 174rpx;
        height: 100%;
        border-top-right-radius: 10rpx;
        border-bottom-right-radius: 10rpx;
        .btn {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          margin: auto;
          font-size: 20rpx;
          width: 138rpx;
          height: 36rpx;
          line-height: 42rpx;
          text-align: center;
          border: 0;
          background: #ffffff;
          border-radius: 60rpx;
        }
        .progress_box {
          position: relative;
          width: 174rpx;
          height: 178rpx;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .progress_bg {
          position: absolute;
          width: 174rpx;
          height: 178rpx;
        }
        .progress_canvas {
          width: 174rpx;
          height: 178rpx;
        }
        .progress_text {
          height: 178rpx;
          color: #fff;
          font-size: 22rpx;
          text-align: center;
          display: flex;
          align-items: center;
          text {
            font-size: 28rpx;
          }
        }
        .progress_info {
          font-size: 36rpx;
          padding-left: 16rpx;
          letter-spacing: 2rpx;
        }
        .sj {
          width: 6rpx;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 9;
          background-color: #fff;
          background-position: 100% 35%;
          background-size: 15rpx 15rpx;
        }
      }
    }
  }
}
</style>
