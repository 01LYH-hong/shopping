import Vue from 'vue'
import App from './App.vue'
// 在浏览器端建议使用 import es6的module形式导入模块
import router from './router/index.js'
// 导入过滤器
import './filters/index.js'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
    loading: require('./statics/site/images/01.gif')
})

import ElementUI from 'element-ui'
// 集成ElementUI
Vue.use(ElementUI) // 其实在注册组件
import 'element-ui/lib/theme-chalk/index.css'

//网络请求
import axios from 'axios'
axios.defaults.baseURL = 'http://47.106.148.205:8899/'
Vue.prototype.$axios = axios

// 导入仓库store
import store from './store/index.js'

// 注册Vue根实例
new Vue({
    router, //$route $router
    store, //$store
    render: h => h(App)
}).$mount('#app')