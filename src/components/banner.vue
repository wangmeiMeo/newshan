<template>
  <swiper class="swiper" indicator-color="#b9a9a1" indicator-active-color="#fff" indicator-dots="true" autoplay="true" interval="5000" circular duration="1000">
    <block v-for="(item, index) in banner" :index="index" :key="index">
      <swiper-item>
        <image @click="gotoflag(item.sign,$event)" :data-val='item.detail' :src="item.address" class="slide-image" mode="aspectFill" />
        <navigator v-if="extraData.webankAppId!=''&&extraData.webankAppId!='undefined'&&extraData.unionId!=''&&extraData.unionId!='undefined'&&extraData.phone!=''&&extraData.phone!='undefined'&&extraData.openId!=''&&extraData.openId!='undefined'&&extraData.memberId!=''&&extraData.memberId!='undefined'&&item.sign=='wemember'" class="wemember" target="miniProgram" open-type="navigate" :app-id="AppId" :extra-data="extraData" :version="AppVersion"></navigator>
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
import config from "./../utils/config.js";
import Global from "./../components/Global";
import Common from "./../utils/common.js";
export default {
  props: ["banner"],
  data() {
    return {
      afterColor: "#f00",
      beforeColor: "#000",
      AppId: config.webank.AppId,
      AppVersion: config.webank.AppVersion,
      extraData: {
        webankAppId: config.webank.webankAppId,
        unionId: "",
        memberId: "",
        phone: "",
        openId: "",
        dest: ""
      }
    };
  },
  created() {
    let that = this;
    //获取memberId
    wx.login({
      success: function(res) {
        console.log(res.code);
        console.log(
          "0000011--------------------------------------------000000111"
        );
        Common.getUserMessage(res.code).then(
          function(res) {
            console.log(res.data.openId);
            console.log(res.data.unionId);
            console.log(res.data.memberId);
            console.log(res.data.phone);

            that.extraData.openId = res.data.openId;
            that.extraData.unionId = res.data.unionId;
            that.extraData.memberId = res.data.memberId;
            that.extraData.phone = res.data.phone;
          },
          function(err) {
            console.log(err);
            wx.showToast({
              title: "获取信息失败",
              icon: "none",
              duration: 2000,
              mask: false,
              success: function() { },
              fail: function() { },
              complete: function() { }
            });
          }
        );
      }
    });
  },
  methods: {
    gotoflag(flag, event) {
      console.log(flag);
      if (flag == "discount") {
        wx.switchTab({
          url: "./../coupon/main"
        });
      } else if (flag == "activity") {
        wx.navigateTo({
          url: `./../shanshanbianli/main?detail=${
          event.mp.currentTarget.dataset.val
          }`
        });
      }
    }
  }
};
</script>

<style lang="scss">
.swiper {
  display: block;
  height: 366rpx;
  width: 100%;
  swiper-item {
    position: relative;
    image {
      display: block;
      width: 100%;
      height: 100%;
    }
    .wemember {
      position: absolute;
      z-index: 19999999999;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
  .wx-swiper-dots.wx-swiper-dots-horizontal {
    width: 96%;
    padding-right: 4%;
    text-align: right;
  }
  .wx-swiper-dot {
    width: 20rpx;
    display: inline-block;
    height: 20rpx;
    margin-left: -5rpx;
  }
}
</style>
