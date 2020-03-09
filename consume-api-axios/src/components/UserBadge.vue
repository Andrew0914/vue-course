<template>
  <div class="user">
    <img class="user__photo" :src="randomImage()" alt="user" />
    <div class="user__info">
      <div class="info__personal">
        <b>Personal</b>
        <p>Name: {{user.name}}</p>
        <p>Email: {{user.email}}</p>
      </div>
      <div class="info__contact">
        <b>Contact</b>
        <p>Phone: {{user.phone}}</p>
        <p>Website: {{user.website}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBadge",
  props: {
    user: {
      type: Object,
      require: true
    }
  },
  methods: {
    randomImage() {
      const photos = [require("../assets/woman.png"), require("../assets/man.png")];
      const randomIndex = Math.floor(Math.random() * photos.length);
      return photos[randomIndex];
    }
  }
};
</script>

<style scoped>
.user {
  display: flex;
  flex-flow: row;
  width: 480px;
  margin: 16px auto;
  box-shadow: 1px 3px 10px gray;
  padding: 16px;
  border-radius: 5px;
}

.user__photo {
  width: 112px;
  height: 112px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  margin-right: 16px;
  background-color: #f3f3f3;
}

.info__personal,
.info__contact {
    text-align: left;
}

.info__personal p,
.info__contact p {
  margin: 2px 0;
}


</style>