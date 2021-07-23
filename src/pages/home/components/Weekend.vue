<template>
  <div>
    <div class="title">旅程游记</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
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
