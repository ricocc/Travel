<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe607;</span>{{this.bannerImgs.length}}</div>
            </div>

        </div>
        <fade-animation>
            <common-gallary
                :imgs="bannerImgs"
                v-show="showGallary"
                @close="handleGallaryClose">
            </common-gallary>
        </fade-animation>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import fadeAnimation from 'common/animation/Animate'
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data () {
        return {
            showGallary: false
        }
    },
    components: {
        CommonGallary,
        fadeAnimation
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
