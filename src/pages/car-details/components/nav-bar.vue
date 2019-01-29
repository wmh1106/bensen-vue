<template>
  <div class="nav-bar">
    <div class="back"></div>
    <p class="join-vip">加入<span>VIP</span>会员 立享<span>8</span>大特权</p>
    <div class="icon">
      <img @click="bindLike" class="liked" src="../image/icon-unlike.png" alt="" srcset="">
      <img class="share" src="../image/icon-share.png" alt="" srcset="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    carId: Number
  },
  methods: {
    bindLike () {
      const token = JSON.parse(localStorage['token'])
      this.$axios.post('/api/car-marks-create', {
        car_id: this.carId
      }, {
        headers: {
          Authorization: token.token_type + ' ' + token.access_token
        },
        proxy: {
          host: '192.168.0.30',
          port: 8088,
          auth: {
            Authorization: token.token_type + ' ' + token.access_token
          }
        }
      }).then(res => {
        const { status, data } = res.data
        if (status === 'success') {
          // console.log(data)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  height: px(44 * 2);
  padding-left: px(50 * 2);
  padding-right: px(20 * 2);
  background-image: linear-gradient(
    -180deg,
    #000000 2%,
    rgba(0, 0, 0, 0.4) 77%,
    rgba(0, 0, 0, 0) 100%
  );

  .back {
    position: absolute;
    left: 0;
    top: 0;
    width: px(50 * 2);
    height: 100%;
    background: url("../image/icon_back.png") no-repeat left
      px(16) center;
    background-size: px(24 * 2) px(24 * 2);
  }

  .join-vip {
    width: px(162 * 2);
    line-height: px(28 * 2);
    height: px(28 * 2);
    padding-left: px(12 * 2);
    padding-right: px(12 * 2);
    background: rgba(24, 24, 24, 0.7);
    border-radius: px(14 * 2);
    font-size: px(12 * 2);
    color: #bfbfbf;
  }
  .liked,
  .share {
    width: px(40 * 2);
    height: px(40 * 2);
    padding: px(10 * 2);
  }
}
</style>
