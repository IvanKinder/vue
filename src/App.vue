<template>
  <div id="app">
    <header>
      <div class="header">
        My Personal costs
      </div>
    </header>
    <main>
      <AddPaymentForm
        @add-payment="addPayment"
        :categoryList="getCategoryList"
      />
      <PaymentsDisplay :paymentsList="getPaymentsList" :pagesCount="getPagesCount"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  computed: {
    ...mapGetters(['getPaymentsList', 'getCategoryList', 'getPagesCount'])
  },
  methods: {
    ...mapActions(['fetchPaymentsData', 'fetchCategoryData', 'addNewPayment']),
    addPayment (data) {
      this.addNewPayment(data)
    }
  },
  created () {
    this.fetchPaymentsData()
    this.fetchCategoryData()
    this.$store.commit('EDIT_PAYMENT_DATA', {
      date: '24.03.2020',
      category: 'Transport',
      value: 111
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
