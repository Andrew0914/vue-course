<template>
  <div class="game" :style="borderColor">
    <a href="#" class="mb2" @click.prevent="openDetails(id)">
      <img class="game_image" :src="urlImage" :alt="name" />
      {{ name }}
    </a>

    <div class="game_price mb2">
      <p :class="[gameStatus.appereance, 'game_condition']">{{ gameStatus.status }}</p>
      <span>Precio:</span>
      <span>${{ price }}</span>
    </div>

    <div class="game_description mb2">{{ description }}</div>

    <ActionButton v-if="stock" class="game_button" @addToWishList="addToWishList" label="Add to wish list" event="addToWishList"/>
    <p v-else>sold out</p>

    <a href="#" @click.prevent="showDetails = !showDetails" class="mb2">More details</a>

    <div v-show="showDetails" class="game_description">{{ details }}</div>
  </div>
</template>

<script>
import { isValidURL } from "@/utils/validations";
import ActionButton from "./ActionButton"

export default {
  name: "GameItem",
  components:{
    ActionButton
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    details: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    isNew: {
      type: Boolean,
      default: true
    },
    urlImage: {
      type: String,
      required: true,
      validator: function(value) {
        return isValidURL(value);
      }
    },
    color: {
      type: String,
      default: "#F2F2F2"
    }
  },
  data() {
    return {
      showDetails: false
    };
  },
  computed: {
    borderColor() {
      return { borderColor: this.color };
    },
    gameStatus() {
      return {
        status: this.isNew ? "New" : "Used",
        appereance: { game_new: this.isNew }
      };
    }
  },
  methods: {
    addToWishList() {
      alert(`You have added to wishlist: ${this.name}`);
    },
    openDetails(id) {
      this.$router.push({ name: 'game', params: { id } });
    }
  }
};
</script>

<style scoped>
.game {
  max-width: 215px;
  border: 1px solid #f2f2f2;
  padding: 16px;
  border-radius: 3px;
  box-shadow: 2px 3px 4px #bdbdbd;
  text-align: center;
  background-color: white;
}

.game_image {
  width: 200px;
  height: 250px;
}

.game_name,
.game_description,
.game_price {
  font-size: 14px;
  color: #4f4f4f;
}

.game_name {
  color: blueviolet;
}

.game_description {
  font-size: 12px;
}

.game_price span:last-child {
  font-weight: 800;
}

.mb2 {
  margin-bottom: 16px;
}

.game_new {
  color: gold;
  text-shadow: 1px 1px 2px black;
}

.game_condition {
  font-size: 16px;
  letter-spacing: 3px;
}

.game_button {
  width: 70%;
  margin: 8px auto;
}
</style>