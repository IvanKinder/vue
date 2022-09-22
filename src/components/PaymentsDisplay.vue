<template>
  <div>
    <div class="column-names">
      <span class="date">Date</span>
      <span class="category">Category</span>
      <span class="value">Value</span>
    </div>
    <div class="payments-block" v-for="(payment, index) in paymentsList" :key="index">
      <div class="payment-line">
        <span class="date">{{ payment.date }}</span>
        <span class="category">{{ payment.category }}</span>
        <span class="value">{{ payment.value }}</span>
      </div>
    </div>
    <div class="pagination">
      <button
        v-for="page in pages"
        :key="page"
        @click="selectPage(page)"
      >{{ page }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PaymentsDisplay',
  props: {
    paymentsList: {
      type: Array,
      default: () => ([]),
      required: false
    },
    pagesCount: {
      type: Number,
      default: () => 1
    }
  },
  computed: {
    pages () {
      const pages = []
      for (let i = 0; i < this.pagesCount; i++) {
        pages.push(i + 1)
      }
      return pages
    }
  },
  methods: {
    ...mapActions(['fetchPageData']),
    selectPage (page) {
      this.fetchPageData(page)
    }
  }
}
</script>

<style scoped>
.payments-block {
  display: grid;
  list-style: none;
  margin: auto auto 0.5em auto;
  width: 35em;
  padding: 10px 30px;
  background: linear-gradient(to left, #f37645 0%, white, #ef7544);
  border-bottom: 1px solid grey;
  color: #506a6b;
  font-size: 20px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .2);
}
.payment-line{
  display: grid;
  grid-template-columns: 200px auto 100px;
}
.column-names{
  display: grid;
  grid-template-columns: 200px auto 100px;
  list-style: none;
  font-weight: bold;
  margin: auto auto 0.5em auto;
  width: 35em;
  padding: 10px 30px;
  background: linear-gradient(to left, #f37645 0%, white, #ef7544);
  border-bottom: 1px solid grey;
  color: #000000;
  font-size: 20px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .2);
}
</style>
