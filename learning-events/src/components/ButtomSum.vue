<template>
  <button @click="sum">+</button>
</template>

<script>
export default {
  name: "ButtonSum",
  methods: {
    sum() {
      this.$emit("sum", 1);
    }
  }
};
</script>

<style scoped>
button {
  padding: 16px;
  border: none;
  background-color: blueviolet;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
}
</style>