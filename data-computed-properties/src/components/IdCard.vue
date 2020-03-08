<template>
  <div>
    <div class="id__card">
      <img :src="user.image" :alt="user.name " />
      <div>
        <h4>Name: {{ user.name }}</h4>
        <p>Email: {{ getValidEmail }}</p>
        <p>About: {{ user.about}}</p>
        <p>
            {{ currentDate }}
        </p>
      </div>
    </div>
    <!-- Para cambiar el alor y ver en accion la reactividad -->
    <input type="text" v-model="user.email" />
    <button @click="updateDate">Update Date</button>
  </div>
</template>

<script>
export default {
  name: "IdCard",
  data() {
    return {
      today: new Date(),
      user: {
        image: "http://codelapps.com/wp-content/uploads/2019/04/andrew.png",
        email: "ANDREWALANGM@gmail.com",
        name: "Andrew Alan Gonzalez Miranda",
        about: "I am a programmer"
      }
    };
  },
  computed: {
    getValidEmail() {
      return this.user.email.toLowerCase();
    },
    currentDate(){
        return this.today.toString()
    }
  },
  methods: {
    updateDate() {
        this.today.setDate(this.today.getDate() + 1)
        console.log(this.today)
    }
  }
};
</script>

<style scoped>
.id__card {
  width: 33%;
  border-radius: 5px;
  background-color: #4f4f4f;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  color: white;
}

.id__card img {
  border: 1px solid gray;
  width: 120px;
  height: 120px;
  margin-right: 16px;
  border-radius: 3px;
}

input,button {
  height: 32px;
  width: 200px;
  margin: 16px auto;
  display:block;
}
</style>