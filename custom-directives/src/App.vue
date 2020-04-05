<template>
  <div id="app">
   <input type="text" placeholder="Input 1" />
    <br />
    <br />
    <input type="text" placeholder="Input 2" v-focus />
    <br>
    <h1 v-party:crazy.size72.underline="colors">Hello world</h1>
  </div>
</template>

<script>
import party from "./directives/party";

export default {
  name: 'App',
  directives: {
    party,
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  },
  data(){
    return {
      colors: ["red","blue","yellow","green"]
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
