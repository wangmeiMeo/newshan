<template>
  <view class='userinfo'>
    <img src='http://f.cdn.cloudolphin.com/regist.jpg'>
    <button v-if="canIUse" class="btn" hover-class='bg_color' open-type="getUserInfo"  @click="getUserInfo1"  @getuserinfo="bindGetUserInfo">授权登录</button>
    <view v-else>请升级微信版本</view>
</view>
</template>
<script>
import Common from "./../../utils/common.js";
export default {
  data() {
    return {
      //判断小程序的API，回调，参数，组件等是否在当前版本可用。
      canIUse: wx.canIUse("button.open-type.getUserInfo")
    };
  },
  methods: {
    //判断微信版本是否可用
    getUserInfo1() {
      console.log("click事件首先触发");
      // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
      console.log(wx.canIUse("button.open-type.getUserInfo"));
      if (wx.canIUse("button.open-type.getUserInfo")) {
        // 用户版本可用
      } else {
        console.log("请升级微信版本");
      }
    },
    /**
     * 用户获取个人信息
     * unionid
     * encryptedData iv
     * */
    bindGetUserInfo(e) {
      console.log(e.mp.detail);
      let encryptedData = e.mp.detail.encryptedData;
      let iv = e.mp.detail.iv;
      if (e.mp.detail.rawData) {
        //用户按了允许授权按钮
        console.log("用户按了允许授权按钮");
        console.log(encryptedData);
        console.log(iv);
        Common.getUserInfo(encryptedData, iv).then(res => {
          console.log(res);
          //code:0 成功
          if (res.data.code == 0) {
            //首次获得unionId
            this.globalData.unionId = res.data.unionId;
            wx.setStorage({
              key: "unionId",
              data: res.data.unionId,
            });
            wx.redirectTo({
              url: "./../getphonenumber/main"
            });
          }
        });
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
        wx.showToast({
          title: "请授权个人昵称等信息", //标题
          icon: "none" //图标，支持"success"、"loading"
        });
      }
    }
  }
};
</script>
<style  lang ="scss">
.userinfo img {
  display: block;
  width: 100%;
}
.userinfo .btn {
  width: 95%;
  background: #21aee6;
  color: #fff;
  border-radius: 16rpx;
  margin-top: 64rpx;
  border: 0;
  outline: 0;
  border: 0;
}

.bg_color {
  opacity: 0.6;
}
</style>

