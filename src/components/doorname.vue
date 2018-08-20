<template>
<div class="container">
 <div class='city_box'>
      <div class='city_left'>
          <scroll-view :scroll-y="true" :style="{'width':'100%','height':'100%'}" scroll-with-animation='true' :scroll-into-view='cityListId'>
              <div class='national' :data-types='national' @click='cityTap'>请选择门店</div>
              <div>
                <span class='city_name' style="color:#33b9ff;border:0;height:20px;line-height:20px;">最近门店:</span>
                <span v-if="closedstoreA == undefined ||closedstoreA.storeName == '未授权地理位置' || closedstoreA.storeName == ''"  class='city_name' style="border-bottom:2px solid #33b9ff;height:50px;line-height:50px;">未授权地理位置</span>
                <span v-else class='city_name' style="border-bottom:2px solid #33b9ff;height:50px;line-height:50px;" @click="cityTap" :data-val='closedstoreA.storeName' :data-storecode='closedstoreA.storeCode'>{{closedstoreA.storeName}}</span>
              </div>
              <div>
                <span class='city_name' style="color:#33b9ff;border:0;height:50px;line-height:50px;">所有门店:</span>
              </div>
              <div class='city_list_box'>
                <div v-for='(letterItem,key,index2) in citylist' :key='index2'>
                  <div class='city_first_letter' :id='key'>{{key}}</div>
                  <span class='city_name' v-for='(item,index) in letterItem' :key='index' :data-types='list' @click='cityTap' :data-index='index' :hover-class="opacity" :data-val='item.storeName' :data-storecode='item.storeCode'>{{item.storeName}}</span>
                </div>
              </div>
          </scroll-view>
      </div>
      <div class='city_right'>
          <span class='letter_item' v-for='(item,index1) in letter' :key='index1' @click='letterTap' :data-item='item'>{{item}}</span>
      </div>  
  </div>
</div>
</template>
<script>
import Common from "@/utils/common.js";
import util from "@/utils/index.js";
import globalData from "./Global";
export default {
  props: ["citylist", "closedstoreA", "code"],
  data() {
    return {
      opacity: ".6",
      //下面是字母排序
      letter: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      cityListId: "",
      citySel: "全国",
      locateCity: "",
      storecode: "",
      storename: ""
    };
  },
  watch: {
    code: function(val, oldVal) {
      console.log(val);
    }
  },
  methods: {
    //点击城市
    cityTap(e) {
      let that = this;
      console.log(that.code);
      that.storecode = e.mp.currentTarget.dataset.storecode;
      that.storename = e.mp.currentTarget.dataset.val;
      that.$emit("storecodes", that.storecode);
      
      //如果微众会员注册失败,但是注册珊珊会员成功
      if (that.code == 27) {
        Common.webankLogin().then(res => {
          console.log(res);
          if (res.data.code == 0) {
            wx.showToast({
              title: "注册成功",
              icon: "success",
              duration: 1200,
              mask: false,
              success: function() {
                console.log(that.storename);
                wx.switchTab({
                  url: "../index/main?storename=" + that.storename
                });
              },
              fail: function() {},
              complete: function() {}
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
        Common.regist(that.storecode).then(res => {
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
            Common.webankLogin().then(res => {
              console.log(res);
              if (res.data.code == 0) {
                wx.showToast({
                  title: "注册成功",
                  icon: "success",
                  duration: 1200,
                  mask: false,
                  success: function() {
                    wx.switchTab({
                      url: "../index/main"
                    });
                    that.globalData.storename = that.storename;
                  },
                  fail: function() {},
                  complete: function() {}
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
    letterTap(e) {
      console.log(e);
      const Item = e.mp.currentTarget.dataset.item;
      console.log(Item);
      this.cityListId = Item;
      console.log(this.cityListId);
    }
  }
};
</script>


<style lang="scss" scoped>
.container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  .opacity {
    background: red;
  }
}
.city_box {
  height: 100%;
  background: #fff;
  display: flex;
  .city_left {
    flex: 1;
    .national {
      font-size: 28rpx;
      display: block;
      text-align: center;
      padding: 30rpx 0;
    }
    .city_first_letter {
      line-height: 40rpx;
      height: 40rpx;
      padding-left: 25rpx;
      font-size: 28rpx;
      background: #eee;
      color: #999;
    }
    .city_name {
      display: block;
      line-height: 80rpx;
      height: 80rpx;
      border-bottom: 1px solid #efefef;
      font-size: 28rpx;
      color: #333;
      padding-left: 25rpx;
    }
  }
  .city_right {
    width: 60rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .letter_item {
      flex: 1;
      display: block;
      font-size: 24rpx;
      color: #33b9ff;
      text-align: center;
    }
  }
}
</style>


