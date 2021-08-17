<template>
  <div class="header">
    城市选择
    <router-link to="/">
        <div class="iconfont header-back">&#xe601;</div>
    </router-link>

  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  display flex
  overflow hidden
  height $headerHeight
  background $bgColor
  color #fff
  align-items center
  justify-content center
  text-align center
  margin 0 auto
  font-size .32rem
  .header-back
    position absolute
    top 0
    left 0
    bottom 0
    width .64rem
    line-height $headerHeight
    text-align center
    font-size .4rem
    margin-left .12rem
    color #fff
</style>
