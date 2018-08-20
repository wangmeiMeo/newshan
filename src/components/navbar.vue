<template>
  <ul class="navbar clearfix">
    <li v-for="(item,index) in navbar" :key="index">
      <img :src="item.src" alt="">
      <p class="title">{{item.title}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      navbar: [
        {
          src: "./../../static/images/img001.jpg",
          title: "矿泉水"
        },
        {
          src: "./../../static/images/img002.jpg",
          title: "日常用品"
        },
        {
          src: "./../../static/images/img001.jpg",
          title: "工具"
        },
        {
          src: "./../../static/images/img001.jpg",
          title: "日常用品"
        },
        {
          src: "./../../static/images/img001.jpg",
          title: "工具"
        },
        {
          src: "./../../static/images/img001.jpg",
          title: "工具"
        },
        {
          src: "./../../static/images/img001.jpg",
          title: "工具"
        },
        {
          src: "./../../static/images/img001.jpg",
          title: "工具"
        }
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  padding: 30rpx 0 0;
  li {
    width: 22%;
    margin-right: 4%;
    float: left;
    padding-bottom: 30rpx;
    .title {
      width: 100%;
      text-align: center;
      font-size: 24rpx;
      color:grey;
      margin-top: 10rpx;
    }
  }
  li:nth-of-type(4n) {
    margin-right: 0;
  }
  img {
    display: block;
    width: 60rpx;
    height: 60rpx;
    margin: 0 auto;
  }
}
</style>



