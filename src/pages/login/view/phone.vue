<template>
  <div class="">
    <HeaderTop type="close" href="close"></HeaderTop>
    <div class="form">
      <div class="title">手机号码</div>
      <div class="inpWarp border-bottom">
        <input type="text" placeholder="在这里输入手机号" @focus="bindPhone" v-model="phone">
      </div>
      <div class="hint error">
        <div class="text" v-text="errorText"></div>
      </div>
      <div class="submitButton">
        <button @click="goToCode">下一步</button>
      </div>
    </div>
    <FooterBottom></FooterBottom>
  </div>
</template>

<script>
import HeaderTop from "../components/headerTop.vue";
import FooterBottom from "../components/footerBottom.vue";

export default {
  data() {
    return {
      errorText:'',
      phone: ""
    };
  },
  components: {
    HeaderTop,
    FooterBottom
  },
  methods: {
    bindPhone(){
      this.errorText = ''
    },
    goToCode() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.errorText = '手机号码有误，请重填'
        return false;
      }
      this.$router.push({ path: "code", query: { phone: this.phone } });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";

.form {
  margin-top: 42%;
  width: 100%;
  padding-left: px(80);
  padding-right: px(80);
  .title {
    padding-left: px(80);
    background: url("../image/icon_phone.png") no-repeat left center;
    background-size: px(48) px(48);
    line-height: px(50);
    color: #999;
    font-size: px(30);
    margin-bottom: px(18);
  }
  .inpWarp {
    padding-top: px(32);
    padding-bottom: px(32);
    line-height: px(48);
    font-size: px(36);
    color: #53402f;
    margin-bottom: px(32);
    &::before {
      border-bottom-color: #484037;
    }
    input {
      font-size: px(36);
      color: #ffff;
      background: none;
      border: none;
      outline: none;
      &::-webkit-input-placeholder {
        color: #53402f;
      }
    }
  }
  .hint {
    display: flex;
    justify-content: center;
    line-height: px(36);
    height: px(128);
    font-size: px(28);
    color: #604f3e;
    &.error {
      color: #f5222d;
    }
    .text {
      max-width: 100%;
    }
  }
  .submitButton {
    button {
      margin: 0 auto;
      display: block;
      width: px(320);
      height: px(88);
      border-radius: px(44);
      font-size: px(36);
      color: #e9e9e9;
      background: #a98054;
      border: none;
      outline: none;
      box-shadow: 0 px(16) px(32) 0 rgba(167, 91, 0, 0.5);
    }
  }
}
</style>
