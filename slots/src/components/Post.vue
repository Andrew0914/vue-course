<template>
  <div class="post">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.post {
  width: 520px;
  margin: 0 auto;
  border: 1px solid #4f4f4f;
  box-shadow: 2px 3px 5px #4f4f4f;
  padding: 16px;
  border-radius: 5px;
}
</style>