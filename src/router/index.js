//es6的导入方式 commonjs const Vue = require('vue')
import Vue from 'vue'
import VueRouter from 'vue-router'

import { bus } from '../common/common'

// 集成VueRouter,基于Vue
Vue.use(VueRouter)

//网络请求
import axios from 'axios'
axios.defaults.baseURL = 'http://47.106.148.205:8899/'
    // 跨域时能使用凭证--cookice
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

// 导入组件
import goodslist from '../components/goods/goodslist.vue'
import goodsinfo from '../components/goods/goodsinfo.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import order from '../components/order/order.vue'
import login from '../components/account/login.vue'
import pay from '../components/pay/pay.vue'
import paySuccess from '../components/pay/paySuccess.vue'

// 创建路由对象,设置路由规则,自动注册组件
const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/goodslist'
        },
        {
            path: '/goodslist',
            component: goodslist
        },
        {
            path: '/goodsinfo/:goodsID',
            component: goodsinfo
        },
        {
            path: '/shopcart',
            component: shopcart
        },
        {
            path: '/login',
            component: login
        },

        /*************下面的路由需要验证是否登陆 */
        {
            path: '/order',
            meta: { needLogin: true },
            component: order
        },
        {
            path: '/pay',
            meta: { needLogin: true },
            component: pay
        },
        {
            path: '/paySuccess',
            meta: { needLogin: true },
            component: paySuccess
        }
    ]
})


/**
 * to 想要去的组件的链接
 * from 从哪里来
 * next 控制是否有权限去
 */
router.beforeEach((to, from, next) => {
    // 保存起来你想去的页面
    if (to.fullPath != '/login') {
        //console.log(to.fullpath);
        localStorage.setItem('lastVisitPath', to.fullPath)
    }

    //console.log(to)
    // 判断所有路径
    if (to.path) { //需要先进行登陆判断
        const url = `site/account/islogin`
        axios.get(url).then(res => {
            //console.log(res)
            if (res.data.code === 'logined') {
                // 告诉App.vue 登录成功啦!!!
                bus.$emit('loginSuccess')
            }
        })
    }

    if (to.meta.needLogin) { //需要先进行登陆判断
        const url = `site/account/islogin`
        axios.get(url).then(res => {
            //console.log(res)
            if (res.data.code === 'logined') {
                // 告诉App.vue 登录成功啦!!!
                //bus.$emit('loginSuccess')
                next()
            } else {
                //使用编码式导航,跳转到登陆界面
                router.push({ path: '/login' })
            }
        })
    } else { //不需要验证是否登陆
        next()
    }
})


//es6的导出 相当于 commonjs module.exports = routerr
export default router