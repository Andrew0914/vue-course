<template>
  <div id="app">
   <input type="text" placeholder="Input 1" />
    <br />
    <br />
    <input type="text" placeholder="Input 2" v-focus />
  </div>
</template>

<script>

export default {
  name: 'App',
  directives: {
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
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

input {
  min-height: 32px;
  min-width: 214px;
}
</style>
