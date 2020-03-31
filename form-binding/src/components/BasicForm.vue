<template>
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="$v.name.$model"/>
      <small class="error" v-show="$v.name.$error">Error</small>
    </div>

    <div class="form-group">
      <label>Age</label>
      <input type="number" class="form-control"  v-model.number="$v.age.$model" />
      <small class="error" v-show="$v.age.$error">Error</small>
    </div>
  </form>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: "",
      age: 20
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  }
};
</script>

<style>
</style>