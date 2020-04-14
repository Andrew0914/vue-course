  
<template>
  <nav class="navbar">
    <router-link
      v-for="link in links"
      :to="link.route"
      :key="link.label"
      class="link"
    >{{ link.label }}</router-link>
    <div>
      <img src="../assets/shopping-cart.png" @click="openCar"/>
      <span>{{ $store.getters.countItemsInCart }}</span>
    </div>
    <LanguageChoise/>
  </nav>
</template>

<script>
import LanguageChoise from "./LanguageChoise";
export default {
  name: "TheNavbar",
  components:{
    LanguageChoise
  },
  props: {
    links: {
      type: Array,
      default: new Array()
    }
  },
  methods:{
    openCar(){
      this.$router.push('/car')
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-flow: row;
  margin-bottom: 32px;
  padding: 16px 8px;
  background-color: #4b0082;
  border-radius: 3px;
  width: 1060px;
  box-sizing: border-box;
}

.navbar img {
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.navbar div{
  margin: 0 16px 0px auto;
  min-width: 64px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
}

.navbar .link {
  color: white;
  font-size: 20px;
  margin-right: 16px;
}
</style>