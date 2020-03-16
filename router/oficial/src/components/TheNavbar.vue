<template>
  <nav>
    <router-link v-for="link in links" :to="link.route" :key="link.label">{{ link.label }}</router-link>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  props: {
    links: {
      type: Array,
      default: new Array()
    }
  }
};
</script>

<style scoped>
nav {
  display: flex;
  flex-flow: row;
  margin-bottom: 48px;
}

a {
  color: navy;
  font-size: 24px;
  margin-right: 16px;
}
</style>