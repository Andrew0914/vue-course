<template>
  <div>
    <div class="id__card" :style="modeToShow">
      <img :src="user.image" :alt="user.name " />
      <div>
        <h4>Name: {{ user.name }}</h4>
        <p>Email: {{ getValidEmail }}</p>
        <p>About: {{ user.about}}</p>
        <p>{{ currentDate }}</p>
      </div>
    </div>
    <!-- Para cambiar el alor y ver en accion la reactividad -->
    <input type="text" v-model="user.email" />
    <button @click="updateDate">Update Date</button>
    <button @click="canIsee">Can I see ?</button>
  </div>
</template>

<script>
export default {
  name: "IdCard",
  props: {
    mode: {
      type: String,
      default: "dark"
    }
  },
  data() {
    return {
      today: new Date(),
      localMode: this.mode,
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
    currentDate() {
      return this.today.toString();
    },
    modeToShow: {
      get() {
        switch (this.localMode) {
          case "dark":
            return { backgroundColor: "#4f4f4f", color: "white" };
          case "light":
            return { backgroundColor: "white", color: "#4f4f4f" };
          default:
            return { backgroundColor: "#4f4f4f", color: "white" };
        }
      },
      set(newMode) {
        this.localMode = newMode 
      }
    }
  },
  methods: {
    updateDate() {
      // si actualiza el valor pero no es reactivo
      this.today.setDate(this.today.getDate() + 1);
      console.log(this.today);
    },
    canIsee() {
      // hay que declarar el set para que funcione
      this.modeToShow = "dark";
    }
  }
};
</script>

<style scoped>
.id__card {
  width: 33%;
  border-radius: 5px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
}

.id__card img {
  border: 1px solid gray;
  width: 120px;
  height: 120px;
  margin-right: 16px;
  border-radius: 3px;
}

input,
button {
  height: 32px;
  width: 200px;
  margin: 16px auto;
  display: block;
}
</style>