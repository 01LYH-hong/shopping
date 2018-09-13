const KEY = "goods"

// 先取出本地已有的数据
const getLocalGoods = () => {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
}


// 统计本地最新的商品的总数
const getTotalCount = () => {
    // {87:3,88:2}
    const localGoods = getLocalGoods()

    let totalCount = 0
    for (const key in localGoods) {
        totalCount += localGoods[key]
    }

    return totalCount
}

/**供Vuex调用的，把商品存储到本地 */
/**
 * {goodsId:90,count:2}
 * 
 *  key                     value
 * goods                   {87:3,88:2}
 * id作为key，数量作为value，但是如果原先key存在数量要累加
 */
const addLocalGoods = goods => {
    //把goods中的商品存储到本地
    //localGoods === {87:3,88:2}
    const localGoods = getLocalGoods()

    // console.log(goods)
    // console.log(localGoods)
    // 传递过来的goodsId已经在本地有了
    if (localGoods[goods.goodsId]) {
        localGoods[goods.goodsId] += goods.count
    } else {
        localGoods[goods.goodsId] = goods.count
    }
    localStorage.setItem(KEY, JSON.stringify(localGoods))

    return getLocalGoods()
}


// 按需导出,可以导出多个成员,默认导出只能导出一个
export { addLocalGoods, getTotalCount, getLocalGoods }