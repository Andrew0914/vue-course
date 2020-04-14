<template>
  <div class="flags">
      <img src="../assets/spain.png" alt="español" @click="setLanguage('es')" :class="{active: lang === 'es'}">
      <img src="../assets/uk.png" alt="english" @click="setLanguage('en')" :class="{active: lang === 'en'}">
  </div>
</template>

<script>
export default {
    name:"LanguageChoise",
    data(){
        return {
            lang:'en'
        }
    },
    methods:{
        setLanguage(lang){
            this.lang = lang
        }
    }
}
</script>

<style scoped>
.flags img{
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin: 0px 2px;
}

.active{
    border: 1px solid white;
    border-radius: 2px;
}
</style>