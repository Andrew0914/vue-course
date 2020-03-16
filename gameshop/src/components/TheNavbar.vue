  
<template>
  <nav class="navbar">
    <router-link
      v-for="link in links"
      :to="link.route"
      :key="link.label"
      class="link"
    >{{ link.label }}</router-link>
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
.navbar {
  display: flex;
  flex-flow: row;
  margin-bottom: 32px;
  padding: 16px 8px;
  background-color: #4b0082;
  border-radius: 3px;
  width: 1060px;
  box-sizing: border-box;
}

.navbar .link {
  color: white;
  font-size: 20px;
  margin-right: 16px;
}
</style>