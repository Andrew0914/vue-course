<template>
  <form>
    <!-- NORMAL INPUT-->
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control" v-model="email"/>
    </div>

    <!--TEXTAREA-->
    <div class="form-group">
      <label>Example textarea</label>
      <textarea class="form-control"  rows="3" v-model="text"></textarea>
    </div>

    <!--CHECKBOX-->
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="defaultCheck1" v-model="check"/>
      <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
    </div>

    <br />

    <!-- RADIOBUTTON-->
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios2"
        value="option1"
        v-model="option"
      />
      <label class="form-check-label" for="exampleRadios2">Option 1</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios3"
        value="option2"
        v-model="option"
      />
      <label class="form-check-label" for="exampleRadios3">Option 2</label>
    </div>

    <br>
    
    <!-- SELECT -->
    <select class="form-control" v-model="fruit">
      <option disabled value="">Please select one</option>
      <option value="apple">Apple</option>
      <option value="lemon">Lemon</option>
    </select>
  </form>
</template>

<script>
export default {
  name:'MyForm',
  data(){
    return {
      email:'',
      text:'',
      check: false,
      option: 'option1',
      fruit:''
    }
  }
};
</script>
