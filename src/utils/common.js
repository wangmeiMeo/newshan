import global_ from './../components/Global'
const Promise = require('es6-promise').Promise
const config = require("./config");

const func = {
  /**
   * 用户登录获得code
   */
  wxLogin: function () {
    return new Promise((resolve, reject) => {
      wx.login({
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err);
        },
        complete: function (res) {
          // console.log("wxLogin complete:" + res)
        }
      })
    })
  },
  /**
   * 用户登录
   */
  userLogin: function (code, scene, sceneAddress) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api.login,
        data: {
          code: code,
          scene: scene,
          sceneAddress: sceneAddress
        },
        method: "POST",
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        },
        complete: function (res) {
          //console.log("userLogin complete:" + res)
        }
      })
    })
  },
  /**
   * 授权后获取用户的昵称,unionId等信息
   */
  getUserInfo: function (encryptedData, iv) {
    return new Promise((resolve, reject) => {
      console.log(wx.getStorageSync("token"))
      wx.request({
        url: config.api.getUserInfo + "?token=" + wx.getStorageSync("token"),
        data: {
          encryptedData: encryptedData,
          iv: iv,
          openId: global_.openId,
        },
        method: "POST",
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        },
        complete: function (res) {
          //console.log("getUserInfo complete:" + res)
        }
      })
    })
  },
  /**
   * 授权后获取用户的手机号
   */
  getUserPhone: function (encryptedData, iv) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api.getUserPhone + "?token=" + wx.getStorageSync("token"),
        data: {
          encryptedData: encryptedData,
          iv: iv,
          openId: global_.openId,
        },
        method: "POST",
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        },
        complete: function (res) {
          //console.log("getUserInfo complete:" + res)
        }
      })
    })
  },
  //判断是否是老用户
  isOldUser: function () {
    return new Promise((resolve, reject) => {
      console.log(wx.getStorageSync("token"));
      console.log("00000000wangmeiwangmei")
      wx.request({
        url: config.api.isOldUser + "?token=" + wx.getStorageSync("token"),
        data: {
          openId: global_.openId,
        },
        method: "POST",
        success: function (res) {
          console.log(res);
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        },
        complete: function (res) {
          console.log(res);
        }
      })
    })
  },
  //banner

  getImgAddress: function () {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api.getImgAddress + "?token=" + wx.getStorageSync("token"),
        data: {},
        method: "POST",
        success: function (res) {
          console.log(res);
          resolve(res)
        },
        fail: function (err) {
          reject(err);
        },
        complete: function (res) {
          console.log(res);
        }
      })
    })
  },

  //获取门店信息
  findStoreList: function () {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api.findStoreList + "?token=" + wx.getStorageSync("token"),
        data: {},
        method: "GET",
        success: function (res) {
          console.log(res);
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        },
        complete: function (res) {
          console.log(res);
        }
      })
    })
  },
  //积分余额
  balance: function (memberId) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api.balance + "?token=" + wx.getStorageSync("token"),
        data: {
          memberId: memberId,
          queryExpire: false
        },
        method: "POST",
        success: function (res) {
          console.log(res);
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        },
        complete: function (res) {
          console.log(res);
        }
      })
    })
  },
  //用户注册珊珊会员
  regist: function (storeId) {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key: "phone",
        success: function (res) {
          console.log(res.data);
          wx.request({
            url: config.api.regist + "?token=" + wx.getStorageSync("token"),
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
              mobile: res.data,
              storeId: storeId
            },
            method: "POST",
            success: function (res) {
              console.log(res);
              resolve(res)
            },
            fail: function (err) {
              reject(err)
            },
            complete: function (res) {
              console.log(res);
            }
          })
        }
      });

    })
  },
  //会员券列表查询
  query: function (page) {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key: 'memberCode',
        success: function (res) {
          wx.request({
            url: config.api.query + "?token=" + wx.getStorageSync("token"),
            data: {
              memberId: res.data,
              page: page,
              state: 'unused',
              pageSize: '6',
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
              console.log(res);
              resolve(res)
            },
            fail: function (err) {
              reject(err)
            },
            complete: function (res) {
              console.log(res);
            }
          })
        }
      })
    })
  },

  //微众轻会员注册
  webankLogin: function () {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api.webankLogin + "?token=" + wx.getStorageSync("token"),
        data: {
          openId: global_.openId,
        },
        method: "POST",
        success: function (res) {
          console.log(res);
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        },
        complete: function (res) {
          console.log(res);
        }
      })
    })
  },

  //查询券活动
  activities: function (limit) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api.activities + "?token=" + wx.getStorageSync("token"),
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          openId: global_.openId,
          activityTypes: ["precision", "behavior", "scmaction", "trans", "applet", "mbrgrade", "recharge", "component"],
          limit: limit,
          platformId: 'huina'
        },
        method: "POST",
        success: function (res) {
          console.log(res);
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        },
        complete: function (res) {
          console.log(res);
        }
      })
    })
  },

  //领券
  couponAcquire: function (activityId) {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key: 'phone',
        success: function (res) {
          console.log(res.data)
          wx.request({
            url: config.api.couponAcquire + "?token=" + wx.getStorageSync("token"),
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
              activityId: activityId,
              mobile: res.data,
            },
            method: "POST",
            success: function (res) {
              console.log(res);
              resolve(res)
            },
            fail: function (err) {
              reject(err)
            },
            complete: function (res) {
              console.log(res);
            }
          })
        }
      })

    })
  },

  //获取自己的经纬度
  wxgetLocation: function () {
    return new Promise((resolve, reject) => {
      wx.getLocation({
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        },
        complete: function (res) {
          //console.log("wxgetLocation complete:" + res)
        }
      })
    })
  },

  //全的详情页面
  coupondetail: function (couponCode) {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key: 'phone',
        success: function (res) {
          console.log(res.data)
          wx.request({
            url: config.api.coupondetail + "?token=" + wx.getStorageSync("token"),
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
              couponCode: couponCode,
            },
            method: "POST",
            success: function (res) {
              console.log(res);
              resolve(res)
            },
            fail: function (err) {
              reject(err)
            },
            complete: function (res) {
              console.log(res);
            }
          })
        }
      })

    })
  },

  //获得用户以下信息
  //openId
  //unioId
  //memberId
  //phone
  getUserMessage: function (code) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api.getUserMessage,
        data: {
          code: code,
        },
        method: "POST",
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        },
        complete: function (res) {}
      })

    })
  },
}
export default func
