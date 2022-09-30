<template>
  <div>
    <div class="header">
      My Personal costs
    </div>
    <AddPaymentForm
      @add-payment="addPayment"
      :categoryList="getCategoryList"
    />
    <PaymentsDisplay :paymentsList="getPaymentsList" :pagesCount="getPagesCount"/>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DashBoard',
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
  }
}
</script>

<style scoped>

</style>
