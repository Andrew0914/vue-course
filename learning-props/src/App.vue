<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <AwesomeButton :awesome-name="name" />
  </div>
</template>

<script>
import AwesomeButton from './components/AwesomeButton.vue'

export default {
  name: 'App',
  components: {
    AwesomeButton
  },
  data(){
    return {
      name: "My awesome butto"
    }
  },
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
