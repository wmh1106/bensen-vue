<template>
  <div class="swiper-box">
    <div class="swiper-wrap" ref="swiper-wrap">
      <ul class="swiper"  ref="swiper">
        <li class="swiper-item"
          v-for="(item,index) in slist"
          :key="index"
          :style="{backgroundImage:`url(${item})`}"
          ref="swiper-item"
        ></li>
      </ul>
    </div>
    <ul class="pagination">
      <li v-for="(item,index) in slist " :key="index" :class="{active:index ===currentPageIndex}">
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      scroll: null,
      currentPageIndex: 0
    }
  },
  props: {
    slist: Array
  },
  watch: {
    slist () {
      this.initScroll()
    }
  },
  methods: {
      initScroll: function () {
          this.$refs.swiper.style.width = this.slist.length + '00%'

          this.$nextTick(() => {
              if (!this.scroll) {
                  this.scroll = new BScroll(this.$refs['swiper-wrap'], {
                      scrollX: true,
                      scrollY: false,
                      snap: {
                          wheel: true,
                          threshold: 0.5
                      }
                  })
                  this.scroll.on('scrollEnd', () => {
                      this.currentPageIndex = this.scroll.getCurrentPage().pageX
                  })
              } else {
                  this.scroll.refresh()
              }
          })
      }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/varibles.scss";
.swiper-box {
  position: relative;
  width: 100%;
  height: px(204 * 2);
  overflow: hidden;

  .swiper-wrap {
    width: 100%;
    height: px(204 * 2);
    overflow: hidden;
    .swiper {
      height: px(204 * 2);
      overflow: hidden;
      display: flex;
    }
    .swiper-item {
      flex-shrink: 0;
      width: 100vw;
      height: 100%;
      overflow: hidden;

      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% auto;
    }
  }

  .pagination {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: px(25 * 2);
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: px(8 * 2);
      height: px(8 * 2);
      margin: 0 px(5 * 2);
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);

      &.active {
        background: rgba(255, 255, 255, 1);
      }
    }
  }
}

</style>
