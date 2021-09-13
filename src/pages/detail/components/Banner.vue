<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/3/16812ae616c420f4~tplv-t2oaga2asx-watermark.awebp" alt="">
            <div class="banner-info">
                <div class="banner-title">aasda</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe607;</span>99</div>
            </div>

        </div>
        <common-gallary
            :imgs="imgs"
            v-show="showGallary"
            @close="handleGallaryClose"></common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary: false,
            imgs: ['https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd07aa48b85d40bb9518da9dae0d63ea~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp', 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54b9552d07e3448c807df981f265eda1~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp']
        }
    },
    components: {
        CommonGallary
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
        .banner-title
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-number
            padding 0 .4rem
            height 0.32rem
            margin-top .14rem
            line-height .32rem
            border-radius .2rem
            font-size .24rem
            .banner-icon
                font-size .24rem
</style>
