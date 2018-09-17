import axios from 'axios';
import * as type from "./mutation_types.js"

export default{ 
	async getLoginCustomerInfo ({commit}) {
        console.log('222222222222')
        var userInfo = {
            email: '974536312@qq.commit',
            loginId: '1111',
            name: 'Hukai',
            phone: '17671756796',
            userId: '1'
        }

        commit(type.LOGINED, true);
        commit(type.USER_INFO, userInfo);

        var menuList = [
            {
                "name": "用户中心首页",
                "interceptUrl": "http://customer.17feia.com/#/eship/home.html",
                "iconClass": "glyphicon glyphicon-home",
                "sequence": 1,
                "subMenus": null
            },
            {
                "name": "订单中心",
                "interceptUrl": "/eship/create-order-single.html",
                "iconClass": "glyphicon glyphicon-file",
                "sequence": 2,
                "subMenus": [
                    {
                        "name": "单件下单",
                        "interceptUrl": "http://customer.17feia.com/#/eship/create-order-single.html",
                        "iconClass": "",
                        "sequence": 3,
                        "subMenus": null
                    },
                    {
                        "name": "批量下单",
                        "interceptUrl": "http://customer.17feia.com/#/eship/batch-order.html",
                        "iconClass": "",
                        "sequence": 4,
                        "subMenus": null
                    },
                    {
                        "name": "订单查询",
                        "interceptUrl": "http://customer.17feia.com/#/eship/order-search.html",
                        "iconClass": "",
                        "sequence": 6,
                        "subMenus": null
                    },
                    {
                        "name": "预约取件",
                        "interceptUrl": "http://customer.17feia.com/#/eship/create-reservation-taking.html",
                        "iconClass": "",
                        "sequence": 7,
                        "subMenus": null
                    },
                    {
                        "name": "问题件",
                        "interceptUrl": "http://customer.17feia.com/#/eship/question-order.html",
                        "iconClass": "",
                        "sequence": 8,
                        "subMenus": null
                    },
                    {
                        "name": "扫描出贴",
                        "interceptUrl": "http://customer.17feia.com/#/eship/scan-for-label.html",
                        "iconClass": "",
                        "sequence": 18,
                        "subMenus": null
                    }
                ]
            },
            {
                "name": "财务管理",
                "interceptUrl": "/eship/create-order-single.html",
                "iconClass": "glyphicon glyphicon-yen",
                "sequence": 9,
                "subMenus": [
                    {
                        "name": "余额/充值",
                        "interceptUrl": "http://customer.17feia.com/#/eship/balance-charge.html",
                        "iconClass": "",
                        "sequence": 10,
                        "subMenus": null
                    },
                    {
                        "name": "优惠券",
                        "interceptUrl": "http://customer.17feia.com/#/eship/coupon.html",
                        "iconClass": "",
                        "sequence": 11,
                        "subMenus": null
                    },
                    {
                        "name": "财务订单",
                        "interceptUrl": "http://customer.17feia.com/#/eship/financial-order.html",
                        "iconClass": "",
                        "sequence": 12,
                        "subMenus": null
                    },
                    {
                        "name": "充值消费记录",
                        "interceptUrl": "http://customer.17feia.com/#/eship/consumption-record.html",
                        "iconClass": "",
                        "sequence": 13,
                        "subMenus": null
                    },
                    {
                        "name": "报价查询",
                        "interceptUrl": "http://customer.17feia.com/#/eship/customized-price.html",
                        "iconClass": "",
                        "sequence": 14,
                        "subMenus": null
                    },
                    {
                        "name": "提现申请",
                        "interceptUrl": "http://customer.17feia.com/#/eship/cashout-application.html",
                        "iconClass": "",
                        "sequence": 19,
                        "subMenus": null
                    }
                ]
            },
            {
                "name": "账户信息",
                "interceptUrl": "/eship/create-order-single.html",
                "iconClass": "glyphicon glyphicon-user",
                "sequence": 15,
                "subMenus": [
                    {
                        "name": "个人信息",
                        "interceptUrl": "http://customer.17feia.com/#/eship/user-info.html",
                        "iconClass": "",
                        "sequence": 16,
                        "subMenus": null
                    },
                    {
                        "name": "地址信息",
                        "interceptUrl": "http://customer.17feia.com/#/eship/create-addressbook.html",
                        "iconClass": "",
                        "sequence": 17,
                        "subMenus": null
                    }
                ]
            }
        ]
        commit(type.MENU_LIST, menuList);
    }
};