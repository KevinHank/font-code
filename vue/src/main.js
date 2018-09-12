// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

axios.interceptors.response.use(
  response => {
      console.log("axios.interceptors.response:"+ response.status);
      if(!response.data.flag && response.data.msg == "LOGIN_FAILED"){
        //没有权限，或登录失败
        var query = {};
        var currentPath = router.currentRoute.fullPath;
        if(currentPath.indexOf("redirect") == -1 && currentPath.indexOf("/login") ==-1){
          query = {
            redirect: currentPath
          }
        }
        router.replace({
          path: '/login',
          query: query  //登录成功后跳入浏览的当前页面
        })
      }

      return response;
    },
    error => {
        if (error.response) {
          console.log("axios.interceptors.response.info:", error.response);
          console.log("axios.interceptors.response.errorCode:"+ error.response.status);
            switch (error.response.status) {
              case 400:
                //400，系统抛出的错误，可以获取到msg
                Notification({
                  type : "error",
                  title : "错误",
                  message : error.response.data.msg
                });
                break;
                case 404:
                //404，处理登出系统，跳转404的问题
                if(error.response.config && error.response.config.url && error.response.config.url.indexOf("/logout") != -1){
                  //退出系统，会重定向到后台根路径，例如：http://sales.eship.com/sales/
                  //这种404不应该弹出报错问题
                }else{
                  Notification({
                    type : "error",
                    title : "请求异常",
                    message : "服务器内部错误：" + error.response.status
                  });
                }
                break;
              default :
                //其他未知的错误，不是系统抛出的
                Notification({
                  type : "error",
                  title : "请求异常",
                  message : "服务器内部错误：" + error.response.status
                });
            }
        }else{
          console.log("error:",error)
          Notification({
            type : "error",
            title : "请求异常",
            message : "服务器内部错误"
          });
        }
        return Promise.reject(error);
  });

