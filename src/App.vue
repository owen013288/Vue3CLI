<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from "./components/搜索案例/Search.vue";
import List from "./components/搜索案例/List.vue";
export default {
  name: "App",
  components: {
    Search,
    List,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>