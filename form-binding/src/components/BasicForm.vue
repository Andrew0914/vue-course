<template>
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" />
      <small class="error">Error</small>
    </div>

    <div class="form-group">
      <label>Age</label>
      <input type="number" class="form-control" />
      <small class="error">Error</small>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: 0
    };
  }
};
</script>

<style>
</style>