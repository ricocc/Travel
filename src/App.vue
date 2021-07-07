<template>
<!-- 路由就是根据网址的不同, 返回不同的内容给用户 -->
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 显示的是当前路由地址所对应的内容 Hello world 小组件-->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
