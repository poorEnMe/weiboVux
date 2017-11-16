<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '../../node_modules/vux/src/styles/reset.less';

body {
  background-color: rgba(253,164,164,0.05);
}
</style>
