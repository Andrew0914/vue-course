<template>
  <a :href="link" class="link">
      <slot />
  </a>
</template>

<script>
export default {
    name: 'MyLink',
    props: {
        link: {
            type: String,
            defaul: ''
        }
    }
}
</script>

<style scoped>
.link{
    font-size: 32px;
}
</style>
