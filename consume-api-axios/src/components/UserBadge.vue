<template>
  <div class="user">
    <img class="user__photo" src="../assets/woman.png" alt="user" />
    <div class="user__info">
      <div class="info__personal">
        <b>Personal</b>
        <p>Name:</p>
        <p>Email:</p>
      </div>
      <div class="info__contact">
        <b>Contact</b>
        <p>Phone:</p>
        <p>Website:</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user {
  display: flex;
  flex-flow: row;
  width: 480px;
  margin: 0 auto;
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

.info__personal p,
.info__contact p {
  margin: 2px 0;
  text-align: left;
}
</style>