<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CardPresentation 
      color="blue"
      :is-important="true"
      :size="520"
      title="Welcome to Vue course"
      description="This is the vue course, so you can learn a lot of things about Vue. Is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. "
    />
  </div>
</template>

<script>
import CardPresentation from './components/CardPresentation.vue'

export default {
  name: 'App',
  components: {
    CardPresentation
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
