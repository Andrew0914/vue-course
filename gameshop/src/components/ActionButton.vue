<template>
  <button class="action" @click="$emit(event)">
    {{label}}
    <img src="../assets/plus.png" />
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    label: {
      type: String,
      required: true
    },
    event: {
      type: String,
      default: 'click'
    }
  }
};
</script>

<style scoped>
.action{
    padding: 8px;
    border-radius: 3px;
    background-color: rgb(251,188,4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100px;
    margin: 8px 0;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

.action img{
    margin: auto 0;
    width: 16px;
    height: 16px;
}
</style>