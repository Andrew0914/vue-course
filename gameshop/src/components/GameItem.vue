<template>
  <div class="game" :style="{borderColor: color}">
    <a href="#" class="mb2">
      <img
        class="game_image"
        :src="urlImage"
        :alt="name"
      />
    </a>

    <a href="#" class="game_name mb2" :title="name">
      {{ name }}
    </a>
  
    <div class="game_price mb2">
      <p :class="[{'game_new' : isNew}, 'game_condition']">
        {{ isNew ? "New" : "Used"}}
      </p>
      <span>Precio: </span>
      <span>${{ price }}</span>
    </div>
  
    <div class="game_description">{{ description }}</div>

  </div>
</template>

<script>
import {isValidURL} from '@/utils/validations'

export default {
  name: "GameItem",
  props:{
    name:{
      type: String,
      required: true
    },
    description:{
      type: String,
      default: ''
    },
    price:{
      type: Number,
      required: true
    },
    isNew:{
      type: Boolean,
      default: true
    },
    urlImage:{
      type: String,
      required: true,
      validator: function(value){
        return isValidURL(value)
      }
    },
    color:{
      type: String,
      default: '#F2F2F2'
    }
  }
}
</script>

<style scoped>
.game {
  max-width: 215px;
  border: 1px solid #F2F2F2;
  padding: 16px;
  border-radius: 3px;
  box-shadow: 1px 2px 3px #bdddbd;
  text-align: center;
}

.game_image {
  width: 200px;
  height: 250px;
}

.game_name, .game_description, .game_price{
  font-size: 14px;
  color: #4f4f4f;
}

.game_name{
  color: blueviolet;
}

.game_description{
  font-size: 12px;
}

.game_price span:last-child{
  font-weight: 800;
}

.mb2{
  margin-bottom: 16px; 
}

.game_new{
  color: gold;
  text-shadow: 1px 1px 2px black;
}

.game_condition{
  font-size: 16px;
  letter-spacing: 3px;
}
</style>