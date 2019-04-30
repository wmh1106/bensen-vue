<template>
  <div class="main">
    <img class="topImage" :src="content.image" alt="" v-if="share">
    <img class="topImage" :src="content.image" alt="" v-if="android">
    <h2 class="title">{{content.title}}</h2>
    <p class="time">{{content.created_at}}</p>
    <div class="content" ref="content" v-html="content.content"></div>

    <div class="button-box" v-if="share">
      <div href="javascript:;" @click="down" class="reserve">立即下载本森APP</div>
    </div>
  </div>
</template>

<script>
    import axios from "axios";
    import { getHrefData } from "@/assets/js/utility.js";

    import defaultImg from "@/assets/image/default.png";
    import { host } from "@/assets/js/api.js";

    export default {
        data() {
            return {
                content: {},
                share:false,
                android: false
            };
        },
        methods: {
            down() {
                let u = navigator.userAgent;
                // app = navigator.appVersion;
                let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //g
                let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                if (isAndroid) {
                    location.href =
                        "http://a.app.qq.com/o/simple.jsp?pkgname=com.mec.benson";
                }
                if (isIOS) {
                    location.href =
                        "https://itunes.apple.com/cn/app/ben-sen-chao-pao/id1176038542?mt=8";
                }
            }
        },
        created() {
            const _this = this;
            const hrefData = getHrefData();
            if(hrefData.isShare){
              this.share = true
            }
            if(hrefData.isAndroid){
                this.android = true
            }
            if (hrefData && hrefData.id) {
                axios
                    .get(host + "/api/news/" + hrefData.id)
                    .then(res => {
                        _this.content = res.data.data;
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
                // console.log("未获取到 id");
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
      padding-bottom: px(100);
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
  }

  .button-box {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: px(100);
    display: flex;

    .reserve {
      flex: 2;
      font-size: px(32);
      color: #d9d9d9;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #a98054;
    }
  }
</style>
