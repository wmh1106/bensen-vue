<template>
  <div>
    <div class="text1 border-bottom">
      {{explain}}
    </div>
    <div class="info">
      <p>关于收取押金的说明</p>
    </div>
    <!-- 车辆参数 -->
    <div class="car-arguments">
      <div class="header">
        <div class="top">
          <h3>车辆参数</h3>
          <!-- <a href="#more" class="more">更多</a> -->
        </div>
        <p class="en">CAR PARAMETERS</p>
      </div>

      <div class="content">
        <ul>
          <li class="border-bottom">
            <span>发动机</span>
            <span>{{info.engine}}</span>
          </li>
          <li class="border-bottom">
            <span>排量</span>
            <span>{{info.useOil}}</span>
          </li>
          <li class="border-bottom">
            <span>0-100km/h加速 (s)</span>
            <span>{{info.upSpeed}}</span>
          </li>
          <li class="border-bottom">
            <span>最高时速 (km/h)</span>
            <span>{{info.maxSpeed}}</span>
          </li>
          <li class="border-bottom">
            <span>座位数 (个)</span>
            <span>{{info.seat}}</span>
          </li>
          <li class="border-bottom">
            <span>最大马力 (Ps)</span>
            <span>{{info.maxPower}}</span>
          </li>
          <li>
            <span>顶棚</span>
            <span>{{info.ceiling}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 租车流程 -->
    <div class="car-flow">
      <div class="header">
        <div class="top">
          <h3>租车流程</h3>
          <!-- <a href="#more" class="more">更多</a> -->
        </div>
        <p class="en">CAR RENTAL PROCESS</p>
      </div>
      <img class="img1" src="../image/img1.png" alt="">
    </div>

    <!-- 服务保障 -->
    <div class="car-service">
      <div class="header">
        <div class="top">
          <h3>服务保障</h3>
          <!-- <a href="#more" class="more">更多</a> -->
        </div>
        <p class="en">SERVICE GUARANTEE</p>
      </div>
      <img class="img1" src="../image/img2.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
    explain: String
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.text1 {
  margin-left: px(16 * 2);
  margin-right: px(16 * 2);
  padding-top: px(20 * 2);
  padding-bottom: px(16 * 2);

  font-size: px(14 * 2);
  color: #5c5c5c;
  &::before {
    border-bottom-color: rgba(169, 128, 84, 0.15);
  }
}
.info {
  padding-left: px(16 * 2);
  padding-right: px(16 * 2);
  height: px(56);
  font-size: px(14);
  color: #5c5c5c;
  border-bottom: px(10) solid #1a1a1a;
  display: flex;
  align-items: center;
  background: url("../image/icon2.png") no-repeat center left
    px(16 * 2);
  background-size: px(16 * 2) px(16 * 2);
  p {
    padding-left: px(24 * 2);
  }
}

.header {
  padding-top: px(20 * 2);
  padding-bottom: px(20 * 2);
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: px(4 * 2);
  }
  h3 {
    font-size: px(18 * 2);
    color: #d9d9d9;
    font-weight: normal;
    line-height: px(24 * 2);
  }
  .more {
    position: relative;
    font-size: 13px;
    color: #424242;
    text-decoration: none;
    padding-right: px(16 * 2);
    background: url("../image/more.png") no-repeat center
      right px(3);
    background-size: px(12 * 2) px(12 * 2);
    &::after {
      content: "";
      position: absolute;
      right: 0%;
      top: px(-10);
      width: 150%;
      height: px(40 * 2);
    }
  }
  .en {
    font-size: px(14 * 2);
    color: #383838;
    line-height: px(20 * 2);
    font-family: "PingFangSC-Regular";
  }
}

.car-arguments {
  padding-left: px(16 * 2);
  padding-right: px(16 * 2);
  padding-bottom: px(24 * 2);
  border-bottom: px(10 * 2) solid #1a1a1a;
  .content {
    margin: 0 auto;
    width: px(345 * 2);
    height: px(380 * 2);
    padding-left: px(26 * 2);
    padding-right: px(26 * 2);
    padding-top: px(10 * 2);
    background: url("../image/bg.png") no-repeat center center;
    background-size: 100% 100%;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: px(50 * 2);
      font-size: px(13 * 2);
      color: #a98054;
      &::before {
        border-bottom-color: rgba(169, 128, 84, 0.15);
      }
    }
  }
}
.car-flow,
.car-service {
  padding-left: px(16 * 2);
  padding-right: px(16 * 2);
  border-bottom: px(10 * 2) solid #1a1a1a;
  .img1 {
    width: 100%;
  }
}
.car-service {
  padding-bottom: px(60 * 2);
}
</style>
