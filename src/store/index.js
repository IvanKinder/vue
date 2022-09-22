import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from '@/store/categoryList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    ADD_PAYMENT_DATA (state, payment) {
      state.paymentsList.push(payment)
    },
    EDIT_PAYMENT_DATA (state, newPayment) {
      setTimeout(() => { Vue.set(this.state.paymentsList, 1, newPayment) }, 1500)
    }
  },
  getters: {
    getPaymentsList: (state) => state.paymentsList
  },
  actions: {
    fetchPaymentsData ({ commit }) {
      setTimeout(() => {
        const initialPaymentsList = [
          {
            date: '28.03.2020',
            category: 'Food',
            value: 169
          },
          {
            date: '24.03.2020',
            category: 'Transport',
            value: 360
          },
          {
            date: '28.03.2020',
            category: 'Food',
            value: 532
          }
        ]

        commit('SET_PAYMENTS_LIST', initialPaymentsList)
      }, 1000)
    },
    addNewPayment ({ commit }, data) {
      commit('ADD_PAYMENT_DATA', data)
    }
  },
  modules: {
    categoryList
  }
})
