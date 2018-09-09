import Vue from 'vue'
import App from './App.vue'
// 在浏览器端建议使用 import es6的module形式导入模块
import router from './router/index.js'
import ElementUI from 'element-ui'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
        loading: require('./statics/site/images/01.gif')
    })
    // 集成ElementUI
Vue.use(ElementUI) // 其实在注册组件

import 'element-ui/lib/theme-chalk/index.css'


// 导入过滤器
import './filters/index.js'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')