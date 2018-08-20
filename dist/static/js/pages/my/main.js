global.webpackJsonp([7],{

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(83);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '个人中心'
  }
});

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5f3ccbca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(86);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(84)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f3ccbca"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5f3ccbca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f3ccbca", Component.options)
  } else {
    hotAPI.reload("data-v-5f3ccbca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 84:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_common_js__ = __webpack_require__(1);
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
      memberId: "",
      jifen: ""
    };
  },

  methods: {
    gotomycoupon: function gotomycoupon() {
      wx.navigateTo({
        url: "/pages/member_center/member_coupon/member_coupon"
      });
    }
  },
  onShow: function onShow() {
    var that = this;
    wx.getStorage({
      key: "memberId",
      success: function success(res) {
        that.memberId = res.data;
        __WEBPACK_IMPORTED_MODULE_0__utils_index_js__["a" /* default */].barcode("barcode", res.data, 600, 170);
        //券积分查询
        __WEBPACK_IMPORTED_MODULE_1__utils_common_js__["a" /* default */].balance(res.data).then(function (res) {
          console.log(res);
          that.jifen = res.data.balance;
        });
      }
    });
  }
});

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('view', {
    staticClass: "banner"
  }, [_c('img', {
    staticClass: "bannerimg",
    attrs: {
      "src": "http://f.cdn.cloudolphin.com/membercard1.jpg"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "portrait_head"
  }, [_c('open-data', {
    staticClass: "portrait",
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('text', {
    staticClass: "memberid"
  }, [_vm._v("会员卡号:" + _vm._s(_vm.memberId))]), _vm._v(" "), _c('text', {
    staticClass: "memberid memberid1"
  }, [_vm._v("会员积分:" + _vm._s(_vm.jifen))])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "list"
  }, [_c('view', {
    staticClass: "record",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.gotomycoupon
    }
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "./../../../static/images/record.gif"
    }
  }), _vm._v(" "), _c('text', [_vm._v("我的卡券")]), _vm._v(" "), _c('img', {
    staticClass: "jt",
    attrs: {
      "src": "./../../../static/images/jt.png"
    }
  })])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "barcode"
  }, [_c('view', {
    staticClass: "barnum"
  }, [_c('text', [_vm._v("*")]), _vm._v("付款时，请向收银员出示此条形码")]), _vm._v(" "), _c('canvas', {
    attrs: {
      "width": "300",
      "height": "200",
      "canvas-id": "barcode"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f3ccbca", esExports)
  }
}

/***/ })

},[82]);
//# sourceMappingURL=main.js.map