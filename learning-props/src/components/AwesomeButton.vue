<template>
  <button type="button" class="btn" @click="mutateProp">
      {{ transformedName }}
  </button>
</template>

<script>
export default {
    name:'AwesomeButton',
    props: {
        awesomeName: String
    },
    computed: {
        transformedName(){
            // esto es correcto ya que transformas tu prop sin modificarla
            return this.awesomeName.toUpperCase()
        }
    },
    methods:{
        mutateProp(){
            // esto no debe hacerce
            this.awesomeName = this.awesomeName.toLowerCase()
        }
    }
}
</script>

<style>
.btn{
    min-height: 64px;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 3px 4px gray;
    cursor: pointer;
}
</style>