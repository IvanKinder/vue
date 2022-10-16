<template>
  <div>
    <div class="header">
      My Personal costs
    </div>
    <AddPaymentForm
      @add-payment="addPayment"
      :categoryList="getCategoryList"
      :showAddForm="showAddForm"
      :curValue="curValue"
      :category="curCategory"
    />
    <PaymentsDisplay
      :paymentsList="getPaymentsList"
      :pagesCount="getPagesCount"
      v-show="!showAddForm"
    />
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DashBoard',
  props: {
    curValue: {
      type: Number,
      default: 0
    },
    curCategory: {
      type: String,
      default: 'Food'
    }
  },
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  computed: {
    ...mapGetters(['getPaymentsList', 'getCategoryList', 'getPagesCount']),
    showAddForm () {
      return !!this.$route.query.showAddForm
    }
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

<style scoped>

</style>
