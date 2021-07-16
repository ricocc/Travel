<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img src="https://fes.qyerstatic.com/FoRfPUtUloa5MqNwOv5iIcqQ4rHv?imageslim" alt="">
      </div>
      <p class="icon-info">游记</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .icons
    width 100%
    overflow hidden
    height 0
    padding-bottom  50%
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
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor

</style>
