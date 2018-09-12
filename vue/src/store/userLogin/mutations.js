//只支持同步操作，用户修改state的数据
import * as type from "./mutation_types.js"
import { Notification } from 'element-ui';
export default { 
	[type.LOGINED](state, loginState) {
		state.loginState = loginState;
	},
	[type.USER_INFO](state, customer) {
		state.customer = customer;
	},
	[type.LOGOUT_URL](state, logoutURL) {
		state.logoutURL = logoutURL;
	},
	[type.MENU_LIST](state, nodes) {
		state.nodes = nodes;
	}
}