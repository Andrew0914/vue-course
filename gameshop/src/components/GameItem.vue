<template>
  <div class="game">
    <a href="#" class="mb2">
      <img
        class="game_image"
        src="https://gameplanet-53f8.kxcdn.com/media/catalog/product/cache/4/small_image/205x253/9df78eab33525d08d6e5fb8d27136e95/s/o/sonic-mania-plus-xbox-ps4_2.png"
        alt="SONIC MANIA PLUS"
      />
    </a>

    <a href="#" class="game_name mb2" title="SONIC MANIA PLUS">Sonic Mania Plus</a>
  
    <p class="game_price mb2">
      <span>Nuevo</span>
      <span>Precio: </span>
      <span>$899</span>
    </p>
  
    <div class="game_description">Sonic Mania Plus es la versión física mejorada de la versión digital original de Sonic Mania</div>

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
</style>