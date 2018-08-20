<template>
  <div>
    <recivecoupon :displays="displays" :activities="activities"></recivecoupon>
  </div>
</template>


<script>
import recivecoupon from "./../../components/recivecoupon";
import Common from "./../../utils/common.js";
export default {
  data() {
    return {
      page: 1,
      activities: "",
      displays:'',
    };
  },
  components: {
    recivecoupon
  },
  onShow() {
    console.log("9999");
    let that = this;

    //获取优惠券
    //如果后期需要加优惠券的话，只将此处的limit = ‘0’改成limit = ‘’即可
    let limit = '0';
    Common.activities(limit).then(res => {
      console.log(res);
      that.activities = res.data.activities;
      console.log("that.activities.length");
      if(that.activities.length == 0){
        that.displays = "none";
      }else{
        that.displays = "block";
      }
      for (let i = 0; i < that.activities.length; i++) {
        console.log(that.activities[i].begin_date);
        console.log(that.activities[i].end_date);
        that.activities[i].begin_date = that.activities[i].begin_date
          .substr(0, 10)
          .replace(/-/g, ".");
        that.activities[i].end_date = that.activities[i].end_date
          .substr(0, 10)
          .replace(/-/g, ".");
      }
    });
  }
};
</script>


<style lang="scss" scoped>
</style>


