<template>
  <div>
    <h1 :style="styles">{{ message }}</h1>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      message: "Hello I'm a vue instance"
    };
  },
  computed: {
    styles() {
      return {
        fontFamily: "Arial",
        color: "#4f4f4f"
      };
    }
  }
};
</script>
