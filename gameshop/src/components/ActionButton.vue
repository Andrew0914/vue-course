<template>
  <button class="action" @click="emit">
    <!-- @slot Use this slot to display label button -->
    <slot />
    <!-- @slot Use this slot to set icon button -->
    <slot name="icon" />
  </button>
</template>

<script>
/**
 * A button to general purpouse
 * @displayName ActionButton
 */
export default {
  name: "ActionButton",
  props: {
    /**
     * The event name to be emitted
     */
    event: {
      type: String,
      default: "click"
    }
  },
  methods: {
    emit() {
      /**
       * Custom event.
       *
       * @event custom name
       */
      this.$emit(this.event);
    }
  }
};
</script>

<style scoped>
.action {
  padding: 8px;
  border-radius: 3px;
  background-color: rgb(251, 188, 4);
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

.action img {
  margin: auto 0;
  width: 16px;
  height: 16px;
  max-height: 16px;
  max-width: 16px;
}
</style>