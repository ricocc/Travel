<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe601;</div></div>
    <div class="header-input">
      <span class="iconfont">&#xe603;</span>
      输入城市/景点/主题</div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>

  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display flex
  height $headerHeight
  background $bgColor
  color #fff
  align-items center
  justify-content space-around
  text-align center
  margin 0 auto
  .header-left
    width .64rem
    margin 0 .12rem
    .back-icon
      text-align center
      font-size .4rem
  .header-input
    flex 1
    align-items cente
    height .64rem
    line-height .64rem
    background #fff
    text-align left
    margin 0 .12rem
    padding-left .2rem
    border-radius .1rem
    color #aaa
  .header-right
    min-width 1.04rem
    padding .1rem
    text-align center
    color #fff
    .arrow-icon
      font-size 0.32rem
      margin-left -0.05rem
</style>
