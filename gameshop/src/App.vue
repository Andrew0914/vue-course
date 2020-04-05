<template>
  <div id="app">
    <TheNavbar :links="links" />
    <transition name="fade">
      <router-view></router-view>
    </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
