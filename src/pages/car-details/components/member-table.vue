<template>
  <ul class="member-table">
    <li class="header">
      <div></div>
      <div><span class="common">普通会员</span></div>
      <div><span class="golden">金卡会员</span></div>
      <div><span class="black">黑卡会员</span></div>
    </li>
    <li class="content" v-for="(item,index) of memberTable" :key="item.id">
      <div class="time">{{item.text}}</div>
      <div class="price" v-for="(price,idx) of item.price" :key="idx">
        {{ index == memberTable.length-1 ? price +'/万': price +'/天' }}
      </div>
    </li>
  </ul>
</template>
<script>
    export default {
        props: {
            memberTable: {
                type: Array
            }
        }
    }
</script>
<style lang="scss" scoped>
  @function px( $px) {
    @return $px*2*2/100+rem;
  }

  .member-table {
    margin-left: px(16);
    margin-right: px(16);
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(169, 128, 84, 0.15);
    & > li {
      height: px(49);
      border-bottom: 1px solid rgba(169, 128, 84, 0.15);
    }
    & > .header {
      display: flex;
      & > div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        display: inline-block;
        line-height: px(24);
        padding-left: px(4);
        padding-right: px(4);
        font-size: 12px;
        border-radius: px(2);
      }
      .common {
        color: #f4f4f4;
        background: rgba(255, 255, 255, 0.1);
      }
      .golden {
        color: #f4f4f4;
        background: #a98054;
      }
      .black {
        color: #f4f4f4;
        background: #222222;
      }
    }
    & > .content {
      display: flex;
      & > div {
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        &:nth-last-child(1) {
          border-right: none;
        }
      }
      & > div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: px(12);
        &.price {
          color: #a98054;
        }
      }
    }
  }
</style>
