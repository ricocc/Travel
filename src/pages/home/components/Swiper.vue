<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" width="100%">
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://pic.qyer.com/public/mobileapp/homebanner/2021/07/01/16251057836079/640'
      },
      {
        id: '0002',
        imgUrl: 'https://pic.qyer.com/public/mobileapp/homebanner/2021/06/30/16250197876706/640'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active
    background #fff
  overflow hidden
  width 100%
  height 0
  padding-bottom 39.22%
  background #f0f0f0
</style>
