import Vue from 'vue'
import App from './App'

import global_ from './components/Global'
Vue.prototype.globalData = global_

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/coupon/main', 'pages/qrcode-tool-page/main', 'pages/use_coupon/main', 'pages/shanshanbianli/main', 'pages/searchdoor/main', 'pages/getuserinfo/main', 'pages/getphonenumber/main', 'pages/my/main', 'pages/mycoupons/main', 'pages/coupondetail/main', 'pages/member_center/member_coupon/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '珊珊JustGo',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      "selectedColor": "#21aee6",
      "color": '#dbdbdb',
      "list": [{
          pagePath: "pages/index/main",
          iconPath: "/static/images/indexicon01.png",
          selectedIconPath: "/static/images/indexicon.png",
          text: "首页"
        },
        {
          pagePath: "pages/coupon/main",
          iconPath: "/static/images/coupon01.png",
          selectedIconPath: "/static/images/couponicon.png",
          text: "优惠券"
        },
        {
          pagePath: "pages/my/main",
          iconPath: "/static/images/myicon01.png",
          selectedIconPath: "/static/images/myicon.png",
          text: "个人中心"
        }
      ],
    }

  }
}
