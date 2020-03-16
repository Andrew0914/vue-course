<template>
  <div id="app">
    <TheNavbar :links="links" />
    <div class="games">
      <GameItem
        v-for="(game, index) in gameitems"
        :color="game.color"
        :price="game.price"
        :stock="game.stock"
        :is-new="game.isNew"
        :name="game.name"
        :description="game.description"
        :url-image="game.image"
        :details="game.details"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import GameItem from "@/components/GameItem";
import { gameitems } from "./gameitems";

export default {
  name: "App",
  components: {
    GameItem,
    TheNavbar
  },
  data() {
    return {
      gameitems,
      links: []
    };
  }
};
</script>

<style>
body {
  background-color: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 1060px;
  margin: 0 auto;
  box-sizing: border-box;
}

.games {
  display: flex;
  box-sizing: border-box;
  margin-top: 16px;
  width: 1060px;
  flex-flow: row wrap;
  justify-content: space-between;
}

.games div {
  margin-bottom: 16px;
}
</style>
