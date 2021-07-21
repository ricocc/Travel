<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="icon-info">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://fes.qyerstatic.com/FoRfPUtUloa5MqNwOv5iIcqQ4rHv?imageslim',
        desc: '景点名票'
        }, {
        id: '0002',
        imgUrl: 'https://fes.qyerstatic.com/FjiWdzANqPB2Nm0wtDTvrr8HDrsg?imageslim',
        desc: '锦囊'
        }, {
        id: '0003',
        imgUrl: 'https://fes.qyerstatic.com/FsqBlRsF2hnYNrfR9YhCWQqD2j_P?imageslim',
        desc: '问答'
        }, {
        id: '0004',
        imgUrl: 'https://fes.qyerstatic.com/Fvv-TfNa_RKqKW0sTcp2BqwgVJNZ?imageslim',
        desc: '酒店'
        }, {
        id: '0005',
        imgUrl: 'https://fes.qyerstatic.com/Ft-_BNtwDwbLCwNbk8a6JKMx_OME?imageslim',
        desc: '约伴'
        },
        {
        id: '0006',
        imgUrl: 'https://fes.qyerstatic.com/FoRfPUtUloa5MqNwOv5iIcqQ4rHv?imageslim',
        desc: '景点名票'
        }, {
        id: '0007',
        imgUrl: 'https://fes.qyerstatic.com/FjiWdzANqPB2Nm0wtDTvrr8HDrsg?imageslim',
        desc: '锦囊'
        }, {
        id: '0008',
        imgUrl: 'https://fes.qyerstatic.com/FsqBlRsF2hnYNrfR9YhCWQqD2j_P?imageslim',
        desc: '问答'
        }, {
        id: '0009',
        imgUrl: 'https://fes.qyerstatic.com/Fvv-TfNa_RKqKW0sTcp2BqwgVJNZ?imageslim',
        desc: '酒店'
        }, {
        id: '0010',
        imgUrl: 'https://fes.qyerstatic.com/Ft-_BNtwDwbLCwNbk8a6JKMx_OME?imageslim',
        desc: '约伴'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        img
          display block
          margin 0 auto
          width 100%
      .icon-info
        position absolute
        left 0
        right 0
        bottom 0
        height .40rem
        line-height .40rem
        text-align center
        color $darkTextColor
        ellipsis()
</style>
