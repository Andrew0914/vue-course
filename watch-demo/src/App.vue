<template>
  <div id="app">
    <label for="metros">
      Metros:
      <br>
      <input type="text" name="metros" v-model="metros">
    </label>
    <br>
    <label>
      Kilometros
      <br>
      <input type="text" name="kilometros" v-model="kilometros">
    </label>
    <br>
    <div>
      {{ `${metros} metros` }}
      <br>
      {{ `${kilometros} kilometros` }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      metros: 0,
      kilometros: 0
    }
  },
  watch:{
    metros: function(m){
      this.kilometros=m/1000
    },
    kilometros: function(km){
      this.metros = km * 1000
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input{
  border-radius: 5px;
  border: 1px solid black;
  height: 32px;
  margin-bottom: 16px;
}

#app div{
  line-height: 32px;
  font-size: 24px;
}
</style>
