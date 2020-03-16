<template>
  <div id="app">
    <TheNavbar :links="links" />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
export default {
  name: 'App',
  components:{
    TheNavbar
  },
  data(){
    return {
      links: [
        { label: "Home", route: "/" },
        { label: "About", route: "/about" }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 960px;
  margin: 60px auto;
}
</style>
