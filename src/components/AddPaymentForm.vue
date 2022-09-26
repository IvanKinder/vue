<template>
  <div class="form-container">
    <button @click="showForm">{{ formVisible }}</button>
    <div class="add-payment-form" v-show="show">
      <input type="text" placeholder="Amount" v-model="value">
      <input type="text" placeholder="Type" v-model="category">
      <input type="text" placeholder="Date" v-model="date">
      <button @click="addPayment">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data: () => ({
    value: '',
    category: '',
    date: '',
    formVisible: 'Add new cost +',
    show: false
  }),
  methods: {
    addPayment() {
      const {value, category, date, currentDate} = this
      const data = {
        date: date ? date : currentDate,
        category,
        value
      }

      this.$emit('add-payment', data)
    },
    showForm() {
      this.show = !this.show
      this.formVisible = this.show ? 'Hide form' : 'Add new cost +'
    }
  },
  computed: {
    currentDate() {
      const currentDate = new Date()
      const currentDay = currentDate.getDate()
      const currentMonth = currentDate.getMonth() + 1
      const currentYear = currentDate.getFullYear()

      return `${currentDay}.${currentMonth}.${currentYear}`
    }
  }
}
</script>

<style scoped>
.add-payment-form {
  display: grid;
  gap: 0.5em;
  margin: 2em auto;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 16px #ccc;
  letter-spacing: 1px;
  background: linear-gradient(to left, #f37645 0%, white, #ef7544);
}

input {
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 1px;
  padding-left: 12px;
}

button {
  height: 34px;
  border: 1px solid #ccc;
}

.form-container {
  display: grid;
  width: 264px;
  margin: 2em auto;
}
</style>
