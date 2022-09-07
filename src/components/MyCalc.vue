<template>
  <div>
    <div class="main">
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }}
    </div>
    <div class="keyboard">
      <button @click="calc(0)">+</button>
      <button @click="calc(1)">-</button>
      <button @click="calc(2)">*</button>
      <button @click="calc(3)">/</button>
      <button @click="calc(4)">^</button>
      <button @click="calc(5)">//</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCalc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0
  }),
  methods: {
    calc (param) {
      if (param === 0) {
        this.result = this.op1 + this.op2
      } else if (param === 1) {
        this.result = this.op1 - this.op2
      } else if (param === 2) {
        this.result = this.op1 * this.op2
      } else if (param === 3) {
        this.result = this.op1 / this.op2
      } else if (param === 4) {
        this.result = this.op1 ** this.op2
      } else if (param === 5) {
        this.result = ~~(this.op1 / this.op2)
      }
    }
  }
}
</script>

<style scoped>

</style>
