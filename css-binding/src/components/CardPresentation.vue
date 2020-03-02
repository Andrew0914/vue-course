<template>
  <div class="card">
      <h1>
          {{title}}
      </h1>
      <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
    name:'CardPresentation',
    props: {
        title:{
            type : String,
            required:true
        },
        description: {
            type : String,
            default: ''
        }
    }
}
</script>

<style scoped>
    .card{
        border-radius: 5px;        
        box-shadow: 1px 3px 4px grey;
        max-width: 360px;
        margin: 0 auto;
        padding: 16px;
    }
</style>