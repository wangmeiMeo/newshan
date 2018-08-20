<template>
  <div class="contain">
    <div class="header">
      <div class="door">
        <Doors :code="code" :storename1="storename1" :flag="flag" :storeName="storeName"></Doors>
      </div>
      <Banner :banner="banner"></Banner>
    </div>
    <qrcode-entry @click="gotoToolPage" class="qrcode-entry" :config="qrcodeConfig"></qrcode-entry>
    <!-- <Navbar></Navbar> -->
    <div style="margin-top:20rpx;">
      <Webank></Webank>
    </div>
    <!-- <Wemember></Wemember> -->
    <Indexcoupon :activities="activities"></Indexcoupon>
  </div>
</template>

<script>
import Common from "@/utils/common.js";
import config from "@/utils/config.js";
import Banner from "@/components/banner.vue";
import Doors from "@/components/doors.vue";
import Navbar from "@/components/navbar.vue";
import Wemember from "@/components/wemember.vue";
import Indexcoupon from "@/components/indexcoupon.vue";
import Webank from "@/components/webank.vue";
import globalData from "@/components/Global";

export default {
  data() {
    return {
      banner: [],
      storeName: "",
      storename1: "",
      activities: "",
      code: "",
      flag: "",
      qrcodeConfig: ""
    };
  },
  components: {
    Banner,
    Doors,
    Navbar,
    Wemember,
    Indexcoupon,
    Webank
  },
  methods: {
    /**
     * 点击进入码工具
     */
    gotoToolPage: function(e) {
      wx.navigateTo({
        url: "../qrcode-tool-page/main"
      });
    }
  },
  onLoad() {
    wx.showLoading({
      title: "加载中"
    });
    setTimeout(function() {
      wx.hideLoading();
    }, 2500);
  },
  created() {
    var that = this;
    Common.getImgAddress().then(res => {
      console.log(res.data.img);
      console.log("00000------------wangmeimeimie--0------=-------")
      that.banner = res.data.img;
      console.log(that.banner);
    });
  },
  onShow() {
    var that = this;
    that.storename1 = that.globalData.storename;
    console.log(that.storename1);
    console.log("0000------------------0000");
    //获取banner

    //选择门店点击进去返回标识
    that.flag = that.globalData.flag;
    //获取码参数
    var scene = that.$root.$mp.appOptions.query.scene;

    that.globalData.scene = scene;
    //登陆获取openid
    Common.wxLogin().then(res => {
      var code = res.code;
      console.log(res);
      console.log(that.globalData.scene);
      console.log(that.globalData.sceneAddress);
      //scene 码参数
      //sceneAddress 场景值
      //获得token
      Common.userLogin(
        code,
        that.globalData.scene,
        that.globalData.sceneAddress
      )
        .then(res => {
          console.log(res);
          //code 0 成功
          console.log("-------------huahuahuahu---------------");
          //首次获取openId
          //首次 获取 token
          that.globalData.openId = res.data.openId;
          that.globalData.token = res.data.token;
          //将获取的token存到本地
          wx.setStorage({
            key: "token",
            data: res.data.token
          });

          wx.setStorage({
            key: "openId",
            data: res.data.openId
          });
          //跳转到个人信息授权页面
        })
        .then(res => {
          console.log(that.globalData.token);
          //首页获取优惠券
          let limit = 0;
          Common.activities(limit).then(res => {
            console.log(res);
            that.activities = res.data.activities;
            for (let i = 0; i < that.activities.length; i++) {
              console.log(that.activities[i].begin_date);
              console.log(that.activities[i].end_date);
              //时间格式的转换
              that.activities[i].begin_date = that.activities[i].begin_date
                .substr(0, 10)
                .replace(/-/g, ".");
              that.activities[i].end_date = that.activities[i].end_date
                .substr(0, 10)
                .replace(/-/g, ".");
            }
          });
        })
        .then(res => {
          Common.isOldUser().then(res => {
            console.log(res);
            console.log(res.data.code);
            that.code = res.data.code;
            //是新用户
            if (res.data.code == 31) {
              wx.redirectTo({
                url: "/pages/getuserinfo/main"
              });
            } else if (res.data.code == 32) {
              //老用户(各种会员都注册成功的用户)
              wx.setStorage({
                key: "memberId",
                data: res.data.memberId
              });
              wx.setStorage({
                key: "openId",
                data: res.data.openId
              });
              wx.setStorage({
                key: "phone",
                data: res.data.phone
              });
              wx.setStorage({
                key: "unionId",
                data: res.data.unionId
              });
              wx.setStorage({
                key: "memberCode",
                data: res.data.memberCode
              });

              that.storeName = res.data.storeName;
              console.log(res.data.storeName);
              console.log(that.storeName);

              //一次性的设置, 不可设置多次
              //参数设置:
              //floorDisabled: 是否隐藏"楼层"的码工具下拉菜单
              //tenantCode: 微众分配的商户code
              //openId: 当前用户的openId
              //unionId: 当前用户的unionId
              //SCENE_CODE: 当前用户扫的码参数
              //BASE_URL: 测试环境 https://wetailmp.test.webank.com/wetail-wxapp 生产环境 https://wetailmp.webank.com/wetail-wxapp
              //enableRank: 是否展示绩效排名, 这个需要联系我们这边上线绩效之后再开启
              //rankConfig: 跟绩效排名有关的配置
              //{ districtDisabled: 是否显示区排名, cityDisabled: 是否禁用市排名, provinceDisabled: 是否禁用省排名, allDisabled: 是否禁用全国排名}
              console.log(res.data.unionId);
              console.log(res.data.openId);
              console.log(that.globalData.scene);

              if (
                res.data.openId != undefined &&
                res.data.unionId != undefined
              ) {
                that.qrcodeConfig = {
                  floorDisabled: true,
                  tenantCode: "shanshan",
                  openId: res.data.openId,
                  unionId: res.data.unionId,
                  SCENE_CODE: that.globalData.scene,
                  BASE_URL: "https://wetailmp.webank.com/wetail-wxapp",
                  enableRank: true,
                  rankConfig: {
                    districtDisabled: true,
                    cityDisabled: false,
                    provinceDisabled: false,
                    allDisabled: false
                  }
                };
              }
            } else if (res.data.code == 29) {
              wx.setStorage({
                key: "openId",
                data: res.data.openId
              });
              wx.setStorage({
                key: "unionId",
                data: res.data.unionId
              });
              //是新用户，跳转到授权手机号页
              wx.redirectTo({
                url: "./../getphonenumber/main"
              });
            } else if (res.data.code == 28) {
              wx.setStorage({
                key: "openId",
                data: res.data.openId
              });
              wx.setStorage({
                key: "phone",
                data: res.data.phone
              });
              wx.setStorage({
                key: "unionId",
                data: res.data.unionId
              });
              //是新用户，跳转到注册珊珊便利会员！
              wx.redirectTo({
                url: `/pages/searchdoor/main?code=${res.data.code}`
              });
            } else if (res.data.code == 27) {
              wx.setStorage({
                key: "openId",
                data: res.data.openId
              });
              wx.setStorage({
                key: "phone",
                data: res.data.phone
              });
              wx.setStorage({
                key: "unionId",
                data: res.data.unionId
              });

              //是珊珊会员，跳转到微众轻会员
              wx.redirectTo({
                url: `/pages/searchdoor/main?code=${res.data.code}`
              });
            }
          });
        });
    });
  }
};
</script>

<style  lang ="scss">
.header {
  position: relative;
  .door {
    width: 100%;
  }
}

.contain {
  padding-bottom: 62rpx;
}

.qrcode-entry {
  position: absolute;
  z-index: 999;
  margin-left: auto;
  margin-right: auto;
  left: calc(50% - 73rpx);
}
</style>
