<template>
  <div>
    <h1>Welcome home!</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/user/${user.id}`">{{user.name}}</router-link>
      </li>
    </ul>
    <br>
    <button @click="goToAbout"> Go to vision </button>
    <button @click="goToUser"> Go user 144 </button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      users: [
        { id: 1, name: "Homer Simpsomp" },
        { id: 31, name: "Bat Simpsomp" },
        { id: 144, name: "Krusty" }
      ]
    };
  },
  methods: {
    goToAbout(){
      this.$router.push("/about/vision")
    },
    goToUser(){
      this.$router.push({ name: 'user', params: { id: '144' } })
    }
  }
};
</script>