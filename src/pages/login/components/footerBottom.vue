<template>
  <footer class="footer">
    <span class="text">我已阅读并同意</span>
    <span class="agreementButton" @click="goToAgreement">BENSON用户协议</span>
  </footer>
</template>

<script>
export default {
  methods:{
    goToAgreement(){
      this.$router.push('/agreement')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: px(36);
  padding-bottom: px(32);
  text-align: center;
  font-size: px(28);
  .text {
    color: #5a5a5a;
  }
  .agreementButton {
    color: #7e6347;
    text-decoration:underline;
  }
}
</style>
