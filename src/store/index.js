// 生成Vuex
import Vue from 'vue'
import VueX from 'vuex'
import {
    addLocalGoods,
    getTotalCount,
    updateLocalGoods,
    deleteLocalGoodsById
} from '../common/localStorageTool.js';

// 集成vuex
Vue.use(VueX)

// 创建空白仓库
const store = new VueX.Store({
    state: {
        buyCount: 0
    },
    getters: {
        // 获取仓库中购物数量的方法
        getBuyCount: state => {
            return state.buyCount > 0 ? state.buyCount : getTotalCount()
        }
    },
    mutations: {
        // goods === {goodsId:87,count:3}
        addGoods(state, goods) {
            state.buyCount = addLocalGoods(goods)
        },
        // 参数 goods === {goodsId:87,count:3}
        updateGoods(state, goods) {
            state.buyCount = updateLocalGoods(goods)
        },
        //参数 goodsId:87
        deleteGoodsById(state, goodsId) {
            state.buyCount = deleteLocalGoodsById(goodsId)
        }
    }
})

// 导出
export default store