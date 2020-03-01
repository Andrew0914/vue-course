<template>
  <div id="app">
    <GameItem
      price="899"
      url-image="https://gameplanet-53f8.kxcdn.com/media/catalog/product/cache/4/small_image/205x253/9df78eab33525d08d6e5fb8d27136e95/s/o/sonic-mania-plus-xbox-ps4_2.png" 
    />
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
