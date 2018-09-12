import actions from './actions.js';
import mutations from './mutations.js';

const state = {
	loginState: false,
	logoutURL: '',
	customer: {
		email: '',
		loginId: '',
		nickName: '',
		organizationId: '',
		phone: '',
		userId: '',
        roles: []
	},
	nodes: [], //用户菜单,

	isCollapse: false  //侧边菜单
}

export default {
	namespaced: true,
    state,
    actions,
    mutations
}
