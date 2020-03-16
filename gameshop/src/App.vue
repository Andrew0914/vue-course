<template>
  <div id="app">
    <TheNavbar :links="links" />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";

export default {
  name: "App",
  components: {
    TheNavbar
  },
  data() {
    return {
      links: [
        { label: "Home", route: "/" }
      ]
    }
  }
};
</script>

<style>
body {
  background-color: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 1060px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
