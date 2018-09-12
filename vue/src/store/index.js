import Vue from 'vue';
import Vuex from 'vuex';


import userLogin from "./userLogin"

Vue.use(Vuex)
const store = new Vuex.Store({
  modules : {
    //登录模块
    userLogin,
  }
})
export default store;
