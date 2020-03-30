<template>
<div>
  <h1>Shopping cart</h1>

  <div class="games">
    <GameItem
      v-for="(game, index) in gamesInCart"
      :id="game.id"
      :color="game.color"
      :price="game.price"
      :stock="game.stock"
      :is-new="game.isNew"
      :name="game.name"
      :description="game.description"
      :url-image="game.image"
      :details="game.details"
      :is-from-cart="true"
      :key="index"
    />
  </div>
</div>
</template>

<script>
import GameItem from "@/components/GameItem";
import {mapState} from 'vuex'

export default {
  name: "Cart",
  components: {
    GameItem
  },
  computed:{
    ...mapState(['gamesInCart'])
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