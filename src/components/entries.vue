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

    <div>
      <infinite-loading @infinite="infiniteHandler">
        <span slot="no-more">
          到底了
        </span>
      </infinite-loading>
    </div>
  </div>

</template>
<script>
  import {  XTextarea,Group,LoadMore  } from 'vux';
  import axios from 'axios';
  import InfiniteLoading from 'vue-infinite-loading';


  export default {
    components: {
      XTextarea,
      Group,
      LoadMore,
      InfiniteLoading
    },
    mounted:function () {
      //this.getEntries();
    },
    data () {
      return {
        entries:[],
        lastId:'',
        busy:false
      }
    },
    methods:{
      getEntries(){
        axios.get('/Entries')
          .then((res)=>{
            this.entries = res.data.entries ;
            this.lastId = res.data.lastId;
          }).catch((err)=>{
            console.log(`err:${err}`);
        })
      },
      infiniteHandler($state) {
        axios.get('/Entries', {
          params: {
            lastId:this.lastId
          },
        }).then(({ data }) => {
          if (data.entries.length) {
            this.entries = this.entries.concat(data.entries);
            this.lastId = data.lastId;
            $state.loaded();
            if (this.entries.length / 10 === 5) {
              $state.complete();
            }
          } else {
            $state.complete();
          }
        });
      },

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
    font-family:'Arial','Microsoft YaHei';
  }
  .entrybody{
    font-size:15px;
  }
</style>
