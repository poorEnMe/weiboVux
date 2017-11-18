<template>
  <div>
    <transition name="slide-fade"
    >
      <entries v-show="selectId === 0"></entries>
    </transition>

  </div>
</template>
<script>
  import entries from '../components/entries.vue'
  import bus from '../components/bus.vue'
  export default {
    components: {
      entries
    },
    mounted:function () {
      this.getTarItemId();
    },
    data () {
      return {
        selectId:0
      }
    },
    methods:{
      getTarItemId(){
        bus.$on('id-selected',(id)=>{
          this.selectId = id;
        });
      }
    }
  }
</script>
<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-10px);
    opacity: 0;
  }
</style>
