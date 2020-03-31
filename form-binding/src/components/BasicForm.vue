<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="$v.form.name.$model" />
      <small class="error" v-show="$v.form.name.$error">Error</small>
    </div>

    <div class="form-group">
      <label>Age</label>
      <input type="number" class="form-control" v-model.number="$v.form.age.$model" />
      <small class="error" v-show="$v.form.age.$error">Error</small>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        name: "",
        age: 20
      }
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4)
      },
      age: {
        between: between(20, 30)
      }
    }
  },
  methods: {
    save() {
      this.$v.form.$touch();
      if (this.$v.form.$invalid) {
        alert("The form is wrong");
      } else {
        alert("Form was submitterd successfully");
        console.log({...this.form});
      }
    }
  }
};
</script>

<style>
</style>