import Vue from 'vue'
import moment from 'moment'

// 如果不是基于Vue的插件，不要使用Vue.use

//定义全局过滤器
Vue.filter('dateFmt', (input, formatString = 'MMM Do YYYY,h:mm:ss a') => {
    return moment(input).format(formatString); // 九月 9日 2018, 4:24:37 下午

})