<template>
  <div :offset="46">
    <tab :line-width=1 active-color='orangered' v-model="index">
      <tab-item class="vux-center" :selected="NowSelect === item"
                v-for="(item, index) in list" :key="index"
                @click="NowSelect = item"
                @on-item-click="indexChange(index);">{{item}}</tab-item>
    </tab>

  </div>
</template>
<script>
  import Vue from 'vue';
  import bus from './bus.vue'

  import { Tab, TabItem,Sticky,Swiper, SwiperItem } from 'vux'
  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Swiper,
      SwiperItem
    },
    data () {
      return {
        NowSelect:"微博",
        list:['微博','消息','个人中心'],
        index:0
      }
    },
    methods:{
      indexChange(index){
        bus.$emit('id-selected', index);
      }
    }
  }
</script>
