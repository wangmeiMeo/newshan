global.webpackJsonp([12],{

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(28);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '我的优惠券'
  }
});

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fec81ed6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(29)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fec81ed6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fec81ed6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\coupondetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fec81ed6", Component.options)
  } else {
    hotAPI.reload("data-v-fec81ed6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      coupondetail: ""
    };
  },

  methods: {
    fastuse: function fastuse() {
      wx.navigateTo({
        url: "/pages/use_coupon/main?code=" + this.$mp.query.code
      });
    }
  },
  onShow: function onShow() {
    var that = this;
    console.log(that.$mp.query.code);
    var code = that.$mp.query.code;
    //获取券的详情
    __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].coupondetail(code).then(function (res) {
      console.log(res);
      that.coupondetail = res.data.coupon;
      that.coupondetail.begin_date = res.data.coupon.begin_date.substr(0, 10).replace(/-/g, ".");
      that.coupondetail.end_date = res.data.coupon.end_date.substr(0, 10).replace(/-/g, ".");
    });
  }
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page"
  }, [_c('view', {
    staticClass: "voucher-header"
  }, [_vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "voucher-tetles"
  }, [_c('text', [_vm._v(_vm._s(_vm.coupondetail.type))])]), _vm._v(" "), _c('view', {
    staticClass: "voucher-money"
  }, [_c('text', {
    staticClass: "money-tetle"
  }, [_vm._v(_vm._s(_vm.coupondetail.face_value))]), _vm._v(" "), _c('text', [_vm._v("元代金券")])]), _vm._v(" "), _c('view', {
    staticClass: "voucher-Btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.fastuse
    }
  }, [_c('text', [_vm._v("立即使用")])]), _vm._v(" "), _c('view', {
    staticClass: "voucher-times"
  }, [_c('text', [_vm._v("有效期 : " + _vm._s(_vm.coupondetail.begin_date) + "--" + _vm._s(_vm.coupondetail.end_date))])]), _vm._v(" "), _c('view', {
    staticClass: "voucher-solids"
  }), _vm._v(" "), _c('view', {
    staticClass: "voucher-footer"
  }, [_vm._m(1), _vm._v(" "), _c('view', {
    staticClass: "footer-shows"
  }, [_vm._v("\n        " + _vm._s(_vm.coupondetail.remark) + "\n      ")])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "voucher-logos"
  }, [_c('img', {
    attrs: {
      "src": "./../../../static/images/logos.jpg"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "footer-tetles"
  }, [_c('text', [_vm._v("使用说明 :")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fec81ed6", esExports)
  }
}

/***/ })

},[27]);
//# sourceMappingURL=main.js.map