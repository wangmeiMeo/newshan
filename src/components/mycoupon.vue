<template>
  <!-- 优惠券 -->
  <div class="coupon">
    <div v-if="coupons=='undefined' || coupons.length==0">
      <img class="couponicon" :src="iconconpon" alt="">
      <span class="sp1">^_^没有更多优惠券o_o</span>
    </div>
    <ul class="coupons" v-else>
      <li class="clearfix" v-for="(item,index) in coupons" :key="index">
        <img class="imgle fl" :src="url" alt="">
        <div class="content fl">
          <p class="title">{{item.type}}</p>
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
          <view class='progress_box' @click="fastuse" :data-code="item.code">
            <view class="progress_text">
              <text>立即</text>
              <text>使用</text>
            </view>
          </view>
        </div>
      </li>
    </ul>
    <p class="loadmore" @click="loadmore">
      <span v-if="coupons=='undefined' || coupons.length==0"></span>
      <span v-else>{{loadmore1}}</span>
    </p>
  </div>
</template>

<script>
import Common from "./../utils/common.js";
export default {
  props: ["coupons", "loadmore1"],
  data() {
    return {
      couponimg: "./../../static/images/conpon.jpg",
      url: "./../../static/images/coulogo_01.jpg",
      ricolor: "#9bafe7",
      pagenum: 0,
      iconconpon: require("./../../static/images/iconcoupon.png"),
      display: "",
      couponlength: ""
    };
  },
  methods: {
    //加载更多
    loadmore: function() {
      this.pagenum++;
      console.log(this.pagenum);
      this.$emit("pagenum", this.pagenum);
    },

    //立即使用
    fastuse: function(e) {
      console.log(e.mp.currentTarget.dataset.code);
      wx.navigateTo({
        url: `./../use_coupon/main?code=${e.mp.currentTarget.dataset.code}`
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.coupon {
  margin-top: 30rpx;
  .loadmore {
    text-align: center;
    font-size: 26rpx;
    padding: 40rpx 0;
    color: #999;
    span {
      display: block;
    }
  }
  .couponimg {
    width: 100%;
    height: 267rpx;
  }
  .couponicon {
    width: 100rpx;
    height: 70rpx;
    display: block;
    margin: 200rpx auto 0;
  }
  .sp1 {
    font-size: 26rpx;
    display: block;
    text-align: center;
    color: #999;
    margin-top: 21rpx;
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
        z-index: 10000000;
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
          z-index: -10000;
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
          bottom: 14rpx;
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
