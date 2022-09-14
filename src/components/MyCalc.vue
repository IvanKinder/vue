<template>
  <div>
    <div class="main">
      <div>
        <p v-if="error">{{ error }}</p>
        <p v-else>Калькулятор</p>
      </div>
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }}
    </div>
    <div class="keyboard">
      <button
        v-for="operation in operations"
        @click="calc(operation)"
        :key="operation">
        {{ operation }}
      </button>
      <div>
        <input type="checkbox" id="checkbox" v-model="keyBoard">
        <label for="checkbox">Показать клавиатуру</label>
      </div>
      <div v-show="keyBoard" class="keys">
        <br>
        <div>
          <input type="radio" id="one" value=0 v-model="selected">
          <label for="one">Op1</label>
          <input type="radio" id="two" value=1 v-model="selected">
          <label for="two">Op2</label>
          <br>
        </div>
        <div>
          <button
            v-for="num in nums"
            @click="addNum(num)"
            :key="num">
            {{ num }}
          </button>
        </div>
      </div>
      <br>
    </div>
    <div class="logs">
      <div v-for="(log, index) in logs" :key="index">
        {{ log }}
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCalc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0,
    error: '',
    operations: ['+', '-', '*', '/', '**', '//'],
    logs: [],
    keyBoard: true,
    selected: 0,
    nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }),
  methods: {
    addNum (num) {
      if (this.selected === 0) {
        this.op1 = num
      } else {
        this.op2 = num
      }
    },
    calc (operator) {
      const {
        op1,
        op2
      } = this
      this.error = ''

      if (this.logs.length === 10) {
        this.logs = []
      }

      switch (operator) {
        case '+':
          this.sum(op1, op2)
          break
        case '-':
          this.sup(op1, op2)
          break
        case '*':
          this.mul(op1, op2)
          break
        case '/':
          this.div(op1, op2)
          break
        case '**':
          this.step(op1, op2)
          break
        case '//':
          this.cel(op1, op2)
          break
      }

      this.logs.push(`${op1} ${operator} ${op2} = ${this.error || this.result}`)
    },
    sum (op1, op2) {
      this.result = op1 + op2
    },
    sup (op1, op2) {
      this.result = op1 - op2
    },
    mul (op1, op2) {
      this.result = op1 * op2
    },
    div (op1, op2) {
      if (op2 === 0) {
        this.error = 'Делить на ноль нельзя'
        this.result = ''
        return
      }
      this.result = op1 / op2
    },
    step (op1, op2) {
      this.result = op1 ** op2
    },
    cel (op1, op2) {
      if (op2 === 0) {
        this.error = 'Делить на ноль нельзя'
        this.result = ''
        return
      }
      this.result = ~~(op1 / op2)
    }
  }
}
</script>

<style scoped>

</style>
