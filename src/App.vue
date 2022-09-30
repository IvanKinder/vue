<template>
  <div id="app">
    <main>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
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
