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
    <div class="number">{{currentPageIndex+1}}/{{slist.length}}</div>
    
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
                      momentum: false, // 当快速滑动时是否开启滑动惯性
                      snap: { // 为slider组件使用
                          loop: this.loop, // 是否无缝循环轮播
                          threshold: 0.3, // 用手指滑动时页面可切换的阀值，大于这个阀值时可以滑动到下一页
                          speed: 400 // 轮播图切换的动画时间
                      },
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
  @function px( $px) {
    @return $px*2*2/100+rem;
  }
.swiper-box {
  position: relative;
  width: 100%;
  height: px(204 );
  overflow: hidden;

  .swiper-wrap {
    width: 100%;
    height: px(204 );
    overflow: hidden;
    .swiper {
      height: px(204 );
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
}

.number{
  position: absolute;
  right: 0; bottom: 0;
  color: #fff;
  background: rgba(0,0,0,0.5);
  padding: px(3) px(10);
  border-radius: px(10);
  font-size: px(12);
  margin:px(5);
}
</style>
