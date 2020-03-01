<template>
  <button type="button" class="btn">
      {{ awesomeName }}
  </button>
</template>

<script>
export default {
    name:'AwesomeButton',
    props: {
        awesomeName: String
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