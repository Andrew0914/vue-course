<template>
  <div :class="{ 'card__important': isImportant , card: !isImportant}">
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
        },
        isImportant: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    .card, .card__important{
        border-radius: 3px;        
        box-shadow: 1px 3px 4px grey;
        max-width: 360px;
        margin: 0 auto;
        padding: 16px;

    }

    .card__important{
        border-left: 5px solid gold;
        box-shadow: 2px 4px 5px darkgray;
    }
</style>