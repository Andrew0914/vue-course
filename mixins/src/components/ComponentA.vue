<template>
  <h1>Component A</h1>
</template>

<script>
import shared from "../mixins/shared";

export default {
  name: "ComponentB",
  mixins: [shared],
  data(){
    return {
        isVisible: false,
        user:{
            name: 'Sam',
            address:{
                street:"Street 8"
            }
        }
    }
  }
};
</script>

<style>
</style>