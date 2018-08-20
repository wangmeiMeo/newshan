<template>
  <view class='userinfo'>
    <img src='http://f.cdn.cloudolphin.com/regist.jpg'>
    <button v-if="canIUse" class="btn" hover-class='bg_color' open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">授权用户手机号</button>
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
    getPhoneNumber(e) {
      console.log(e);
      if (e.mp.detail.errMsg == "getPhoneNumber:ok") {
        //用户按了允许授权按钮
        console.log("用户按了允许授权按钮");
        let encryptedData = e.mp.detail.encryptedData;
        let iv = e.mp.detail.iv;
        Common.getUserPhone(encryptedData, iv).then(res => {
          console.log(res);
          // //code:0 成功
          if (res.data.code == 0) {
            //首次获得unionId
            wx.setStorage({
              key: "phone",
              data: res.data.phone
            });
            console.log(res.data.phone);
            //如果此处用户退出程序
            wx.redirectTo({
              url: "/pages/searchdoor/main?code=28"
            });
          }
        });
      } else if (e.mp.detail.errMsg == "getPhoneNumber:fail user deny") {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
        wx.showToast({
          title: "请授权手机号", //标题
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

