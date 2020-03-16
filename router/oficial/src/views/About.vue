<template>
  <div>
    <h1>About</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptate fugit exercitationem fugiat doloribus, nemo id natus suscipit libero eius voluptatibus consequatur inventore. Natus nobis ipsa voluptatem nesciunt, ipsum voluptas.</p>
    <TheNavbar :links="links" />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar";

export default {
  name: 'About',
  components:{
    TheNavbar
  },
  data(){
    return {
      links: [
        { label: "Mision", route: "/about/mision" },
        { label: "Vision", route: "/about/vision" }
      ]
    }
  }
}
</script>