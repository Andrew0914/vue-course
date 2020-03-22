<template>
  <div id="app">
    <MyLink link="https://bunsan.io">
      Simple text
    </MyLink>
    <br><br>
    <MyLink link="https://bunsan.io">
      <strong> HTML content </strong>
    </MyLink>
    <br><br>
    <MyLink link="https://bunsan.io">
      <OtherComponent title="Welcome!" info="Go home" />
    </MyLink>
  </div>
</template>

<script>
import MyLink from './components/MyLink'
import OtherComponent from './components/OtherComponent'

export default {
  name: 'App',
  components:{
    MyLink,
    OtherComponent
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
