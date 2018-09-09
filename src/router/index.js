// es6导入方式
import Vue from 'vue'
import VueRouter from 'vue-router'


// 集成VueRouter
Vue.use(VueRouter)


// 导入组件
import goodslist from '../components/goods/goodslist.vue'
// import goodslist from '../components/goods/goodslist.vue'

// 创建路由对象,设置路由规则,自动注册组件
const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/goodslist'
        },
        {
            path: '/goodslist',
            component: goodslist
        }
    ]
})



//es6的导出 相当于 commonjs module.exports = routerr
export default router