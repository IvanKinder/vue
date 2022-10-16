<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/dashboard" class="route-link">Dashboard</router-link>
<!--        <router-link to="/add/payment/" class="route-link">Add Payment</router-link>-->
        <router-link to="/about" class="route-link">About</router-link>
        <router-link to="/notfound" class="route-link">Not Found</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App'
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

.route-link {
  margin-right: 10px;
}
</style>
