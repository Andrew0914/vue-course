<template>
  <form>
    <!-- NORMAL INPUT-->
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control"/>
    </div>

    <!--TEXTAREA-->
    <div class="form-group">
      <label>Example textarea</label>
      <textarea class="form-control"  rows="3"></textarea>
    </div>

    <!--CHECKBOX-->
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="defaultCheck1" />
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
        value="option2"
      />
      <label class="form-check-label" for="exampleRadios2">Option 1</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios3"
        value="option3"
      />
      <label class="form-check-label" for="exampleRadios3">Option 2</label>
    </div>
  </form>
</template>

<script>
export default {};
</script>
