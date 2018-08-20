<template>
  <div>
    <div class="coupon">
      <div v-if="coupons=='undefined' || coupons.length==0">
        <img class="couponicon" :src="iconconpon" alt="">
        <span class="sp1">^_^没有更多优惠券o_o</span>
      </div>
      <view class="coupons" v-else>
        <!-- <li  class="clearfix" v-for="(item,index) in coupons" :key="index">
          <img class="imgle fl" :src="url" alt="">
          <div class="content fl" @click="gotodetail" :data-code="item.code">
            <p class="title">{{item.type}}</p>
            <p class="money" :style="{ color: ricolor }">
              <span>¥</span>
              <span>{{item.face_value}}</span>
            </p>
            <p class="rule">{{item.use_rule}}</p>
            <p class="rule rule1">有效期:{{item.begin_date}}{{item.end_date}}</p>
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
        </li> -->
        <view class='coupon-lists' v-for="(item,index) in coupons" :key="index">
          <img src='./../../../../static/images/logos1.png' class='coupon-logos'/>
          <view class='coupon-teltes'>
            <view class='coupon-shows'>
              <view class='coupon-left'  @click="gotodetail" :data-code="item.code">
                <view class='left-money'>
                  <text>{{item.type}}</text>
                </view>
                <view class='left-telte'>
                  <text>{{item.use_rule}}</text>
                </view>
              </view>
              <view class='coupon-right' @click="fastuse" :data-code="item.code">
                <text class='right-money'>¥</text>
                <text class='right-nums'>{{item.face_value}}</text>
              </view>
            </view>
          </view>
          <view class='time'>使用期限 : {{item.begin_date}}--{{item.end_date}}</view>
        </view>
      </view>
      <p class="loadmore" @click="loadmore2" v-if="flag=='nosucc'">
        <span v-if="coupons=='undefined' || coupons.length==0"></span>
        <span v-else>{{loadmore1}}</span>
      </p>
      <p class="loadmore" v-else>
        <span v-if="coupons=='undefined' || coupons.length==0"></span>
        <span v-else>{{loadmore1}}</span>
      </p>


    </div>
  </div>
</template>

<script>
import Common from "./../../../utils/common.js";
export default {
  data() {
    return {
      couponimg: "./../../../../static/images/conpon.jpg",
      url: require("./../../../../static/images/coulogo_01.jpg"),
      ricolor: "#9bafe7",
      pagenum: 0,
      iconconpon: require("./../../../../static/images/iconcoupon.png"),
      display: "",
      couponlength: "",
      coupons: [],
      loadmore1: "^_^点击加载更多^_^",
      flag: "nosucc"
    };
  },
  methods: {
    //加载更多
    loadmore2: function() {
      var pagenum = this.pagenum;
      pagenum++;
      this.pagenum = pagenum;
      console.log(this.pagenum);
      this.loadmore();
    },

    loadmore: function() {
      var that = this;
      var pagenum1 = this.pagenum;
      console.log(pagenum1);
      // if (that.flag != "succ") {
      Common.query(pagenum1).then(res => {
        //判断页面上是否显示该页面没有卡券的图标
        if (res.data.total != 0) {
          //第一页，默认
          if (pagenum1 == 0) {
            that.coupons = res.data.coupons;
          } else if (that.coupons.length < res.data.total) {
            //点击加载更多
            that.coupons = that.coupons.concat(res.data.coupons);
            console.log(that.coupons.length);
            console.log(that.coupons);
            wx.showToast({
              title: "加载中^_^",
              icon: "loading",
              duration: 1500
            });
          } else if (that.coupons.length == res.data.total) {
            that.loadmore1 = "^_^已经加载完成喽^_^";
            that.flag = "succ";
            that.pagenum = 0;
          }

          for (let i = 0; i < that.coupons.length; i++) {
            console.log(that.coupons.length);
            that.coupons[i].begin_date = that.coupons[i].begin_date
              .substr(0, 10)
              .replace(/-/g, ".");
            that.coupons[i].end_date = that.coupons[i].end_date
              .substr(0, 10)
              .replace(/-/g, ".");
          }
        } else {
          that.coupons = "undefined";
        }
      });
      // }
    },
    //立即使用
    fastuse: function(e) {
      console.log(e.mp.currentTarget.dataset.code);
      wx.navigateTo({
        url: `/pages/use_coupon/main?code=${e.mp.currentTarget.dataset.code}`
      });
    },
    gotodetail: function(e) {
      wx.navigateTo({
        url: `/pages/coupondetail/main?code=${e.mp.currentTarget.dataset.code}`
      });
    }
  },
  onShow() {
    //请求优惠券
    wx.showLoading({
      title: "加载中"
    });
    setTimeout(function() {
      wx.hideLoading();
    }, 2000);
    this.loadmore();
    this.flag = "nosucc";
    this.loadmore1 = "^_^点击加载更多^_^";
  }
};
</script>


