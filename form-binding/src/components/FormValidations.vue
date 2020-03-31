<template>
  <div>
    <h4>Basic form</h4>
    <BasicForm />
    <hr>
  </div>
</template>

<script>
import BasicForm from './BasicForm'

export default {
    name:'FormValidations',
    components:{
        BasicForm
    }
};
</script>

<style >
.error {
  color: red;
}
</style>