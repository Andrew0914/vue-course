<template>
  <div class="component">
      <h1> {{ title }} </h1>
      <p> {{ info }} </p>
  </div>
</template>

<script>
export default {
    name: "OtherComponent",
    props:{
        title: {
            type:String,
            default: ''
        },
        info: {
            type:String,
            default: ''
        }
    }
}
</script>

<style scoped>
.component{
    background-color: black;
    color: white;
    padding: 8px;
    border-radius: 5px;
}

.component * {
    text-decoration: none !important;
}
</style>
