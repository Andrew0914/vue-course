<template>
  <div id="app">
    <GameItem />
  </div>
</template>

<script>
import GameItem from "@/components/GameItem";
export default {
  name: "App",
  components:{
    GameItem
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  margin-top: 64px;
  justify-content: center;
}
</style>
