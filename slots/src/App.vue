<template>
  <div id="app">
    <MyLink link="https://bunsan.io"/>
  </div>
</template>

<script>
import MyLink from './components/MyLink'

export default {
  name: 'App',
  components:{
    MyLink
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
