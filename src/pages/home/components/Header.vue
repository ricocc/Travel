<template>
  <div class="header">
    <div class="header-left">首页</div>
    <div class="header-input">输入</div>
    <div class="header-right">城市</div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
.header
  display: flex
  height: .86rem
  background:#00dc40
  color #fff
  .header-left
    width: .64rem
    float:left
  .header-input
    flex: 1
  .header-right
    width:1.24rem
    float:right
    text-align:center
</style>
