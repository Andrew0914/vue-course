<template>
  <div id="app">
    <ul v-for="fruit in fruits" :key="fruit">
      <li>{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      fruits: ["banana", "orange", "lemon", "apple", "kiwi"]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
