<template>
  <div class="">
    <HeaderTop type="close"  :href="path"></HeaderTop>
  </div>
</template>

<script>
import HeaderTop from "../components/headerTop.vue";
import FooterBottom from "../components/footerBottom.vue";

export default {
  data(){
    return {
      path:''
    }
  },
  components: {
    HeaderTop,
    FooterBottom
  },
  beforeRouteEnter(to, from,next){
    next(vm=>{
      vm.path = (from.path).substr(1)
    })
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
</style>
