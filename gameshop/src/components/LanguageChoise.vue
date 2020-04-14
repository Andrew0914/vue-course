<template>
  <div class="flags">
    <img
      src="../assets/spain.png"
      alt="español"
      @click="setLanguage('es')"
      :class="{active: locale === 'es'}"
    />
    <img
      src="../assets/uk.png"
      alt="english"
      @click="setLanguage('en')"
      :class="{active: locale === 'en'}"
    />
  </div>
</template>

<script>
export default {
  name: "LanguageChoise",
  data() {
    return {
      locale: localStorage.getItem("gameshop_locale") || "en"
    };
  },
  methods: {
    setLanguage(locale) {
      this.locale = locale;
      this.$i18n.locale = locale;
      localStorage.setItem("gamesho", locale);
    }
  }
};
</script>

<style scoped>
.flags img {
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 0px 2px;
}

.active {
  border: 1px solid white;
  border-radius: 2px;
}
</style>