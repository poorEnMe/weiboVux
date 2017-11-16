<template>
  <div>
    <entries v-show="selectId === 0"></entries>
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
