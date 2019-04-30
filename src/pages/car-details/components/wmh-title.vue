<template>
    <div class="header">
        <div class="top">
            <h3>{{zh}}</h3>
            <router-link :to="link" class="more" v-if="link">More</router-link>
        </div>
        <p class="en">{{en}}</p>
    </div>
</template>

<script>
    export default {
        name: 'wmh-title',
        props: {
            zh: {
                type: String,
                required: true
            },
            en: {
                type: String,
                required: true
            },
            link: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @function px( $px) {
        @return $px*2*2/100+rem;
    }
    .header {
        padding-bottom: px(20);
        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: px(4);
        }
        h3 {
            font-size: px(18);
            color: #d9d9d9;
            font-weight: normal;
            line-height: px(24);
        }
        .more {
            position: relative;
            font-size: 13px;
            color: #424242;
            text-decoration: none;
            padding-right: px(16);
            /*background: url("./image/more.png") no-repeat center right px(3);*/
            background-size: px(12) px(12);
            &::after {
                content: "";
                position: absolute;
                right: 0;
                top: px(-10);
                width: 150%;
                height: px(40);
            }
        }
        .en {
            font-size: px(14);
            color: #383838;
            line-height: px(20);
        }
    }
</style>
