import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '../components/Login'
import Home from '../components/Home'

import Form from '../pages/Form'
import User from '../pages/User'

import axios from 'axios';

Vue.use(Router)

import global from "../components/globalParam.vue"
export const constantRouterMap = [
	{
	  path: '/login', component: Login, name: 'login'
  },
  { path: '/system/',
		component: Dashboard,
    redirect: '/system/dashboard.html',
    children: [
			{ path: 'dashboard.html', component: Dashboard, name: 'dashboard'},
      { path: 'form.html', component: Form, name: 'form'},
      { path: 'user.html', component: User, name: 'user'},
    ]
  }
]

const router = new Router({
  	routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
  console.log('to.path: ', to.path);
	if (to.path == "/login") {
		//未登录，跳转到/login或/regist的请求；不需拦截
		next();
	} else {
		axios.get(global.urlPrefix + "/login/isLogin")
			.then(response => {
				if(response.data.returnResult){
					if(to.path == "/"){
						//访问根目录，定向到首页
						next({
							path: "/system",
						})
					}else{
						//已登录
						next();
					}

				}else{
					//未登录
					next({
						path: "/login",
					})
				}
			}).catch(response =>{
				//未登录
				next({
					path: "/login",
				})
			});
	}
})

export default router
