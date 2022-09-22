export default {
  state: {
    categoryList: []
  },
  mutations: {
    SET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList
    }
  },
  getters: {
    getCategoryList: (state) => state.categoryList
  },
  actions: {
    fetchCategoryData ({ commit }) {
      const categories = ['Food', 'Transport', 'Education', 'Sport']

      commit('SET_CATEGORY_LIST', categories)
    }
  }
}
