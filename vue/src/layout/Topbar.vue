<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown @command="command">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出</el-dropdown-item>
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
  import global from "../components/globalParam.vue"

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
      command(value) {
        switch(value) {
          case 'logout':
            this.logout();
        }
      },
      logout() {
        axios.post(global.urlPrefix + "/login/logOut")
          .then(response => {
            if (response.data.returnResult) {
                router.replace({
                  path: "/login"
                });
            }
          })
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
