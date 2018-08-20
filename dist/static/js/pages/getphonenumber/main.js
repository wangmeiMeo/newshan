global.webpackJsonp([11],{

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(33);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '珊珊便利'
  }
});

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2aff9f02_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(36);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(34)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2aff9f02_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\getphonenumber\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2aff9f02", Component.options)
  } else {
    hotAPI.reload("data-v-2aff9f02", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 35:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      //判断小程序的API，回调，参数，组件等是否在当前版本可用。
      canIUse: wx.canIUse("button.open-type.getUserInfo")
    };
  },

  methods: {
    getPhoneNumber: function getPhoneNumber(e) {
      console.log(e);
      if (e.mp.detail.errMsg == "getPhoneNumber:ok") {
        //用户按了允许授权按钮
        console.log("用户按了允许授权按钮");
        var encryptedData = e.mp.detail.encryptedData;
        var iv = e.mp.detail.iv;
        __WEBPACK_IMPORTED_MODULE_0__utils_common_js__["a" /* default */].getUserPhone(encryptedData, iv).then(function (res) {
          console.log(res);
          // //code:0 成功
          if (res.data.code == 0) {
            //首次获得unionId
            wx.setStorage({
              key: "phone",
              data: res.data.phone
            });
            console.log(res.data.phone);
            //如果此处用户退出程序
            wx.redirectTo({
              url: "/pages/searchdoor/main?code=28"
            });
          }
        });
      } else if (e.mp.detail.errMsg == "getPhoneNumber:fail user deny") {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
        wx.showToast({
          title: "请授权手机号", //标题
          icon: "none" //图标，支持"success"、"loading"
        });
      }
    }
  }
});

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "userinfo"
  }, [_c('img', {
    attrs: {
      "src": "http://f.cdn.cloudolphin.com/regist.jpg"
    }
  }), _vm._v(" "), (_vm.canIUse) ? _c('button', {
    staticClass: "btn",
    attrs: {
      "hover-class": "bg_color",
      "open-type": "getPhoneNumber",
      "eventid": '0'
    },
    on: {
      "getphonenumber": _vm.getPhoneNumber
    }
  }, [_vm._v("授权用户手机号")]) : _c('view', [_vm._v("请升级微信版本")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2aff9f02", esExports)
  }
}

/***/ })

},[32]);
//# sourceMappingURL=main.js.map