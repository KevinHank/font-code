<template>
	<div class='page-topbar'>
		<div class='quick-area'>
			<div class='pull-left'>
				<ul class="info-menu left-links list-inline list-unstyled">
					<li class="sidebar-toggle-wrap">
						<a href="javascript:void(0)"   class="sidebar_toggle">
						<i class="fa fa-bars"></i>
						</a>
					</li>
				</ul>
			</div>
			<div class='pull-right' style="margin-right:50px;">
				<ul class="info-menu right-links list-inline list-unstyled">
					<li class="profile showopacity">
						<a href="#" data-toggle="dropdown" class="toggle">
							<span>用户名: {{customer.name}} <i class="fa fa-angle-down"></i></span>
						</a>
						<ul class="dropdown-menu profile animated fadeIn">
							<li class="last">
								<a href="javascript:void(0)" @click="logout">
									<i class="fa fa-lock"></i> 登出
								</a>
							</li>
						</ul>
					</li>

				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters, mapState, mapActions} from 'vuex'
	import axios from 'axios';
	import router from '../router';
	export default {
		data() {
			return {

			}
		},
		methods: {
            ...mapActions('userLogin', [
                'exitSys'
            ]),
			logout() {
                this.exitSys();
                
                //到登录页面
                router.replace({
                    path: "/"
                });
			}
		},
		computed: {
			...mapState({
				'customer' : state => state.userLogin.customer,
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
