<template>
  <div>
    <x-header class="indexHeader" title="weibo" :left-options="{showBack: false}"
              :right-options="{showMore: true}" @on-click-more="showMenus = true">
      <!--<a slot="right">Feedback</a>-->
    </x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>
<script>
  import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
  import navbar from '../components/navbar.vue'
  import entries from '../components/entries.vue'
  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Actionsheet,
      ButtonTab,
      ButtonTabItem
    },
    data () {
      return {
        menus: {
          menu1: '发微博',
          menu2: '搜索'
        },
        showMenus: false
      }
    }
  }
</script>
<style>
  .indexHeader{
    font-weight: bold;
  }
</style>
