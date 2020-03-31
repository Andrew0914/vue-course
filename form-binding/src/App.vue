<template>
  <div id="app">
    <MyForm />
  </div>
</template>

<script>
import MyForm from './components/MyForm.vue'

export default {
  name: 'App',
  components: {
    MyForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 32px auto;
  max-width: 720px;
  background-color: lightblue;
  padding: 16px;
  box-sizing: border-box;
}
</style>
