<template>
    <div class="details">
        <swiper :slist="swiper"></swiper>

        <div class="car-name-wrap border-bottom">
            <div class="name">
                <div class="tag1">{{title}}</div>
                <div class="tag2">{{model_en}}</div>
            </div>
            <div class="like">
                <img class="liked" :src="showLikeImg" alt="" srcset="">
                <span>{{likeNumber}}</span>
            </div>
        </div>
        <section class="describe border-bottom">{{describe}}</section>
        <div class="hint">请尽快完成预定，方便门店提前为您准备车辆。</div>

        <member-table :memberTable="memberTable"></member-table>
        <info v-if="info" :info="info" :explain="explain" :headerRental="headerRental" :headerService="headerService"></info>
        <div class="button-box">
            <div href="javascript:;" @click="down" class="reserve">立即下载本森APP</div>
        </div>
    </div>
</template>
<script>

    import axios from "axios";
    import {host} from "@/assets/js/api.js";
    import {getHrefData} from "@/assets/js/utility.js";


    import Swiper from './components/swiper'
    import Info from './components/info'
    import MemberTable from './components/member-table'

    import likeImg from './image/icon-like.png'
    import unLikeImg from './image/icon-unlike.png'

    export default {
        name: 'BSCarDetails',
        components: {
            Swiper,
            MemberTable,
            Info
        },
        data() {
            return {
                carId: -1,
                swiper: [],
                explain: '',
                memberTable: [],
                info: null,
                title: '',
                model_en: '',
                likeNumber: 0,
                describe: '',
                headerRental: {},
                headerService: {},
                likeImg: likeImg,
                unLikeImg: unLikeImg,
                isLike: false
            }
        },
        computed: {
            showLikeImg() {
                return this.isLike ? this.likeImg : this.unLikeImg
            }
        },

        methods: {
            down() {
                let u = navigator.userAgent;
                // app = navigator.appVersion;
                let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //g
                let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                if (isAndroid) {
                    location.href =
                        "http://a.app.qq.com/o/simple.jsp?pkgname=com.mec.benson";
                }
                if (isIOS) {
                    location.href =
                        "https://itunes.apple.com/cn/app/ben-sen-chao-pao/id1176038542?mt=8";
                }
            }
        },

        created() {
            const hrefData = getHrefData();

            axios
                .get(host + "/api/cars/" + hrefData.id)
                .then(res => {
                    const {status, data} = res.data
                    if (status === 'success') {
                        this.swiper = data.images
                        this.explain = data.explain
                        this.memberTable = [
                            {
                                id: 1,
                                text: '一天',
                                price: [data.onePrice, data.glodOnePrice, data.blackOnePrice]
                            }, {
                                id: 2,
                                text: '三天',
                                price: [data.tridPrice, data.glodTridPrice, data.blackTridPrice]
                            }, {
                                id: 3,
                                text: '一周',
                                price: [data.weekPrice, data.glodWeekPrice, data.blackWeekPrice]
                            }, {
                                id: 4,
                                text: '一月',
                                price: [data.monthPrice, data.glodMonthPrice, data.blackMonthPrice]
                            }, {
                                id: 5,
                                text: '押金',
                                price: [data.deposit, data.glodDeposit, data.blackDeposit]
                            }
                        ]
                        this.info = {
                            // 发动机
                            engine: data.engine,
                            // 排量
                            displacement: data.displacement,
                            // 百米加速度
                            upSpeed: data.upSpeed,
                            // 最大速度
                            maxSpeed: data.maxSpeed,
                            // 座位数
                            seat: data.seat,
                            // 最大马力
                            maxPower: data.maxPower,
                            // 顶棚
                            ceiling: data.ceiling
                        }
                        this.title = data.brand_name + ' - ' + data.model
                        this.model_en = data.model_en
                        this.carId = data.id
                        this.likeNumber = data.collection
                        this.describe = data.describe
                        this.headerRental = {
                            zh: data.rental_name_zh,
                            en: data.rental_name_en
                        }
                        this.headerService = {
                            zh: data.service_name_zh,
                            en: data.service_name_en
                        }
                        this.isLike = data.isMark
                    }
                })
                .catch(err => {
                    /* eslint-disable no-console */
                    console.log(err)
                })
        }
    }
</script>
<style lang="scss" scoped>
    @function px( $px) {
        @return $px*2*2/100+rem;
    }

    .details {
        color: #fff;
        background: #141414;
    }

    .title {
        margin-top: px(20);
        margin-left: px(16);
        margin-right: px(16);
        padding-bottom: px(20);
        font-size: px(18);
        color: #bfbfbf;
        h3 {
            font-weight: normal;
        }
        span {
            display: block;
            font-size: px(30);
        }
        &::before {
            border-bottom-color: rgba(169, 128, 84, 0.25);
        }
    }

    .button-box {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: px(50);
        display: flex;

        .reserve {
            flex: 2;
            font-size: px(16 );
            color: #d9d9d9;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #a98054;
        }
    }

    .describe {
        margin-left: px(16);
        margin-right: px(16);
        padding: px(20) 0;
        font-size: px(15);
        color: #808080;
        line-height: px(22);
        &:before {
            border-bottom-color: #303030;
        }
    }

    .car-name-wrap {
        margin-left: px(16);
        margin-right: px(16);
        margin-top: px(20);
        padding-bottom: px(20);
        font-size: 18px;
        color: #D9D9D9;
        display: flex;
        justify-content: space-between;
        .tag1 {
            font-size: px(18);
            color: #D9D9D9;
            line-height: px(24);
        }
        .tag2 {
            font-size: px(14);
            color: #5C5C5C;
            line-height: px(18);
            margin-top: px(4);
        }
        .like {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: px(14);
            color: #5C5C5C;
            img {
                display: block;
                width: px(20);
                height: px(20);
                margin-bottom: px(5);
            }
        }
        &::before {
            border-bottom-color: rgba(169, 128, 84, 0.25);
        }
    }

    .hint {
        margin: px(10) px(16) px(24);
        padding-left: px(24);
        line-height: px(16);
        font-size: px(12);
        color: #5c5c5c;
        padding-top: px(5);
        background: url("./image/icon1.png") no-repeat center left;
        background-size: px(16) px(16);
    }
</style>
