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

    <br>

    <ButtonSum @sum="add"/>
    <br>
    <b>{{count}} </b>
  </div>
</template>

<script>
import ButtonSum from './components/ButtomSum'

export default {
  name: 'App',
  components: {
    ButtonSum
  },
  data(){
    return {
      hover: false,
      count: 1
    }
  },
  methods:{
    click(){
      alert("You clicked")
    },
    add(value){
      this.count += value
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
