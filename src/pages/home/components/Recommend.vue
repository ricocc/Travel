<template>
  <div>
    <div class="title">推荐详情</div>
    <ul>
      <li class="item">
        <div class="item-img-wrapper">
          <img src="" class="item-img" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">最世界榜单：一生必去的50个地方（国内篇）</p>
          <p class="item-desc">世界那么大，一生是否有足够的时间用脚步丈量世界的每一个角落？</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend'
}
</script>
<style lang="stylus" scoped>
  .title
    marin-top .1rem
    line-height .8rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
</style>
