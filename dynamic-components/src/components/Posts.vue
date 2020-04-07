<template>
  <div class="posts">
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
        :class="{active: currentId === post.id}"
        @click="setCurrentId(post.id)"
      >{{ post.name }}</li>
    </ul>
    <div>{{ currentPost }}</div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      currentId: 1,
      posts: [
        {
          id: 1,
          name: "Elixir in action",
          description: "This a posts of elixir"
        },
        {
          id: 2,
          name: "Java for everyone",
          description: "This a posts of java"
        },
        {
          id: 3,
          name: "JS is easy",
          description: "Lerning java script for web!"
        }
      ]
    };
  },
  computed: {
    currentPost() {
      return this.posts.find(post => post.id === this.currentId).description;
    }
  },
  methods: {
    setCurrentId(id) {
      this.currentId = id;
    }
  }
};
</script>

<style scoped>
.posts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
}

.posts ul{
  height: 100%;
  margin: 0 16px 0 0;
  border-right: 1px solid gray;
}

.posts div{
  display: flex;
  align-items: center;
  justify-content: center;
}

.posts ul li {
  cursor: pointer;
  margin-bottom: 32px;
  padding: 16px;
  margin-left: 0px;
}

.active {
  font-weight: bold;
}
</style>