<template>
  <header class="headerTop">
    <span @click="goToHere" class="icon" :class="type"></span>
    <span class="title">登录</span>
  </header>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "back"
    },
    href:String
  },
  components: {
    
  },
  methods:{
    goToHere(){
      if(this.href === 'close'){
        location.href = '/'
      }else{
        this.$router.push('/'+this.href)
      }
    }
  },
 
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.headerTop {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: px(88);
  background: #141414;
  .title {
    text-align: center;
    line-height: px(88);
    font-size: px(36);
    display: block;
    color: rgba(255, 255, 255, 0.8);
  }
}
.icon {
  position: absolute;
  left: 0;
  top: 0;
  width: px(104);
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  
  &.back {
    background-image: url("../image/icon_back.png");
    background-size: px(44) px(44);
  }
  &.close {
    background-image: url("../image/icon_close.png");
    background-size: px(40) px(40);
  }
}
</style>
