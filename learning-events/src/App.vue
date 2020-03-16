<template>
  <div id="app">

    <button @click="click">
      Click me!
    </button>

    <br>

    <a href="route" @click.prevent="click">Click link!</a>

    <br>

    <button @mouseenter="hover = true" @mouseleave=" hover = false">
      Hover me
    </button>

    <br>
    
    <div v-if="hover"> You aare over the button</div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      hover: false
    }
  },
  methods:{
    click(){
      alert("You clicked")
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
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 240px;
  margin: 120px auto;
}
</style>
