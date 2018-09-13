<template>
    <div>
        <div @click='subtract' class="left">-</div>
        <div class="middle">{{count}}</div>
        <div @click='add' class="right">+</div>
    </div>
</template>

<script>
export default {
  props: {
    initCount: Number,
    goodsId  : Number
  },
  created() {
    this.count = this.initCount
  },
  data() {
    return {
      count: 1
    }
  },
  methods: {
    // 点击减1
    subtract() {
      if (this.count <= 1) return
      this.count--

      this.notify()
    },
    // 点击加1
    add() {
      this.count++

      this.notify()
    },
    // 将子组件更新之后的值，传递给父组件
    notify() {
      const goodsList = {
        count  : this.count,
        goodsId: this.goodsId
      }
      // 触发自定义事件，传递载荷
      this.$emit('goodsCountChange', goodsList)
    }
  }
}
</script>

<style scoped>
.left,
.middle,
.right {
  display    : inline-block;
  border     : 1px solid rgba(92, 92, 92, 0.3);
  width      : 30px;
  height     : 30px;
  text-align : center;
  line-height: 30px;
}
.middle {
  width: 35px;
}
</style>

