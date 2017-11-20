<template>
  <div>
    <nav-header name=""></nav-header>
    <h1 style="text-align: center">登录</h1>
    <form>
      <group title="">
        <cell>
          <x-input title=""
                   :debounce="1500"
                   :min="6"
                   :max="20"
                   v-model="account"
                   required
                   placeholder="请输入用户名">
          <img slot="label" style="padding-right:10px;display:block;" src="../assets/login_accMin.png" width="24" height="24">
          </x-input>
        </cell>
        <cell>
          <x-input title=""
                   :debounce="1500"
                   :min="6"
                   :max="20"
                   v-model="xpassword"
                   type="password"
                   required
                   placeholder="请输入密码">
            <img slot="label" style="padding-right:10px;display:block;" src="../assets/login_pswMin.png" width="24" height="24">
          </x-input>
        </cell>



      </group>
          <x-button type="primary"
                    @click.native="loginCheck"
                    :show-loading="isLoading"
                    style="margin: 30px 0">登录</x-button>

    </form>
  </div>
</template>
<script>
  import { XInput, Group, XButton, Cell } from 'vux';
  import navHeader from '../components/xHeader.vue';
  import axios from 'axios';
  export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      navHeader
    },
    data() {
      return {
        account:'',
        xpassword: '',
        iconType: '',
        isLoading:false

      }
    },
    methods: {
      loginCheck: async function(){
        this.isLoading=true;
        let res ={};
        try{
          res = await axios.post('/user/loginCheck',{
            account:this.account,
            xpassword:this.xpassword
          })
        }catch (e){
          console.log(`error${e}`)
        }
        if(res.data){

        }
        this.$router.push({ path: 'main' })
        this.isLoading=false;

      }
    }
  }
</script>
<style>
  form{
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
