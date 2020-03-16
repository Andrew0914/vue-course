<template>
  <div>
    <h1>Welcome home!</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/user/${user.id}`">{{user.name}}</router-link>
      </li>
    </ul>
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
  }
};
</script>