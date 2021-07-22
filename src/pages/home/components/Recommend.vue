<template>
  <div>
    <div class="title">推荐详情</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
   return {
    recommendList: [{
        id: '0001',
        imgUrl: 'https://pic.qyer.com/zhuanlan/article/20210312/864356425875/300x200',
        title: '最世界榜单：一生必去的50个地方',
        desc: '世界那么大，一生是否有足够的时间用脚步丈量世界的每一个角落？'
      }, {
        id: '0002',
        imgUrl: 'https://pic.qyer.com/zhuanlan/article/20210312/864356425875/300x200',
        title: '最世界榜单：一生必去的50个地方',
        desc: '世界那么大，一生是否有足够的时间用脚步丈量世界的每一个角落？'
      }, {
        id: '0003',
        imgUrl: 'https://pic.qyer.com/zhuanlan/article/20210312/864356425875/300x200',
        title: '最世界榜单：一生必去的50个地方',
        desc: '世界那么大，一生是否有足够的时间用脚步丈量世界的每一个角落？'
      }, {
        id: '0004',
        imgUrl: 'https://pic.qyer.com/zhuanlan/article/20210312/864356425875/300x200',
        title: '最世界榜单：一生必去的50个地方',
        desc: '世界那么大，一生是否有足够的时间用脚步丈量世界的每一个角落？'
      }, {
        id: '0005',
        imgUrl: 'https://pic.qyer.com/zhuanlan/article/20210312/864356425875/300x200',
        title: '最世界榜单：一生必去的50个地方',
        desc: '世界那么大，一生是否有足够的时间用脚步丈量世界的每一个角落？'
      }, {
        id: '0006',
        imgUrl: 'https://pic.qyer.com/zhuanlan/article/20210312/864356425875/300x200',
        title: '最世界榜单：一生必去的50个地方',
        desc: '世界那么大，一生是否有足够的时间用脚步丈量世界的每一个角落？'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top 0.4rem
    margin-bottom .2rem
    line-height .8rem
    padding 0 .25rem
    font-size 0.40rem
    font-weight bold
  .item
    display flex
    height 1.9rem
    overflow hidden
    padding .24rem 0.2rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem .1rem .1rem 0
      border-radius 0.2rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        font-size: .32rem
        font-weight: 700
        color: rgba(0,0,0,.9)
        line-height: .48rem
        margin: 0;
        max-height: 0.9rem
        ellipsis()
      .item-desc
        font-size: .26rem
        color: rgba(0,0,0,.60)
        line-height: .4rem
        margin-top .2rem
        ellipsis()
      .item-button
        background #ff9300
        padding 0 .2rem
        text-align right
        margin-top .2rem
        border-radius 0.12rem
        color #fff
        line-height .44rem
</style>
