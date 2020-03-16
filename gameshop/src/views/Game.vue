<template>
  <div class="game">
    <div>
      <img class="game_image" :src="game.image" :alt="game.nam" />
    </div>

    <div>
      <h4>{{ game.name }}</h4>
      <div class="game_description mb2">{{ game.description }}</div>
      <p>{{ game.isNew ? "New" : "Used" }}</p>
      <span>Precio:</span>
      <span>${{ game.price }}</span>
      <br />
      <button v-if="game.stock" class="game_button" >Add to wish lit</button>
      <p v-else>sold out</p>
    </div>
  </div>
</template>

<script>
import { gameitems } from "../gameitems";

export default {
  name: "Game",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    game() {
      return gameitems.find(item => item.id == this.id);
    }
  }
};
</script>

<style scoped>
.game {
  display: flex;
  flex-flow: row;
  padding: 16px;
  border-radius: 3px;
  box-shadow: 2px 3px 16px #bdbdbd;
}

.game img {
  width: 205px;
  height: 253px;
  margin-right: 16px;
}
</style>