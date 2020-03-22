<template>
  <div>
    <h1>Component B</h1>
    <button @click="sayHello">Say hello</button>
  </div>
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