<template>
  <div class="webank">
    <!-- logobannenr -->
    <img class="img000" :src="webankurl" alt="">
    <div class="clearfix imgs">
      <navigator @click="wm" v-if="extraData.webankAppId!=''&&extraData.webankAppId!='undefined'&&extraData.unionId!=''&&extraData.unionId!='undefined'&&extraData.phone!=''&&extraData.phone!='undefined'&&extraData.openId!=''&&extraData.openId!='undefined'&&extraData.memberId!=''&&extraData.memberId!='undefined'" target="miniProgram" open-type="navigate" :app-id="AppId" :extra-data="extraData" :version="AppVersion">
        <img class="fl" :src="webankurl01" alt="">
      </navigator>
      <navigator v-else @click="wm">
        <img class="fl" :src="webankurl01" alt="">
      </navigator>
      <div class="fr">
        <img class="ritop" :src="webankurl02" alt="">
        <img :src="webankurl03" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import config from "./../utils/config.js";
import Common from "./../utils/common.js";
import Global from "./../components/Global";
export default {
  data() {
    return {
      webankurl: "./../../static/images/we.jpg",
      webankurl01: "http://f.cdn.cloudolphin.com/vippay.png",
      webankurl02: "./../../static/images/ritop.jpg",
      webankurl03: "./../../static/images/ribot.jpg",
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

  methods: {
    wm: function() {
      console.log(this.extraData);
    }
  },

  created() {
    let that = this;
    //获取memberId
    // 获得
    wx.login({
      success: function(res) {
        console.log(res.code);
        Common.getUserMessage(res.code).then(
          function(res) {
            console.log(res)
            console.log(
              "wangmeimeimeimiemiemiemiemiemiemeimeimeimiemiemiemiemimemiemiemeimeimiemimieemiemie"
            );
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
  }
};
</script>

<style lang="scss">
.webank {
  height: 666rpx;
  overflow: hidden;
  img.img000 {
    display: block;
    width: 100%;
    height: 176rpx;
    margin-bottom: 20rpx;
  }
  .fl {
    width: 351rpx;
    height: 470rpx;
  }
  .fr {
    width: 344rpx;
    img {
      display: block;
      width: 100%;
      height: 230rpx;
    }
    .ritop {
      margin-bottom: 17rpx;
    }
  }
  .imgs {
    padding: 0 20rpx;
  }
}
</style>