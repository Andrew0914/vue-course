<template>
  <div id="app">
    <h1>Wellcome to the cinema</h1>
    <img src="./assets/popcorn.png" width="64" height="64" />
    <div class="content">
      <CinemaRoom />
      <Counters  class="counters"/>
    </div>
    
  </div>
</template>

<script>
import CinemaRoom from './components/CinemaRoom.vue'
import Counters from './components/Counters.vue'

export default {
  name: 'App',
  components: {
    CinemaRoom,
    Counters
  }
}
</script>

<style>
html,body{
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-flow: column;
  margin: 0;
  padding: 0;
}

h1{
  margin: 16px auto;
  font-size: 48px;
}

img{
  margin: 16px auto;
}

.content{
  display: flex;
  margin: auto;
}

.counters {
  margin-left: 32px;
}
</style>
