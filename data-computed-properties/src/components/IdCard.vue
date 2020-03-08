<template>
  <div class="id__card">
      <img src="" alt="id image">
      <div>
          <h4>Nombre</h4>
          <p>email</p>
          <p>Acerca de</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .id__card{
        width: 50%;
        border-radius: 5px;
        background-color: #4f4f4f;
        padding: 16px;
        margin:0 auto;
        display: flex;
        color: white;
    }

    .id__card img{
        border: 1px solid gray;
        width: 120px;
        height: 120px;
        margin-right: 16px;
        border-radius: 3px;
    }


</style>