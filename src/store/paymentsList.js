import Vue from 'vue'

const API_DATA = {
  page1: [
    {
      date: '28.03.2020',
      category: 'Food',
      value: 169
    },
    {
      date: '24.03.2020',
      category: 'Transport',
      value: 111
    },
    {
      date: '28.03.2020',
      category: 'Food',
      value: 222
    }
  ],
  page2: [
    {
      date: '28.03.2020',
      category: 'Food',
      value: 333
    },
    {
      date: '24.03.2020',
      category: 'Transport',
      value: 444
    },
    {
      date: '28.03.2020',
      category: 'Food',
      value: 555
    }
  ],
  page3: [
    {
      date: '21.03.2021',
      category: 'Food',
      value: 55
    },
    {
      date: '11.11.2020',
      category: 'Transport',
      value: 121
    },
    {
      date: '11.11.2020',
      category: 'Food',
      value: 323
    }
  ]
}

export default {
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
    getPaymentsList: (state) => state.paymentsList,
    getPagesCount () {
      return Object.keys(API_DATA).length
    }
  },
  actions: {
    fetchPaymentsData ({ commit }) {
      setTimeout(() => {
        const initialPaymentsList = API_DATA.page1

        commit('SET_PAYMENTS_LIST', initialPaymentsList)
      }, 1000)
    },
    fetchPageData ({ commit }, page) {
      setTimeout(() => {
        commit('SET_PAYMENTS_LIST', API_DATA[`page${page}`])
      }, 1000)
    },
    addNewPayment ({ commit }, data) {
      commit('ADD_PAYMENT_DATA', data)
    }
  }
}
