<template>
  <div>
    <group v-for="entry in entries" key="entry">
      <div class="entryGroup">
        <img src="../assets/userHead.jpg" alt="" class="userHead">
        <span>{{entry.userId.name}}</span>
        <p class="TimeText">{{entry.showTime}}</p>
        <p class="entrybody">{{entry.body}}</p>
      </div>

    </group>
  </div>

</template>
<script>
  import {  XTextarea,Group  } from 'vux'
  import axios from 'axios'

  export default {
    components: {
      XTextarea,
      Group
    },
    mounted:function () {
      this.getEntries();
    },
    data () {
      return {
        entries:[]
      }
    },
    methods:{
      getEntries(){
        axios.get('/getEntries')
          .then((res)=>{
            this.entries = res.data.entries
          }).catch((err)=>{
            console.log(`err:${err}`);
        })
      }
    }
  }
</script>
<style>
  .TimeText {
    color:#808080;
    font-size:10px;
    vertical-align:top;
    margin:0
  }
  .userHead{
    float: left;
    margin-right: 5px;
    border-radius:50%;
  }
  .entryGroup{
    margin: 10px;
    font-family: 'Arial','Microsoft YaHei';
  }
  .entrybody{
    font-size:15px;
  }
</style>
