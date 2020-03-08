<template>
  <div id="app">
    <IdCard mode="light" />
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
  background-color: #FFF;
  padding: 16px;
}
</style>
