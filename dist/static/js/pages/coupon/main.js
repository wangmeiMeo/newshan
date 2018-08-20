global.webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '优惠券'
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_56038c44_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(26);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-56038c44"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_56038c44_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\coupon\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56038c44", Component.options)
  } else {
    hotAPI.reload("data-v-56038c44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_recivecoupon__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_common_js__ = __webpack_require__(1);
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
      page: 1,
      activities: "",
      displays: ''
    };
  },

  components: {
    recivecoupon: __WEBPACK_IMPORTED_MODULE_0__components_recivecoupon__["a" /* default */]
  },
  onShow: function onShow() {
    console.log("9999");
    var that = this;

    //获取优惠券
    //如果后期需要加优惠券的话，只将此处的limit = ‘0’改成limit = ‘’即可
    var limit = '0';
    __WEBPACK_IMPORTED_MODULE_1__utils_common_js__["a" /* default */].activities(limit).then(function (res) {
      console.log(res);
      that.activities = res.data.activities;
      console.log("that.activities.length");
      if (that.activities.length == 0) {
        that.displays = "none";
      } else {
        that.displays = "block";
      }
      for (var i = 0; i < that.activities.length; i++) {
        console.log(that.activities[i].begin_date);
        console.log(that.activities[i].end_date);
        that.activities[i].begin_date = that.activities[i].begin_date.substr(0, 10).replace(/-/g, ".");
        that.activities[i].end_date = that.activities[i].end_date.substr(0, 10).replace(/-/g, ".");
      }
    });
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_recivecoupon_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3915ff47_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_recivecoupon_vue__ = __webpack_require__(25);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3915ff47"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_recivecoupon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3915ff47_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_recivecoupon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\recivecoupon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] recivecoupon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3915ff47", Component.options)
  } else {
    hotAPI.reload("data-v-3915ff47", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
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
  props: ["activities", "displays"],
  data: function data() {
    return {
      couponimg: "./../../static/images/conpon.jpg",
      iconconpon: __webpack_require__(6),
      url: "./../../static/images/coulogo_01.jpg",
      ricolor: "#9bafe7"
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
    }
  },
  onShow: function onShow() {
    console.log("displays");
  }
});

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "coupon"
  }, [(_vm.displays == 'block') ? _c('ul', {
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
    }), _vm._v(" "), _c('div', {
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
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.receiveCoupon
      }
    }, [_c('view', {
      staticClass: "progress_text"
    }, [_c('text', [_vm._v("立即")]), _vm._v(" "), _c('text', [_vm._v("领取")])])])])])
  })) : (_vm.displays == 'none') ? _c('div', [_c('img', {
    staticClass: "couponicon",
    attrs: {
      "src": _vm.iconconpon,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "sp1"
  }, [_vm._v("^_^没有更多优惠券o_o")])]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3915ff47", esExports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('recivecoupon', {
    attrs: {
      "displays": _vm.displays,
      "activities": _vm.activities,
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
     require("vue-hot-reload-api").rerender("data-v-56038c44", esExports)
  }
}

/***/ })
],[16]);
//# sourceMappingURL=main.js.map