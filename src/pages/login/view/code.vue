<template>
  <div class="">
    <HeaderTop type="back" href="phone"></HeaderTop>
    <div class="form">
      <div class="title">
        <span>验证码</span>
        <span class="sendButton" @click="bindSendCode" v-text="sendButtonText"></span>
      </div>
      <div class="inpWarp">
        <ul class="number">
          <li>{{phoneCode[0]}}</li>
          <li>{{phoneCode[1]}}</li>
          <li>{{phoneCode[2]}}</li>
          <li>{{phoneCode[3]}}</li>
        </ul>
        <input type="text" v-model="phoneCode" @input="bindPhoneCode" maxlength="4">
      </div>
      <div class="hint" :class="{'error':error}">
        <div class="text" v-text="hintText"></div>
      </div>
      <div class="submitButton">
        <button :class="codeLength===4?'':'disable'" @click="bindLogin">登录</button>
      </div>
    </div>
    <FooterBottom></FooterBottom>
  </div>
</template>

<script>
import axios from "axios";
import { countDown } from "@/assets/js/utility.js";

import HeaderTop from "../components/headerTop.vue";
import FooterBottom from "../components/footerBottom.vue";

export default {
  data() {
    return {
      error: false,

      phone: "",
      phoneCode: "",
      sendButtonText: "发送",
      hintText: ""
    };
  },
  components: {
    HeaderTop,
    FooterBottom
  },
  computed: {
    codeLength(vm) {
      return vm.phoneCode.length;
    }
  },
  methods: {
    goToCode() {
      this.$router.push("/code");
    },
    bindSendCode() {
      this.hintText = '已发送验证码至'+this.phone;
      this.sendButtonText = 60 + "秒后重发";

      let timer = setInterval(() => {
        if (this.sendButtonText[0] <= 0) {
          this.sendButtonText = "重新发送";
          clearInterval(timer);
          return;
        }
        this.sendButtonText = countDown(this.sendButtonText) + "秒后重发";
      }, 1000);

      axios
        .post("/api/sendCode", {
          telephone: this.phone
        })
        .then(res => {
          // console.log(res);
        })
        .catch(function(error) {
          // console.log(error);
        });
    },
    bindPhoneCode(event) {
      this.error = false
      this.hintText = '已发送验证码至'+this.phone;
      if (event.target.value.length > 4) {
        this.phoneCode = event.target.value.substr(0, 4);
      }
    },
    bindLogin() {
      const _this = this;
      axios
        .post("/api/login", {
          telephone: this.phone,
          code: this.phoneCode
        })
        .then(res => {
          if (res.status === "success") {
            _this.hintText = "登录成功";
          } else {
            _this.hintText = res.message;
          }
        })
        .catch(() => {
          _this.error = true
          _this.hintText = "验证码错误或者已失效";
        });
    }
  },
  created() {
    this.phone = this.$route.query.phone;
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
    display: flex;
    justify-content: space-between;
    .sendButton {
      color: #a98054;
    }
  }
  .inpWarp {
    position: relative;
    // 应该是32，与上面 margin-bottom重合了
    margin-top: px(50);
    line-height: px(48);
    font-size: px(36);
    color: #53402f;
    margin-bottom: px(32);
    .number {
      display: flex;
      justify-content: space-around;
      li {
        width: px(72);
        height: px(72);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: px(10);
        background: rgba(169, 128, 84, 0.1);
        border: 1px solid rgba(169, 128, 84, 0.5);
        color: #a98054;
      }
    }
    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
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
      box-shadow: 0 px(16) px(32) 0 rgba(167, 91, 0, 0.5);
      &.disable {
        color: #846b4f;
        background: #674826;
        box-shadow: 0 8px 16px 0 rgba(42, 36, 30, 0.5);
      }
    }
  }
}
</style>
