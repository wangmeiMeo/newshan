global.webpackJsonp([13],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Global__ = __webpack_require__(3);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.globalData = __WEBPACK_IMPORTED_MODULE_2__components_Global__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/coupon/main', 'pages/qrcode-tool-page/main', 'pages/use_coupon/main', 'pages/shanshanbianli/main', 'pages/searchdoor/main', 'pages/getuserinfo/main', 'pages/getphonenumber/main', 'pages/my/main', 'pages/mycoupons/main', 'pages/coupondetail/main', 'pages/member_center/member_coupon/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '珊珊JustGo',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "selectedColor": "#21aee6",
      "color": '#dbdbdb',
      "list": [{
        pagePath: "pages/index/main",
        iconPath: "/static/images/indexicon01.png",
        selectedIconPath: "/static/images/indexicon.png",
        text: "首页"
      }, {
        pagePath: "pages/coupon/main",
        iconPath: "/static/images/coupon01.png",
        selectedIconPath: "/static/images/couponicon.png",
        text: "优惠券"
      }, {
        pagePath: "pages/my/main",
        iconPath: "/static/images/myicon01.png",
        selectedIconPath: "/static/images/myicon.png",
        text: "个人中心"
      }]
    }

  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(12);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f9744fe", Component.options)
  } else {
    hotAPI.reload("data-v-6f9744fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mp_weui_lib_style_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mp_weui_lib_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mp_weui_lib_style_css__);


App({
  onLaunch: function onLaunch(options) {
    var extraData = null;
  },
  onShow: function onShow(options) {
    console.log(options.referrerInfo);
    console.log(options);
    if (options.referrerInfo.extraData == undefined) {} else if (options.referrerInfo.extraData.dest == "mycards") {
      wx.navigateTo({
        url: "/pages/member_center/member_coupon/member_coupon"
      });
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = ({
  onLaunch: function onLaunch() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    console.log("app created and cache logs by setStorageSync");
    console.log(this.$root.$mp.appOptions);
    var sceneAddress = this.$root.$mp.appOptions.scene;
    //场景值设置全局变量
    this.globalData.sceneAddress = sceneAddress;
    console.log(this.globalData.sceneAddress);
  },
  mouted: function mouted() {}
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[9]);
//# sourceMappingURL=app.js.map