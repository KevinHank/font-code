<template>
  <div class="page-sidebar fixedscroll">
    <!-- MAIN MENU - START -->
    <div class="page-sidebar-wrapper" id="main-menu-wrapper">

      <!-- USER INFO - START -->
      <div class="profile-info row">

        <div class="profile-image col-xs-4">
          <a href="javascript: void(0)">
            <img alt="" src="static/assets/images/profile.jpg" class="img-responsive img-circle">
          </a>
        </div>

        <div class="profile-details col-xs-8">
          <h3>
            <a href="javascript: void(0)">用户名: {{customer.name}}</a>

            <!-- Available statuses: online, idle, busy, away and offline -->
            <span class="profile-status online"></span>
          </h3>

          <!-- <p class="profile-title">普通用户</p> -->

        </div>

      </div>
<!-- USER INFO - END -->
      <ul class='wraplist'>
        <el-menu :default-active="$route.path" :router='true' class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :unique-opened="false">
          <template  v-for="(item , index) in menus">
            <!-- 只有父节点，没有子节点的菜单 -->
            <el-menu-item :index="item.interceptUrl" v-if="item.subMenus == null"  :key="index">
              <i :class="item.iconClass" style="position: relative;top: -1px;margin-right: 5px;"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>

            <!-- 有子节点的菜单 -->
        　　<el-submenu :index="index + ''" v-else :key="index">
              <template slot="title">
                <i :class="item.iconClass" style="position: relative;top: -1px;margin-right: 5px;"></i>
                <span slot="title">{{item.name}}</span>
              </template>

          　　<el-menu-item v-for="itemChild in item.subMenus" :index="itemChild.interceptUrl" @click="jumpToUrl(itemChild.interceptUrl,itemChild)" :key="itemChild.name">
                <i :class="itemChild.iconClass" style="position: relative;top: -1px;margin-right: 5px;"></i>
                <span slot="title">{{itemChild.name}}</span>
          　　</el-menu-item>

            </el-submenu>
      　</template>
        </el-menu>
      </ul>
    </div>
    <!-- MAIN MENU - END -->
  </div>
</template>

<script>
  import {
    mapGetters,
    mapState
  } from 'vuex'
  import axios from "axios"
  import router from '../router';
  export default {
    data() {
      return {
        openeds: ["0","1"],
        //所有的router菜单url
        allMenuUrls : [],
        //默认需要跳转的router
        defaultUrl : "",
        //默认需要跳转的其他地址
        defaultOtherUrl : "",
        //需要过滤的,不会跳转的url(不属于菜单,但是能够独立访问)
        notMenuUrls : ["/eship/orderDetail.html", "/eship/order-detail.html", "/eship/edit-format.html", "/eship/examine-task-process.html", "/eship/print-model-edit.html"],
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
      //子系统间跳转方法
      jumpToUrl : function(url,menu){
        if(!!!menu){
          //如果没传菜单 直接跳转
          window.location.href = url;
        }
        if(!!menu && !menu.isRouter){
          // 如果传了菜单，并且不是router类型的，就跳转
          window.location.href = url;
        }

      },

      //退出
      logout() {
            
        },

    },
    computed: {
      ...mapState({
        "customer": state => state.userLogin.customer,
        "menus": state => state.userLogin.nodes,
      }),
    },
    mounted : function (){
    }
  }

</script>

<style lang="scss">
  #main-menu-wrapper .el-menu {
    border: none 0 !important;
  }

  .el-menu-item,
  .el-submenu__title {
    height: 40px !important;
    line-height: 40px !important;
    padding: 0 16px 0 24px !important;
  }

  .el-menu-item.is-active {
    background: #13ce66 !important;
    color: #fff !important;
    border-radius:4px !important;
  }

  .el-menu-item.is-active:hover {
    background-color: #13ce66 !important;
  }

  .el-submenu .el-menu-item {
    height: 40px !important;
    line-height: 40px !important;
    margin: 4px 10px 4px 10px !important;
    padding:0 16px 0 34px !important;
  }
.profile-info .profile-details h3 {
    margin: 10px 0 5px 0 !important;
    text-overflow: ellipsis !important;
    white-space: normal !important;
    word-wrap: break-word !important;
}
.el-menu--collapse{
  width:60px !important;
}
.el-menu-item, .el-submenu__title{
      // padding-left: 8px !important;
}
#main-menu-wrapper ul.wraplist{
  margin-top:4px !important;
}
</style>
