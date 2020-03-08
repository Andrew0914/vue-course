<template>
  <div id="app">
    <IdCard />
  </div>
</template>

<script>
import IdCard from './components/IdCard.vue'

export default {
  name: 'App',
  components: {
    IdCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #B0B0B0;
  padding: 16px;
}
</style>
