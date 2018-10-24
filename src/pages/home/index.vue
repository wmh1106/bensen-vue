<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  created(){
    document.body.style.height = document.documentElement.clientHeight+'px'
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";

.main{
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: px(88);
  background:#333 url('./image/bg.png') no-repeat center bottom;
  background-size: 100% auto ;
  color: #fff;
}
</style>
