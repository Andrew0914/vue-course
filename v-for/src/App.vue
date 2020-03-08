<template>
  <div id="app">
    <ul>
      <li v-for="(fruit , index) in fruits" :key="fruit">
        {{ index }} - {{ fruit }}
      </li>
    </ul>
    <hr>
    <ul>
      <li v-for="(feature, key) in features" :key="feature">
        {{key}} : {{ feature }}
      </li>
    </ul>
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
