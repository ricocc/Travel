<template>
  <div>
    <div class="title">旅程游记</div>
    <ul>
      <li class="item border-bottom" v-for="item of WeekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-time">{{item.time}}</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
   return {
    WeekendList: [{
        id: '0001',
        imgUrl: 'http://pic.qyer.com/zhuanlan/article/20210307/982398196989?imageMogr2/auto-orient/thumbnail/!670x300r/gravity/Center/crop/670x300/format/jpg|imageslim',
        title: '半城烟火半城仙，没有人不会爱上这座“众神之城”！',
        desc: '清明节三日小长假“嗖”地一下就没了，大部分社畜已经在静候五一劳动节了 ！再上19天的班，上半年最长的小长假就要来了！！...',
        time: '2月22日, 2021'
      }, {
        id: '0002',
        imgUrl: 'http://pic.qyer.com/zhuanlan/article/20210307/982398196989?imageMogr2/auto-orient/thumbnail/!670x300r/gravity/Center/crop/670x300/format/jpg|imageslim',
        title: '半城烟火半城仙，没有人不会爱上这座“众神之城”！',
        desc: '清明节三日小长假“嗖”地一下就没了，大部分社畜已经在静候五一劳动节了 ！再上19天的班，上半年最长的小长假就要来了！！...',
        time: '2月22日, 2021'
      }, {
        id: '0003',
        imgUrl: 'http://pic.qyer.com/zhuanlan/article/20210307/982398196989?imageMogr2/auto-orient/thumbnail/!670x300r/gravity/Center/crop/670x300/format/jpg|imageslim',
        title: '半城烟火半城仙，没有人不会爱上这座“众神之城”！',
        desc: '清明节三日小长假“嗖”地一下就没了，大部分社畜已经在静候五一劳动节了 ！再上19天的班，上半年最长的小长假就要来了！！...',
        time: '2月22日, 2021'
      }, {
        id: '0004',
        imgUrl: 'http://pic.qyer.com/zhuanlan/article/20210307/982398196989?imageMogr2/auto-orient/thumbnail/!670x300r/gravity/Center/crop/670x300/format/jpg|imageslim',
        title: '半城烟火半城仙，没有人不会爱上这座“众神之城”！',
        desc: '清明节三日小长假“嗖”地一下就没了，大部分社畜已经在静候五一劳动节了 ！再上19天的班，上半年最长的小长假就要来了！！...',
        time: '2月22日, 2021'
      }, {
        id: '0005',
        imgUrl: 'http://pic.qyer.com/zhuanlan/article/20210307/982398196989?imageMogr2/auto-orient/thumbnail/!670x300r/gravity/Center/crop/670x300/format/jpg|imageslim',
        title: '半城烟火半城仙，没有人不会爱上这座“众神之城”！',
        desc: '清明节三日小长假“嗖”地一下就没了，大部分社畜已经在静候五一劳动节了 ！再上19天的班，上半年最长的小长假就要来了！！...',
        time: '2月22日, 2021'
      }, {
        id: '0006',
        imgUrl: 'http://pic.qyer.com/zhuanlan/article/20210307/982398196989?imageMogr2/auto-orient/thumbnail/!670x300r/gravity/Center/crop/670x300/format/jpg|imageslim',
        title: '半城烟火半城仙，没有人不会爱上这座“众神之城”！',
        desc: '清明节三日小长假“嗖”地一下就没了，大部分社畜已经在静候五一劳动节了 ！再上19天的班，上半年最长的小长假就要来了！！...',
        time: '2月22日, 2021'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top 0.4rem
    line-height .8rem
    padding 0 .25rem
    font-size 0.40rem
    font-weight bold
  .item
    display flex
    flex-direction column
    overflow hidden
    padding .36rem 0.2rem 0.24rem
    .item-img-wrapper
      width 100%
      .item-img
        width 100%
        height auto
        border-radius 0.2rem
    .item-info
      padding 0.24rem 0
      min-width 0
      .item-title
        font-size: .32rem
        font-weight: 600
        color: rgba(0,0,0,.9)
        line-height: .48rem
        margin: 0;
        max-height: 0.9rem
        ellipsis()
      .item-desc
        font-size: .26rem
        color: rgba(0,0,0,.60)
        line-height: .4rem
        margin-top .1rem
        ellipsis()
      .item-time
        padding 0 .1rem
        text-align right
        margin-top .1rem
        border-radius 0.12rem
        color rgba(0,0,0,.40)
        line-height .24rem
        font-size 0.2rem
        background none
</style>
