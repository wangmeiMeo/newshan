<template>
  <div>
    <Doorname :citylist='citylist' :code="this.$mp.query.code" :closedstoreA='closedstoreA'></Doorname>
  </div>
</template>
<script>
import Doorname from "@/components/doorname";
import Common from "@/utils/common.js";
import Index from "@/utils/index.js";
import func from "../../utils/common";
export default {
  data() {
    return {
      citylist: "",
      storeId: "",
      mylatitude: "",
      mylongitude: "",
      closedstore: [],
      closedstoreA: { storeName: "未授权地理位置" },
      location: "",
    };
  },
  components: { Doorname },
  methods: {},
  onShow() {
    // 加载门店列表
    let that = this;
    // 获取用户位置的经纬度
    //获取首页传过来的code
    console.log(that.$mp.query.code);
    console.log("0000000------------------that----------------------00000000");
    Common.wxgetLocation().then(
      function(res) {
        console.log(res);
        that.location = res;
        if (res.latitude != undefined && res.longitude != undefined) {
          Common.findStoreList().then(res => {
            console.log(res);
            that.citylist = res.data;
            for (var key in res.data) {
              var map = new Object();
              for (var i = 0; i < res.data[key].length; i++) {
                map.content = res.data[key][i];
                that.closedstore.push(map.content);
              }
              that.closedstore.push(map.content);
            }
            that.closedstore = Index.distanced_stores(
              that.location,
              that.closedstore
            );
            that.closedstore = that.closedstore.sort(Index.compare("distance"));
            console.log(that.closedstore[0]);
            that.closedstoreA = that.closedstore[0];
            console.log(that.closedstoreA);
          });
        }
      },
      function(err) {
        console.log(err);
        if (err.msg == "getLocation:fail auth deny");
        Common.findStoreList().then(res => {
          that.citylist = res.data;
        });
      }
    );
  }
};
</script>


<style lang="scss" scoped>
</style>
