<template>
  <div id="app">
    <div class="tabs">
      <span @click="tab='posts'" :class="{active_tab: tab==='posts'}">Posts</span>
      <span @click="tab='archive'" :class="{active_tab: tab==='archive'}">Archive</span>
    </div>
    <div class="content">
      <keep-alive :exclude="['archive']">
        <component :is="tab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Posts from "./components/Posts";
import Archive from "./components/Archive";

export default {
  name: "App",
  components: {
    posts: Posts,
    archive: Archive
  },
  data() {
    return {
      tab: "posts"
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 60px auto;
  width: 50%;
}

.tabs {
  display: flex;
  align-items: center;
}

.tabs span {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
  transition: all 300ms;
}

.tabs span:hover {
  background: #c5c5c5;
}

.active_tab {
  font-weight: 600;
}

.content {
  width: 100%;
  height: 320px;
  border: 2px solid #ccc;
  padding: 10px;
}
</style>
