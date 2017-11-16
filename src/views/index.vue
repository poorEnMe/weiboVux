<template>
  <div>
    <nav-header></nav-header>
    <navbar></navbar>
    <weibo-body></weibo-body>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  import navbar from '../components/navbar.vue'
  import navHeader from '../components/xHeader.vue';
  import weiboBody from './body.vue'
  export default {
    components: {
      navHeader,
      navbar,
      weiboBody
    },
    data () {
      return {
      }
    }
  }
</script>


