<template>
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
</template>

<script>
import GameItem from "@/components/GameItem";
import { gameitems } from "../gameitems";

export default {
  name: "Home",
  components: {
    GameItem
  },
  data() {
    return {
      gameitems
    };
  }
};
</script>

<style scoped>
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