<style lang="scss" scoped>
.coupon {
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
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
  .loadmore {
    text-align: center;
    font-size: 30rpx;
    padding: 40rpx 0;
    color: #999;
    span {
      display: block;
    }
  }
  .coupon-lists {
    position: relative;
    width: 710rpx;
    margin: 0 20rpx 60rpx;
    height: 190rpx;

    .coupon-logos {
      width: 100%;
      height: 190rpx;
      position: absolute;
      box-shadow: 3px 2px 10px #999;
      border-radius:20rpx; 
    }

    .time {
      height: 22rpx;
      color: #666;
      font-size: 26rpx;
      position: absolute;
      bottom: 20rpx;
      left: 20rpx;
    }

    .coupon-teltes {
      position: absolute;
      width: 100%;
      z-index: 99;
      .coupon-shows {
        width: 100%;
        .coupon-left {
          width: 478rpx;
          height: 190rpx;
          overflow: hidden;
          .left-money {
            font-size: 40rpx;
            color: #0d5498;
            margin: 20rpx 0 0 20rpx;
            font-weight: Regular;
          }

          .left-telte {
            font-size: 26rpx;
            color: #0d5498;
            margin-left: 20rpx;
            margin-top: 10rpx;
            font-weight: Regular;
          }
        }

        .coupon-right {
          position: absolute;
          width: 200rpx;
          height: 190rpx;
          line-height: 170rpx;
          right: 0;
          top: 0;
          bottom: 0;
          text-align: center;
          .right-money {
            font-size: 42rpx;
            color: #fff;
            font-weight: Regular;
            margin-left: -3rpx;
          }

          .right-nums {
            font-size: 65rpx;
            color: #fff;
            font-weight: Regular;
            margin-left: 10rpx;
          }
        }
      }
    }
  }
}

// .coupon {
//   margin-top: 30rpx;
//   .loadmore {
//     text-align: center;
//     font-size: 26rpx;
//     padding: 40rpx 0;
//     color: #999;
//     span {
//       display: block;
//     }
//   }
//   .couponimg {
//     width: 100%;
//     height: 267rpx;
//   }
//   .couponicon {
//     width: 100rpx;
//     height: 70rpx;
//     display: block;
//     margin: 200rpx auto 0;
//   }
//   .sp1 {
//     font-size: 26rpx;
//     display: block;
//     text-align: center;
//     color: #999;
//     margin-top: 21rpx;
//   }
//   .coupons {
//     padding: 0 50rpx;
//     li {
//       position: relative;
//       border: 1px solid #ebebeb;
//       height: 178rpx;
//       border-radius: 10rpx;
//       margin-bottom: 30rpx;
//       .imgle {
//         position: absolute;
//         left: 16rpx;
//         top: 0;
//         bottom: 0;
//         margin: auto;
//         width: 146rpx;
//         height: 146rpx;
//         border-radius: 16rpx;
//         overflow: hidden;
//       }
//       .letitle {
//         position: absolute;
//         z-index: 10000000;
//         left: 0;
//         top: 0;
//         width: 154rpx;
//         height: 40rpx;
//         overflow: hidden;
//         span {
//           display: block;
//           width: 100%;
//           color: #fff;
//           font-size: 22rpx;
//           text-align: left;
//           text-indent: 0.4em;
//           line-height: 40rpx;
//         }
//         img {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           z-index: -10000;
//           left: 0;
//           top: 0;
//         }
//       }
//       .content {
//         padding-left: 178rpx;
//         .title {
//           font-size: 26rpx;
//           color: #666;
//           margin-top: 20rpx;
//         }
//         .money {
//           font-size: 26rpx;
//           line-height: 26rpx;
//           span:nth-of-type(2) {
//             font-family: "Times New Roman", Times, serif;
//             font-size: 30rpx;
//             line-height: 30rpx;
//             font-weight: bold;
//             display: inline-block;
//             margin-left: 4rpx;
//           }
//         }
//         .rule {
//           width: 290rpx;
//           height: 30rpx;
//           overflow: hidden;
//           color: #a3a3a3;
//           font-size: 22rpx;
//         }
//         .rule1 {
//           font-size: 17rpx;
//         }
//       }
//       .ribg {
//         position: relative;
//         width: 174rpx;
//         height: 100%;
//         border-top-right-radius: 10rpx;
//         border-bottom-right-radius: 10rpx;
//         .btn {
//           position: absolute;
//           left: 0;
//           right: 0;
//           bottom: 14rpx;
//           margin: auto;
//           font-size: 20rpx;
//           width: 138rpx;
//           height: 36rpx;
//           line-height: 42rpx;
//           text-align: center;
//           border: 0;
//           background: #ffffff;
//           border-radius: 60rpx;
//         }
//         .progress_box {
//           position: relative;
//           width: 174rpx;
//           height: 178rpx;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .progress_bg {
//           position: absolute;
//           width: 174rpx;
//           height: 178rpx;
//         }
//         .progress_canvas {
//           width: 174rpx;
//           height: 178rpx;
//         }
//         .progress_text {
//           height: 178rpx;
//           color: #fff;
//           font-size: 22rpx;
//           text-align: center;
//           display: flex;
//           align-items: center;
//           text {
//             font-size: 28rpx;
//           }
//         }
//         .progress_info {
//           font-size: 36rpx;
//           padding-left: 16rpx;
//           letter-spacing: 2rpx;
//         }
//         .sj {
//           width: 6rpx;
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           left: 0;
//           z-index: 9;
//           background-color: #fff;
//           background-position: 100% 35%;
//           background-size: 15rpx 15rpx;
//         }
//       }
//     }
//   }
// }
</style>


