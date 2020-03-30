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
      <ActionButton
        v-if="game.stock"
        class="game_button"
        @addToCart="addToCart"
        event="addToCart"
      >
        Add to wish list
        <img src="../assets/plus.png" slot="icon" />
      </ActionButton>
      <p v-else>sold out</p>
    </div>
  </div>
</template>

<script>
import ActionButton from "../components/ActionButton";
import { mapActions } from "vuex";

export default {
  name: "Game",
  components: {
    ActionButton
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    game() {
      return this.$store.getters.game(this.id);
    }
  },
  methods:{
    ...mapActions({
      addGameToCart:"addGameToCart"
    }),
    addToCart() {
      this.addGameToCart(this.id)
      alert(`You have added to wishlist: ${this.game.name}`);
    },
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

.game_button {
  width: 160px;
  height: 32px;
  margin: 32px 4px;
}
</style>