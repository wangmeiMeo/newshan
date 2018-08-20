import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '珊珊JustGo',
    usingComponents: {
      "qrcode-entry": "./../../qrcode-tool/pages/components/qrcode-entry"
    }
  }
}
