<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="logout">退出</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{customer.name}}</span>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import {
    mapGetters,
    mapState,
    mapActions
  } from 'vuex'
  import axios from 'axios';
  import router from '../router';
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    methods: {
      ...mapActions('userLogin', [
        'exitSys'
      ]),
      logout() {
        console.log('logout')
        this.exitSys();

        //到登录页面
        router.replace({
          path: "/"
        });
      }
    },
    computed: {
      ...mapState({
        'customer': state => state.userLogin.customer,
      })
    }
  }

</script>

<style lang="scss" scoped>
  .company-info {
    float: right;
    font-size: 14px;
    line-height: normal;
    text-align: right;
    display: flex;
    align-items: center;
    height: 60px;

    a {
      color: #fff;
      text-decoration: none;
    }
  }

</style>
