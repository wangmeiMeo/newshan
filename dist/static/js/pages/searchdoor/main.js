global.webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Doorname', {
    attrs: {
      "citylist": _vm.citylist,
      "code": this.$mp.query.code,
      "closedstoreA": _vm.closedstoreA,
      "mpcomid": '0'
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
     require("vue-hot-reload-api").rerender("data-v-59b71818", esExports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(93);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '门店列表'
  }
});

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_59b71818_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(100);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-59b71818"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_59b71818_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\searchdoor\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59b71818", Component.options)
  } else {
    hotAPI.reload("data-v-59b71818", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_doorname__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_common__ = __webpack_require__(1);
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      citylist: "",
      storeId: "",
      mylatitude: "",
      mylongitude: "",
      closedstore: [],
      closedstoreA: { storeName: "未授权地理位置" },
      location: ""
    };
  },

  components: { Doorname: __WEBPACK_IMPORTED_MODULE_0__components_doorname__["a" /* default */] },
  methods: {},
  onShow: function onShow() {
    // 加载门店列表
    var that = this;
    // 获取用户位置的经纬度
    //获取首页传过来的code
    console.log(that.$mp.query.code);
    console.log("0000000------------------that----------------------00000000");
    __WEBPACK_IMPORTED_MODULE_1__utils_common_js__["a" /* default */].wxgetLocation().then(function (res) {
      console.log(res);
      that.location = res;
      if (res.latitude != undefined && res.longitude != undefined) {
        __WEBPACK_IMPORTED_MODULE_1__utils_common_js__["a" /* default */].findStoreList().then(function (res) {
          console.log(res);
          that.citylist = res.data;
          for (var key in res.data) {
            var map = new Object();
            for (var i = 0; i < res.data[key].length; i++) {
              map.content = res.data[key][i];
              that.closedstore.push(map.content);
            }
            that.closedstore.push(map.content);
          }
          that.closedstore = __WEBPACK_IMPORTED_MODULE_2__utils_index_js__["a" /* default */].distanced_stores(that.location, that.closedstore);
          that.closedstore = that.closedstore.sort(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["a" /* default */].compare("distance"));
          console.log(that.closedstore[0]);
          that.closedstoreA = that.closedstore[0];
          console.log(that.closedstoreA);
        });
      }
    }, function (err) {
      console.log(err);
      if (err.msg == "getLocation:fail auth deny") ;
      __WEBPACK_IMPORTED_MODULE_1__utils_common_js__["a" /* default */].findStoreList().then(function (res) {
        that.citylist = res.data;
      });
    });
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_doorname_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_11cdaddc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_doorname_vue__ = __webpack_require__(99);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-11cdaddc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_doorname_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_11cdaddc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_doorname_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\doorname.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] doorname.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11cdaddc", Component.options)
  } else {
    hotAPI.reload("data-v-11cdaddc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Global__ = __webpack_require__(3);
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
  props: ["citylist", "closedstoreA", "code"],
  data: function data() {
    return {
      opacity: ".6",
      //下面是字母排序
      letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      cityListId: "",
      citySel: "全国",
      locateCity: "",
      storecode: "",
      storename: ""
    };
  },

  watch: {
    code: function code(val, oldVal) {
      console.log(val);
    }
  },
  methods: {
    //点击城市
    cityTap: function cityTap(e) {
      var that = this;
      console.log(that.code);
      that.storecode = e.mp.currentTarget.dataset.storecode;
      that.storename = e.mp.currentTarget.dataset.val;
      that.$emit("storecodes", that.storecode);

      //如果微众会员注册失败,但是注册珊珊会员成功
      if (that.code == 27) {
        __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].webankLogin().then(function (res) {
          console.log(res);
          if (res.data.code == 0) {
            wx.showToast({
              title: "注册成功",
              icon: "success",
              duration: 1200,
              mask: false,
              success: function success() {
                console.log(that.storename);
                wx.switchTab({
                  url: "../index/main?storename=" + that.storename
                });
              },
              fail: function fail() {},
              complete: function complete() {}
            });
          } else if (res.data.code == 1) {
            wx.showToast({
              title: res.data.msg,
              icon: "none",
              duration: 1800,
              mask: false
            });
          }
        });
      } else if (that.code == 28) {
        //注册珊珊会员
        console.log(that.storecode);
        console.log("111111111----------------------11111111");
        __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].regist(that.storecode).then(function (res) {
          console.log(res);
          if (res.data.code == 0) {
            wx.setStorage({
              key: "memberId",
              data: res.data.memberId
            });
            wx.setStorage({
              key: "memberCode",
              data: res.data.memberCode
            });
            //注册微众会员
            __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].webankLogin().then(function (res) {
              console.log(res);
              if (res.data.code == 0) {
                wx.showToast({
                  title: "注册成功",
                  icon: "success",
                  duration: 1200,
                  mask: false,
                  success: function success() {
                    wx.switchTab({
                      url: "../index/main"
                    });
                    that.globalData.storename = that.storename;
                  },
                  fail: function fail() {},
                  complete: function complete() {}
                });
              } else if (res.data.code == 1) {
                wx.showToast({
                  title: res.data.msg,
                  icon: "none",
                  duration: 1800,
                  mask: false
                });
              }
            });
          }
        });
      } else if (that.code == 32) {
        //如果是老用户，无需注册
        that.globalData.storename = that.storename;
        that.globalData.flag = "1";
        console.log(that.globalData.storename);
        console.log(that.globalData.flag);
        wx.switchTab({
          url: "../index/main"
        });
      }
    },

    //点击城市字母
    letterTap: function letterTap(e) {
      console.log(e);
      var Item = e.mp.currentTarget.dataset.item;
      console.log(Item);
      this.cityListId = Item;
      console.log(this.cityListId);
    }
  }
});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "city_box"
  }, [_c('div', {
    staticClass: "city_left"
  }, [_c('scroll-view', {
    style: ({
      'width': '100%',
      'height': '100%'
    }),
    attrs: {
      "scroll-y": true,
      "scroll-with-animation": "true",
      "scroll-into-view": _vm.cityListId
    }
  }, [_c('div', {
    staticClass: "national",
    attrs: {
      "data-types": _vm.national,
      "eventid": '0'
    },
    on: {
      "click": _vm.cityTap
    }
  }, [_vm._v("请选择门店")]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "city_name",
    staticStyle: {
      "color": "#33b9ff",
      "border": "0",
      "height": "20px",
      "line-height": "20px"
    }
  }, [_vm._v("最近门店:")]), _vm._v(" "), (_vm.closedstoreA == undefined || _vm.closedstoreA.storeName == '未授权地理位置' || _vm.closedstoreA.storeName == '') ? _c('span', {
    staticClass: "city_name",
    staticStyle: {
      "border-bottom": "2px solid #33b9ff",
      "height": "50px",
      "line-height": "50px"
    }
  }, [_vm._v("未授权地理位置")]) : _c('span', {
    staticClass: "city_name",
    staticStyle: {
      "border-bottom": "2px solid #33b9ff",
      "height": "50px",
      "line-height": "50px"
    },
    attrs: {
      "data-val": _vm.closedstoreA.storeName,
      "data-storecode": _vm.closedstoreA.storeCode,
      "eventid": '1'
    },
    on: {
      "click": _vm.cityTap
    }
  }, [_vm._v(_vm._s(_vm.closedstoreA.storeName))])]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "city_name",
    staticStyle: {
      "color": "#33b9ff",
      "border": "0",
      "height": "50px",
      "line-height": "50px"
    }
  }, [_vm._v("所有门店:")])]), _vm._v(" "), _c('div', {
    staticClass: "city_list_box"
  }, _vm._l((_vm.citylist), function(letterItem, key, index2) {
    return _c('div', {
      key: index2
    }, [_c('div', {
      staticClass: "city_first_letter",
      attrs: {
        "id": key
      }
    }, [_vm._v(_vm._s(key))]), _vm._v(" "), _vm._l((letterItem), function(item, index) {
      return _c('span', {
        key: index,
        staticClass: "city_name",
        attrs: {
          "data-types": _vm.list,
          "data-index": index,
          "hover-class": _vm.opacity,
          "data-val": item.storeName,
          "data-storecode": item.storeCode,
          "eventid": '2-' + key + '-' + index
        },
        on: {
          "click": _vm.cityTap
        }
      }, [_vm._v(_vm._s(item.storeName))])
    })], 2)
  }))])], 1), _vm._v(" "), _c('div', {
    staticClass: "city_right"
  }, _vm._l((_vm.letter), function(item, index1) {
    return _c('span', {
      key: index1,
      staticClass: "letter_item",
      attrs: {
        "data-item": item,
        "eventid": '3-' + index1
      },
      on: {
        "click": _vm.letterTap
      }
    }, [_vm._v(_vm._s(item))])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-11cdaddc", esExports)
  }
}

/***/ })

},[92]);
//# sourceMappingURL=main.js.map