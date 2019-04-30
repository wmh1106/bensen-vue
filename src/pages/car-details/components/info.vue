<template>
  <div>
    <div class="text1">
      {{explain}}
    </div>

    <!-- 车辆参数 -->
    <div class="car-arguments">
      <wmh-title zh="车辆参数" en="CAR PARAMETERS"></wmh-title>
      <div class="content">
        <ul>
          <li class="border-bottom">
            <span>发动机</span>
            <span>{{info.engine}}</span>
          </li>
          <li class="border-bottom">
            <span>排量</span>
            <span>{{info.displacement}}</span>
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
      <wmh-title :zh="headerRental.zh" :en="headerRental.en"></wmh-title>
      <img class="img1" src="../image/img1.png" alt="">
    </div>

    <!-- 服务保障 -->
    <div class="car-service">
      <wmh-title :zh="headerService.zh" :en="headerService.en"></wmh-title>
      <img class="img1" src="../image/img2.png" alt="">
    </div>
  </div>
</template>
<script>

    import wmhTitle from './wmh-title.vue'

    export default {
        components: {
            wmhTitle
        },
        props: {
            info: Object,
            explain: String,
            headerRental: Object,
            headerService: Object
        }
    }
</script>
<style lang="scss" scoped>
  @function px( $px) {
    @return $px*2*2/100+rem;
  }
  .text1 {
    padding: px(20) px(16) px(16);
    line-height: px(24);
    font-size: px(14);
    color: #5c5c5c;
    border-bottom: px(10) solid #1a1a1a;
  }
  .info {
    padding-left: px(16);
    padding-right: px(16);
    height: px(56);
    font-size: px(14);
    color: #5c5c5c;
    border-bottom: px(10) solid #1a1a1a;
    display: flex;
    align-items: center;
    /*background: url("~image/car/icon2.png") no-repeat center left px(16); */
    background-size: px(16) px(16);
    p {
      padding-left: px(24);
    }
  }

  .car-arguments {
    padding: px(10) px(16) px(24);
    border-bottom: px(10) solid #1a1a1a;
    .content {
      margin: 0 auto;
      width: px(345);
      height: px(380);
      padding-left: px(26);
      padding-right: px(26);
      padding-top: px(10);
      background: url("../image/bg.png") no-repeat center center;
      background-size: 100% 100%;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: px(50);
        font-size: px(13);
        color: #a98054;
        &::before {
          border-bottom-color: rgba(169, 128, 84, 0.15);
        }
      }
    }
  }
  .car-flow,
  .car-service {
    padding: px(10) px(16);
    border-bottom: px(10) solid #1a1a1a;
    .img1 {
      width: 100%;
    }
  }
  .car-service {
    padding-bottom: px(60);
  }
</style>
