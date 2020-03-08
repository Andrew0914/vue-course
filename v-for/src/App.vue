<template>
  <div id="app">

    <ul>
      <li v-for="(fruit , index) in fruits" :key="index">
        {{ index }} - {{ fruit }}
      </li>
    </ul>
    <button @click="addFruit">+ fruit</button>
    <button @click="invertFruits">invert fruits</button>

    <hr>

    <ul>
      <li v-for="(feature, key) in features" :key="feature">
        {{key}} : {{ feature }}
      </li>
    </ul>
    <button @click="addFeature">+ feature</button>
    <hr>
   
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      fruits: ["banana", "orange", "lemon", "apple", "kiwi"],
      features: {
        speed: "fast",
        power: "strong",
        weekness: "cryptonite"
      }
    }
  },
  methods:{
    addFruit(){
      this.fruits.push("avocado")

      //esto no permite detectar los cambios
      /*this.fruits[0] = "mango"
      this.fruits[this.fruits.length] = "pinapple"
      console.log(this.fruits)*/
      
      // Esto resulve lo anterior
      //this.$set(this.fruits , 0 , "mango")
    },
    invertFruits(){
      this.fruits.reverse()
    },

    addFeature(){
      // esto no permite detectar el cambio
      /*this.features.origin = "Earth"
      console.log(this.features)*/

      this.$set(this.features, "origin", "Earth")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
