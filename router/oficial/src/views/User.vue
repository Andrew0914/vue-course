<template>
  <h1>User with id : {{ id }}</h1>
</template>

<script>
export default {
  name: "User",
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>
