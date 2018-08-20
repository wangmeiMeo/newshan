global.webpackJsonp([0],Array(42).concat([
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(43);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '珊珊JustGo',
    usingComponents: {
      "qrcode-entry": "./../../qrcode-tool/pages/components/qrcode-entry"
    }
  }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d4255eec_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(70);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d4255eec_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d4255eec", Component.options)
  } else {
    hotAPI.reload("data-v-d4255eec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_config_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_banner_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_doors_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_wemember_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_indexcoupon_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_webank_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Global__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
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
    Banner: __WEBPACK_IMPORTED_MODULE_2__components_banner_vue__["a" /* default */],
    Doors: __WEBPACK_IMPORTED_MODULE_3__components_doors_vue__["a" /* default */],
    Navbar: __WEBPACK_IMPORTED_MODULE_4__components_navbar_vue__["a" /* default */],
    Wemember: __WEBPACK_IMPORTED_MODULE_5__components_wemember_vue__["a" /* default */],
    Indexcoupon: __WEBPACK_IMPORTED_MODULE_6__components_indexcoupon_vue__["a" /* default */],
    Webank: __WEBPACK_IMPORTED_MODULE_7__components_webank_vue__["a" /* default */]
  },
  methods: {
    /**
     * 点击进入码工具
     */
    gotoToolPage: function gotoToolPage(e) {
      wx.navigateTo({
        url: "../qrcode-tool-page/main"
      });
    }
  },
  onLoad: function onLoad() {
    wx.showLoading({
      title: "加载中"
    });
    setTimeout(function () {
      wx.hideLoading();
    }, 2500);
  },
  created: function created() {
    var that = this;
    __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].getImgAddress().then(function (res) {
      console.log(res.data.img);
      console.log("00000------------wangmeimeimie--0------=-------");
      that.banner = res.data.img;
      console.log(that.banner);
    });
  },
  onShow: function onShow() {
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
    __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].wxLogin().then(function (res) {
      var code = res.code;
      console.log(res);
      console.log(that.globalData.scene);
      console.log(that.globalData.sceneAddress);
      //scene 码参数
      //sceneAddress 场景值
      //获得token
      __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].userLogin(code, that.globalData.scene, that.globalData.sceneAddress).then(function (res) {
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
      }).then(function (res) {
        console.log(that.globalData.token);
        //首页获取优惠券
        var limit = 0;
        __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].activities(limit).then(function (res) {
          console.log(res);
          that.activities = res.data.activities;
          for (var i = 0; i < that.activities.length; i++) {
            console.log(that.activities[i].begin_date);
            console.log(that.activities[i].end_date);
            //时间格式的转换
            that.activities[i].begin_date = that.activities[i].begin_date.substr(0, 10).replace(/-/g, ".");
            that.activities[i].end_date = that.activities[i].end_date.substr(0, 10).replace(/-/g, ".");
          }
        });
      }).then(function (res) {
        __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].isOldUser().then(function (res) {
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

            if (res.data.openId != undefined && res.data.unionId != undefined) {
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
              url: "/pages/searchdoor/main?code=" + res.data.code
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
              url: "/pages/searchdoor/main?code=" + res.data.code
            });
          }
        });
      });
    });
  }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_banner_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9c234876_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_banner_vue__ = __webpack_require__(49);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_banner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9c234876_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_banner_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\banner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] banner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9c234876", Component.options)
  } else {
    hotAPI.reload("data-v-9c234876", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_config_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Global__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_common_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["banner"],
  data: function data() {
    return {
      afterColor: "#f00",
      beforeColor: "#000",
      AppId: __WEBPACK_IMPORTED_MODULE_0__utils_config_js___default.a.webank.AppId,
      AppVersion: __WEBPACK_IMPORTED_MODULE_0__utils_config_js___default.a.webank.AppVersion,
      extraData: {
        webankAppId: __WEBPACK_IMPORTED_MODULE_0__utils_config_js___default.a.webank.webankAppId,
        unionId: "",
        memberId: "",
        phone: "",
        openId: "",
        dest: ""
      }
    };
  },
  created: function created() {
    var that = this;
    //获取memberId
    wx.login({
      success: function success(res) {
        console.log(res.code);
        console.log("0000011--------------------------------------------000000111");
        __WEBPACK_IMPORTED_MODULE_2__utils_common_js__["a" /* default */].getUserMessage(res.code).then(function (res) {
          console.log(res.data.openId);
          console.log(res.data.unionId);
          console.log(res.data.memberId);
          console.log(res.data.phone);

          that.extraData.openId = res.data.openId;
          that.extraData.unionId = res.data.unionId;
          that.extraData.memberId = res.data.memberId;
          that.extraData.phone = res.data.phone;
        }, function (err) {
          console.log(err);
          wx.showToast({
            title: "获取信息失败",
            icon: "none",
            duration: 2000,
            mask: false,
            success: function success() {},
            fail: function fail() {},
            complete: function complete() {}
          });
        });
      }
    });
  },

  methods: {
    gotoflag: function gotoflag(flag, event) {
      console.log(flag);
      if (flag == "discount") {
        wx.switchTab({
          url: "./../coupon/main"
        });
      } else if (flag == "activity") {
        wx.navigateTo({
          url: "./../shanshanbianli/main?detail=" + event.mp.currentTarget.dataset.val
        });
      }
    }
  }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-color": "#b9a9a1",
      "indicator-active-color": "#fff",
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "5000",
      "circular": "",
      "duration": "1000"
    }
  }, _vm._l((_vm.banner), function(item, index) {
    return _c('block', {
      key: index,
      attrs: {
        "index": index
      }
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "data-val": item.detail,
        "src": item.address,
        "mode": "aspectFill",
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.gotoflag(item.sign, $event)
        }
      }
    }), _vm._v(" "), (_vm.extraData.webankAppId != '' && _vm.extraData.webankAppId != 'undefined' && _vm.extraData.unionId != '' && _vm.extraData.unionId != 'undefined' && _vm.extraData.phone != '' && _vm.extraData.phone != 'undefined' && _vm.extraData.openId != '' && _vm.extraData.openId != 'undefined' && _vm.extraData.memberId != '' && _vm.extraData.memberId != 'undefined' && item.sign == 'wemember') ? _c('navigator', {
      staticClass: "wemember",
      attrs: {
        "target": "miniProgram",
        "open-type": "navigate",
        "app-id": _vm.AppId,
        "extra-data": _vm.extraData,
        "version": _vm.AppVersion
      }
    }) : _vm._e()], 1)], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9c234876", esExports)
  }
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_doors_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7339d308_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_doors_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(51)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_doors_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7339d308_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_doors_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\doors.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] doors.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7339d308", Component.options)
  } else {
    hotAPI.reload("data-v-7339d308", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["storeName", "code", "storename1", "flag"],
  data: function data() {
    return {
      doorlogo: "./../../static/images/doorlogo.png",
      doorurl: "./../../static/images/search.png"
    };
  },

  methods: {
    gotoSearch: function gotoSearch() {
      wx.navigateTo({
        url: "../searchdoor/main?code=" + this.code
      });
    }
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doors"
  }, [_c('img', {
    staticClass: "doorlogo",
    attrs: {
      "src": _vm.doorlogo,
      "alt": ""
    }
  }), (_vm.flag == 1) ? _c('span', [_vm._v(_vm._s(_vm.storename1))]) : _c('span', [_vm._v(_vm._s(_vm.storeName))]), _vm._v(" "), _c('div', {
    staticClass: "search",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.gotoSearch
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.doorurl,
      "alt": ""
    }
  }), _vm._v("搜索门店")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7339d308", esExports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_navbar_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3a6a32ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_navbar_vue__ = __webpack_require__(57);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3a6a32ae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_navbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3a6a32ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_navbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\navbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a6a32ae", Component.options)
  } else {
    hotAPI.reload("data-v-3a6a32ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      navbar: [{
        src: "./../../static/images/img001.jpg",
        title: "矿泉水"
      }, {
        src: "./../../static/images/img002.jpg",
        title: "日常用品"
      }, {
        src: "./../../static/images/img001.jpg",
        title: "工具"
      }, {
        src: "./../../static/images/img001.jpg",
        title: "日常用品"
      }, {
        src: "./../../static/images/img001.jpg",
        title: "工具"
      }, {
        src: "./../../static/images/img001.jpg",
        title: "工具"
      }, {
        src: "./../../static/images/img001.jpg",
        title: "工具"
      }, {
        src: "./../../static/images/img001.jpg",
        title: "工具"
      }]
    };
  }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "navbar clearfix"
  }, _vm._l((_vm.navbar), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('img', {
      attrs: {
        "src": item.src,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))])], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a6a32ae", esExports)
  }
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_wemember_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08626941_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_wemember_vue__ = __webpack_require__(61);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08626941"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_wemember_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08626941_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_wemember_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\wemember.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wemember.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08626941", Component.options)
  } else {
    hotAPI.reload("data-v-08626941", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            card: "./../../static/images/card.jpg"
        };
    }
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('img', {
    attrs: {
      "src": _vm.card,
      "alt": ""
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-08626941", esExports)
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_indexcoupon_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4bc40aaf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_indexcoupon_vue__ = __webpack_require__(65);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4bc40aaf"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_indexcoupon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4bc40aaf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_indexcoupon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\indexcoupon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] indexcoupon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bc40aaf", Component.options)
  } else {
    hotAPI.reload("data-v-4bc40aaf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_common_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["activities"],
  data: function data() {
    return {
      // 自定义canvas缩放比例
      widths: "",
      heights: "",
      width: 87,
      height: 101,
      r: 43.5, //水平位置
      r2: 33, //垂直位置
      r1: 24, //半径,
      ricolor: "#9bafe7",
      couponimg: "./../../static/images/conpon.jpg",
      url: "./../../static/images/coulogo_01.jpg"
    };
  },

  methods: {
    receiveCoupon: function receiveCoupon(e) {
      console.log(e.mp.currentTarget.dataset.activityid);
      var activityid = e.mp.currentTarget.dataset.activityid;
      __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].couponAcquire(activityid).then(function (res) {
        console.log(res);
        if (res.data.success == true) {
          wx.showToast({
            title: "领取成功",
            icon: "success",
            duration: 1300
          });
        }
      });
    },
    gotoCoupon: function gotoCoupon() {
      wx.switchTab({
        url: "./../coupon/main"
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "coupon"
  }, [_c('img', {
    staticClass: "couponimg",
    attrs: {
      "src": _vm.couponimg,
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.gotoCoupon
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "coupons"
  }, _vm._l((_vm.activities), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "clearfix"
    }, [_c('img', {
      staticClass: "imgle fl",
      attrs: {
        "src": _vm.url,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "letitle"
    }, [_c('img', {
      attrs: {
        "src": "../../static/images/letitle.png"
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.coupon_name))])]), _vm._v(" "), _c('div', {
      staticClass: "content fl"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.coupon_type))]), _vm._v(" "), _c('p', {
      staticClass: "money",
      style: ({
        color: _vm.ricolor
      })
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.face_value))])]), _vm._v(" "), _c('p', {
      staticClass: "rule"
    }, [_vm._v(_vm._s(item.use_rule))]), _vm._v(" "), _c('p', {
      staticClass: "rule rule1"
    }, [_vm._v("有效期:" + _vm._s(item.begin_date) + "--" + _vm._s(item.end_date))])], 1), _vm._v(" "), _c('div', {
      staticClass: "fr ribg",
      style: ({
        background: _vm.ricolor
      })
    }, [_c('div', {
      staticClass: "sj",
      style: ({
        'background-image': 'linear-gradient(-45deg,' + _vm.ricolor + ' 25%,transparent 25%, transparent),' +
          'linear-gradient(-135deg,' + _vm.ricolor + ' 25%, transparent 25%, transparent)'
      })
    }), _vm._v(" "), _c('view', {
      staticClass: "progress_box",
      attrs: {
        "data-activityId": item.activity_id,
        "eventid": '1-' + index
      },
      on: {
        "click": _vm.receiveCoupon
      }
    }, [_c('view', {
      staticClass: "progress_text"
    }, [_c('text', [_vm._v("立即")]), _vm._v(" "), _c('text', [_vm._v("领取")])])])])], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4bc40aaf", esExports)
  }
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_webank_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e47f88ba_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_webank_vue__ = __webpack_require__(69);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_webank_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e47f88ba_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_webank_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\webank.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] webank.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e47f88ba", Component.options)
  } else {
    hotAPI.reload("data-v-e47f88ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_config_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Global__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      webankurl: "./../../static/images/we.jpg",
      webankurl01: "http://f.cdn.cloudolphin.com/vippay.png",
      webankurl02: "./../../static/images/ritop.jpg",
      webankurl03: "./../../static/images/ribot.jpg",
      AppId: __WEBPACK_IMPORTED_MODULE_0__utils_config_js___default.a.webank.AppId,
      AppVersion: __WEBPACK_IMPORTED_MODULE_0__utils_config_js___default.a.webank.AppVersion,
      extraData: {
        webankAppId: __WEBPACK_IMPORTED_MODULE_0__utils_config_js___default.a.webank.webankAppId,
        unionId: "",
        memberId: "",
        phone: "",
        openId: "",
        dest: ""
      }
    };
  },


  methods: {
    wm: function wm() {
      console.log(this.extraData);
    }
  },

  created: function created() {
    var that = this;
    //获取memberId
    // 获得
    wx.login({
      success: function success(res) {
        console.log(res.code);
        __WEBPACK_IMPORTED_MODULE_1__utils_common_js__["a" /* default */].getUserMessage(res.code).then(function (res) {
          console.log(res);
          console.log("wangmeimeimeimiemiemiemiemiemiemeimeimeimiemiemiemiemimemiemiemeimeimiemimieemiemie");
          console.log(res.data.openId);
          console.log(res.data.unionId);
          console.log(res.data.memberId);
          console.log(res.data.phone);

          that.extraData.openId = res.data.openId;
          that.extraData.unionId = res.data.unionId;
          that.extraData.memberId = res.data.memberId;
          that.extraData.phone = res.data.phone;
        }, function (err) {
          console.log(err);
          wx.showToast({
            title: "获取信息失败",
            icon: "none",
            duration: 2000,
            mask: false,
            success: function success() {},
            fail: function fail() {},
            complete: function complete() {}
          });
        });
      }
    });
  }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "webank"
  }, [_c('img', {
    staticClass: "img000",
    attrs: {
      "src": _vm.webankurl,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "clearfix imgs"
  }, [(_vm.extraData.webankAppId != '' && _vm.extraData.webankAppId != 'undefined' && _vm.extraData.unionId != '' && _vm.extraData.unionId != 'undefined' && _vm.extraData.phone != '' && _vm.extraData.phone != 'undefined' && _vm.extraData.openId != '' && _vm.extraData.openId != 'undefined' && _vm.extraData.memberId != '' && _vm.extraData.memberId != 'undefined') ? _c('navigator', {
    attrs: {
      "target": "miniProgram",
      "open-type": "navigate",
      "app-id": _vm.AppId,
      "extra-data": _vm.extraData,
      "version": _vm.AppVersion,
      "eventid": '1'
    },
    on: {
      "click": _vm.wm
    }
  }, [_c('img', {
    staticClass: "fl",
    attrs: {
      "src": _vm.webankurl01,
      "alt": ""
    }
  })]) : _c('navigator', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.wm
    }
  }, [_c('img', {
    staticClass: "fl",
    attrs: {
      "src": _vm.webankurl01,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('img', {
    staticClass: "ritop",
    attrs: {
      "src": _vm.webankurl02,
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.webankurl03,
      "alt": ""
    }
  })])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e47f88ba", esExports)
  }
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "contain"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "door"
  }, [_c('Doors', {
    attrs: {
      "code": _vm.code,
      "storename1": _vm.storename1,
      "flag": _vm.flag,
      "storeName": _vm.storeName,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('Banner', {
    attrs: {
      "banner": _vm.banner,
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('qrcode-entry', {
    staticClass: "qrcode-entry",
    attrs: {
      "config": _vm.qrcodeConfig,
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.gotoToolPage
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "20rpx"
    }
  }, [_c('Webank', {
    attrs: {
      "mpcomid": '3'
    }
  })], 1), _vm._v(" "), _c('Indexcoupon', {
    attrs: {
      "activities": _vm.activities,
      "mpcomid": '4'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d4255eec", esExports)
  }
}

/***/ })
]),[42]);
//# sourceMappingURL=main.js.map