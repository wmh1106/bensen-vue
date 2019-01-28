<template>
  <div class="details">
    <!-- <nav-bar :carId="carId"></nav-bar> -->
    <swiper :slist="swiper"></swiper>
    <div class="title border-bottom">{{title}}</div>
    <div class="hint">请尽快完成预定，方便门店提前为您准备车辆。</div>
    <member-table :memberTable="memberTable"></member-table>
    <info :info="info" :explain="explain"></info>

    <!-- <div class="button-box">
      <div class="phone">电话咨询</div>
      <div class="reserve">立即预订</div>
    </div> -->
    <div class="button-box">
      <!-- <div class="phone">电话咨询</div> -->
      <div href="javascript:;" @click="down" class="reserve">立即下载本森APP</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { host } from "@/assets/js/api.js";
import { getHrefData } from "@/assets/js/utility.js";

import NavBar from "./components/nav-bar";
import Swiper from "./components/swiper";
import Info from "./components/info";
import MemberTable from "./components/member-table";

export default {
  data() {
    return {
      carId: -1,
      swiper: [],
      explain: "",
      memberTable: [],
      info: {},
      title: ""
    };
  },
  components: {
    NavBar,
    Swiper,
    MemberTable,
    Info
  },
  created() {
    const hrefData = getHrefData();

    axios
      .get(host + "/api/cars/" + hrefData.id)
      .then(res => {
        const { status, data } = res.data;
        if (status === "success") {
          this.swiper = data.images;
          this.explain = data.explain;
          this.memberTable = [
            {
              id: 1,
              text: "一天",
              price: data.onePrice
            },
            {
              id: 2,
              text: "三天",
              price: data.tridPrice
            },
            {
              id: 3,
              text: "一周",
              price: data.weekPrice
            },
            {
              id: 4,
              text: "一月",
              price: data.monthPrice
            },
            {
              id: 5,
              text: "押金",
              price: data.deposit
            }
          ];
          this.info = {
            // 发动机
            engine: data.engine,
            // 排量
            useOil: data.useOil,
            // 百米加速度
            upSpeed: data.upSpeed,
            // 最大速度
            maxSpeed: data.maxSpeed,
            // 座位数
            seat: data.seat,
            // 最大马力
            maxPower: data.maxPower,
            // 顶棚
            ceiling: data.ceiling
          };
          this.title = data.brand_name + " - " + data.model;
          this.carId = data.id;
        }
      })
      .catch(err => {
        console.error(err);
      });
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
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.details {
  color: #fff;
  background: #141414;
}

.title {
  margin-top: px(20 * 2);
  padding-bottom: px(20 * 2);
  margin-left: px(16 * 2);
  margin-right: px(16 * 2);
  font-size: px(18 * 2);
  line-height: px(24 * 2);
  height: px(44 * 2);
  color: #bfbfbf;
  &::before {
    border-bottom-color: rgba(169, 128, 84, 0.25);
  }
}
.hint {
  margin-top: px(10 * 2);
  margin-bottom: px(24 * 2);
  margin-left: px(16 * 2);
  margin-right: px(16 * 2);
  padding-left: px(24 * 2);
  line-height: px(16 * 2);
  font-size: px(12 * 2);
  color: #5c5c5c;
  padding-top: px(5 * 2);
  background: url("./image/icon1.png") no-repeat center left;
  background-size: px(16 * 2) px(16 * 2);
}
.button-box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: px(50 * 2);
  display: flex;
  .phone {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e3d0b1;
    font-size: px(14 * 2);
    color: #111111;
  }
  .reserve {
    flex: 2;
    font-size: px(16 * 2);
    color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #a98054;
  }
}
</style>
