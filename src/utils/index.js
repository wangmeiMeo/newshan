import barcode from './barcode'

function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function convert_length(length) {
  return Math.round(wx.getSystemInfoSync().windowWidth * length / 750);
}

function distanced_stores(location, stores) {
  // 自己的位置信息
  console.log("wangmei")
  console.log(location)
  console.log(stores)
  console.log("wangmei")

  var lat1 = location.latitude;
  console.log(lat1)
  var lng1 = location.longitude;
  console.log(lat1)
  console.log(lng1)
  for (var i = 0; i < stores.length; i++) {
    console.log(stores.length)
    // 目标地点的位置信息
    var lat2 = stores[i].latitude;
    var lng2 = stores[i].longitude;
    var rad1 = lat1 * Math.PI / 180.0;
    var rad2 = lat2 * Math.PI / 180.0;
    var a = rad1 - rad2;
    var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
    var r = 6378137;
    var len = (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))) / 1000;
    stores[i].distance = len.toFixed(2);
  };
  return stores;
}

// 比较distance的大小 然后进行排序
function compare(property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  }
};

function barc(id, code, width, height) {
  barcode.code128(wx.createCanvasContext(id), code, convert_length(width), convert_length(height))
}
export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime,
  barcode: barc,
  distanced_stores: distanced_stores,
  compare: compare
}
