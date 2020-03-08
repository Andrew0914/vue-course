<template>
  <div class="id__card">
      <img :src="user.image" :alt="user.name ">
      <div>
          <h4>Name: {{ user.name }} </h4>
          <p>Email: {{ user.email }} </p>
          <p>About: {{ user.about}} </p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'IdCard',
    data(){
        return {
            user: {
                image: "http://codelapps.com/wp-content/uploads/2019/04/andrew.png",
                email: "ANDREWALANGM@gmail.com",
                name: "andrew alan gonzalez miranda",
                about:"I am a programmer"
            }
        }
    }
}
</script>

<style scoped>
    .id__card{
        width: 33%;
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