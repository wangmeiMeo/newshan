<template>
  <div class="contain">
    <img 　:src="detail" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return{
      detail:''
    }
  },
  methods: {},
  onShow(){
    let that = this;
    //接受banner.vue传过来的值
    console.log(that.$mp.query.detail);
    that.detail = that.$mp.query.detail;
  }
};
</script>


<style lang="scss" scoped>
.contain{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>


