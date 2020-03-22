<template>
  <div>
    <h1>Component A</h1>
    <button @click="sayHello">Say hello</button>
  </div>
</template>

<script>
import shared from "../mixins/shared";

export default {
  name: "ComponentB",
  mixins: [shared],
  data() {
    return {
      isVisible: false,
      user: {
        name: "Sam",
        address: {
          street: "Street 8"
        }
      }
    };
  },
  methods: {
    sayHello(){
        alert('What´s up! world!')
    }
  }
};
</script>

<style>
</style>