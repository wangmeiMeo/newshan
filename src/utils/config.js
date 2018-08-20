// var url = 'http://192.168.199.45:8090';
// var url = 'https://td.cloudolphin.com';
var url = 'https://ssbl.cloudolphin.com';
var apiPrefix = url + '/ssbl/api';

var config = {
  name: "珊珊便利",
  api: {
    /**
     * 用户登录 获得unionId
     */
    login: '/user/login',
    /**
     * 授权后获取用户的昵称,unionId等信息
     */
    getUserInfo: '/user/getUserInfo',
    /**
     * 授权后获取用户的手机号
     */
    getUserPhone: '/user/getUserPhone',
    /**
     * 判断是否是老用户
     */
    isOldUser: '/user/isOldUser',
    /**
     * 获得首页轮播图
     */
    getImgAddress: '/url/getImgAddress',
    /**
     * 首页门店信息
     */
    findStoreList: '/crm/store/findStoreList',
    /**
     * /api/mall/searchMall 搜索门店
     */
    searchMall: '/mall/searchMall',
    /**
     * 积分余额
     */
    balance: '/crm/score/balance',
    /**
     * 注册珊会员
     */
    regist: '/user/regist',
    /**
     * 会员券列表查询
     */
    query: '/crm/coupon/query',
    /**
     * /api/webank/login
     */
    webankLogin: '/webank/login',
    /**
     * 查询券活动
     */
    activities: '/crm/coupon/activities',
    /**
     * 领券
     */
    couponAcquire: '/crm/coupon/couponAcquire',
    /**
     *券的详情 
     */
    coupondetail: '/crm/coupon/coupon',
    /**
     * getUserMessage 
     * 获得用户用户
     * openId 
     * unionId
     * memberId
     * phone
     */
    getUserMessage:'/user/getUserMessage'
  },
  webank: {
    // 会员付测试小程序APPID：wx0bca86659c91b215
    // 会员付生产小程序APPID：wxd9d07d7f604dd2d0
    AppId: 'wxd9d07d7f604dd2d0',
    AppVersion: 'release',
    webankAppId: 'W0477581',
  },
}

for (var key in config.api) {
  config.api[key] = apiPrefix + config.api[key];
}

module.exports = config;
