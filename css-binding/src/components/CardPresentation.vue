<template>
  <div :class="['card',{ 'card__important': isImportant} , 'x' + size]">
      <h1 :style="{color}">
          {{title}}
      </h1>
      <p :style="{color}">{{ description }}</p>
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
        },
        size:{
            type: Number,
            default: 360,
            validator: function(size){
                return [360,480,520].indexOf(size)  > -1
            }
        },
        color:{
            type : String,
            default: 'black'
        }
    }
}
</script>

<style scoped>
    .card, .card__important{
        border-radius: 3px;        
        box-shadow: 1px 3px 4px grey;
        margin: 0 auto;
        padding: 16px;

    }

    .card__important{
        border-left: 5px solid gold;
        box-shadow: 2px 4px 5px darkgray;
    }

    .x360{
        width: 360px;
    }

    .x480{
        width: 480px;
    }

    .x520{
        width: 520px;
    }
</style>