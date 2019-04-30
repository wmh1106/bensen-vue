<template>
    <div v-if="bgImage" class="page">
        <img class="img" :src="bgImage" alt="" v-if="share">
        <div class="title-wrap">
            <wmh-title :zh="title.zh" :en="title.en" ></wmh-title>
        </div>
        <div class="content">
            <p v-html="content"></p>
        </div>
    </div>
</template>
<script>

    import wmhTitle from '@/assets/components/wmh-title.vue'
    import { getHrefData } from "@/assets/js/utility.js";
    import axios from 'axios'
    import {host} from "@/assets/js/api.js"
    export default {
        components: {
            wmhTitle
        },
        data () {
            return {
                bgImage: '',
                title: {},
                content: '',
                share:false
            }
        },
        created () {
            const hrefData = getHrefData();
            if(hrefData.isShare){
                this.share = true
            }
            axios.get(host + '/api/companys/' + 1).then((res) => {
                const { status, data } = res.data
                if (status === 'success') {
                    this.title.zh = data.about_name_zh
                    this.title.en = data.about_name_en
                    this.bgImage = data.image

                    this.content = data.company.detail.introduce.replace(/\n/g, '<br />')
                }
            })
        }
    }
</script>
<style lang="scss">
    @function px( $px) {
        @return $px*2*2/100+rem;
    }
    .page{
        background: #202020;
    }
    .img {
        width: 100%;
    }
    .title-wrap{
        padding: px(20) px(16) 0;
    }
    .content {
        color: #666;
        padding: 0 px(16) 0;
        p {
            font-size: px(16);
            line-height: px(24);
            padding-bottom: 1em;
        }
    }
</style>
