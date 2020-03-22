<template>
  <h1>Component A</h1>
</template>

<script>
import shared from "../mixins/shared";

export default {
  name: "ComponentB",
  mixins: [shared]
};
</script>

<style>
</style>