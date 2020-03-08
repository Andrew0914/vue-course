<template>
  <div id="app">
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
import { gameitems } from './gameitems'
export default {
  name: "App",
  components:{
    GameItem
  },
  data(){
    return {
      gameitems
    }
  }
};
</script>

<style>
body{
  background-color: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  margin-top: 24px;
  padding: 16px;
}

#app div{
  margin-right: 16px;
}
</style>
