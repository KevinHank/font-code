import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '../components/Login'
import Home from '../components/Home'

import Form from '../pages/Form'
import User from '../pages/User'

import axios from 'axios';

Vue.use(Router)


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
	if(to.path == "/login"){
		console.log(1);
		//未登录，跳转到/login或/regist的请求；不需拦截
		next();
	}else if (to.path == "/system/form.html"){
		console.log(2);
		//处理默认跳往首页的，如果是注册界面的需要停留在注册界面
		next({
			//path: "/dashboard",
		})
	}else{
		//校验是否登录
    let self = this;
    if(to.path == "/"){
			console.log(3);
      //访问根目录，定向到首页
      next({
        path: "/dashboard",
      })
    }else{
			console.log(4);
			console.log('=====>', to.path)

      //已登录
      next();
    }
		// axios.get(global.urlPrefix + "/subject/isLogin")
		// 	.then(response => {
		// 		if(response.data.flag){
		// 			if(to.path == "/"){
		// 				//访问根目录，定向到首页
		// 				next({
		// 					path: "/dashboard",
		// 				})
		// 			}else{
		// 				//已登录
		// 				next();
		// 			}

		// 		}else{
		// 			//未登录
		// 			next({
		// 				path: "/login",
		// 			})
		// 		}
		// 	}).catch(response =>{
		// 		//未登录
		// 		next({
		// 			path: "/login",
		// 		})
		// 	});
	}
})

export default router
