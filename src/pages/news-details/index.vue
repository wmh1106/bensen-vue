<template>
  <div class="main">
    <img class="topImage" :src="content.image" alt="">
    <h2 class="title">{{content.title}}</h2>
    <p class="time">{{content.created_at}}</p>
    <!-- <div>
      <img :src="content.image" alt="">
    </div> -->
    <div class="content" ref="content" v-html="content.content"></div>

    <div class="bottomText">
      <p>- 超级跑车寄售服务 -</p>
      <p>- 超级跑车体验服务 -</p>
      <p>- 超级跑车场地供应 -</p>
      <p class="phone">详情资讯4006-458-911</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getHrefData } from "@/assets/js/utility.js";

import defaultImg from "@/assets/image/default.png";
import { host } from "@/assets/js/api.js";

// eslint-disable-next-line
console.log(host);

export default {
  data() {
    return {
      content: {}
    };
  },
  created() {
    const _this = this;
    const hrefData = getHrefData();
    if (hrefData && hrefData.id) {
      axios
        .get(host + "/api/news/" + hrefData.id)
        .then(res => {
          _this.content = res.data.data;
          console.log(res.data.data)
          return res.data.data.content;
        })
        .then(res => {
          const contentREF = this.$refs.content;
          if (res) {
            let imgList = contentREF.querySelectorAll("img");
            Array.from(imgList).forEach(item => {
              item.onerror = function() {
                this.src = defaultImg;
              };
            });
          }
        });
    } else {
      // eslint-disable-next-line
      console.log("未获取到 id");
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/style/varibles.scss";
.main {
  width: 100%;
  min-height: 100vh;
  background: #141414;
  .topImage{
    width: 100%;
  }
  .title {
    width: 100%;
    font-size: px(40);
    color: #fff;
    padding-top: px(70);
    line-height: px(66);
    text-align: center;
    padding-left: px(30);
    padding-right: px(30);
  }
  .time {
    padding-top: px(66);
    font-size: px(30);
    color: #666;
    text-align: center;
  }
  .content {
    color: #999;
    span,
    p {
      font-size: px(32) !important;
    }
    img {
      display: block;
      width: 100% !important;
      margin: px(10) 0;
    }
  }
  .bottomText {
    text-align: center;
    font-size: px(30);
    color: #fff;
    padding: px(100) 0;
    p {
      padding-bottom: px(10);
    }
    .phone {
      padding-top: px(40);
    }
  }
}
</style>
