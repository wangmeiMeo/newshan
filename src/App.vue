<script>
import "mp-weui/lib/style.css";
App({
  onLaunch: function(options) {
    var extraData = null;
  },
  onShow: function(options) {
    console.log(options.referrerInfo);
    console.log(options);
    if (options.referrerInfo.extraData == undefined) {
    } else if (options.referrerInfo.extraData.dest == "mycards") {
      wx.navigateTo({
        url: "/pages/member_center/member_coupon/member_coupon"
      });
    }
  }
});
export default {
  onLaunch() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    console.log("app created and cache logs by setStorageSync");
    console.log(this.$root.$mp.appOptions);
    var sceneAddress = this.$root.$mp.appOptions.scene;
    //场景值设置全局变量
    this.globalData.sceneAddress = sceneAddress;
    console.log(this.globalData.sceneAddress);
  },

  mouted() {}
};
</script>

<style  lang ="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: "Courier New", Courier, monospace;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
