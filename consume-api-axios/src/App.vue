<template>
  <div id="app">
    <UserBadge />
  </div>
</template>

<script>
import UserBadge from '@/components/UserBadge'
export default {
  name: 'App',
  components: {
    UserBadge
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
</style>
