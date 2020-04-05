<template>
  <div id="app">

    <button @click="show = !show">Show/Hide</button>

    <transition name="fade">
      <p v-show="show">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti sequi, aperiam animi quisquam ab repellat distinctio esse culpa magni ipsum expedita blanditiis maiores totam veritatis, consequatur iste, odio impedit! Perspiciatis.
      </p>
    </transition>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      show: false
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
  margin: 60px auto;
  max-width: 25%;

}

.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
