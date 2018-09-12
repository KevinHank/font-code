<template>
	<div>
		<topbar>
		
		</topbar>
		<div class="page-container row-fluid container-fluid">
			<sidebar>
			
			</sidebar>
			<router-view>
				
			</router-view>
		</div>
	</div>
</template>

<script>
	
import Topbar from '../layout/Topbar.vue'
import Sidebar from '../layout/Sidebar.vue'

import {mapState, mapGetters, mapActions} from 'vuex'
import axios from 'axios';
import router from '../router';
 
var returnServer = window.location.protocol + '//' + window.location.host;
export default{
  components:{
    "topbar":Topbar,
    "sidebar":Sidebar
  },
  return(){

  },
  methods: {
    ...mapActions('userLogin', [
      'getLoginCustomerInfo'
    ]),
    ...mapActions("sideBarControl", [
      "toggleSideBar"
    ])
  },
  mounted: function(){
  },
  computed: { 
    ...mapState({
      loginState: state => state.userLogin.loginState
    })
  },
  created : function() {
    //如果已经登录, 直接跳到大厦board
    if (this.loginState) {
      router.replace({
        path: "/dashboard"
      });
    } 
  }
}

</script>

<style lang="scss">

</style>
