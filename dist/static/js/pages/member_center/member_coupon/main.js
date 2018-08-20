global.webpackJsonp([8],{

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(78);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '我的优惠券'
  }
});

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8e3aa6a4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(81);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(79)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8e3aa6a4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8e3aa6a4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\member_center\\member_coupon\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e3aa6a4", Component.options)
  } else {
    hotAPI.reload("data-v-8e3aa6a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 79:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 80:
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
  data: function data() {
    return {
      couponimg: "./../../../../static/images/conpon.jpg",
      url: __webpack_require__(8),
      ricolor: "#9bafe7",
      pagenum: 0,
      iconconpon: __webpack_require__(6),
      display: "",
      couponlength: "",
      coupons: [],
      loadmore1: "^_^点击加载更多^_^",
      flag: "nosucc"
    };
  },

  methods: {
    //加载更多
    loadmore2: function loadmore2() {
      var pagenum = this.pagenum;
      pagenum++;
      this.pagenum = pagenum;
      console.log(this.pagenum);
      this.loadmore();
    },

    loadmore: function loadmore() {
      var that = this;
      var pagenum1 = this.pagenum;
      console.log(pagenum1);
      // if (that.flag != "succ") {
      __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].query(pagenum1).then(function (res) {
        //判断页面上是否显示该页面没有卡券的图标
        if (res.data.total != 0) {
          //第一页，默认
          if (pagenum1 == 0) {
            that.coupons = res.data.coupons;
          } else if (that.coupons.length < res.data.total) {
            //点击加载更多
            that.coupons = that.coupons.concat(res.data.coupons);
            console.log(that.coupons.length);
            console.log(that.coupons);
            wx.showToast({
              title: "加载中^_^",
              icon: "loading",
              duration: 1500
            });
          } else if (that.coupons.length == res.data.total) {
            that.loadmore1 = "^_^已经加载完成喽^_^";
            that.flag = "succ";
            that.pagenum = 0;
          }

          for (var i = 0; i < that.coupons.length; i++) {
            console.log(that.coupons.length);
            that.coupons[i].begin_date = that.coupons[i].begin_date.substr(0, 10).replace(/-/g, ".");
            that.coupons[i].end_date = that.coupons[i].end_date.substr(0, 10).replace(/-/g, ".");
          }
        } else {
          that.coupons = "undefined";
        }
      });
      // }
    },
    //立即使用
    fastuse: function fastuse(e) {
      console.log(e.mp.currentTarget.dataset.code);
      wx.navigateTo({
        url: "/pages/use_coupon/main?code=" + e.mp.currentTarget.dataset.code
      });
    },
    gotodetail: function gotodetail(e) {
      wx.navigateTo({
        url: "/pages/coupondetail/main?code=" + e.mp.currentTarget.dataset.code
      });
    }
  },
  onShow: function onShow() {
    //请求优惠券
    wx.showLoading({
      title: "加载中"
    });
    setTimeout(function () {
      wx.hideLoading();
    }, 2000);
    this.loadmore();
    this.flag = "nosucc";
    this.loadmore1 = "^_^点击加载更多^_^";
  }
});

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "coupon"
  }, [(_vm.coupons == 'undefined' || _vm.coupons.length == 0) ? _c('div', [_c('img', {
    staticClass: "couponicon",
    attrs: {
      "src": _vm.iconconpon,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "sp1"
  }, [_vm._v("^_^没有更多优惠券o_o")])]) : _c('view', {
    staticClass: "coupons"
  }, _vm._l((_vm.coupons), function(item, index) {
    return _c('view', {
      key: index,
      staticClass: "coupon-lists"
    }, [_c('img', {
      staticClass: "coupon-logos",
      attrs: {
        "src": "./../../../../static/images/logos1.png"
      }
    }), _vm._v(" "), _c('view', {
      staticClass: "coupon-teltes"
    }, [_c('view', {
      staticClass: "coupon-shows"
    }, [_c('view', {
      staticClass: "coupon-left",
      attrs: {
        "data-code": item.code,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.gotodetail
      }
    }, [_c('view', {
      staticClass: "left-money"
    }, [_c('text', [_vm._v(_vm._s(item.type))])]), _vm._v(" "), _c('view', {
      staticClass: "left-telte"
    }, [_c('text', [_vm._v(_vm._s(item.use_rule))])])]), _vm._v(" "), _c('view', {
      staticClass: "coupon-right",
      attrs: {
        "data-code": item.code,
        "eventid": '1-' + index
      },
      on: {
        "click": _vm.fastuse
      }
    }, [_c('text', {
      staticClass: "right-money"
    }, [_vm._v("¥")]), _vm._v(" "), _c('text', {
      staticClass: "right-nums"
    }, [_vm._v(_vm._s(item.face_value))])])])]), _vm._v(" "), _c('view', {
      staticClass: "time"
    }, [_vm._v("使用期限 : " + _vm._s(item.begin_date) + "--" + _vm._s(item.end_date))])])
  })), _vm._v(" "), (_vm.flag == 'nosucc') ? _c('p', {
    staticClass: "loadmore",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.loadmore2
    }
  }, [(_vm.coupons == 'undefined' || _vm.coupons.length == 0) ? _c('span') : _c('span', [_vm._v(_vm._s(_vm.loadmore1))])]) : _c('p', {
    staticClass: "loadmore"
  }, [(_vm.coupons == 'undefined' || _vm.coupons.length == 0) ? _c('span') : _c('span', [_vm._v(_vm._s(_vm.loadmore1))])])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8e3aa6a4", esExports)
  }
}

/***/ })

},[77]);
//# sourceMappingURL=main.js.map