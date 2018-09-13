//es6的导入方式 commonjs const Vue = require('vue')
import Vue from 'vue'
import VueRouter from 'vue-router'


// 集成VueRouter,基于Vue
Vue.use(VueRouter)


// 导入组件
import goodslist from '../components/goods/goodslist.vue'
import goodsinfo from '../components/goods/goodsinfo.vue'
import shopcart from '../components/shopcart/shopcart.vue'

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
        }
    ]
})



//es6的导出 相当于 commonjs module.exports = routerr
export default router