<template>
  <div id="app">
    <UserBadge 
      v-for="user in users" :key="user.id"
      :user="user"
    />
  </div>
</template>

<script>
import UserBadge from '@/components/UserBadge'
import axios  from "axios";
export default {
  name: 'App',
  components: {
    UserBadge
  },
  data(){
    return {
      users: []
    }
  },
  mounted(){
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then( response => {
        this.users = response.data
      })
      .catch( error => {
        console.error(error)
      })
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
